"use strict";
// Generated by Butterfly TypeScript converter
// File: views/CustomView.kt
// Package: com.lightningkite.butterfly.views
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayMetrics_1 = require("./DisplayMetrics");
const DisposeCondition_ext_1 = require("../rx/DisposeCondition.ext");
const DisposableLambda_1 = require("../rx/DisposableLambda");
const customViewDelegateSymbol = Symbol("customViewDelegateSymbol");
const customViewConfiguredSymbol = Symbol("customViewConfiguredSymbol");
const customViewWillRender = Symbol("customViewConfiguredSymbol");
function customViewSetDelegate(view, delegate) {
    var _a, _b;
    (_a = view[customViewDelegateSymbol]) === null || _a === void 0 ? void 0 : _a.dispose();
    delegate.customView = view;
    let lastEndHandled = -1;
    view.style.touchAction = "none";
    view.onpointerdown = (e) => {
        lastEndHandled = -1;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchDown(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if (result)
            e.preventDefault();
    };
    view.onpointermove = (e) => {
        if (e.buttons > 0) {
            const b = view.getBoundingClientRect();
            const result = delegate.onTouchMove(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
            if (result)
                e.preventDefault();
        }
    };
    view.onpointercancel = (e) => {
        if (e.pointerId == lastEndHandled) {
            return;
        }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchCancelled(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if (result)
            e.preventDefault();
    };
    view.onpointerleave = (e) => {
        if (e.pointerId == lastEndHandled) {
            return;
        }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchCancelled(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if (result)
            e.preventDefault();
    };
    view.onpointerup = (e) => {
        if (e.pointerId == lastEndHandled) {
            return;
        }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchUp(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if (result)
            e.preventDefault();
    };
    view.onwheel = (e) => {
        const result = delegate.onWheel(e.deltaY);
        if (result)
            e.preventDefault();
    };
    if (view.getContext) {
        const ctx = view.getContext("2d");
        view.width = view.offsetWidth;
        view.height = view.offsetHeight;
        if (ctx && view.width > 2 && view.height > 2) {
            delegate.draw(ctx, view.width, view.height, DisplayMetrics_1.DisplayMetrics.INSTANCE);
        }
    }
    else {
        const gen = delegate.generateAccessibilityView();
        if (gen) {
            (_b = view.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(gen);
        }
    }
    view[customViewDelegateSymbol] = delegate;
    if (!view[customViewConfiguredSymbol]) {
        view[customViewConfiguredSymbol] = true;
        DisposeCondition_ext_1.xViewRemovedGet(view).call(new DisposableLambda_1.DisposableLambda(() => {
            var _a;
            (_a = view[customViewDelegateSymbol]) === null || _a === void 0 ? void 0 : _a.dispose();
            view[customViewDelegateSymbol] = undefined;
        }));
        const p = view.parentElement;
        if (p) {
            let adjWidth = false;
            let adjHeight = false;
            window.setTimeout(() => {
                const myStyle = window.getComputedStyle(view);
                const parentStyle = window.getComputedStyle(p);
                adjWidth = !myStyle.width &&
                    !(parentStyle.display == "flex" && parentStyle.flexDirection === "column" && myStyle.alignSelf === "stretch") &&
                    !(parentStyle.display == "grid" && myStyle.alignSelf === "stretch");
                adjHeight = !myStyle.height &&
                    !(parentStyle.display == "flex" && parentStyle.flexDirection === "row" && myStyle.alignSelf === "stretch") &&
                    !(parentStyle.display == "grid" && myStyle.justifySelf === "stretch");
                if (adjWidth) {
                    view.style.width = delegate.sizeThatFitsWidth(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
                if (adjHeight) {
                    view.style.height = delegate.sizeThatFitsHeight(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
            }, 1);
            const obs = new ResizeObserver(function callback() {
                if (adjWidth) {
                    view.style.width = delegate.sizeThatFitsWidth(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
                if (adjHeight) {
                    view.style.height = delegate.sizeThatFitsHeight(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
                if (view.height != view.offsetHeight || view.width != view.offsetWidth) {
                    customViewInvalidate(view);
                }
                if (!document.contains(view)) {
                    obs.disconnect();
                }
            });
            obs.observe(p);
        }
    }
}
exports.customViewSetDelegate = customViewSetDelegate;
function customViewInvalidate(view) {
    view[customViewWillRender] = true;
    window.setTimeout(() => {
        if (!view[customViewWillRender])
            return;
        const realWidth = view.offsetWidth;
        const realHeight = view.offsetHeight;
        view[customViewWillRender] = false;
        const delegate = view[customViewDelegateSymbol];
        if (!delegate)
            return;
        if (view.getContext) {
            const ctx = view.getContext("2d");
            if (view.height != realHeight || view.width != realWidth) {
                view.width = realWidth;
                view.height = realHeight;
            }
            if (ctx && view.width > 2 && view.height > 2) {
                ctx.clearRect(0, 0, view.width, view.height);
                delegate.draw(ctx, view.width, view.height, DisplayMetrics_1.DisplayMetrics.INSTANCE);
            }
        }
    }, 1);
}
exports.customViewInvalidate = customViewInvalidate;
//# sourceMappingURL=CustomView.js.map