import { getWallet, getIncomes } from "../support/app.po";

describe('wallet', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should display wallet', () => {
    getWallet().should("be.visible");
  });
  
  it('should display incomes', () => {
    getIncomes().should("be.visible");
  });


});
