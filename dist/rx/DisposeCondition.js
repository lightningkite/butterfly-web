"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisposableLambda_1 = require("./DisposableLambda");
//! Declares com.lightningkite.butterfly.rx.DisposeCondition
class DisposeCondition {
    constructor(call) {
        this.call = call;
    }
}
exports.DisposeCondition = DisposeCondition;
//! Declares com.lightningkite.butterfly.rx.and>com.lightningkite.butterfly.rx.DisposeCondition
function xDisposeConditionAnd(this_, other) {
    return andAllDisposeConditions([this_, other]);
}
exports.xDisposeConditionAnd = xDisposeConditionAnd;
//! Declares com.lightningkite.butterfly.rx.andAllDisposeConditions
function andAllDisposeConditions(list) {
    return new DisposeCondition((it) => {
        let disposalsLeft = list.length;
        for (const item of list) {
            item.call(new DisposableLambda_1.DisposableLambda(() => {
                disposalsLeft = disposalsLeft - 1;
                if (disposalsLeft === 0) {
                    it.unsubscribe();
                }
            }));
        }
    });
}
exports.andAllDisposeConditions = andAllDisposeConditions;
//! Declares com.lightningkite.butterfly.rx.or>com.lightningkite.butterfly.rx.DisposeCondition
function xDisposeConditionOr(this_, other) {
    return new DisposeCondition((it) => {
        this_.call(it);
        other.call(it);
    });
}
exports.xDisposeConditionOr = xDisposeConditionOr;
//# sourceMappingURL=DisposeCondition.js.map