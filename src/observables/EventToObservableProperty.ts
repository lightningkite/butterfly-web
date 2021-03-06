// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/EventToObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
import { printStackTrace } from '../kotlin/Language'
import { map as rxMap, onErrorResumeNext as rxOnErrorResumeNext, tap as rxTap } from 'rxjs/operators'
import { ObservableProperty } from './ObservableProperty'
import { Observable, concat as rxConcat, NEVER as rxNEVER } from 'rxjs'

//! Declares com.lightningkite.butterfly.observables.EventToObservableProperty
export class EventToObservableProperty<T> extends ObservableProperty<T> {
    public value: T;
    public readonly wrapped: Observable<T>;
    public constructor(value: T, wrapped: Observable<T>) {
        super();
        this.value = value;
        this.wrapped = wrapped;
    }
    
    //! Declares com.lightningkite.butterfly.observables.EventToObservableProperty.onChange
    public get onChange(): Observable<T> { return rxConcat(this.wrapped.pipe(rxMap((it: T): T => {
                        this.value = it;
                        return it;
            })).pipe(rxTap(undefined, (it: any): void => {
                        console.error(`${"EventToObservableProperty"}: ${`Oh boy, you done screwed up.  The following stack trace is from an Observable that had an error that was converted to an ObservableProperty, which has a contract to never error.  The currently held value is '${this.value}`}`);
                        printStackTrace(it);
    })).pipe(rxOnErrorResumeNext(rxNEVER)), rxNEVER); }
    
}

//! Declares com.lightningkite.butterfly.observables.asObservableProperty>io.reactivex.Observable<kotlin.Any>
export function xObservableAsObservableProperty<Element>(this_: Observable< Element>, defaultValue: Element): ObservableProperty<Element> {
    return new EventToObservableProperty<Element>(defaultValue, this_.pipe(rxMap((it: Element): Element => it)));
}

//! Declares com.lightningkite.butterfly.observables.asObservablePropertyDefaultNull>io.reactivex.Observable<kotlin.Any>
export function xObservableAsObservablePropertyDefaultNull<Element>(this_: Observable< Element>): ObservableProperty<(Element | null)> {
    return new EventToObservableProperty<(Element | null)>(null, this_.pipe(rxMap((it: Element): (Element | null) => it)));
}


