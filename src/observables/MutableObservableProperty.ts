// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/MutableObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
import { ObservableProperty } from './ObservableProperty'

//! Declares com.lightningkite.butterfly.observables.MutableObservableProperty
export abstract class MutableObservableProperty<T> extends ObservableProperty<T> {
    protected constructor() {
        super();
    }
    
    public abstract value: T;
    
    public abstract update(): void 
}

