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
        let idButtonElement = $('');
        expect(idButtonElement).toHaveText("ID Button");

        // DOPLN
        let nameButtonElement = $('');
        expect(nameButtonElement).toHaveText("NAME Button");

        // DOPLN
        let classButtonElement = $('');
        expect(classButtonElement).toHaveText("CLASSNAME Button");
    });

    it('The button, partial text, data-qabutton', () => {
        // DOPLN - Pouzij lokator pro text, mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let thisIsTheButton = $('');
        expect(thisIsTheButton).toHaveText("This is THE button");
    });

    it('Partial text', () => {
        // DOPLN - Pouzij pouze jedno slovo ktere nachazi v tomto buttonu (Partial nebo link nebo text)
        // mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let partialButton = $('')
        expect(partialButton).toHaveText("Partial link text");
    });

    it('data-qa attribute', () => {
        // DOPLN - Pouzij data-qa attribute
        // mkrni do prezentace 02_Elementy, slajd 4 pokud nevis
        let dataQaButtonElement = $('');
        expect(dataQaButtonElement).toHaveText("DATA-QA button");
    });


});