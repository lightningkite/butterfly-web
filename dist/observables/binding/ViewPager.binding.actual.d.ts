import { ObservableProperty } from '../ObservableProperty.shared';
export declare function xViewPagerBindStatic<T>(this_: HTMLDivElement, items: Array<T>, showIndex: any, makeView: (a: T) => HTMLElement): void;
export declare function xViewPagerBind<T>(this_: HTMLDivElement, items: ObservableProperty<Array<T>>, _default: T, showIndex: any, makeView: (a: ObservableProperty<T>) => HTMLElement): void;
