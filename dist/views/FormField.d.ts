import { MutableObservableProperty } from '../observables/MutableObservableProperty';
import { ViewString } from './ViewString';
import { StandardObservableProperty } from '../observables/StandardObservableProperty';
export declare class FormValidationError {
    readonly field: UntypedFormField;
    readonly _string: ViewString;
    constructor(field: UntypedFormField, _string: ViewString);
}
export interface UntypedFormField {
    readonly name: ViewString;
    readonly untypedObservable: any;
    readonly validation: ((a: UntypedFormField) => (ViewString | null));
    readonly error: StandardObservableProperty<(ViewString | null)>;
}
export declare class FormField<T> implements UntypedFormField {
    static implementsInterfaceComLightningkiteButterflyViewsUntypedFormField: boolean;
    readonly name: ViewString;
    readonly observable: MutableObservableProperty<T>;
    readonly validation: ((a: UntypedFormField) => (ViewString | null));
    constructor(name: ViewString, observable: MutableObservableProperty<T>, validation: ((a: UntypedFormField) => (ViewString | null)));
    readonly error: StandardObservableProperty<(ViewString | null)>;
    get value(): T;
    set value(value: T);
    get untypedObservable(): any;
}
export declare function xFormFieldRequired(this_: FormField<string>): (ViewString | null);
export declare function xFormFieldNotNull<T>(this_: FormField<T>): (ViewString | null);
export declare function xFormFieldNotFalse(this_: FormField<boolean>): (ViewString | null);
export declare function xViewStringUnless(this_: ViewString, condition: boolean): (ViewString | null);
export declare function xFormFieldMatches<T extends any>(this_: FormField<T>, other: FormField<T>): (ViewString | null);
