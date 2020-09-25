import { DateAlone } from '../time/DateAlone';
import { MonthCVD } from './MonthCVD';
import { RectF } from './geometry/RectF';
import { DisplayMetrics } from './DisplayMetrics';
import { StandardObservableProperty } from '../observables/StandardObservableProperty';
import { Paint } from './draw/Paint';
export declare class SelectMultipleDatesMonthCVD extends MonthCVD {
    constructor();
    generateAccessibilityView(): (HTMLElement | null);
    readonly dates: StandardObservableProperty<Set<DateAlone>>;
    readonly selectedDayPaint: Paint;
    readonly selectedPaint: Paint;
    measure(width: number, height: number, displayMetrics: DisplayMetrics): void;
    readonly drawDay_dateAlone: DateAlone;
    drawDay(canvas: CanvasRenderingContext2D, showingMonth: DateAlone, day: DateAlone, displayMetrics: DisplayMetrics, outer: RectF, inner: RectF): void;
    onTap(day: DateAlone): void;
    adding: boolean;
    onTouchDownDate(day: DateAlone): boolean;
    onTouchMoveDate(day: DateAlone): boolean;
    onTouchUpDate(day: DateAlone): boolean;
}
