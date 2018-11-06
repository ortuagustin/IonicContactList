import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../app/contact';
import { ContactsProvider } from '../../providers/contacts-provider';
import { ContactType } from '../../app/contact-type';

@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
  private callback;
  private cancelled: boolean = false;
  private contactTypes = ContactType;
  private contactTypesKeys = Object.keys(ContactType);

  private contact: Contact;
  private surname: string;
  private name: string;
  private email: string;
  private firstPhone: string;
  private secondPhone: string;
  private type: ContactType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = navParams.get('callback');

    this.contact = navParams.get('contact');
    this.surname = this.contact.surname;
    this.name = this.contact.name;
    this.email = this.contact.email;
    this.firstPhone = this.contact.firstPhone;
    this.secondPhone = this.contact.secondPhone;
    this.type = this.contact.type;
  }

  ionViewWillLeave() {
    if (! this.cancelled) {
      this.saveAndClose();
    }
  }

  cancel() {
    this.cancelled = true;
    this.navCtrl.pop();
  }

  private saveAndClose() {
    this.cancelled = false;
    this.callback(this.editedContact());
  }

  private editedContact() {
    if (this.cancelled) {
      return this.contact;
    }

    return new Contact(this.name, this.surname, this.firstPhone, this.secondPhone, this.type, this.email);
  }
}
