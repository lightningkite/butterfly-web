import { ObservableProperty } from '../ObservableProperty';
import { MutableObservableProperty } from '../MutableObservableProperty';
export declare function xRatingBarBindMutable(this_: HTMLDivElement, stars: number, observable: MutableObservableProperty<number>): void;
export declare function xRatingBarBind(this_: HTMLDivElement, stars: number, observable: ObservableProperty<number>): void;
export declare function xRatingBarBindFloatMutable(this_: HTMLDivElement, stars: number, observable: MutableObservableProperty<number>): void;
export declare function xRatingBarBindFloat(this_: HTMLDivElement, stars: number, observable: ObservableProperty<number>): void;
