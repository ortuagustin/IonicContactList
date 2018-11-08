import { Injectable } from '@angular/core';
import { Contact } from "../app/contact";
import { ContactType } from '../app/contact-type';

@Injectable()
export class ContactsProvider {
  contacts: Contact[] = [];

  filterContacts(filter: string) {
    return this.contacts.filter(each => each.matches(filter));
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  deleteContact(contact: Contact) {
    this.contacts.splice(this.indexOf(contact), 1);
  }

  private indexOf(contact: Contact) {
    return this.contacts.findIndex(each => each == contact);
  }
}
