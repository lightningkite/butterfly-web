// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: net/HttpModels.kt
// Package: com.lightningkite.butterfly.net
import { hashAnything, safeEq } from '../Kotlin'

//! Declares com.lightningkite.butterfly.net.HttpPhase
export class HttpPhase {
    private constructor(name: string, jsonName: string) {
        this.name = name;
        this.jsonName = jsonName;
    }
    
    public static Connect = new HttpPhase("Connect", "Connect");
    
    public static Write = new HttpPhase("Write", "Write");
    
    public static Waiting = new HttpPhase("Waiting", "Waiting");
    
    public static Read = new HttpPhase("Read", "Read");
    
    public static Done = new HttpPhase("Done", "Done");
    
    private static _values: Array<HttpPhase> = [HttpPhase.Connect, HttpPhase.Write, HttpPhase.Waiting, HttpPhase.Read, HttpPhase.Done];
    public static values(): Array<HttpPhase> { return HttpPhase._values; }
    public readonly name: string;
    public readonly jsonName: string;
    public static valueOf(name: string): HttpPhase { return (HttpPhase as any)[name]; }
    public toString(): string { return this.name }
    public toJSON(): string { return this.jsonName }
}
//! Declares com.lightningkite.butterfly.net.HttpProgress
export class HttpProgress {
    public readonly phase: HttpPhase;
    public readonly ratio: number;
    public constructor(phase: HttpPhase, ratio: number) {
        this.phase = phase;
        this.ratio = ratio;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.phase);
        hash = 31 * hash + hashAnything(this.ratio);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof HttpProgress && safeEq(this.phase, other.phase) && safeEq(this.ratio, other.ratio) }
    public toString(): string { return `HttpProgress(phase = ${this.phase}, ratio = ${this.ratio})` }
    public copy(phase: HttpPhase = this.phase, ratio: number = this.ratio): HttpProgress { return new HttpProgress(phase, ratio); }
    
    //! Declares com.lightningkite.butterfly.net.HttpProgress.approximate
    public get approximate(): number { return ((): number => {
                switch(this.phase) {
                    case HttpPhase.Connect:
                    return 0
                    case HttpPhase.Write:
                    return 0.15 + 0.5 * this.ratio
                    case HttpPhase.Waiting:
                    return 0.65
                    case HttpPhase.Read:
                    return 0.7 + 0.3 * this.ratio
                    case HttpPhase.Done:
                    return 1
                    default:
                    return 0
                }
                
    })(); }
    
    
}
export namespace HttpProgress {
    //! Declares com.lightningkite.butterfly.net.HttpProgress.Companion
    export class Companion {
        private constructor() {
            this.connecting = new HttpProgress(HttpPhase.Connect, 0);
            this.waiting = new HttpProgress(HttpPhase.Waiting, 0);
            this.done = new HttpProgress(HttpPhase.Done, 0);
        }
        public static INSTANCE = new Companion();
        
        public readonly connecting: HttpProgress;
        
        public readonly waiting: HttpProgress;
        
        public readonly done: HttpProgress;
        
    }
}

//! Declares com.lightningkite.butterfly.net.HttpOptions
export class HttpOptions {
    public readonly callTimeout: (number | null);
    public readonly writeTimeout: (number | null);
    public readonly readTimeout: (number | null);
    public readonly connectTimeout: (number | null);
    public readonly cacheMode: HttpCacheMode;
    public constructor(callTimeout: (number | null) = null, writeTimeout: (number | null) = 10000, readTimeout: (number | null) = 10000, connectTimeout: (number | null) = 10000, cacheMode: HttpCacheMode = HttpCacheMode.Default) {
        this.callTimeout = callTimeout;
        this.writeTimeout = writeTimeout;
        this.readTimeout = readTimeout;
        this.connectTimeout = connectTimeout;
        this.cacheMode = cacheMode;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.callTimeout);
        hash = 31 * hash + hashAnything(this.writeTimeout);
        hash = 31 * hash + hashAnything(this.readTimeout);
        hash = 31 * hash + hashAnything(this.connectTimeout);
        hash = 31 * hash + hashAnything(this.cacheMode);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof HttpOptions && safeEq(this.callTimeout, other.callTimeout) && safeEq(this.writeTimeout, other.writeTimeout) && safeEq(this.readTimeout, other.readTimeout) && safeEq(this.connectTimeout, other.connectTimeout) && safeEq(this.cacheMode, other.cacheMode) }
    public toString(): string { return `HttpOptions(callTimeout = ${this.callTimeout}, writeTimeout = ${this.writeTimeout}, readTimeout = ${this.readTimeout}, connectTimeout = ${this.connectTimeout}, cacheMode = ${this.cacheMode})` }
    public copy(callTimeout: (number | null) = this.callTimeout, writeTimeout: (number | null) = this.writeTimeout, readTimeout: (number | null) = this.readTimeout, connectTimeout: (number | null) = this.connectTimeout, cacheMode: HttpCacheMode = this.cacheMode): HttpOptions { return new HttpOptions(callTimeout, writeTimeout, readTimeout, connectTimeout, cacheMode); }
}

//! Declares com.lightningkite.butterfly.net.HttpCacheMode
export class HttpCacheMode {
    private constructor(name: string, jsonName: string) {
        this.name = name;
        this.jsonName = jsonName;
    }
    
    public static Default = new HttpCacheMode("Default", "Default");
    
    public static NoStore = new HttpCacheMode("NoStore", "NoStore");
    
    public static Reload = new HttpCacheMode("Reload", "Reload");
    
    public static NoCache = new HttpCacheMode("NoCache", "NoCache");
    
    public static ForceCache = new HttpCacheMode("ForceCache", "ForceCache");
    
    public static OnlyIfCached = new HttpCacheMode("OnlyIfCached", "OnlyIfCached");
    
    private static _values: Array<HttpCacheMode> = [HttpCacheMode.Default, HttpCacheMode.NoStore, HttpCacheMode.Reload, HttpCacheMode.NoCache, HttpCacheMode.ForceCache, HttpCacheMode.OnlyIfCached];
    public static values(): Array<HttpCacheMode> { return HttpCacheMode._values; }
    public readonly name: string;
    public readonly jsonName: string;
    public static valueOf(name: string): HttpCacheMode { return (HttpCacheMode as any)[name]; }
    public toString(): string { return this.name }
    public toJSON(): string { return this.jsonName }
}
