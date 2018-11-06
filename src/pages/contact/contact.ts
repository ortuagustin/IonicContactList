import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Contact } from '../../app/contact';
import { ContactsProvider } from '../../providers/contacts-provider';
import { EditContactPage } from '../edit-contact/edit-contact';
import { ContactType } from '../../app/contact-type';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private contacts: ContactsProvider) {
    this.contact = navParams.get('contact');
  }

  promptDelete() {
    const confirm = this.alertCtrl.create({
      title: 'Desea el eliminar el contacto?',
      buttons: [
        {
          text: 'Si',
          handler: () => this.deleteContact()
        },
        {
          text: 'No',
        },
      ],
    });

    confirm.present();
  }

  deleteContact() {
    this.contacts.deleteContact(this.contact);
    this.navCtrl.pop();
  }

  showEdit() {
    let callback = (contact) => {
      return new Promise((resolve) => {
        this.updateContact(contact);
        resolve();
      });
    }

    this.navCtrl.push(EditContactPage, { contact: this.contact, callback });
  }

  updateContact(contact: Contact) {
    this.contact.surname = contact.surname;
    this.contact.name = contact.name;
    this.contact.email = contact.email;
    this.contact.firstPhone = contact.firstPhone;
    this.contact.secondPhone = contact.secondPhone;
    this.contact.type = ContactType[contact.type];
  }
}
