//import { TeamMember } from "./teammember";

export class Event {
    id: number;
    name: string;
    start_date: Date;
    end_date: Date;
    profile_picture: string;
    description: string;
    venue_name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zip: string;
    budget_id: number;
    number_of_artist:number;
    audience_demographics: string;
    mode: string;
    url: string;
    public_survey_status:string;
    public_survey_title: string;
    welcome_message: string;
    legal_disclaimer: string;
    event_description: string;
    opt_in: number;
    opt_in_message: string;
    thanks_message: string;
    review_enable: number;
    updated_at: Date;
    //eventDateRange: string

    //members: Array<TeamMember>;

    constructor() { 
    	this.reset();
    }

    public reset(){
    	this.id = 0;
    	this.name = "";
        this.start_date = null;
        this.end_date = null;
        this.profile_picture = "";
        this.description = "";
        this.venue_name = "";
        this.address_line_1 = "";
        this.address_line_2 = "";
        this.city = "";
        this.state = "";
        this.zip = "";
        this.budget_id = 0;
        this.number_of_artist = 0;
        this.audience_demographics = "";
        this.mode = "";
        this.url = "";
        this.public_survey_status = "";
        this.public_survey_title = "";
        this.welcome_message = "";
        this.legal_disclaimer = "";
        this.event_description = "";
        this.opt_in = 0;
        this.opt_in_message = "";
        this.thanks_message = "";
        this.review_enable = 0;
        this.updated_at = null;
        //this.eventDateRange = null;
    }
}