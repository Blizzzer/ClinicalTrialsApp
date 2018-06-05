export class PatientToSend {
  public name: string;
  public surname: string;
  public ssn: string;
  public birthDate: string;
  public trialId: number;
  public isPlacebo: number;

  public constructor(name: string, surname: string, birthDate: string, isPlacebo: number, ssn: string, trialId: number) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.ssn = ssn;
    this.isPlacebo = isPlacebo;
    this.trialId = trialId;
  }
}
