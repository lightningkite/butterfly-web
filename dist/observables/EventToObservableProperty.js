"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/EventToObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
const Language_1 = require("../kotlin/Language");
const operators_1 = require("rxjs/operators");
const ObservableProperty_1 = require("./ObservableProperty");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.observables.EventToObservableProperty
class EventToObservableProperty extends ObservableProperty_1.ObservableProperty {
    constructor(value, wrapped) {
        super();
        this.value = value;
        this.wrapped = wrapped;
    }
    //! Declares com.lightningkite.butterfly.observables.EventToObservableProperty.onChange
    get onChange() {
        return rxjs_1.concat(this.wrapped.pipe(operators_1.map((it) => {
            this.value = it;
            return it;
        })).pipe(operators_1.tap(undefined, (it) => {
            console.error(`${"EventToObservableProperty"}: ${`Oh boy, you done screwed up.  The following stack trace is from an Observable that had an error that was converted to an ObservableProperty, which has a contract to never error.  The currently held value is '${this.value}`}`);
            Language_1.printStackTrace(it);
        })).pipe(operators_1.onErrorResumeNext(rxjs_1.NEVER)), rxjs_1.NEVER);
    }
}
exports.EventToObservableProperty = EventToObservableProperty;
//! Declares com.lightningkite.butterfly.observables.asObservableProperty>io.reactivex.Observable<kotlin.Any>
function xObservableAsObservableProperty(this_, defaultValue) {
    return new EventToObservableProperty(defaultValue, this_.pipe(operators_1.map((it) => it)));
}
exports.xObservableAsObservableProperty = xObservableAsObservableProperty;
//! Declares com.lightningkite.butterfly.observables.asObservablePropertyDefaultNull>io.reactivex.Observable<kotlin.Any>
function xObservableAsObservablePropertyDefaultNull(this_) {
    return new EventToObservableProperty(null, this_.pipe(operators_1.map((it) => it)));
}
exports.xObservableAsObservablePropertyDefaultNull = xObservableAsObservablePropertyDefaultNull;
//# sourceMappingURL=EventToObservableProperty.js.map