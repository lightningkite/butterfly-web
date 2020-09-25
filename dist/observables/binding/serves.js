"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisposeCondition_ext_1 = require("../../rx/DisposeCondition.ext");
const ObservableProperty_ext_1 = require("../ObservableProperty.ext");
//! Declares com.lightningkite.butterfly.observables.binding.serves>com.lightningkite.butterfly.observables.MutableObservableProperty<kotlin.Any>
function xMutableObservablePropertyServes(this_, until, other) {
    let suppress = false;
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertyObservableGet(other).subscribe((value) => {
        if ((!suppress)) {
            suppress = true;
            this_.value = value;
            suppress = false;
        }
    }, undefined, undefined), until);
    DisposeCondition_ext_1.xDisposableUntil(this_.onChange.subscribe((value) => {
        if ((!suppress)) {
            suppress = true;
            other.value = value;
            suppress = false;
        }
    }, undefined, undefined), until);
}
exports.xMutableObservablePropertyServes = xMutableObservablePropertyServes;
//# sourceMappingURL=serves.js.map