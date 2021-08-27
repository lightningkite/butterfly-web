import { CustomViewDelegate } from "./CustomViewDelegate";
declare const customViewDelegateSymbol: unique symbol;
declare const customViewConfiguredSymbol: unique symbol;
declare const customViewWillRender: unique symbol;
declare global {
    interface HTMLCanvasElement {
        [customViewDelegateSymbol]: CustomViewDelegate | undefined;
        [customViewConfiguredSymbol]: boolean | undefined;
        [customViewWillRender]: boolean | undefined;
    }
}
export declare function customViewSetDelegate(view: HTMLCanvasElement, delegate: CustomViewDelegate): void;
export declare function customViewInvalidate(view: HTMLCanvasElement): void;
export {};
