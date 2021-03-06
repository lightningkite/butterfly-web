import {triggerDetatchEvent} from "./viewAttached";
import {delay} from "../delay";

const previousViewSymbol = Symbol("previousView")

declare global {
    interface HTMLDivElement {
        [previousViewSymbol]: HTMLElement | undefined
    }
}

export function swapViewSwap(view: HTMLDivElement, to: HTMLElement | null, animation: string) {
    if(to){
        to.style.width = "100%";
        to.style.height = "100%";
    }
    const current = view[previousViewSymbol];
    if(to === current) {
        if(!to) {
            view.hidden = true;
            view.innerHTML = "";
        }
        return;
    }
    if (current) {
        //animate out
        const animationOut = `${animation}-out`
        delay(250, ()=>{
            try {
                view.removeChild(current);
            } catch(e){
                /*squish*/
            }
            triggerDetatchEvent(current);
        })
        current.style.animation = `${animationOut} 0.25s`

        //animate in
        if (to) {
            view.hidden = false;
            const animationIn = `${animation}-in`
            let animInHandler: (ev: AnimationEvent) => void;
            animInHandler = (ev) => {
                to.onanimationend = null;
                to.style.removeProperty("animation");
            }
            to.addEventListener("animationend", animInHandler)
            to.style.animation = `${animationIn} 0.25s` //Delay seems to make this work right
            view.appendChild(to);
        } else {
            view.hidden = true;
            view.innerHTML = "";
        }
    } else if (to) {
        view.appendChild(to);
        view.hidden = false;
    } else {
        view.hidden = true;
        view.innerHTML = "";
    }
    view[previousViewSymbol] = to ?? undefined;
}