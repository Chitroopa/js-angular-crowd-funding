export class Project {
  public backers: number = 0;
  public fundRaised: number = 0;
  constructor(
    public projectName: string,
    public imageUrl: string,
    public description: string,
    public fundGoal: number,
    public riskAndChallenges: string
  ) {}
}
