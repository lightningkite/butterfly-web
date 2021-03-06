import { ObservableProperty } from '../ObservableProperty';
import { MutableObservableProperty } from '../MutableObservableProperty';
export declare function spinnerBindAdvanced<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, makeView: (a: ObservableProperty<T>) => HTMLElement): void;
export declare function spinnerBind<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, toString?: (a: T) => string): void;
export declare function spinnerBindString<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, toString: (a: T) => ObservableProperty<string>): void;
