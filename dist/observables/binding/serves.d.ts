import { MutableObservableProperty } from '../MutableObservableProperty';
import { DisposeCondition } from '../../rx/DisposeCondition';
export declare function xMutableObservablePropertyServes<T>(this_: MutableObservableProperty<T>, until: DisposeCondition, other: MutableObservableProperty<T>): void;
