import { MutableObservableProperty } from './MutableObservableProperty';
import { Observable } from 'rxjs';
export declare class ReferenceObservableProperty<T> extends MutableObservableProperty<T> {
    readonly get: (() => T);
    readonly set: ((a: T) => void);
    readonly event: Observable<T>;
    constructor(get: (() => T), set: ((a: T) => void), event: Observable<T>);
    get onChange(): Observable<T>;
    get value(): T;
    set value(value: T);
    update(): void;
}
