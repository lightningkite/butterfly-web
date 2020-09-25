// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: views/CustomViewDelegate.kt
// Package: com.lightningkite.butterfly.views
import { customViewInvalidate } from './CustomView'
import { DisplayMetrics } from './DisplayMetrics'
import { SubscriptionLike } from 'rxjs'
import { DisposeCondition } from '../rx/DisposeCondition'

//! Declares com.lightningkite.butterfly.views.CustomViewDelegate
export abstract class CustomViewDelegate {
    protected constructor() {
        this.customView = null;
        this.toDispose = [];
        this._removed = null;
        this._removed = new DisposeCondition((it: SubscriptionLike): void => {
                this.toDispose.push(it);
        });
    }
    
    public customView: (HTMLCanvasElement | null);
    
    public abstract generateAccessibilityView(): (HTMLElement | null) 
    public abstract draw(canvas: CanvasRenderingContext2D, width: number, height: number, displayMetrics: DisplayMetrics): void 
    public onTouchDown(id: number, x: number, y: number, width: number, height: number): boolean { 
        return false; 
    }
    public onTouchMove(id: number, x: number, y: number, width: number, height: number): boolean { 
        return false; 
    }
    public onTouchCancelled(id: number, x: number, y: number, width: number, height: number): boolean { 
        return false; 
    }
    public onTouchUp(id: number, x: number, y: number, width: number, height: number): boolean { 
        return false; 
    }
    public onWheel(delta: number): boolean { 
        return false; 
    }
    public sizeThatFitsWidth(width: number, height: number): number { 
        return width; 
    }
    public sizeThatFitsHeight(width: number, height: number): number { 
        return height; 
    }
    
    public invalidate(): void { const temp170 = this.customView;
        if(temp170 !== null) { 
            customViewInvalidate(temp170)
    }; }
    public postInvalidate(): void { const temp171 = this.customView;
        if(temp171 !== null) { 
            customViewInvalidate(temp171)
    }; }
    
    public readonly toDispose: Array<SubscriptionLike>;
    
    private _removed: (DisposeCondition | null);
    
    //! Declares com.lightningkite.butterfly.views.CustomViewDelegate.removed
    public get removed(): DisposeCondition { return this._removed!!; }
    
    
    public dispose(): void {
        for (const item of this.toDispose) {
            item.unsubscribe();
        }
    }
}

