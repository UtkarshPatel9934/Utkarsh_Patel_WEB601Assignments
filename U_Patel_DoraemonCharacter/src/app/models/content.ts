export interface Content {
	id?: number;
        title: string;
        body?: string;
        author?: string; // changed
        imageLink?: string;
        type?: string; // changed
        hashtags?:string[];
}
