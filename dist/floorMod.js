"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.floorMod>kotlin.Int
function xIntFloorMod(this_, other) {
    return (this_ % other + other) % other;
}
exports.xIntFloorMod = xIntFloorMod;
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Int
function xIntFloorDiv(this_, other) {
    if (this_ < 0) {
        return this_ / other - 1;
    }
    else {
        return this_ / other;
    }
}
exports.xIntFloorDiv = xIntFloorDiv;
//! Declares com.lightningkite.butterfly.floorMod>kotlin.Float
function xFloatFloorMod(this_, other) {
    return (this_ % other + other) % other;
}
exports.xFloatFloorMod = xFloatFloorMod;
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Float
function xFloatFloorDiv(this_, other) {
    if (this_ < 0) {
        return this_ / other - 1;
    }
    else {
        return this_ / other;
    }
}
exports.xFloatFloorDiv = xFloatFloorDiv;
//! Declares com.lightningkite.butterfly.floorMod>kotlin.Double
function xDoubleFloorMod(this_, other) {
    return (this_ % other + other) % other;
}
exports.xDoubleFloorMod = xDoubleFloorMod;
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Double
function xDoubleFloorDiv(this_, other) {
    if (this_ < 0) {
        return this_ / other - 1;
    }
    else {
        return this_ / other;
    }
}
exports.xDoubleFloorDiv = xDoubleFloorDiv;
//# sourceMappingURL=floorMod.js.map