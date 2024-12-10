import {Command} from "@evyweb/simple-ddd-toolkit";

export class CreateSkillCommand extends Command {
    constructor(public readonly label: string) {
        super();
    }
}