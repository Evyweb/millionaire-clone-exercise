import {randomUUID} from 'node:crypto';
import {IdentityProviderPort} from "@/src/server/application/ports/IdentityProviderPort";

export class UuidIdentityProvider implements IdentityProviderPort {
    generateId(): string {
        return randomUUID();
    }
}