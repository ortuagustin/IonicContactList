import { Contact } from "./contact";

export class ContactGroup {
  contacts: Contact[] = [];

  constructor(public letter: string) { }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  hasContact(contact: Contact) {
    return this.contacts.find(each => each == contact) != undefined;
  }

  deleteContact(contact: Contact) {
    this.contacts.splice(this.indexOf(contact), 1);
  }

  private indexOf(contact: Contact) {
    return this.contacts.findIndex(each => each == contact);
  }
}