"use strict";
///<reference path="./regenerate.d.ts"/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexp_parser_event_1 = require("regexp-parser-event");
const regexpu_core_1 = __importDefault(require("regexpu-core"));
const regenerate_1 = __importDefault(require("regenerate"));
exports.regenerate = regenerate_1.default;
/**
 * convert Specified type RegExp to hacked regenerate object
 *
 * @param {RegExp} re
 * @param {string} flags
 * @returns {regenerate.IRegenerateObject}
 */
function regexpClassToObject(re, flags) {
    if (flags == null) {
        flags = re.flags;
    }
    const hasUnicodeFlag = flags.includes('u');
    const sourceOrigin = re.source;
    let source = regexpu_core_1.default(sourceOrigin, flags, {
        unicodePropertyEscape: true,
        useUnicodeFlag: hasUnicodeFlag,
    });
    let ev = regexp_parser_event_1.ParserEventEmitter.create(source, flags);
    let new_obj;
    ev.on("class" /* class */, function (ast, eventName, ev, ...argv) {
        if (!isPattern(ast.parent) || ast.parent.elements.length != 1) {
            throw new TypeError(`this regexp should only has class, but got ${source}`);
        }
        if (new_obj == null) {
            new_obj = regenerate_1.default();
        }
        else {
            throw new TypeError(`only allow one class, but got ${source}`);
        }
        ast.elements.forEach(sub_ast => {
            switch (sub_ast.type) {
                case "CharacterClassRange" /* CharacterClassRange */:
                    new_obj.addRange(sub_ast.min.value, sub_ast.max.value);
                    break;
                case "Character" /* Character */:
                    new_obj.add(sub_ast.value);
                    break;
                default:
                    throw new TypeError(`unknown ast ${JSON.stringify(sub_ast)}`);
                    break;
            }
        });
    });
    ev.resume();
    if (new_obj == null) {
        if (ev.astSource.elements.length == 1) {
            let ast = ev.astSource.elements[0];
            if (ast.type === "Character" /* Character */) {
                new_obj = regenerate_1.default();
                new_obj.add(ast.value);
            }
        }
        if (new_obj == null) {
            throw new TypeError(`not support ${ev}`);
        }
    }
    return hackRegenerate(new_obj, flags, hasUnicodeFlag);
}
exports.regexpClassToObject = regexpClassToObject;
function hackRegenerate(obj, flags, hasUnicodeFlag) {
    Object.defineProperties(obj, {
        flags: {
            get() {
                return flags;
            }
        },
        toStringOrigin: {
            enumerable: false,
            value: regenerate_1.default.prototype.toString,
        },
        toString: {
            enumerable: false,
            value: ((old) => {
                return function (...options) {
                    if (options[0] == null) {
                        options[0] = {
                            hasUnicodeFlag,
                        };
                    }
                    // @ts-ignore
                    let source = old.apply(this, options);
                    if (!/^\[.*\]$/.test(source)) {
                        return `[${source}]`;
                    }
                    return source;
                };
            })(obj.toString),
        },
        toRegExp: {
            enumerable: false,
            value: ((old) => {
                return function (...options) {
                    if (options[0] == null) {
                        options[0] = flags;
                    }
                    // @ts-ignore
                    return old.apply(this, options);
                };
            })(obj.toRegExp),
        },
        clone: {
            enumerable: false,
            value: ((old) => {
                return function (...options) {
                    // @ts-ignore
                    let new_obj = old.apply(this, options);
                    return hackRegenerate(new_obj, flags, hasUnicodeFlag);
                };
            })(obj.clone),
        },
    });
    return obj;
}
exports.hackRegenerate = hackRegenerate;
function isPattern(ast) {
    return (ast.type == "Pattern" /* Pattern */);
}
exports.isPattern = isPattern;
exports.default = regexpClassToObject;
//# sourceMappingURL=index.js.map