export class Password { // Patient abbreviation for list purpose
  public password: string;
  public trialId: number;
  public constructor(password: string, trialId: number) {
    this.password = password;
    this.trialId = trialId;
  }
}
