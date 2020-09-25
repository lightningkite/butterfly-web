import { ObservableProperty } from './ObservableProperty';
import { MutableObservableProperty } from './MutableObservableProperty';
import { Observable } from 'rxjs';
export declare class WriteAddedObservableProperty<A> extends MutableObservableProperty<A> {
    readonly basedOn: ObservableProperty<A>;
    readonly onWrite: ((a: A) => void);
    constructor(basedOn: ObservableProperty<A>, onWrite: ((a: A) => void));
    get value(): A;
    set value(value: A);
    get onChange(): Observable<A>;
    update(): void;
}
export declare function xObservablePropertyWithWrite<T>(this_: ObservableProperty<T>, onWrite: ((a: T) => void)): MutableObservableProperty<T>;
