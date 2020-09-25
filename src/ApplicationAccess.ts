import {ObservableProperty} from "./observables/ObservableProperty";
import {ConstantObservableProperty} from "./observables/ConstantObservableProperty";
import {MutableObservableProperty} from "./observables/MutableObservableProperty";
import {xObservablePropertyWithWrite} from "./observables/WriteAddedObservableProperty";

//! Declares com.lightningkite.butterfly.ApplicationAccess
export class ApplicationAccess {
    public static INSTANCE = new ApplicationAccess();
    public foreground: ObservableProperty<boolean> = new ConstantObservableProperty(true)
    public softInputActive: MutableObservableProperty<boolean> = xObservablePropertyWithWrite(new ConstantObservableProperty(false), (x)=>{})
}