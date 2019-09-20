export class Income {
    amount: number;
    currency: string;
    service: string;
    rate: number;

    constructor(
        amount: number,
        currency: string,
        service: string,
        rate: number
    ){
        this.amount = amount;
        this.currency = currency;
        this.service = service;
        this.rate = rate
    }

    countCurrencyToPLN(): number {
        return this.currency === 'PLN' ? this.amount : this.amount * this.rate
    }
}