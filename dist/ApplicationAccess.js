"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantObservableProperty_1 = require("./observables/ConstantObservableProperty");
const WriteAddedObservableProperty_1 = require("./observables/WriteAddedObservableProperty");
//! Declares com.lightningkite.butterfly.ApplicationAccess
class ApplicationAccess {
    constructor() {
        this.foreground = new ConstantObservableProperty_1.ConstantObservableProperty(true);
        this.softInputActive = WriteAddedObservableProperty_1.xObservablePropertyWithWrite(new ConstantObservableProperty_1.ConstantObservableProperty(false), (x) => { });
    }
}
exports.ApplicationAccess = ApplicationAccess;
ApplicationAccess.INSTANCE = new ApplicationAccess();
//# sourceMappingURL=ApplicationAccess.js.map