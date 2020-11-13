/**
 * UKOL: Dopln chybejici selectory:
 */


describe('Selectory - pohadka', () => {

    before(() => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
    })

    it('should pass correctly', () => {


        let headerOfStory = browser.$('')       // najdi nadpis pohadky O Budulinkovi
        // Napoveda: h-neco element
        
        let paragraphsOfStory = browser.$$('')  // najdi vsechny paragraphs pohadky O Budulinkovi
        // Napoveda: Paragraphu (elementu <p>) je na strance vice, budeme muset zanorit (pouzit vice lokatoru)
        // prvne najdeme hlavni element a pak vsechny elementy 

        let foxsInStory = browser.$('')         // najdi paragraph, kde se vyskytuje slovo "lištičky"
        // Napoveda: Paragraph je stejny jako predchozi, pro vysky slova listicki pouzijem partial vyhledavani


        let imageOfStory = browser.$('')        // najdi ilustraci v pohadce o budulinkovi
        // Napoveda: hledame obrazek - vzpomen si jaky tag ma element pro obrazek
        // obrazku je na strance opet vice budeme muset byt vice specificti


        let giveLikeButton = browser.$('')      // najdi tlacitko "Dej like!" na konci pohadky


        let likeCounter = browser.$('')         // najdi pocitadlo pod pohadkou
        // Napoveda: jedna se o to cislo 0 dole na strance

        // ZBYTEK MUZES IGNOROVAT -- JEDNA SE O KONTROLU //

        expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
        expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
        expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
        // overi, ze dany element ma cestu k obrazku, takze to je ten spravny image
        expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')


        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    });
});
