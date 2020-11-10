/* ZADANI:
  Doplň všechny testcasy
  přidej kroky 
  přidej assertion (expect)
*/

/*
HINT: Secret password je schovane v HTML (nedaleko inputu pro secret heslo)
  Je potreba ho najit a precist. Nevadi, ze neni zobrazene - data tam jsou.
  Cislo se generuje kazdym nactenim stranky, nestaci si jej jednou precist a 
    a pak ho pouzivat celou dobu. 
  Hlasky maji dva stavy - 1) heslo je spravne, 2) heslo je spatne.
  Good luck! 
*/

describe('Secret number', () => {
  before(() => { //muzes zmenit na beforeEach, pokud je potreba
    browser.url('https://automation.cervik.repl.co/inputs.html')
  })

  it('confirmation appears after validating correct secret number', () => {
    // DOPLN

  })

  it('error appears after validating wrong secret number', () => {
    // DOPLN

  })

  it('error appears after validating empty secret number', () => {
    // DOPLN
    
  })
})