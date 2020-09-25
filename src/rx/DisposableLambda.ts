//! Declares com.lightningkite.butterfly.rx.DisposableLambda
import {SubscriptionLike} from "rxjs"

export class DisposableLambda implements SubscriptionLike {
    closed: boolean = false;
    lambda: ()=>void;
    constructor(lambda: ()=>void) {
        this.lambda = lambda
    }

    unsubscribe(): void {
        if(this.closed) { return }
        this.closed = true;
        this.lambda();
    }

}