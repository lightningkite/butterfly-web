import {post} from "../delay";
import {xViewRemovedGet} from "../rx/DisposeCondition.ext";
import {DisposableLambda} from "../rx/DisposableLambda";

export function loadHtmlFromString(data: string): HTMLElement {
    const d = document.createElement("div");
    d.innerHTML = data;
    return d.firstChild as HTMLElement;
}

export function findViewById<T extends HTMLElement>(view: HTMLElement, id: string): T | null {
    if(view.classList.contains(`id-${id}`)) return view as (T | undefined) ?? null;
    return (view.getElementsByClassName(`id-${id}`)[0] as (T | undefined)) ?? null;
}

export function getViewById<T extends HTMLElement>(view: HTMLElement, id: string): T {
    if(view.classList.contains(`id-${id}`)) return view as T;
    return view.getElementsByClassName(`id-${id}`)[0] as T;
}

export function replaceViewWithId(base: HTMLElement, withElement: () => HTMLElement, id: string) {
    const existing = findViewById(base, id);
    if (existing) {
        const newElement = withElement();
        newElement.setAttribute('style', newElement.getAttribute('style') + '; ' + existing.getAttribute('style'));
        existing.parentNode!.replaceChild(newElement, existing);
    }
}

declare global {
    interface HTMLElement {
        khrysalisResizeBoundaryAction?: ()=>void
    }
}

export function startupAutoResize(element: HTMLElement, sizeBoundaries: Array<number>){
    // function doIt(){
    //     const startSize = window.innerWidth
    //     let minSize = 0
    //     let maxSize = Number.MAX_SAFE_INTEGER
    //     for(const boundary of sizeBoundaries){
    //         if(startSize > boundary) {
    //             minSize = boundary
    //             break
    //         }
    //         maxSize = boundary
    //     }
    //     let lastCall = Date.now()
    //     const listener = () => {
    //         const newSize = window.innerWidth
    //         if(newSize > 0 && newSize < minSize || newSize > maxSize) {
    //             if(element.khrysalisResizeBoundaryAction && Date.now() - lastCall > 2000) {
    //                 window.removeEventListener("resize", listener)
    //                 lastCall = Date.now()
    //                 console.log(`Broke boundary box from ${minSize} to ${maxSize} with ${newSize}`)
    //                 element.khrysalisResizeBoundaryAction()
    //             }
    //         }
    //     }
    //     window.addEventListener("resize", listener)
    //     xViewRemovedGet(element).call(new DisposableLambda(() => {
    //         window.removeEventListener("resize", listener)
    //     }))
    // }
    // function wait(){
    //     post(()=>{
    //         if(element.scrollWidth > 0) {
    //             doIt()
    //         } else {
    //             wait()
    //         }
    //     })
    // }
    // wait()
}