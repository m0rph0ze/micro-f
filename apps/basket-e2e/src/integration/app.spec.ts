import { getGreeting } from '../support/app.po';

describe('basket', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to basket!');
  });
});
