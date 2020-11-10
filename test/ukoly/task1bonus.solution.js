
/*
ZADANI: 
Přidej další možné testcasy pro danou stránku
Title
Odkazů v navigaci je 9
H1 obsahuje správný text
Sekce Zadání a Hint mají správné text v H2
Kliknutím na logo se stránka přesměruje na “Home”

*/

describe('Page selectors ', () => {
    before(() => {
        browser.url('https://automation.cervik.repl.co/selectors.html');
    })
    it('10x clicking on button "Dej like!" increases value in blue rectangle to 10', () => {

        let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou

        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    })

    describe('fairytale', () => {

        it('has correct header', () => {
            let headerOfStory = browser.$('#pohadka h2')            // najdi nadpis pohadky O Budulinkovi
            expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
        });

        it('has correct number of paragraphs', () => {
            let paragraphsOfStory = browser.$$('#pohadka p')        // najdi vsechny paragraphs pohadky O Budulinkovi
            expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
        })
        it('has at least one paragraph with word "lištičky"', () => {
            let foxsInStory = browser.$('p*=lištičky')              // najdi paragraph, kde se vyskytuje slovo "lištičky"
            expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
        })
        it('has correct image - of Budulinek on fox', () => {
            let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
            expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
        })
    })
    // autor Eva 🥮
    describe('BONUS', () => {
        it('Title', () => {
            expect(browser).toHaveTitle('Hello, world!')
        });
        it('Odkazů v navigaci je 9', () => {
            let nav = browser.$$('.nav-link')
            expect(nav).toBeElementsArrayOfSize(9)
        });
        it('H1 obsahuje správný text', () => {
            let h1 = browser.$('div.container.body h1')
            expect(h1).toHaveText('Selektory')
        });
        it('Sekce Zadání a Hint mají správné text v H5', () => {
            let h5 = browser.$$('h5.card-title')

            expect(h5[0]).toHaveText('Zadání')
            expect(h5[1]).toHaveText('Hint')
        });
        it('Kliknutím na logo se stránka přesměruje na Home', () => {
            browser.$('nav.navbar img').click()
            let vitej = browser.$('div.container.body h1')
            expect(vitej).toHaveText('Vítej na stránce, kde budeš kouzlit a automatizovat.')
        });
    })
})
