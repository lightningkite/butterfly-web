// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: views/EntryPoint.kt
// Package: com.lightningkite.butterfly.views
import { ViewGenerator } from './ViewGenerator'
import { HasBackAction } from './HasBackAction'
import { ObservableStack } from '../observables/ObservableStack'

//! Declares com.lightningkite.butterfly.views.EntryPoint
export interface EntryPoint extends HasBackAction {
    
    handleDeepLink(schema: string, host: string, path: string, params: Map<string, string>): void 
    readonly mainStack: (ObservableStack<ViewGenerator> | null);
    
}
export namespace EntryPointDefaults {
    export function handleDeepLink(this_: EntryPoint, schema: string, host: string, path: string, params: Map<string, string>): void {
        console.log(`Empty handler; ${schema}://${host}/${path}/${params}`);
    }
    export function getMainStack(this_: EntryPoint): (ObservableStack<ViewGenerator> | null) { return null; }
}

