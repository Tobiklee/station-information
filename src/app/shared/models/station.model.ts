export interface Station {
  number: number;
  name: string;
  mailingAddress: {
    city: string;
    zipcode: string;
    street: string;
  };
}
