class DetailsPage {
  get countrySelect() {
    return cy.get('#country');
  }

  get detailsOfRent() {
    return cy.get('.card-body');
  }

  get rentButton(){
    return cy.contains('a', 'Rent!')
  }

}

export default DetailsPage;
