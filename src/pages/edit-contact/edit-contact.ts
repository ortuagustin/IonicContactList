import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../app/contact';
import { ContactType } from '../../app/contact-type';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  contact: FormGroup;
  originalContact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.callback = navParams.get('callback');

    this.originalContact = navParams.get('contact');

    this.contact = this.formBuilder.group({
      surname: [ this.originalContact.surname, Validators.required ],
      name: [ this.originalContact.name, Validators.required ],
      email: [ this.originalContact.email ],
      firstPhone: [ this.originalContact.firstPhone, Validators.required ],
      secondPhone: [ this.originalContact.secondPhone ],
      type: [ this.originalContact.type, Validators.required ],
    });
  }

  ionViewCanLeave(): boolean {
    if (this.cancelled) {
      return true;
    }

    return this.contact.valid;
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

    return new Contact(
      this.contact.value.name,
      this.contact.value.surname,
      this.contact.value.firstPhone,
      this.contact.value.secondPhone,
      this.contact.value.type,
      this.contact.value.email
    );
  }
}
