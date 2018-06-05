export class Doctor {
  public id: number;
  public title: string;
  public name: string;
  public surname: string;
  public ssn: string;
  public specialisation: string;
  public trialId: number;

  constructor(name: string, surname: string, specialisation: string) {
    this.name = name;
    this.surname = surname;
    this.specialisation = specialisation;
  }
}
