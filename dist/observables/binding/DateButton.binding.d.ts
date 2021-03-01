import { TimeAlone } from '../../time/TimeAlone';
import { MutableObservableProperty } from '../MutableObservableProperty';
import { DateAlone } from '../../time/DateAlone';
import { ViewString } from "../../views/ViewString";
export declare function xDateButtonBind(this_: HTMLInputElement, date: MutableObservableProperty<Date>): void;
export declare function xTimeButtonBind(this_: HTMLInputElement, date: MutableObservableProperty<Date>, minuteInterval?: number): void;
export declare function xDateButtonBindDateAlone(this_: HTMLInputElement, date: MutableObservableProperty<DateAlone>): void;
export declare function xDateButtonBindDateAloneNull(this_: HTMLInputElement, dependency: Window, date: MutableObservableProperty<DateAlone | null>, startText: ViewString): void;
export declare function xTimeButtonBindTimeAlone(this_: HTMLInputElement, date: MutableObservableProperty<TimeAlone>, minuteInterval?: number): void;
