import {ViewGenerator} from "./views/ViewGenerator";
import {listenForDialogs} from "./views/ViewDependency";
import {HttpClient} from "./net/HttpClient";
import {asyncScheduler} from "rxjs";
import {checkIsInterface, tryCastInterface} from "./kotlin/Language";
import {root} from "rxjs/internal-compatibility";
import {EntryPoint} from "./views/EntryPoint";
import {xStringSubstringAfter, xStringSubstringBefore} from "./kotlin/kotlin.text";
import {swapViewSwap} from "./views/SwapView";

export function main(rootVg: ViewGenerator){
    HttpClient.INSTANCE.ioScheduler = asyncScheduler
    HttpClient.INSTANCE.responseScheduler = asyncScheduler
    const view = rootVg.generate(window);
    document.body.appendChild(view);
    listenForDialogs();

    let r = tryCastInterface<EntryPoint>(rootVg, "ComLightningkiteButterflyViewsEntryPoint")
    if(r){
        let params = new Map<string, string>()
        if(window.location.search){
            for(const part of window.location.search.substring(1, window.location.search.length).split("&")) {
                if(part.indexOf("=") != -1) {
                    params.set(xStringSubstringBefore(part, "="), xStringSubstringAfter(part, "="))
                }
            }
        }
        r.handleDeepLink(
            window.location.protocol,
            window.location.host,
            window.location.pathname.substring(1, window.location.pathname.length),
            params
        )
    }

    //TODO: Get resize working again - this code previously caused continous reloading
    //
    // function setupBoundaryAction(newView: HTMLElement) {
    //     newView.khrysalisResizeBoundaryAction = () => {
    //         document.body.removeChild(newView)
    //         let newerView = rootVg.generate(window)
    //         setupBoundaryAction(newerView)
    //         document.body.appendChild(newerView)
    //     }
    // }
    // setupBoundaryAction(view)
}