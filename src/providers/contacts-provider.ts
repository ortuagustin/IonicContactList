import { Injectable } from '@angular/core';
import { Contact } from "../app/contact";
import { ContactGroup } from "../app/contact-group";
import { ContactType } from '../app/contact-type';

@Injectable()
export class ContactsProvider {
  public groups: ContactGroup[] = [];

  constructor() {
    let group = this.newGroup('O');
    group.addContact(new Contact('Agustin', 'Ortu', 'ortu.agustin@gmail.com', ContactType.Familia, '221-302-1282', '221-450-9878'));
    group.addContact(new Contact('Natalia', 'Ortu', 'ortu.natalia@gmail.com', ContactType.Familia));

    group = this.newGroup('B');
    group.addContact(new Contact('Cristian', 'Barreto', 'barreto.cristian@gmail.com', ContactType.Amigo));
  }

  protected newGroup(letter: string) {
    const group = new ContactGroup(letter);
    this.addGroup(group);

    return group;
  }

  protected addGroup(group: ContactGroup) {
    this.groups.push(group);
  }

  protected groupWithContact(contact: Contact) {
    return this.groups.find(each => each.hasContact(contact));
  }

  contacts() {
    return this.groups.map(each => each.contacts);
  }

  deleteContact(contact: Contact) {
    this.groupWithContact(contact).deleteContact(contact);
  }
}
