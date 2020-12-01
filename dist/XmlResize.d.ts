declare global {
    interface HTMLElement {
        khrysalisResizeBoundaryAction?: () => void;
    }
}
export declare function startupAutoResize(element: HTMLElement, sizeBoundaries: Array<number>): void;
