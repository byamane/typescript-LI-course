interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date; // "?" allows for fields to not be required date to be accepted, but if it is, type is still enforced
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Brandon Yamane",
  postalCode: "12345",
  province: "province",
  line1: "province",
  line2: "province",
  region: "region",
}