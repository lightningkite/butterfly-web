import { StandardObservableProperty } from '../StandardObservableProperty';
import { ObservableProperty } from '../ObservableProperty';
export declare class LinearLayoutBoundSubview<T> {
    readonly view: HTMLElement;
    readonly property: StandardObservableProperty<T>;
    constructor(view: HTMLElement, property: StandardObservableProperty<T>);
}
export declare function xLinearLayoutBind<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView: ((a: ObservableProperty<T>) => HTMLElement)): void;
export declare function xLinearLayoutBindHorizontal<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView: ((a: ObservableProperty<T>) => HTMLElement)): void;
