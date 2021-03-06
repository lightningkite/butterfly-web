"use strict";
// Generated by Butterfly TypeScript converter
// File: views/Colors.kt
// Package: com.lightningkite.butterfly.views
Object.defineProperty(exports, "__esModule", { value: true });
function numberToColor(this_) {
    const alpha = this_ >>> 24 & 0xFF;
    const withoutAlpha = this_ & 0x00FFFFFF;
    return `#${withoutAlpha.toString(16).padStart(6, "0")}${alpha.toString(16).padStart(2, "0")}`;
}
exports.numberToColor = numberToColor;
function applyAlphaToColor(this_, desiredAlpha) {
    const withoutAlpha = this_.slice(0, 7); //Include #
    return `${withoutAlpha}${desiredAlpha.toString(16).padStart(2, "0")}`;
}
exports.applyAlphaToColor = applyAlphaToColor;
//# sourceMappingURL=Colors.js.map