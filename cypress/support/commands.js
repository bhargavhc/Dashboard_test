Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get('#emailInput').type(username);
    cy.get('#passwordInput').type(password);
    cy.get('#loginButton').click();
});
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});