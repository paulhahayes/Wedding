export type FormData = {
  attending: string;
  firstName: string;
  lastName: string;
  dietaryRestrictions: {
    vegetarian: boolean;
    lactoseIntolerant: boolean;
    glutenIntolerant: boolean;
    nutAllergy: boolean;
    shellfishAllergy: boolean;
  };
};
