import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts-provider';
import { Contact } from '../../app/contact';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private contacts: ContactsProvider) { }

  showDetails(contact: Contact) {
    this.navCtrl.push(ContactPage, { contact });
  }
}
