import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts-provider';
import { Contact } from '../../app/contact';
import { ContactPage } from '../contact/contact';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
    this.fetchContacts();
  }

  fetchContacts() {
    this.contacts = this.contactsProvider.filterContacts(this.filter);
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(250).subscribe(() => this.fetchContacts());
  }

  showDetails(contact: Contact) {
    this.navCtrl.push(ContactPage, { contact });
  }
}
