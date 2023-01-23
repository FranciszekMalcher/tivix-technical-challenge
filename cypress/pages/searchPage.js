class SearchPage {
  get countrySelect() {
    return cy.get('#country');
  }

  get citySelect() {
    return cy.get('#city');
  }

  get modelInput() {
    return cy.get('#model');
  }

  get pickupDateInput() {
    return cy.get('#pickup');
  }

  get dropOffDateInput() {
    return cy.get('#dropoff');
  }

  get searchButton() {
    return cy.get('[type="submit"]')
  }

  get searchResultTable() {
    return cy.get('#search-results')
  }

  get firstCarOnResultListRentButton() {
     return this.searchResultTable.get('tr').contains('Rent').first()
  };


  selectCountry(country) {
    this.countrySelect.select(country);
  }

  selectCity(city) {
    this.citySelect.select(city);
  }
}

export default SearchPage;
