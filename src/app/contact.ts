import { ContactType } from "./contact-type";

export class Contact {
  constructor(public name: string, public surname: string, public firstPhone: string, public secondPhone: string, public type: ContactType, public email: string = '') { }

  matches(filter: string) {
    if (filter && filter.trim() != '') {
      const _filter = filter.toLowerCase();

      return (this.name.toLowerCase().startsWith(_filter)) ||
        (this.surname.toLowerCase().startsWith(_filter)) ||
        (this.email.toLowerCase().startsWith(_filter)) ||
        (this.firstPhone.toLowerCase().startsWith(_filter)) ||
        (this.secondPhone.toLowerCase().startsWith(_filter));
    }

    return true;
  }

  get contactType() {
    return ContactType[this.type];
  }

  get fullName(): string {
    return `${this.surname}, ${this.name}`;
  }

  get hasFirstPhone(): boolean {
    return this.firstPhone != '';
  }

  get hasSecondPhone(): boolean {
    return this.secondPhone != '';
  }
}