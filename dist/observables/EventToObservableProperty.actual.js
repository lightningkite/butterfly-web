"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventToObservableProperty_shared_1 = require("./EventToObservableProperty.shared");
//! Declares com.lightningkite.butterfly.observables.asObservablePropertyUnboxed>io.reactivex.Observable<com.lightningkite.butterfly.Box>
function xObservableAsObservablePropertyUnboxed(this_, defaultValue) {
    return new EventToObservableProperty_shared_1.EventToObservableProperty(defaultValue, this_);
}
exports.xObservableAsObservablePropertyUnboxed = xObservableAsObservablePropertyUnboxed;
//# sourceMappingURL=EventToObservableProperty.actual.js.map