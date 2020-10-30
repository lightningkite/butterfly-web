"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loadHtmlFromString(data) {
    const d = document.createElement("div");
    d.innerHTML = data;
    return d.firstChild;
}
exports.loadHtmlFromString = loadHtmlFromString;
function findViewById(view, id) {
    var _a, _b;
    if (view.classList.contains(`id-${id}`))
        return (_a = view) !== null && _a !== void 0 ? _a : null;
    return (_b = view.getElementsByClassName(`id-${id}`)[0]) !== null && _b !== void 0 ? _b : null;
}
exports.findViewById = findViewById;
function getViewById(view, id) {
    if (view.classList.contains(`id-${id}`))
        return view;
    return view.getElementsByClassName(`id-${id}`)[0];
}
exports.getViewById = getViewById;
function replaceViewWithId(base, withElement, id) {
    const existing = findViewById(base, id);
    if (existing) {
        const newElement = withElement();
        newElement.setAttribute('style', newElement.getAttribute('style') + '; ' + existing.getAttribute('style'));
        existing.parentNode.replaceChild(newElement, existing);
    }
}
exports.replaceViewWithId = replaceViewWithId;
function startupAutoResize(element, sizeBoundaries) {
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
exports.startupAutoResize = startupAutoResize;
//# sourceMappingURL=html.js.map