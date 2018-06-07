export class DoctorToSend { // Doctor for post purpose
  public title: string;
  public name: string;
  public surname: string;
  public ssn: string;
  public specialisation: string;
  public trialId: number;

  public constructor(name: string, surname: string, specialisation: string, title: string, ssn: string, trialId: number) {
    this.name = name;
    this.surname = surname;
    this.specialisation = specialisation;
    this.ssn = ssn;
    this.title = title;
    this.trialId = trialId;
  }
}
