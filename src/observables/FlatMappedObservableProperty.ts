// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/FlatMappedObservableProperty.kt
// Package: com.lightningkite.butterfly.observables
import { skip as rxSkip, switchMap as rxSwitchMap } from 'rxjs/operators'
import { ObservableProperty } from './ObservableProperty'
import { Observable, ObservableInput } from 'rxjs'
import { MutableObservableProperty } from './MutableObservableProperty'
import { xObservablePropertyObservableGet } from './ObservableProperty.ext'
import { ConstantObservableProperty } from './ConstantObservableProperty'

//! Declares com.lightningkite.butterfly.observables.FlatMappedObservableProperty
export class FlatMappedObservableProperty<A, B> extends ObservableProperty<B> {
    public readonly basedOn: ObservableProperty<A>;
    public readonly transformation:  ((a: A) => ObservableProperty<B>);
    public constructor(basedOn: ObservableProperty<A>, transformation:  ((a: A) => ObservableProperty<B>)) {
        super();
        this.basedOn = basedOn;
        this.transformation = transformation;
    }
    
    //! Declares com.lightningkite.butterfly.observables.FlatMappedObservableProperty.value
    public get value(): B { return this.transformation(this.basedOn.value).value; }
    
    //! Declares com.lightningkite.butterfly.observables.FlatMappedObservableProperty.onChange
    public get onChange(): Observable<B> {
        const transformCopy = this.transformation;
        
        return xObservablePropertyObservableGet(this.basedOn).pipe(rxSwitchMap((it: A): ObservableInput<B> => xObservablePropertyObservableGet(transformCopy(it)))).pipe(rxSkip(0));
    }
    
}

//! Declares com.lightningkite.butterfly.observables.switchMap>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertySwitchMap<T, B>(this_: ObservableProperty<T>, transformation:  ((a: T) => ObservableProperty<B>)): FlatMappedObservableProperty<T, B> {
    return new FlatMappedObservableProperty<T, B>(this_, transformation);
}

//! Declares com.lightningkite.butterfly.observables.flatMap>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertyFlatMap<T, B>(this_: ObservableProperty<T>, transformation:  ((a: T) => ObservableProperty<B>)): FlatMappedObservableProperty<T, B> {
    return new FlatMappedObservableProperty<T, B>(this_, transformation);
}

//! Declares com.lightningkite.butterfly.observables.switchMapNotNull>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertySwitchMapNotNull<T extends any, B extends any>(this_: ObservableProperty<(T | null)>, transformation:  ((a: T) => ObservableProperty<(B | null)>)): FlatMappedObservableProperty<(T | null), (B | null)> {
    return new FlatMappedObservableProperty<(T | null), (B | null)>(this_, (item: (T | null)): ObservableProperty<(B | null)> => ((): ObservableProperty<(B | null)> => {
                if (item !== null) { return transformation(item!) } else { return new ConstantObservableProperty<(B | null)>(null) }
    })());
}

//! Declares com.lightningkite.butterfly.observables.flatMapNotNull>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertyFlatMapNotNull<T extends any, B extends any>(this_: ObservableProperty<(T | null)>, transformation:  ((a: T) => ObservableProperty<(B | null)>)): FlatMappedObservableProperty<(T | null), (B | null)> {
    return new FlatMappedObservableProperty<(T | null), (B | null)>(this_, (item: (T | null)): ObservableProperty<(B | null)> => ((): ObservableProperty<(B | null)> => {
                if (item !== null) { return transformation(item!) } else { return new ConstantObservableProperty<(B | null)>(null) }
    })());
}

//! Declares com.lightningkite.butterfly.observables.MutableFlatMappedObservableProperty
export class MutableFlatMappedObservableProperty<A, B> extends MutableObservableProperty<B> {
    public readonly basedOn: ObservableProperty<A>;
    public readonly transformation:  ((a: A) => MutableObservableProperty<B>);
    public constructor(basedOn: ObservableProperty<A>, transformation:  ((a: A) => MutableObservableProperty<B>)) {
        super();
        this.basedOn = basedOn;
        this.transformation = transformation;
        this.lastProperty = null;
    }
    
    //! Declares com.lightningkite.butterfly.observables.MutableFlatMappedObservableProperty.value
    public get value(): B { return this.transformation(this.basedOn.value).value; }
    public set value(value: B) {
        this.transformation(this.basedOn.value).value = value;
    }
    
    
    public lastProperty: (MutableObservableProperty<B> | null);
    
    
    //! Declares com.lightningkite.butterfly.observables.MutableFlatMappedObservableProperty.onChange
    public get onChange(): Observable<B> {
        const transformCopy = this.transformation;
        
        return xObservablePropertyObservableGet(this.basedOn).pipe(rxSwitchMap( (it: A): ObservableInput<B> => {
                    const prop = transformCopy(it);
                    
                    if(this !== null) {
                        this.lastProperty = prop
                    };
                    return xObservablePropertyObservableGet(prop);
        })).pipe(rxSkip(0));
    }
    
    
    public update(): void {
        this.lastProperty?.update();
    }
}

//! Declares com.lightningkite.butterfly.observables.switchMapMutable>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertySwitchMapMutable<T, B>(this_: ObservableProperty<T>, transformation:  ((a: T) => MutableObservableProperty<B>)): MutableFlatMappedObservableProperty<T, B> {
    return new MutableFlatMappedObservableProperty<T, B>(this_, transformation);
}

//! Declares com.lightningkite.butterfly.observables.flatMapMutable>com.lightningkite.butterfly.observables.ObservableProperty<kotlin.Any>
export function xObservablePropertyFlatMapMutable<T, B>(this_: ObservableProperty<T>, transformation:  ((a: T) => MutableObservableProperty<B>)): MutableFlatMappedObservableProperty<T, B> {
    return new MutableFlatMappedObservableProperty<T, B>(this_, transformation);
}

