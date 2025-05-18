class LoginPage {
    visit() {
        cy.visit('https://dashboard.voosh.ai');
    }

    login(username, password) {
        cy.get('#formBasicEmail').type(username);
        cy.get('#formBasicPassword').type(password);
        cy.get('.login_button').click({ force: true });  
        cy.wait(5000);
     }

    navigateToAlerts() {
    cy.get('body').trigger('mousemove', { clientX: window.innerWidth - 10, clientY: window.innerHeight / 2 });     
       cy.contains('Alerts').click(); 
    }

    verifyAlertsPage() {
        cy.url().should('include', '/alerts');
    }
}

export default LoginPage;