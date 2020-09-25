import { DateAlone } from '../time/DateAlone';
import { MonthCVD } from './MonthCVD';
import { RectF } from './geometry/RectF';
import { DisplayMetrics } from './DisplayMetrics';
import { Paint } from './draw/Paint';
import { MutableObservableProperty } from '../observables/MutableObservableProperty';
export declare class SelectDateMonthCVD extends MonthCVD {
    constructor();
    generateAccessibilityView(): (HTMLElement | null);
    selected: MutableObservableProperty<(DateAlone | null)>;
    readonly selectedDayPaint: Paint;
    readonly selectedPaint: Paint;
    drawDay(canvas: CanvasRenderingContext2D, showingMonth: DateAlone, day: DateAlone, displayMetrics: DisplayMetrics, outer: RectF, inner: RectF): void;
    measure(width: number, height: number, displayMetrics: DisplayMetrics): void;
    onTap(day: DateAlone): void;
}
