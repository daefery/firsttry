export class AdminSection {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public has_generic_answer: boolean,
    public time_duration: number) {};
}
