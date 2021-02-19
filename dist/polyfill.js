"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (replacing, withString) {
        if (typeof replacing === "string") {
            return this.replace(new RegExp(replacing.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "g"), withString);
        }
        else {
            return this.replace(new RegExp(replacing, "g"), withString);
        }
    };
}
//# sourceMappingURL=polyfill.js.map