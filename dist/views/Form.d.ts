import { ViewString } from './ViewString';
import { MutableObservableProperty } from '../observables/MutableObservableProperty';
import { FormField, FormValidationError, UntypedFormField } from './FormField';
export declare class Form {
    constructor();
    readonly fields: Array<UntypedFormField>;
    field<T>(name: ViewString, defaultValue: T, validation: ((a: FormField<T>) => (ViewString | null))): FormField<T>;
    fieldRes<T>(name: string, defaultValue: T, validation: ((a: FormField<T>) => (ViewString | null))): FormField<T>;
    fieldFromProperty<T>(name: ViewString, property: MutableObservableProperty<T>, validation: ((a: FormField<T>) => (ViewString | null))): FormField<T>;
    fieldFromPropertyRes<T>(name: string, property: MutableObservableProperty<T>, validation: ((a: FormField<T>) => (ViewString | null))): FormField<T>;
    check(): Array<FormValidationError>;
    runOrDialog(action: (() => void)): void;
    checkField(field: UntypedFormField): (ViewString | null);
}
export declare namespace Form {
    class Companion {
        private constructor();
        static INSTANCE: Companion;
        xIsRequired: ViewString;
        xMustMatchY: ViewString;
    }
}
