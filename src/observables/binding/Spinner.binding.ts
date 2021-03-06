// Generated by Butterfly TypeScript converter
// File: observables/binding/Spinner.binding.kt
// Package: com.lightningkite.butterfly.observables.binding
import {xObservablePropertySubscribeBy as subBy} from '../ObservableProperty.ext'
import {
    xViewRemovedGet as vRemoved,
    xDisposableUntil as until
} from '../../rx/DisposeCondition.ext'
import {ObservableProperty} from '../ObservableProperty'
import {StandardObservableProperty} from '../StandardObservableProperty'
import {IllegalStateException, safeEq, tryCastClass} from '../../kotlin/Language'
import {MutableObservableProperty} from '../MutableObservableProperty'
import {triggerDetatchEvent} from "../../views/viewAttached";
import {xObservablePropertyFlatMap} from "../FlatMappedObservableProperty";

//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.Spinner
export function spinnerBindAdvanced<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, makeView: (a: ObservableProperty<T>) => HTMLElement): void {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty(x)
    })
    until(subBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty(options[options.length - diff + i]);
                makeView(newObs);
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        } else if (diff < 0) {
            for(let i = 0; i < -diff; i++){
                const opt = this_.options.item(this_.options.length-1) as HTMLOptionElement;
                triggerDetatchEvent(opt);
                this_.options.remove(this_.options.length-1);
                observables.pop();
            }
        }
        for(let i = 0; i < options.length; i++){
            observables[i].value = options[i]
        }
        this_.selectedIndex = options.findIndex((x)=>safeEq(selected.value, x));
    }), vRemoved(this_));

    until(subBy(selected, undefined, undefined, (sel)=>{
        this_.selectedIndex = options.value.findIndex((x)=>safeEq(sel, x));
    }), vRemoved(this_));

    this_.oninput = (ev)=> {
        const sel = options.value[this_.selectedIndex];
        if(sel !== undefined){
            selected.value = sel
        }
    }
}



//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.Spinner
export function spinnerBind<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, toString: (a: T)=>string = (x)=> `${x}`): void {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty(x)
    })
    until(subBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty(options[options.length - diff + i]);
                until(subBy(newObs, undefined, undefined, (x) => {
                    newOpt.innerText = toString(x);
                }), vRemoved(newOpt))
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        } else if (diff < 0) {
            for(let i = 0; i < -diff; i++){
                const opt = this_.options.item(this_.options.length-1);
                triggerDetatchEvent(opt as HTMLOptionElement);
                this_.options.remove(this_.options.length-1);
                observables.pop();
            }
        }
        for(let i = 0; i < options.length; i++){
            observables[i].value = options[i]
        }
        this_.selectedIndex = options.findIndex((x)=>safeEq(selected.value, x));
    }), vRemoved(this_));

    until(subBy(selected, undefined, undefined, (sel)=>{
        this_.selectedIndex = options.value.findIndex((x)=>safeEq(sel, x));
    }), vRemoved(this_));

    this_.oninput = (ev)=> {
        const sel = options.value[this_.selectedIndex];
        if(sel !== undefined){
            selected.value = sel
        }
    }
}

//! Declares com.lightningkite.butterfly.observables.binding.bindString>android.widget.Spinner
export function spinnerBindString<T>(this_: HTMLSelectElement, options: ObservableProperty<Array<T>>, selected: MutableObservableProperty<T>, toString: (a: T)=>ObservableProperty<string>): void {
    const observables = options.value.map((x) => {
        return new StandardObservableProperty(x)
    })
    until(subBy(options, undefined, undefined, (options) => {
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty(options[options.length - diff + i]);
                until(subBy(xObservablePropertyFlatMap(newObs, toString), undefined, undefined, (x) => {
                    newOpt.innerText = x;
                }), vRemoved(newOpt))
                this_.options.add(newOpt);
                observables.push(newObs);
            }
        } else if (diff < 0) {
            for(let i = 0; i < -diff; i++){
                const opt = this_.options.item(this_.options.length-1);
                triggerDetatchEvent(opt as HTMLOptionElement);
                this_.options.remove(this_.options.length-1);
                observables.pop();
            }
        }
        for(let i = 0; i < options.length; i++){
            observables[i].value = options[i]
        }
        this_.selectedIndex = options.findIndex((x)=>safeEq(selected.value, x));
    }), vRemoved(this_));

    until(subBy(selected, undefined, undefined, (sel)=>{
        this_.selectedIndex = options.value.findIndex((x)=>safeEq(sel, x));
    }), vRemoved(this_));

    this_.oninput = (ev)=> {
        const sel = options.value[this_.selectedIndex];
        if(sel !== undefined){
            selected.value = sel
        }
    }
}

