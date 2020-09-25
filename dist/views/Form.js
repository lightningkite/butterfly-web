"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: views/Form.kt
// Package: com.lightningkite.butterfly.views
const KotlinCollections_1 = require("../KotlinCollections");
const ViewString_1 = require("./ViewString");
const FormField_1 = require("./FormField");
const showDialog_1 = require("./showDialog");
const StandardObservableProperty_1 = require("../observables/StandardObservableProperty");
//! Declares com.lightningkite.butterfly.views.Form
class Form {
    constructor() {
        this.fields = [];
    }
    field(name, defaultValue, validation) {
        const obs = new StandardObservableProperty_1.StandardObservableProperty(defaultValue, undefined);
        const field = new FormField_1.FormField(name, obs, (untypedField) => validation(untypedField));
        this.fields.push(field);
        return field;
    }
    fieldRes(name, defaultValue, validation) {
        return this.field(new ViewString_1.ViewStringResource(name), defaultValue, validation);
    }
    fieldFromProperty(name, property, validation) {
        const field = new FormField_1.FormField(name, property, (untypedField) => validation(untypedField));
        this.fields.push(field);
        return field;
    }
    fieldFromPropertyRes(name, property, validation) {
        return this.fieldFromProperty(new ViewString_1.ViewStringResource(name), property, validation);
    }
    check() {
        return KotlinCollections_1.listFilterNotNull(this.fields.map((it) => {
            const result = this.checkField(it);
            if (result !== null) {
                return new FormField_1.FormValidationError(it, result);
            }
            else {
                return null;
            }
        }));
    }
    runOrDialog(action) {
        const errors = this.check();
        if (errors.length !== 0) {
            showDialog_1.showDialogAlert(ViewString_1.xListJoinToViewString(errors.map((it) => it._string), undefined));
        }
        else {
            action();
        }
    }
    checkField(field) {
        const result = field.validation(field);
        field.error.value = result;
        return result;
    }
}
exports.Form = Form;
(function (Form) {
    //! Declares com.lightningkite.butterfly.views.Form.Companion
    class Companion {
        constructor() {
            this.xIsRequired = new ViewString_1.ViewStringRaw(`%1\$s is required.`);
            this.xMustMatchY = new ViewString_1.ViewStringRaw(`%1\$s must match %2\$s.`);
        }
    }
    Companion.INSTANCE = new Companion();
    Form.Companion = Companion;
})(Form = exports.Form || (exports.Form = {}));
//# sourceMappingURL=Form.js.map