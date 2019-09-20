import { getGreeting } from '../support/app.po';

describe('wallet', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to wallet!');
  });
});
