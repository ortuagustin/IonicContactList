import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../app/contact';
import { ContactType } from '../../app/contact-type';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {
  private callback;
  private cancelled: boolean = false;
  private contactTypes = ContactType;
  private contactTypesKeys = Object.keys(ContactType);

  private surname: string = '';
  private name: string = '';
  private email: string = '';
  private firstPhone: string = '';
  private secondPhone: string = '';
  private type: ContactType = ContactType.Amigo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = navParams.get('callback');
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
    this.callback(this.newContact());
  }

  private newContact() {
    return new Contact(this.name, this.surname, this.firstPhone, this.secondPhone, this.type, this.email);
  }
}
