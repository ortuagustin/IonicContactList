import { Injectable } from '@angular/core';
import { Contact } from "../app/contact";
import { ContactType } from '../app/contact-type';

@Injectable()
export class ContactsProvider {
  contacts: Contact[] = [];

  constructor() {
    this.addContact(new Contact('Agustin', 'Ortu', '221-302-1282', '221-450-9878', ContactType.Familia, 'ortu.agustin@gmail.com'));
    this.addContact(new Contact('Natalia', 'Ortu', 'tel principal', 'otro telefono', ContactType.Familia, 'ortu.natalia@gmail.com'));
    this.addContact(new Contact('Cristian', 'Barreto', '', '', ContactType.Amigo, 'barreto.cristian@gmail.com'));
  }

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
