import { MutableObservableProperty } from '../observables/MutableObservableProperty';
import { Observable } from 'rxjs';
export declare function xSingleWorking<Element extends any>(this_Working: Observable<Element>, observable: MutableObservableProperty<Boolean>): Observable<Element>;
export declare function xObservableMapNotNull<A, B>(this_: Observable<A>, transform: (a: A) => (B | null)): Observable<B>;
export declare function xObservableFilterNotNull<T>(this_: Observable<T | null>): Observable<T>;
