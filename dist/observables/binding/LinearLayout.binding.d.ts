import { ObservableProperty } from '../ObservableProperty';
export declare function xLinearLayoutBind<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView: ((a: ObservableProperty<T>) => HTMLElement)): void;
export declare function xLinearLayoutBindHorizontal<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView: ((a: ObservableProperty<T>) => HTMLElement)): void;
