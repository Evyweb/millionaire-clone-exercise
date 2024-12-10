import {IdentityProviderPort} from "@/src/server/application/ports/IdentityProviderPort";

interface IFakeIdentityProvider extends IdentityProviderPort {
    setNextValue(id: string): void;

    setNextValues(...ids: string[]): void;
}

export class FakeIdentityProvider implements IFakeIdentityProvider {

    private ids: string[] = ['11111111-1111-1111-1111-111111111111'];

    generateId(): string {
        return this.ids.shift()!;
    }

    setNextValue(nextId: string): void {
        this.ids.push(nextId);
    }

    setNextValues(...ids: string[]): void {
        this.ids = ids;
    }
}