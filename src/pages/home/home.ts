import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts-provider';
import { Contact } from '../../app/contact';
import { ContactPage } from '../contact/contact';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { NewContactPage } from '../new-contact/new-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private filter: string = '';
  searchControl: FormControl;
  contacts: Contact[] = [];

  constructor(public navCtrl: NavController, private contactsProvider: ContactsProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidEnter() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contacts = this.contactsProvider.filterContacts(this.filter).sort((a, b) => a.surname.localeCompare(b.surname));
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(250).subscribe(() => this.fetchContacts());
  }

  showDetails(contact: Contact) {
    this.navCtrl.push(ContactPage, { contact });
  }

  showAdd() {
    let callback = (contact) => {
      return new Promise((resolve) => {
        this.addContact(contact);
        resolve();
      });
    }

    this.navCtrl.push(NewContactPage, { callback });
  }

  addContact(contact: Contact) {
    this.contactsProvider.addContact(contact);
    this.fetchContacts()
  }
}
