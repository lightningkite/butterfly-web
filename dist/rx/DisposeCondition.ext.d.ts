import { DisposeCondition } from './DisposeCondition';
import { SubscriptionLike } from 'rxjs';
export declare function xViewRemovedGet(this_Removed: HTMLElement): DisposeCondition;
export declare function xDisposableForever<Self extends SubscriptionLike>(this_Forever: Self): Self;
export declare function xDisposableUntil<Self extends SubscriptionLike>(this_Until: Self, condition: DisposeCondition): Self;
