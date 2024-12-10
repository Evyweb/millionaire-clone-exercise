import {IIdentityProvider} from "@/src/server/application/ports/IIdentityProvider";

export interface FakeIdentityProvider extends IIdentityProvider {
    setNextValue(id: string): void;
}

export const FakeIdentityProvider = (): FakeIdentityProvider => {
    let id = "11111111-1111-1111-1111-111111111111";

    return {
        generateId(): string {
            return id;
        },
        setNextValue(nextId: string): void {
            id = nextId;
        }
    };
}