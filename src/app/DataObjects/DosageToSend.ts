export class DosageToSend {
  public patientId: number;
  public dosage: string;
  public constructor(patientId: number, dosage: string) {
    this.patientId = patientId;
    this.dosage = dosage;
  }
}
