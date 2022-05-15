export interface Content {
	id: number;
        title: string;
        body?: string;
        author: string;
        imageLink?: string;
        type: string;
        hashtags?:string[];
}
