import { ObservableProperty } from "./observables/ObservableProperty";
import { MutableObservableProperty } from "./observables/MutableObservableProperty";
export declare class ApplicationAccess {
    static INSTANCE: ApplicationAccess;
    foreground: ObservableProperty<boolean>;
    softInputActive: MutableObservableProperty<boolean>;
}
