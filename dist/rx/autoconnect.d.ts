import { MonoTypeOperatorFunction } from 'rxjs';
/**
 * Make a {@link ConnectableObservable} behave like a ordinary observable and automates the way
 * you can connect to it.
 *
 * Internally it counts the subscriptions to the observable and subscribes (only once) to the source if
 * the number of subscriptions is larger than 0. Unlike refCount(), however, it WILL NOT unsubscribe.
 * This way you can make sure that everything before the *published*
 * autoconnect has only a single subscription independently of the number of subscribers to the target
 * observable.
 *
 * Note that using the {@link share} operator is exactly the same as using the *publish* operator
 * (making the observable hot) and the *autoconnect* operator in a sequence.
 *
 * ![](autoconnect.png)
 *
 * ## Example
 *
 * In the following example there are two intervals turned into connectable observables
 * by using the *publish* operator. The first one uses the *autoconnect* operator, the
 * second one does not use it. You will notice that a connectable observable does nothing
 * until you call its connect function.
 *
 * ```ts
 * import { interval } from 'rxjs';
 * import { tap, publish, autoconnect } from 'rxjs/operators';
 *
 * // Turn the interval observable into a ConnectableObservable (hot)
 * const autoconnectInterval = interval(400).pipe(
 *   tap((num) => console.log(`autoconnect ${num}`)),
 *   publish(),
 *   autoconnect()
 * );
 *
 * const publishedInterval = interval(400).pipe(
 *   tap((num) => console.log(`publish ${num}`)),
 *   publish()
 * );
 *
 * autoconnectInterval.subscribe();
 * autoconnectInterval.subscribe();
 * // 'autoconnect 0' -----> 'autoconnect 1' -----> etc
 * // All subscriptions will receive the same value and the tap (and
 * // every other operator) before the publish operator will be executed
 * // only once per event independently of the number of subscriptions.
 *
 * publishedInterval.subscribe();
 * // Nothing happens until you call .connect() on the observable.
 * ```
 *
 * @see {@link ConnectableObservable}
 * @see {@link share}
 * @see {@link publish}
 */
export declare function autoconnect<T>(): MonoTypeOperatorFunction<T>;
