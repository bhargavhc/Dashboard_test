
class AlertPage {
    switchToTab(tabName) {
        cy.contains(tabName).should('be.visible').click();
    }
    
    validateRequiredFields() {
        cy.contains('Setup Alerts').click();
        cy.get('.error-message').should('be.visible');
    }

    selectUsers(users) {
        cy.get('#store-filter-dropdown-arrow').eq(0).should('be.visible').click();
        users.forEach(user => {
            cy.get('.list-item .name')
                .contains(user)
                .should('be.visible')
                .click({ force: true });
        });
    }

    selectChannels(channels) {
        cy.get('#store-filter-dropdown-arrow').eq(1).click();
        channels.forEach(channel => {
            cy.get('.filter-btn.dropdown-toggle.btn.btn-primary').contains(channel).click();
        });
        cy.get('#filter-btn').eq(1).should('contain', channels[0]);
    }

    selectLocations(locationOptions) {
        cy.contains('Locations').as('locationsLabel');
        cy.get('@locationsLabel')
            .parent()
            .find('#filter-btn')
            .should('be.visible')
            .click()
            .should('have.attr', 'aria-expanded', 'true');
    }

    selectTrigger(triggerOptions) {
        cy.contains('Trigger').as('TriggerLabel');
        cy.get('@TriggerLabel')
            .parent()
            .find('#filter-btn')
            .should('be.visible')
            .click()
            .should('have.attr', 'aria-expanded', 'true');

        triggerOptions.forEach(trigger => {
            cy.get('.dropdown-menu')
                .contains(trigger)
                .should('exist')
                .should('be.visible')
                .click();
        });
    }

    enterPercentage(value) {
        cy.get('.trigger_input > input').type(value, { force: true });
        if (value < 0 || value > 100 || isNaN(value)) {
            cy.get('.trigger_input > input').should('have.value', '');
        } else {
            cy.get('.trigger_input > input').should('have.value', value);
        }
    }

    selectFrequency(frequencies) {
        cy.contains('Set Frequency').as('frequencyLabel');
        cy.get('@frequencyLabel')
            .parent()
            .find('#filter-btn')
            .should('be.visible')
            .click()
            .should('have.attr', 'aria-expanded', 'true');

        frequencies.forEach(frequency => {
            cy.get('.dropdown-menu')
                .contains(frequency)
                .should('exist')
                .should('be.visible')
                .click();
        });
    }

    selectNotificationMethod(methods) {
        cy.get(':nth-child(6) > .dropdown > #filter-btn')
            .should('be.visible')
            .click()
            .should('have.attr', 'aria-expanded', 'true');

        methods.forEach(method => {
            cy.get('.dropdown-menu')
                .contains(method)
                .should('be.visible')
                .click({ force: true });
        });

        cy.get(':nth-child(6) > .dropdown > #filter-btn').should('contain', methods[0]);
    }

    submitForm() {
        cy.contains('Setup Alerts').click();
        cy.get('.success-message').should('be.visible');
    }

    verifyMultipleAlerts() {
        cy.get('#manageAlertsTab').click();
        cy.get('.alert-entry').should('have.length.at.least', 3);
    }

    triggerAlert() {
        cy.get('#triggerTestButton').click();
        cy.get('.notification-success').should('be.visible');
    }
}

export default AlertPage;