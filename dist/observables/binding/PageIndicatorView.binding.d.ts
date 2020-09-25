import { ObservableProperty } from '../ObservableProperty';
import { MutableObservableProperty } from '../MutableObservableProperty';
export declare function xPageIndicatorViewBind(this_: HTMLDivElement, count: number | undefined, selected: MutableObservableProperty<number>): void;
export declare function xPageIndicatorViewBindDynamic(this_: HTMLDivElement, count: ObservableProperty<number>, selected: MutableObservableProperty<number>): void;
