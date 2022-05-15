interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
}

// type alias -- doesn't create a new type (helps provide more context to types while maintaining original type)
type ContactName = string