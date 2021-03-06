"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/SharingObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
const ObservableProperty_1 = require("./ObservableProperty");
const RxActual_1 = require("../rx/RxActual");
const operators_1 = require("rxjs/operators");
//! Declares com.lightningkite.butterfly.observables.SharingObservableProperty
class SharingObservableProperty extends ObservableProperty_1.ObservableProperty {
    constructor(basedOn, startAsListening = false) {
        super();
        this.basedOn = basedOn;
        this.startAsListening = startAsListening;
        this.cachedValue = this.basedOn.value;
        this.isListening = this.startAsListening;
        this.onChange = this.basedOn.onChange.pipe(operators_1.tap((it) => {
            if (this !== null) {
                this.cachedValue = it;
            }
            ;
        })).pipe(RxActual_1.doOnSubscribe((it) => {
            if (this !== null) {
                this.isListening = true;
            }
            ;
        })).pipe(RxActual_1.doOnDispose(() => {
            if (this !== null) {
                this.isListening = false;
            }
            ;
        })).pipe(operators_1.share());
    }
    //! Declares com.lightningkite.butterfly.observables.SharingObservableProperty.value
    get value() { return this.isListening ? this.cachedValue : this.basedOn.value; }
}
exports.SharingObservableProperty = SharingObservableProperty;
//! Declares com.lightningkite.butterfly.observables.share>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
function xObservablePropertyShare(this_, startAsListening = false) {
    return new SharingObservableProperty(this_, startAsListening);
}
exports.xObservablePropertyShare = xObservablePropertyShare;
//# sourceMappingURL=SharingObservableProperty.js.map