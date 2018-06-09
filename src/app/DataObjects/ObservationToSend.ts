export class ObservationToSend {
  public patientId: number;
  public doctorInfo: string;
  public text: string;
  public constructor(patientId: number, doctorInfo: string, text: string) {
    this.patientId = patientId;
    this.doctorInfo = doctorInfo;
    this.text = text;
  }
}
