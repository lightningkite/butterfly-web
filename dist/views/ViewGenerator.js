"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: views/ViewGenerator.kt
// Package: com.lightningkite.butterfly.views
const EmptyView_1 = require("./EmptyView");
const ViewString_1 = require("./ViewString");
//! Declares com.lightningkite.butterfly.views.ViewGenerator
class ViewGenerator {
    constructor() {
    }
    //! Declares com.lightningkite.butterfly.views.ViewGenerator.title
    get title() { return ""; }
    //! Declares com.lightningkite.butterfly.views.ViewGenerator.titleString
    get titleString() { return new ViewString_1.ViewStringRaw(this.title); }
}
exports.ViewGenerator = ViewGenerator;
(function (ViewGenerator) {
    //! Declares com.lightningkite.butterfly.views.ViewGenerator.Default
    class Default extends ViewGenerator {
        constructor() {
            super();
        }
        generate(dependency) {
            return EmptyView_1.newEmptyView(dependency);
        }
    }
    ViewGenerator.Default = Default;
})(ViewGenerator = exports.ViewGenerator || (exports.ViewGenerator = {}));
//# sourceMappingURL=ViewGenerator.js.map