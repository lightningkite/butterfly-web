import { IsCodable } from './Codable';
export declare class Preferences {
    private constructor();
    static INSTANCE: Preferences;
    set<T>(T: any, key: string, value: T): void;
    remove(key: string): void;
    get<T extends IsCodable>(T: any, key: string): (T | null);
    clear(): void;
}
