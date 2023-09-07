export type FormData = {
  attending: string;
  firstName: string;
  lastName: string;
  vegetarian: boolean;
  lactoseIntolerant: boolean;
  glutenIntolerant: boolean;
  nutAllergy: boolean;
  shellfishAllergy: boolean;
  other: boolean;
  otherAllergies: string;
};

export type ImageData = {
  name: string;
  title: string;
  file: any;
};
