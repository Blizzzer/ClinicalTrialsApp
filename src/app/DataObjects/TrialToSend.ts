export class TrialToSend {
  public studyTitle: string;
  public studyDescription: string;
  public treatmentDescription: string;
  public startDate: string;
  public responsibleParty: string;
  public masking: number;
  public estimatedEndDate: string;
  public eligibiltyCriterias: string;
  public contactsAndLocations: string;
  private password: string;

  public constructor(
    studyTitle: string, studyDescription: string, treatmentDescription: string,
    startDate: string, responsibleParty: string, masking: number,
    estimatedEndDate: string, eligibilityCriterias: string, contactsAndLocations: string, password: string
  ) {
    this.contactsAndLocations = contactsAndLocations;
    this.eligibiltyCriterias = eligibilityCriterias;
    this.estimatedEndDate = estimatedEndDate;
    this.masking = masking;
    this.responsibleParty = responsibleParty;
    this.studyDescription = studyDescription;
    this.studyTitle = studyTitle;
    this.treatmentDescription = treatmentDescription;
    this.startDate = startDate;
    this.password = password;
  }
}
