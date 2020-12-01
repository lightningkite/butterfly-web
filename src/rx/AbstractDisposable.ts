import {SubscriptionLike} from "rxjs";

//! Declares com.lightningkite.butterfly.rx.AbstractDisposable
export abstract class AbstractDisposable implements SubscriptionLike {
    closed: boolean = false;

    unsubscribe(): void {
        if(closed) return
        closed = true
        this.onDispose()
    }
    abstract onDispose(): void
}