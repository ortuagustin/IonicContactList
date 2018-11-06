import { ContactType } from "./contact-type";

export class Contact {
  public phones: string[] = ['', ''];

  constructor(public name: string, public surname: string, public email: string, public type: ContactType, ...phones: string[]) {
    this.phones = phones;
  }

  get contactType() {
    return ContactType[this.type];
  }

  get fullName(): string {
    return `${this.surname}, ${this.name}`;
  }

  get firstPhone(): string {
    return this.getPhone(0);
  }

  get secondPhone(): string {
    return this.getPhone(1);
  }

  set firstPhone(phone: string) {
    this.phones[0] = phone;
  }

  set secondPhone(phone: string) {
    this.phones[1] = phone;
  }

  get hasFirstPhone(): Boolean {
    return this.hasPhone(0);
  }

  get hasSecondPhone(): Boolean {
    return this.hasPhone(1);
  }

  private hasPhone(index: any): Boolean {
    return (this.phones.length >= index) && (this.phones[index] != '');
  }

  private getPhone(index: any): string {
    if (this.hasPhone(index)) {
      return this.phones[index];
    }

    return '';
  }
}