import { Phone } from "./phones";

export interface PhoneShop {
  sell: (phone: Phone, owner: string, price: number) => string;
}

export interface SimProvider {
  transfer: (phone: Phone, number: string) => string;
}

export class LolPhones implements PhoneShop {
  sell(phone: Phone, owner: string, price: number): string {
    phone.owner = owner;
    return `New phone selled in LolPhones to ${owner} for ${price}`;
  }
}

export class NetStar implements SimProvider {
  transfer(phone: Phone, number: string): string {
    phone.number = number;
    return `New phone sim added in NetStar with ${number} phone number`;
  }
}

export class WellNet implements SimProvider, PhoneShop {
  transfer(phone: Phone, number: string): string {
    phone.number = number;
    return `New phone sim added in WellNet with ${number} phone number`;
  }

  sell(phone: Phone, owner: string, price: number): string {
    phone.owner = owner;
    return `New phone selled in WellNet to ${owner} for ${price}`;
  };
}
