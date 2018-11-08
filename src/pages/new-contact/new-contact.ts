import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../app/contact';
import { ContactType } from '../../app/contact-type';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {
  private callback;
  private cancelled: boolean = false;
  contactTypes = ContactType;
  contactTypesKeys = Object.keys(ContactType);

  contact: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.callback = navParams.get('callback');

    this.contact = this.formBuilder.group({
      surname: [ '', Validators.required ],
      name: [ '', Validators.required ],
      email: [ '' ],
      firstPhone: [ '', Validators.required ],
      secondPhone: [ ''],
      type: [ ContactType.Amigo, Validators.required ],
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
    this.callback(this.newContact());
  }

  private newContact() {
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
