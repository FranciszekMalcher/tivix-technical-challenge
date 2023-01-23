import { Given , When, Then} from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../pages/searchPage";
import DetailsPage from "../../pages/detailsPage"
import RentPage from "../../pages/rentPage"

const searchPage = new SearchPage();
const detailsPage = new DetailsPage();
const rentPage = new RentPage();


Given('I go to search page', () => {
    cy.visit('/')
})

When('I search for car for rent', (datatable) => {
    datatable.hashes().forEach((search) => {
        searchPage.selectCountry(search.country);
        searchPage.selectCity(search.city);
        searchPage.modelInput.type(search.model);
        searchPage.pickupDateInput.type(search.pickupDate);
        searchPage.dropOffDateInput.type(search.dropOffDate);
        searchPage.searchButton.click();
    });
})

When('I type all needed information to rent a car', (datatable) => {
    datatable.hashes().forEach((data) => {
        rentPage.nameInput.type(data.name);
        rentPage.lastNameInput.type(data.lastName);
        rentPage.cardInput.type(data.card);
        rentPage.email.type(data.email);
    });
})

When('I click Rent button on first car on list', () => {
    searchPage.firstCarOnResultListRentButton.click();
})

When('I click Rent Button', () => {
    rentPage.rentButton.click();
})

When('I click Rent! button', () => {
    detailsPage.rentButton.click();
})


Then('I see results of search displayed', () => {
    searchPage.searchResultTable.should('be.visible');
})

Then('I see details of car for rent', () => {
    detailsPage.detailsOfRent.should('be.visible');
})

Then('I see details of car for rent', () => {
    rentPage.confirmationMessage.should('be.visible');
})