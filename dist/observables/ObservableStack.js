"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/ObservableStack.kt
// Package: com.lightningkite.butterfly.observables
const KotlinCollections_1 = require("../KotlinCollections");
const Kotlin_1 = require("../Kotlin");
const ObservableProperty_1 = require("./ObservableProperty");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.observables.ObservableStack
class ObservableStack extends ObservableProperty_1.ObservableProperty {
    constructor() {
        super();
        this.onChange = new rxjs_1.Subject();
        this.stack = [];
    }
    //! Declares com.lightningkite.butterfly.observables.ObservableStack.value
    get value() {
        return this.stack;
    }
    push(t) {
        this.stack.push(t);
        this.onChange.next(this.stack);
    }
    swap(t) {
        this.stack.splice((this.stack.length - 1), 1)[0];
        this.stack.push(t);
        this.onChange.next(this.stack);
    }
    pop() {
        if (this.stack.length <= 1) {
            return false;
        }
        this.stack.splice((this.stack.length - 1), 1)[0];
        this.onChange.next(this.stack);
        return true;
    }
    dismiss() {
        if (this.stack.length === 0) {
            return false;
        }
        this.stack.splice((this.stack.length - 1), 1)[0];
        this.onChange.next(this.stack);
        return true;
    }
    backPressPop() {
        const last = KotlinCollections_1.iterLastOrNull(this.stack);
        if (Kotlin_1.checkIsInterface(last, "ComLightningkiteButterflyViewsHasBackAction") && last.onBackPressed()) {
            return true;
        }
        return this.pop();
    }
    backPressDismiss() {
        const last = KotlinCollections_1.iterLastOrNull(this.stack);
        if (Kotlin_1.checkIsInterface(last, "ComLightningkiteButterflyViewsHasBackAction") && last.onBackPressed()) {
            return true;
        }
        return this.dismiss();
    }
    popTo(t) {
        let found = false;
        for (const i of new Kotlin_1.NumberRange(0, (this.stack.length - 1))) {
            if (found) {
                this.stack.splice((this.stack.length - 1), 1)[0];
            }
            else {
                if (this.stack[i] === t) {
                    found = true;
                }
            }
        }
        this.onChange.next(this.stack);
    }
    popToPredicate(predicate) {
        let found = false;
        for (const i of new Kotlin_1.NumberRange(0, (this.stack.length - 1))) {
            if (found) {
                this.stack.splice((this.stack.length - 1), 1)[0];
            }
            else {
                if (predicate(this.stack[i])) {
                    found = true;
                }
            }
        }
        this.onChange.next(this.stack);
    }
    root() {
        this.popTo(this.stack[0]);
    }
    reset(t) {
        this.stack.length = 0;
        this.stack.push(t);
        this.onChange.next(this.stack);
    }
}
exports.ObservableStack = ObservableStack;
(function (ObservableStack) {
    //! Declares com.lightningkite.butterfly.observables.ObservableStack.Companion
    class Companion {
        constructor() {
        }
        withFirst(value) {
            const result = new ObservableStack();
            result.reset(value);
            return result;
        }
    }
    Companion.INSTANCE = new Companion();
    ObservableStack.Companion = Companion;
})(ObservableStack = exports.ObservableStack || (exports.ObservableStack = {}));
//# sourceMappingURL=ObservableStack.js.map