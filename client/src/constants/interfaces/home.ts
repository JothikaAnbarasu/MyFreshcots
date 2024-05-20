export interface ICandidatePanelData {
  title: string;
  description: string;
  registerURL: string;
  imageURL: string;
}

export interface IVolunteerEmployerCardData {
  title: string;
  description: JSX.Element;
  registerURL: string;
}

export interface IModalData {
  name: string;
  imageURL: string;
  buttonText: string;
  confirmationText: string;
  additionalInfo: string;
}
