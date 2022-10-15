import { runes as t } from "runes2";

import { classPrototype as r } from "es6-class-prototype";

const e = Object.getOwnPropertyNames(String.prototype);

class UString extends String {
  _arr=null;
  constructor(t, ...r) {
    super(t);
    let e = Object.getOwnPropertyDescriptor(this, "_arr");
    Object.defineProperty(this, "_arr", Object.assign(e, {
      configurable: !0,
      enumerable: !1
    }));
  }
  [Symbol.iterator]() {
    return UString.toArray(this)[Symbol.iterator]();
  }
  static isString(t) {
    return "string" == typeof t || t instanceof String;
  }
  static toArray(r) {
    return r instanceof UString ? r.toArray() : t(String(r));
  }
  toArray() {
    return this._arr || (this._arr = t(String(this))), this._arr;
  }
  split(t, r) {
    let e, i = String(this);
    return "" === t ? (e = UString.toArray(this), void 0 !== r && (e = e.slice(0, r))) : e = String.prototype.split.call(i, t, r), 
    e;
  }
  substr(t, r) {
    return UString.toArray(this).slice(t).slice(0, r).join("");
  }
  substring(t, r) {
    return (Number.isNaN(t) || t < 0) && (t = 0), "number" == typeof r && ((Number.isNaN(r) || r < 0) && (r = 0), 
    t > r && ([t, r] = [ r, t ])), this.slice(t, r);
  }
  indexOf(t, r = 0) {
    let e = UString.toArray(this);
    if (r = Math.max(0, Math.min(e.length, r)), "" === (t = String(t))) return r;
    e = e.slice(r);
    let i = UString.toArray(t), n = 0, s = 0, a = i[i.length - 1];
    do {
      if (n = e.indexOf(i[0], s), -1 !== n) {
        if (e.slice(n, n + i.length).join("") === t) return r + n;
        s = n, i.length > 1 && (n = e.indexOf(a, n + 1), s = n - i.length);
      }
      s++;
    } while (-1 !== n && s < e.length);
    return -1;
  }
  includes(t, r = 0) {
    return -1 !== UString.toArray(this).slice(r).join("").indexOf(t);
  }
  slice(t, r) {
    return UString.toArray(this).slice(t, r).join("");
  }
  charAt(t) {
    return this.substr(t, 1);
  }
  startsWith(t, r) {
    return 0 === this.substr(!r || r < 0 ? 0 : +r, t.length).indexOf(t);
  }
  endsWith(t, r) {
    let e = UString.toArray(this), i = UString.toArray(t);
    return (void 0 === r || r > e.length) && (r = e.length), this.substring(r - i.length, r) === t;
  }
  padEnd(t, r) {
    t >>= 0, r = String(void 0 !== r ? r : " ");
    let e = this.split(""), i = this.split.call(r, "");
    return e.length > t ? String(this) : ((t -= e.length) > i.length && (r += r.repeat(t / i.length), 
    i = new UString(r)), String(this) + i.slice(0, t));
  }
  padStart(t, r) {
    t >>= 0, r = String(void 0 !== r ? r : " ");
    let e = this.split(""), i = this.split.call(r, "");
    return e.length > t ? String(this) : ((t -= e.length) > i.length && (r += r.repeat(t / i.length), 
    i = new UString(r)), i.slice(0, t) + String(this));
  }
  codePointAt(t) {
    return this.toArray()[t].codePointAt(0);
  }
  static UString=UString;
  static default=UString;
  static create(t, ...r) {
    return new this(t, ...r);
  }
  static get support() {
    let t = r(this);
    return Object.keys(t).reduce((function(t, r) {
      return e.includes(r) && (t[r] = !0), t;
    }), {});
  }
  static indexOf(t, r, e = 0) {
    return this.create(t).indexOf(r, e);
  }
  static includes(t, r, e = 0) {
    return this.create(t).includes(r, e);
  }
  static split(t, r, e) {
    return this.create(t).split(r, e);
  }
  static substr(t, r, e) {
    return this.create(t).substr(r, e);
  }
  static substring(t, r, e) {
    return this.create(t).substring(r, e);
  }
  static slice(t, r, e) {
    return this.create(t).slice(r, e);
  }
  static charAt(t, r) {
    return this.create(t).charAt(r);
  }
  static padEnd(t, r, e) {
    return this.create(t).padEnd(r, e);
  }
  static padStart(t, r, e) {
    return this.create(t).padStart(r, e);
  }
  static startsWith(t, r, e) {
    return this.create(t).startsWith(r, e);
  }
  static endsWith(t, r, e) {
    return this.create(t).endsWith(r, e);
  }
  get charLength() {
    return UString.toArray(this).length;
  }
  size() {
    return UString.toArray(this).length;
  }
  static size(t) {
    return this.create(t).size();
  }
  static codePointAt(t, r) {
    return this.create(t).codePointAt(r);
  }
}

export { e as STRING_PROTOTYPE, UString, UString as default };
//# sourceMappingURL=index.esm.mjs.map
