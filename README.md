# Selenium + WebdriverIO
## 1. lekce 

Základní nastavení WebdriverIO s podporu autocomplete do VSCode. Obsahuje jeden "test" v `test/spects/01_uvod.e2e.js`

### Požadavky
* nainstalovaný git
* nainstalované [nodejs](https://nodejs.org/en/) 
  * Můžete zkontrolovat v terminálu (= příkazový řádek) příkazem `node -v`
* webový prohlížeč [Chrome](https://www.google.com/intl/cs_CZ/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)

### Instalace 
1. Vytvoř si složku, kde chceš mít všechny materiály - doporučuji něco ve stylu `Dokumenty/czechitas/automatizace`
2. V terminálu jdi do vytvořené složky - pomocí příkazu `cd <dana slozka>`
2. Stáhni si repozitář do svého počítače pomocí `git clone git@github.com:czechitas-da2020/03_mocha.git`
3. V daném adresáři pusť `npm install` 
    * Tenhle příkaz Ti nainstaluje všechny potřebné balíčky, které pak budeme používat. 
3. Otevři si VSCode a otevři v něm danou složku - `Dokumenty/czechitas/automatizace/03_mocha`

### Spuštění
1. `npm test -- --spec {nazev ci cast nazvu souboru}`
  * `npm test -- --spec 01-buttons` spusti jen jeden soubor, a to `01-buttons.js`
  * `npm test -- --spec 01` pusti 3 soubory - `01-buttons.js`, `01-login.js`, `01-ukol.js`


### Odkazy a zdroje
* [webdriverIO dokumentace](https://webdriver.io/docs/gettingstarted.html)  