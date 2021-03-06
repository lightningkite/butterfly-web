"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/CombineObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
const operators_1 = require("rxjs/operators");
const ObservableProperty_1 = require("./ObservableProperty");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.observables.CombineObservableProperty
class CombineObservableProperty extends ObservableProperty_1.ObservableProperty {
    constructor(observableA, observableB, combiner) {
        super();
        this.observableA = observableA;
        this.observableB = observableB;
        this.combiner = combiner;
    }
    //! Declares com.lightningkite.butterfly.observables.CombineObservableProperty.value
    get value() { return this.combiner(this.observableA.value, this.observableB.value); }
    //! Declares com.lightningkite.butterfly.observables.CombineObservableProperty.onChange
    get onChange() {
        const combinerCopy = this.combiner;
        return rxjs_1.combineLatest([rxjs_1.concat(rxjs_1.of(this.observableA.value), this.observableA.onChange), rxjs_1.concat(rxjs_1.of(this.observableB.value), this.observableB.onChange)]).pipe(operators_1.map(x => ((a, b) => combinerCopy(a, b))(x[0], x[1]))).pipe(operators_1.skip(0));
    }
}
exports.CombineObservableProperty = CombineObservableProperty;
//! Declares com.lightningkite.butterfly.observables.combine>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
function xObservablePropertyCombine(this_, other, combiner) {
    return new CombineObservableProperty(this_, other, combiner);
}
exports.xObservablePropertyCombine = xObservablePropertyCombine;
//# sourceMappingURL=CombineObservableProperty.js.map