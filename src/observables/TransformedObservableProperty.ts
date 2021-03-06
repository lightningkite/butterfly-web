// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/TransformedObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
import { ObservableProperty } from './ObservableProperty'
import { Observable } from 'rxjs'
import { map as rxMap } from 'rxjs/operators'

//! Declares com.lightningkite.butterfly.observables.TransformedObservableProperty
export class TransformedObservableProperty<A, B> extends ObservableProperty<B> {
    public readonly basedOn: ObservableProperty<A>;
    public readonly read:  ((a: A) => B);
    public constructor(basedOn: ObservableProperty<A>, read:  ((a: A) => B)) {
        super();
        this.basedOn = basedOn;
        this.read = read;
    }
    
    //! Declares com.lightningkite.butterfly.observables.TransformedObservableProperty.value
    public get value(): B {
        return this.read(this.basedOn.value);
    }
    
    //! Declares com.lightningkite.butterfly.observables.TransformedObservableProperty.onChange
    public get onChange(): Observable<B> {
        const readCopy = this.read;
        
        return this.basedOn.onChange.pipe(rxMap((it: A): B => readCopy(it)));
    }
    
}

//! Declares com.lightningkite.butterfly.observables.map>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertyMap<T, B>(this_: ObservableProperty<T>, read:  ((a: T) => B)): ObservableProperty<B> {
    return new TransformedObservableProperty<T, B>(this_, read);
}

