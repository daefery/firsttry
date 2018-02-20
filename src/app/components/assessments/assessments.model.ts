export class Assessments {
	ass_id:string;
    question: string;
    options: string[];

    constructor(ass_id:string, question: string, options: string[]) {
    this.ass_id = ass_id;
    this.question = question;
    this.options = options;
  }
}
