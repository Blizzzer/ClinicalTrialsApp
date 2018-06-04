export class Doctor {
  public id: number;
  public name: string;
  public surname: string;
  public specialisation: string;
  constructor(name: string, surname: string, specialisation: string) {
    this.name = name;
    this.surname = surname;
    this.specialisation = specialisation;
  }
}
