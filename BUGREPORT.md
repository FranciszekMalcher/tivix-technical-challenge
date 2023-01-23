## Bug 1

    Title: Typo in Country Select

    Description: There is a typo in Country Select on Search page

    Environment:
    hhttp://qalab.pl.tivixlabs.com/

    Steps to reproduce:
        1.	Click 'Country' select

    Actual result:
        As one of options 'Germainy' is displayed

    Expected result:
        Option is 'Germany'

## Bug 2

    Title: Search result ignores provided Model


    Description:
    Search results are not using provided Model of car

    Environment:
    http://qalab.pl.tivixlabs.com/

    Steps to reproduce:
        1.	Open http://qalab.pl.tivixlabs.com/?country=2&city=3&model=Mazda&pickup=2023-01-21&dropoff=2023-01-30

    Actual result:
        Cars with from different models are displayed

    Expected result:
        Only Mazda cars are displayed on Result list

## Bug 3

    Title: 404 error is displayed when trying to rent a car

    Description: Validation message for Phone number input is not displayed.

    Environment:
    http://qalab.pl.tivixlabs.com/

    Steps to reproduce:
        1. Search for a car
        2. Select car for rent from result list
        3. Click Rent button on Rent Details page
        4. Fill all necessary data for car rental
        5. Click 'Rent' button

    Actual result:
        404 is thrown

    Expected result:
        Car is sucesfully rented
