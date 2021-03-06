// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: views/ViewString.kt
// Package: com.lightningkite.butterfly.views
import { vsprintf } from 'sprintf-js'
import { checkIsInterface, tryCastInterface } from '../Kotlin'

//! Declares com.lightningkite.butterfly.views.ViewString
export interface ViewString {
    
    get(dependency: Window): string 
}


//! Declares com.lightningkite.butterfly.views.ViewStringRaw
export class ViewStringRaw implements ViewString {
    public static implementsInterfaceComLightningkiteButterflyViewsViewString = true;
    public readonly _string: string;
    public constructor(_string: string) {
        this._string = _string;
    }
    
    public get(dependency: Window): string { 
        return this._string; 
    }
}

//! Declares com.lightningkite.butterfly.views.ViewStringResource
export class ViewStringResource implements ViewString {
    public static implementsInterfaceComLightningkiteButterflyViewsViewString = true;
    public readonly resource: string;
    public constructor(resource: string) {
        this.resource = resource;
    }
    
    public get(dependency: Window): string { 
        return this.resource; 
    }
}

//! Declares com.lightningkite.butterfly.views.ViewStringTemplate
export class ViewStringTemplate implements ViewString {
    public static implementsInterfaceComLightningkiteButterflyViewsViewString = true;
    public readonly template: ViewString;
    public readonly _arguments: Array<any>;
    public constructor(template: ViewString, _arguments: Array<any>) {
        this.template = template;
        this._arguments = _arguments;
    }
    
    public get(dependency: Window): string {
        const templateResolved = this.template.get(dependency);
        
        const fixedArguments = this._arguments.map((it: any): any => ((tryCastInterface<ViewString>(it, "ComLightningkiteButterflyViewsViewString"))?.get(dependency) ?? null) ?? it);
        
        return vsprintf(templateResolved, fixedArguments);
    }
}

//! Declares com.lightningkite.butterfly.views.ViewStringComplex
export class ViewStringComplex implements ViewString {
    public static implementsInterfaceComLightningkiteButterflyViewsViewString = true;
    public readonly getter:  ((a: Window) => string);
    public constructor(getter:  ((a: Window) => string)) {
        this.getter = getter;
    }
    
    public get(dependency: Window): string { 
        return this.getter(dependency); 
    }
}

//! Declares com.lightningkite.butterfly.views.ViewStringList
export class ViewStringList implements ViewString {
    public static implementsInterfaceComLightningkiteButterflyViewsViewString = true;
    public readonly parts: Array<ViewString>;
    public readonly separator: string;
    public constructor(parts: Array<ViewString>, separator: string = `\n`) {
        this.parts = parts;
        this.separator = separator;
    }
    
    public get(dependency: Window): string {
        return this.parts.map((it: ViewString): string => it.get(dependency)).join(this.separator);
    }
}

//! Declares com.lightningkite.butterfly.views.joinToViewString>kotlin.collections.List<com.lightningkite.butterfly.views.ViewString>
export function xListJoinToViewString(this_: Array< ViewString>, separator: string = `\n`): ViewString {
    if (this_.length === 1) {
        return this_[0];
    }
    return new ViewStringList(this_, separator);
}

//! Declares com.lightningkite.butterfly.views.toDebugString>com.lightningkite.butterfly.views.ViewString
export function xViewStringToDebugString(this_: ViewString): string {
    const thing = this_;
    
    if (thing instanceof ViewStringRaw) {
        return (thing as ViewStringRaw)._string
    } else if (thing instanceof ViewStringResource) {
        return (thing as ViewStringResource).resource.toString()
    } else if (thing instanceof ViewStringTemplate) {
        return xViewStringToDebugString((thing as ViewStringTemplate).template) + "(" + (thing as ViewStringTemplate)._arguments.map((it: any): string => ((): string => {
                        if (checkIsInterface<ViewString>(it, "ComLightningkiteButterflyViewsViewString")) { return xViewStringToDebugString((it as ViewString)) } else { return `${it}` }
        })()).join(", ") + ")"
    } else if (thing instanceof ViewStringList) {
        return (thing as ViewStringList).parts.map((it: ViewString): string => xViewStringToDebugString(it)).join((thing as ViewStringList).separator)
    } else if (thing instanceof ViewStringComplex) {
        return `<Complex string ${thing}>`
    } else  {
        return "Unknown"
    }
}

