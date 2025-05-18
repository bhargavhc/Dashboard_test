import LoginPage from '../support/pages/loginPage';
import AlertPage from '../support/pages/alertPage';

describe('Full Alert Setup Automation', () => {
    const loginPage = new LoginPage();
    const alertsPage = new AlertPage();

    const tabs = ['Unfulfilled Rate', 'M/I Rate'];

    beforeEach(() => {
        loginPage.visit();
        loginPage.login('demo@voosh.in', 'admin@demo');
        loginPage.navigateToAlerts();
        loginPage.verifyAlertsPage();
    });

    describe('Inaccuracy Rate Alert Setup', () => {
        it('TC_01 - Should open Locations dropdown, unselect all, and select a location', () => {
            alertsPage.selectLocations();
        });

        it('TC_02 - Should select a trigger condition', () => {
            alertsPage.selectTrigger(['Greater than equal to (>=)', 'Less than equal to (<=)']);
        });

        it('TC_03 - Should enter a valid percentage input', () => {
            alertsPage.enterPercentage(50, { force: true });
        });

        it('TC_04 - Should select notification frequency', () => {
            alertsPage.selectFrequency(['Daily', 'Weekly', 'Monthly']);
        });

        it('TC_05 - Should select notification methods', () => {
            alertsPage.selectNotificationMethod(['Email', 'Voosh Dashboard', 'SMS']);
        });
    });

    tabs.forEach(tab => {
        describe(`${tab} Alert Setup`, () => {
            beforeEach(() => {
                alertsPage.switchToTab(tab); 
            });

            it(`TC_${tab}_01 - Should open Locations dropdown, unselect all, and select a location`, () => {
                alertsPage.selectLocations();
            });

            it(`TC_${tab}_02 - Should select a trigger condition`, () => {
                alertsPage.selectTrigger(['Greater than equal to (>=)', 'Less than equal to (<=)']);
            });

            it(`TC_${tab}_03 - Should enter a valid percentage input`, () => {
                alertsPage.enterPercentage(50, { force: true });
            });

            it(`TC_${tab}_04 - Should select notification frequency`, () => {
                alertsPage.selectFrequency(['Daily', 'Weekly', 'Monthly']);
            });

            it(`TC_${tab}_05 - Should select notification methods`, () => {
                alertsPage.selectNotificationMethod(['Email', 'Voosh Dashboard', 'SMS']);
            });
        });
    });
});