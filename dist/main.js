"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewDependency_1 = require("./views/ViewDependency");
const HttpClient_1 = require("./net/HttpClient");
const rxjs_1 = require("rxjs");
const Language_1 = require("./kotlin/Language");
const kotlin_text_1 = require("./kotlin/kotlin.text");
function main(rootVg) {
    HttpClient_1.HttpClient.INSTANCE.ioScheduler = rxjs_1.asyncScheduler;
    HttpClient_1.HttpClient.INSTANCE.responseScheduler = rxjs_1.asyncScheduler;
    const view = rootVg.generate(window);
    document.body.appendChild(view);
    ViewDependency_1.listenForDialogs();
    let r = Language_1.tryCastInterface(rootVg, "ComLightningkiteButterflyViewsEntryPoint");
    if (r) {
        let params = new Map();
        if (window.location.search) {
            for (const part of window.location.search.substring(1, window.location.search.length).split("&")) {
                if (part.indexOf("=") != -1) {
                    params.set(kotlin_text_1.xStringSubstringBefore(part, "="), kotlin_text_1.xStringSubstringAfter(part, "="));
                }
            }
        }
        r.handleDeepLink(window.location.protocol, window.location.host, window.location.pathname.substring(1, window.location.pathname.length), params);
    }
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
exports.main = main;
//# sourceMappingURL=main.js.map