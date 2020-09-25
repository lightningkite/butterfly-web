"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kotlin_1 = require("../Kotlin");
const Form_1 = require("./Form");
const ViewString_1 = require("./ViewString");
const StandardObservableProperty_1 = require("../observables/StandardObservableProperty");
const kotlin_text_1 = require("../kotlin/kotlin.text");
//! Declares com.lightningkite.butterfly.views.FormValidationError
class FormValidationError {
    constructor(field, _string) {
        this.field = field;
        this._string = _string;
    }
}
exports.FormValidationError = FormValidationError;
//! Declares com.lightningkite.butterfly.views.FormField
class FormField {
    constructor(name, observable, validation) {
        this.name = name;
        this.observable = observable;
        this.validation = validation;
        this.error = new StandardObservableProperty_1.StandardObservableProperty(null, undefined);
    }
    //! Declares com.lightningkite.butterfly.views.FormField.value
    get value() { return this.observable.value; }
    set value(value) {
        this.observable.value = value;
    }
    //! Declares com.lightningkite.butterfly.views.FormField.untypedObservable
    get untypedObservable() { return this.observable; }
}
exports.FormField = FormField;
FormField.implementsInterfaceComLightningkiteButterflyViewsUntypedFormField = true;
//! Declares com.lightningkite.butterfly.views.required>com.lightningkite.butterfly.views.FormField<kotlin.String>
function xFormFieldRequired(this_) {
    if (kotlin_text_1.xCharSequenceIsBlank(this_.observable.value)) {
        return new ViewString_1.ViewStringTemplate(Form_1.Form.Companion.INSTANCE.xIsRequired, [this_.name]);
    }
    else {
        return null;
    }
}
exports.xFormFieldRequired = xFormFieldRequired;
//! Declares com.lightningkite.butterfly.views.notNull>com.lightningkite.butterfly.views.FormField<kotlin.Any>
function xFormFieldNotNull(this_) {
    if (this_.observable.value === null) {
        return new ViewString_1.ViewStringTemplate(Form_1.Form.Companion.INSTANCE.xIsRequired, [this_.name]);
    }
    else {
        return null;
    }
}
exports.xFormFieldNotNull = xFormFieldNotNull;
//! Declares com.lightningkite.butterfly.views.notFalse>com.lightningkite.butterfly.views.FormField<kotlin.Boolean>
function xFormFieldNotFalse(this_) {
    if ((!this_.observable.value)) {
        return new ViewString_1.ViewStringTemplate(Form_1.Form.Companion.INSTANCE.xIsRequired, [this_.name]);
    }
    else {
        return null;
    }
}
exports.xFormFieldNotFalse = xFormFieldNotFalse;
//! Declares com.lightningkite.butterfly.views.unless>com.lightningkite.butterfly.views.ViewString
function xViewStringUnless(this_, condition) {
    if (condition) {
        return null;
    }
    else {
        return this_;
    }
}
exports.xViewStringUnless = xViewStringUnless;
//! Declares com.lightningkite.butterfly.views.matches>com.lightningkite.butterfly.views.FormField<kotlin.Any>
function xFormFieldMatches(this_, other) {
    if (!Kotlin_1.safeEq(this_.observable.value, other.observable.value)) {
        return new ViewString_1.ViewStringTemplate(Form_1.Form.Companion.INSTANCE.xMustMatchY, [this_.name, other.name]);
    }
    else {
        return null;
    }
}
exports.xFormFieldMatches = xFormFieldMatches;
//# sourceMappingURL=FormField.js.map