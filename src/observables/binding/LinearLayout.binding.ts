// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/binding/LinearLayout.binding.kt
// Package: com.lightningkite.butterfly.observables.binding
import { NumberRange } from '../../Kotlin'
import { xDisposableUntil, xViewRemovedGet } from '../../rx/DisposeCondition.ext'
import { StandardObservableProperty } from '../StandardObservableProperty'
import { AlignPair } from '../../views/geometry/Align'
import { ObservableProperty } from '../ObservableProperty'
import { SubscriptionLike } from 'rxjs'
import { xLinearLayoutParams } from '../../views/LinearLayout'
import { xObservablePropertySubscribeBy } from '../ObservableProperty.ext'

//! Declares com.lightningkite.butterfly.observables.binding.LinearLayoutBoundSubview
export class LinearLayoutBoundSubview<T> {
    public readonly view: HTMLElement;
    public readonly property: StandardObservableProperty<T>;
    public constructor(view: HTMLElement, property: StandardObservableProperty<T>) {
        this.view = view;
        this.property = property;
    }
}

//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.LinearLayout
export function xLinearLayoutBind<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView:  ((a: ObservableProperty<T>) => HTMLElement)): void {
    const existingViews: Array<LinearLayoutBoundSubview<T>> = [];
    
    xDisposableUntil<SubscriptionLike>(xObservablePropertySubscribeBy<Array<T>>(data, undefined, undefined, (value: Array<T>): void => {
                //Fix view count
                const excessViews = existingViews.length - value.length;
                
                if (excessViews > 0) {
                    //remove views
                    for (const iter of new NumberRange(1, excessViews)) {
                        const old = existingViews.splice((existingViews.length - 1), 1)[0];
                        
                        this_.removeChild(old.view);
                    }
                } else { if (existingViews.length < value.length) {
                        //add views
                        for (const iter of new NumberRange(1, ((-excessViews)))) {
                            const prop = new StandardObservableProperty<T>(defaultValue, undefined);
                            
                            const view = makeView(prop);
                            
                            this_.appendChild(xLinearLayoutParams(this_, undefined, undefined, undefined, undefined, undefined, undefined, AlignPair.Companion.INSTANCE.centerFill, undefined)(view));
                            existingViews.push(new LinearLayoutBoundSubview<T>(view, prop));
                        }
                } }
                
                //Update views
                for (const index of new NumberRange(0, value.length-1)) {
                    existingViews[index].property.value = value[index];
                }
    }), xViewRemovedGet(this_));
}


//! Declares com.lightningkite.butterfly.observables.binding.bindHorizontal>android.widget.LinearLayout
export function xLinearLayoutBindHorizontal<T>(this_: HTMLDivElement, data: ObservableProperty<Array<T>>, defaultValue: T, makeView:  ((a: ObservableProperty<T>) => HTMLElement)): void {
    const existingViews: Array<LinearLayoutBoundSubview<T>> = [];
    
    xDisposableUntil<SubscriptionLike>(xObservablePropertySubscribeBy<Array<T>>(data, undefined, undefined, (value: Array<T>): void => {
                //Fix view count
                const excessViews = existingViews.length - value.length;
                
                if (excessViews > 0) {
                    //remove views
                    for (const iter of new NumberRange(1, excessViews)) {
                        const old = existingViews.splice((existingViews.length - 1), 1)[0];
                        
                        this_.removeChild(old.view);
                    }
                } else { if (existingViews.length < value.length) {
                        //add views
                        for (const iter of new NumberRange(1, ((-excessViews)))) {
                            const prop = new StandardObservableProperty<T>(defaultValue, undefined);
                            
                            const view = makeView(prop);
                            
                            this_.appendChild(xLinearLayoutParams(this_, undefined, undefined, undefined, undefined, undefined, undefined, AlignPair.Companion.INSTANCE.center, undefined)(view));
                            existingViews.push(new LinearLayoutBoundSubview<T>(view, prop));
                        }
                } }
                
                //Update views
                for (const index of new NumberRange(0, value.length-1)) {
                    existingViews[index].property.value = value[index];
                }
    }), xViewRemovedGet(this_));
}


