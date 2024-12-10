import {randomUUID} from 'node:crypto';
import {IIdentityProvider} from "@/src/server/application/ports/IIdentityProvider";

export const UuidIdentityProvider = (): IIdentityProvider => {
    return {
        generateId(): string {
            return randomUUID();
        }
    };
}