export class ObservationToSend {
  public patientId: number;
  public doctorId: string;
  public text: string;
  public constructor(patientId: number, doctorId: string, text: string) {
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.text = text;
  }
}
