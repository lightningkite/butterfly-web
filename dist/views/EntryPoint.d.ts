import { ViewGenerator } from './ViewGenerator';
import { ObservableStack } from '../observables/ObservableStack';
export interface EntryPoint {
    handleDeepLink(schema: string, host: string, path: string, params: Map<string, string>): void;
    readonly mainStack: (ObservableStack<ViewGenerator> | null);
}
export declare namespace EntryPointDefaults {
    function handleDeepLink(this_: EntryPoint, schema: string, host: string, path: string, params: Map<string, string>): void;
    function getMainStack(this_: EntryPoint): (ObservableStack<ViewGenerator> | null);
}
