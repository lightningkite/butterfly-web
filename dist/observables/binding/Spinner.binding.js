"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: observables/binding/Spinner.binding.kt
// Package: com.lightningkite.butterfly.observables.binding
const ObservableProperty_ext_1 = require("../ObservableProperty.ext");
const DisposeCondition_ext_1 = require("../../rx/DisposeCondition.ext");
const StandardObservableProperty_1 = require("../StandardObservableProperty");
const Language_1 = require("../../kotlin/Language");
const viewAttached_1 = require("../../views/viewAttached");
const FlatMappedObservableProperty_1 = require("../FlatMappedObservableProperty");
//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.Spinner
function spinnerBindAdvanced(this_, options, selected, makeView) {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty_1.StandardObservableProperty(x);
    });
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty_1.StandardObservableProperty(options[options.length - diff + i]);
                makeView(newObs);
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        }
        else if (diff < 0) {
            for (let i = 0; i < -diff; i++) {
                const opt = this_.options.item(this_.options.length - 1);
                viewAttached_1.triggerDetatchEvent(opt);
                this_.options.remove(this_.options.length - 1);
                observables.pop();
            }
        }
        for (let i = 0; i < options.length; i++) {
            observables[i].value = options[i];
        }
        this_.selectedIndex = options.findIndex((x) => Language_1.safeEq(selected.value, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(selected, undefined, undefined, (sel) => {
        this_.selectedIndex = options.value.findIndex((x) => Language_1.safeEq(sel, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.oninput = (ev) => {
        const sel = options.value[this_.selectedIndex];
        if (sel !== undefined) {
            selected.value = sel;
        }
    };
}
exports.spinnerBindAdvanced = spinnerBindAdvanced;
//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.Spinner
function spinnerBind(this_, options, selected, toString = (x) => `${x}`) {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty_1.StandardObservableProperty(x);
    });
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty_1.StandardObservableProperty(options[options.length - diff + i]);
                DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(newObs, undefined, undefined, (x) => {
                    newOpt.innerText = toString(x);
                }), DisposeCondition_ext_1.xViewRemovedGet(newOpt));
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        }
        else if (diff < 0) {
            for (let i = 0; i < -diff; i++) {
                const opt = this_.options.item(this_.options.length - 1);
                viewAttached_1.triggerDetatchEvent(opt);
                this_.options.remove(this_.options.length - 1);
                observables.pop();
            }
        }
        for (let i = 0; i < options.length; i++) {
            observables[i].value = options[i];
        }
        this_.selectedIndex = options.findIndex((x) => Language_1.safeEq(selected.value, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(selected, undefined, undefined, (sel) => {
        this_.selectedIndex = options.value.findIndex((x) => Language_1.safeEq(sel, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.oninput = (ev) => {
        const sel = options.value[this_.selectedIndex];
        if (sel !== undefined) {
            selected.value = sel;
        }
    };
}
exports.spinnerBind = spinnerBind;
//! Declares com.lightningkite.butterfly.observables.binding.bindString>android.widget.Spinner
function spinnerBindString(this_, options, selected, toString) {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty_1.StandardObservableProperty(x);
    });
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty_1.StandardObservableProperty(options[options.length - diff + i]);
                DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(FlatMappedObservableProperty_1.xObservablePropertyFlatMap(newObs, toString), undefined, undefined, (x) => {
                    newOpt.innerText = x;
                }), DisposeCondition_ext_1.xViewRemovedGet(newOpt));
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        }
        else if (diff < 0) {
            for (let i = 0; i < -diff; i++) {
                const opt = this_.options.item(this_.options.length - 1);
                viewAttached_1.triggerDetatchEvent(opt);
                this_.options.remove(this_.options.length - 1);
                observables.pop();
            }
        }
        for (let i = 0; i < options.length; i++) {
            observables[i].value = options[i];
        }
        this_.selectedIndex = options.findIndex((x) => Language_1.safeEq(selected.value, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(selected, undefined, undefined, (sel) => {
        this_.selectedIndex = options.value.findIndex((x) => Language_1.safeEq(sel, x));
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.oninput = (ev) => {
        const sel = options.value[this_.selectedIndex];
        if (sel !== undefined) {
            selected.value = sel;
        }
    };
}
exports.spinnerBindString = spinnerBindString;
//# sourceMappingURL=Spinner.binding.js.map