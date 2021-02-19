export {};
declare global {
    interface String {
        replaceAll(replacing: string | RegExp, withString: string): string;
    }
}
