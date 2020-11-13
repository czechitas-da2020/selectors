// https://www.w3schools.com/cssref/css_selectors.asp

// UKOL:
// Dopln 

describe('Buttons', () => {

    before(() => {
        // otevreme si webovou stranku
        browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
    });

    it('ID, Name and ClassName buton', () => {

        // DOPLN
        let idButtonElement = $('#button1');
        expect(idButtonElement).toHaveText("ID Button");

        // DOPLN
        let nameButtonElement = $('[name="clickingOnMe"]');
        expect(nameButtonElement).toHaveText("NAME Button");

        // DOPLN
        let classButtonElement = $('.click-click-click');
        expect(classButtonElement).toHaveText("CLASSNAME Button");
    });

    it('The button, partial text, data-qabutton', () => {
        // DOPLN - Pouzij lokator pro text, mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let thisIsTheButton = $('button=This is THE button');
        expect(thisIsTheButton).toHaveText("This is THE button");
    });

    it('Partial text', () => {
        // DOPLN - Pouzij pouze jedno slovo ktere nachazi v tomto buttonu (Partial nebo link nebo text)
        // mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let partialButton = $('button*=Partial')
        expect(partialButton).toHaveText("Partial link text");
    });

    it('data-qa attribute', () => {
        // DOPLN - Pouzij data-qa attribute
        // mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let dataQaButtonElement = $('[data-qa="customAttribute-button"]');
        expect(dataQaButtonElement).toHaveText("DATA-QA button");
    });


});