"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay_1 = require("./delay");
function startupAutoResize(element, sizeBoundaries) {
    delay_1.post(() => {
        const startSize = element.scrollWidth;
        let minSize = 0;
        let maxSize = Number.MAX_SAFE_INTEGER;
        for (const boundary of sizeBoundaries) {
            if (startSize > boundary) {
                minSize = boundary;
                break;
            }
            maxSize = boundary;
        }
        const o = new ResizeObserver(() => {
            if (element.scrollWidth < minSize || element.scrollWidth > maxSize) {
                if (element.khrysalisResizeBoundaryAction) {
                    element.khrysalisResizeBoundaryAction();
                }
            }
        });
        o.observe(element);
    });
}
exports.startupAutoResize = startupAutoResize;
//# sourceMappingURL=XmlResize.js.map