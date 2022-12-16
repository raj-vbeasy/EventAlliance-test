import { TeamMember } from "./teammember";
import { Event } from '../events/event';

export class Team {
    id: number;
    name: string;
    photo: string;
    members: Array<TeamMember>;
    owner: TeamMember;
    events: Array<Event>;
    representative: TeamMember;

    constructor() { 
    	this.reset();
    }

    public reset(){
    	this.id = 0;
    	this.name = "";
    	this.photo = "";
    	this.members = [];
        this.owner = null;
        this.representative = null;
        this.events = [];
    }
}
