import { DateAlone } from '../time/DateAlone';
import { MonthCVD } from './MonthCVD';
import { RectF } from './geometry/RectF';
import { DisplayMetrics } from './DisplayMetrics';
import { Paint } from './draw/Paint';
import { MutableObservableProperty } from '../observables/MutableObservableProperty';
export declare class SelectDateRangeMonthCVD extends MonthCVD {
    constructor();
    generateAccessibilityView(): (HTMLElement | null);
    draggingStart: boolean;
    start: MutableObservableProperty<(DateAlone | null)>;
    endInclusive: MutableObservableProperty<(DateAlone | null)>;
    readonly selectedDayPaint: Paint;
    readonly selectedPaint: Paint;
    measure(width: number, height: number, displayMetrics: DisplayMetrics): void;
    readonly drawDay_dateAlone: DateAlone;
    drawDay(canvas: CanvasRenderingContext2D, showingMonth: DateAlone, day: DateAlone, displayMetrics: DisplayMetrics, outer: RectF, inner: RectF): void;
    private startedDraggingOn;
    onTap(day: DateAlone): void;
    onTouchDownDate(day: DateAlone): boolean;
    onTouchMoveDate(day: DateAlone): boolean;
    onTouchUpDate(day: DateAlone): boolean;
}
