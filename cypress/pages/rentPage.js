class RentPage {

    get nameInput() {
        return cy.get('#name');
    }

    get lastNameInput() {
        return cy.get('#last_name');
    }

    get cardInput() {
        return cy.get('#card_number');
    }

    get email() {
        return cy.get('#email');
    }

    get rentButton() {
        return cy.get('[type="submit"]')
    }

    get confirmationMessage() {
        return cy.get('#confirmation_message')
    }
  }
  
  export default RentPage;
  