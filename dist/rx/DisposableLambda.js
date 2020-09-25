"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisposableLambda {
    constructor(lambda) {
        this.closed = false;
        this.lambda = lambda;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.lambda();
    }
}
exports.DisposableLambda = DisposableLambda;
//# sourceMappingURL=DisposableLambda.js.map