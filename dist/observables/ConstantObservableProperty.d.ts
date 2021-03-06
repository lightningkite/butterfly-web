import { ObservableProperty } from './ObservableProperty';
import { Observable } from 'rxjs';
export declare class ConstantObservableProperty<T> extends ObservableProperty<T> {
    readonly underlyingValue: T;
    constructor(underlyingValue: T);
    readonly onChange: Observable<T>;
    get value(): T;
}
