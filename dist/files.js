"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
//! Declares com.lightningkite.butterfly.views.readData
function xUriReadData(this_) {
    return rxjs_1.from(this_.arrayBuffer()).pipe(operators_1.map(x => new Int8Array(x)));
}
exports.xUriReadData = xUriReadData;
//# sourceMappingURL=files.js.map