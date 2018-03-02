export class Answer {
	
    constructor(
    public id: number,
    public name: string,
    public value: number,
    public section_id: number,
    public question_id: number) {};
}