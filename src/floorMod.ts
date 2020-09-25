
//! Declares com.lightningkite.butterfly.floorMod>kotlin.Int
export function xIntFloorMod(this_: number, other: number): number {
    return (this_ % other + other) % other;
}
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Int
export function xIntFloorDiv(this_: number, other: number): number {
    if (this_ < 0) {
        return this_ / other - 1;
    } else {
        return this_ / other;
    }
}

//! Declares com.lightningkite.butterfly.floorMod>kotlin.Float
export function xFloatFloorMod(this_: number, other: number): number {
    return (this_ % other + other) % other;
}
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Float
export function xFloatFloorDiv(this_: number, other: number): number {
    if (this_ < 0) {
        return this_ / other - 1;
    } else {
        return this_ / other;
    }
}


//! Declares com.lightningkite.butterfly.floorMod>kotlin.Double
export function xDoubleFloorMod(this_: number, other: number): number {
    return (this_ % other + other) % other;
}
//! Declares com.lightningkite.butterfly.floorDiv>kotlin.Double
export function xDoubleFloorDiv(this_: number, other: number): number {
    if (this_ < 0) {
        return this_ / other - 1;
    } else {
        return this_ / other;
    }
}