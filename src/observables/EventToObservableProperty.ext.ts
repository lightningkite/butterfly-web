// Generated by Butterfly TypeScript converter - this file will be overwritten.
// File: observables/EventToObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
import { ObservableProperty } from './ObservableProperty'
import { EventToObservableProperty } from './EventToObservableProperty'
import { Observable } from 'rxjs'

//! Declares com.lightningkite.butterfly.observables.asObservablePropertyUnboxed>io.reactivex.Observable<com.lightningkite.butterfly.Box>
export function xObservableAsObservablePropertyUnboxed<T>(this_: Observable<T>, defaultValue: T): ObservableProperty<T> {
    return new EventToObservableProperty<T>(defaultValue, this_);
}

