"use strict";
/**
 * Created by user on 2018/1/19/019.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LF = "\n";
function normalize(txt) {
    return String(txt)
        .replace(/\r\n|\r(?!\n)|\n/g, exports.LF)
        .replace(/\uFEFF/g, '')
        .replace(/[  \xA0]/g, ' ')
        .replace(/[ \t　\xA0\u3000]+\n/g, '\n')
        .replace(/^\n+|[\s　\xA0\u3000]+$/g, '');
}
exports.normalize = normalize;
exports.default = normalize;
//export default exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFVSxRQUFBLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFdkIsU0FBZ0IsU0FBUyxDQUFDLEdBQUc7SUFFNUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxVQUFFLENBQUM7U0FDaEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7U0FDdEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUM7U0FDekIsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQztTQUNyQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQ3ZDO0FBQ0YsQ0FBQztBQVRELDhCQVNDO0FBRUQsa0JBQWUsU0FBUyxDQUFDO0FBQ3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvMS8xOS8wMTkuXG4gKi9cblxuZXhwb3J0IGNvbnN0IExGID0gXCJcXG5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh0eHQpXG57XG5cdHJldHVybiBTdHJpbmcodHh0KVxuXHRcdC5yZXBsYWNlKC9cXHJcXG58XFxyKD8hXFxuKXxcXG4vZywgTEYpXG5cdFx0LnJlcGxhY2UoL1xcdUZFRkYvZywgJycpXG5cdFx0LnJlcGxhY2UoL1sgwqBcXHhBMF0vZywgJyAnKVxuXHRcdC5yZXBsYWNlKC9bIFxcdOOAgFxceEEwXFx1MzAwMF0rXFxuL2csICdcXG4nKVxuXHRcdC5yZXBsYWNlKC9eXFxuK3xbXFxz44CAXFx4QTBcXHUzMDAwXSskL2csICcnKVxuXHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZTtcbi8vZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcbiJdfQ==