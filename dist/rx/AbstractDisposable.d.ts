import { SubscriptionLike } from "rxjs";
export declare abstract class AbstractDisposable implements SubscriptionLike {
    closed: boolean;
    unsubscribe(): void;
    abstract onDispose(): void;
}
