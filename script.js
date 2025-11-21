/* console.log(HockeyP1); */
/* console.log(HockeyP2); */
console.log(HockeyP3);

{
  let HockeyP1 = "Patrick Kane";
  const HockeyP2 = "Evgeni malkin";
  var HockeyP3 = "Anze Kopitar";
  /*  console.log(HockeyP1);
  console.log(HockeyP2);
  console.log(HockeyP3); */
}

/* console.log(HockeyP1); */
/* console.log(HockeyP2); */
/* console.log(HockeyP3); */

/* Reflektion uppgift 2 */
/* 


1. Beskriver hur var, let och const skiljer sig gällande block:

let- och const variabler existerar lokalt alltså endast inom sitt block (scope), 
man kommer endast åt dem inuti blocket och kan alltså skriva ut dem med console.log 
endast inuti blocket d.v.s lokalt. En variabel som deklarerad med Var kan skrivas ut både innanför 
och utanför blocket.

2.Reflekterar över vad som händer vid olika placering av console.log() (före
blocket, i blocket, efter blocket):

Användning av console.log() inom blocket skriver ut alla variabler som är definierade i blocket i konsolen. 
Att skriva ut varibaler efter blocket som är deklarerade med const och let med consol.log går inte eftersom
dem typerna av variabler endast är definierade inom blocket och inte utanför. Att skriva ut en varibel deklaret med var
inom ett block går att skriva ut med console.log efter blocket den är alltså tillgänglig både inom och utanför blocket.

Att skriva ut varibler deklarerade med var och const innan blocket går inte eftersom dem inte är definierade innan. 
Man måste alltså deklararera dessa innan oavsett om det är innanför eller utanför ett block för att kunna skriva ut dem.
Att skriva ut en variabel (var) innan blocket ger ett inget felmeddelande utan skriver bara ut att den är undefined.
*/

console.log("3" == 3); //true;
console.log("3" === 3); //false;

console.log(NaN === NaN); // false;
console.log(null == undefined); // true;
console.log(null === undefined); // false;

console.log(undefined ? "truthy" : "falsy"); //falsy

if (undefined) {
  console.log("undefined: truthy");
} else {
  console.log("undefined: falsy"); // falsy
}

/* Reflektion uppgift 3

1.output för de olika värdena som testades med == och === och på
vilket sätt de skiljer sig åt.:

skillnaden mellan (==)-operatorn och (===)-operatorn är hur strikt operationerna utväderar valideringeringen.
Jämnlikhetsoperatorn (==) gör en mindre strikt jämförelse. Ex skriver du två värden med olika typer: 
"1" (sträng) == 1 (siffra) så kommer den utvärderas till true. (===-operatorn) gör en striktare jämförelse den kräver att 
värdena på båda sidorna av (===-operatorn) är identiska och av samma typ för att utvärderas till true. */

/*

2. Förklaring av vad som händer när ett uttryck står för sig självt i exempelvis en
tenerary operator eller inom parenteserna hos en if-sats:

När ett uttryck står för sig själv inom en tenerary operator eller inom paranteserna i en if sats. 
Undefined innehåller ingenting och konventeras därför till false eftersom att den inte har något värde
(ett av de 6 falsy värdena: undefined, NaN, 0 ,-0, "", false ,null). Allt annat konventeras till true eftersom
det då är ett truthy-värde.

3. Förklaring av vad NaN, undefined och null representerar. 

NaN: "not a number", skrivs ut till exempel när du försöker omvandla en sträng som inte är en siffra till ett
nummer. 


null: null används för att indikera frånvaro av ett värde, Exempel om jag har definierat variabeln: let Biltyp = null;.
Detta betyder alltså att jag medvetet har skapat en variabel som är tom med tydlighet.


undefined: undefined indikerar också på en typ av frånvaro, exempel där du lämnar variabeln 
helt tom, exempel let Biltyp;, variabeln har inte instansieras med något värde. Så skulle vi efterfråga
denna varibel skulle vi få undefined tillbaka eftersom att den inte har något värde. Skillnaden mellan null och 
undefined är att undefined en fördefinierad global konstant (systemets sätt att säga att något är tomt) 
medan null används som ett nyckelord för att indikera att något är tomt (programerarens sätt att säga att något är tomt).


/* Uppgift 4 */

/* Funktionsdeklaration */

const greetValue = greet("Elias");

console.log(greetValue);

function greet(name) {
  /*   console.log(name); */
  return "Hej " + name;
}
let name = "Mange schmidt";
console.log(name);

/* 1. skillnaden mellan funktionsdeklaration, funktionsuttryck och arrowfunktion */

/* skillnaden mellan med funktiondeklaration, funktionsuttryck och arrowfunktion är att en funktionsdeklaration
kan du anropa innan du har skapat funktionen eftersom att den "hoistas" vilket betyder att den lyfts upp till toppen. Det kan du inte göra med funktionsuttryck och arrowfunktioner utan dem måste du först skapa i java.script för att kunna anropa. 
Arrowfunktioner och funktionsuttryck är ganska lika bara att en arrowfunktion skrivs på ett mer kompriemerat sätt. Jag valde funktionsdeklaration för att jag ville kunna anropa min funktion både innan och efter den har deklarerats. */

/*2. Reflekterar över vad du behöver tänka på gällande varifrån du kan anropa dina
funktioner (innan/efter funktionerna har skapats). */

/* Beror som sagt på ifall du använder en funktionsdeklaration eller funktionsuttryck,arrowfunktion. Eftersom funktionsdeklarationer hoistas till toppen så kan du anropa funktionen både innan och efter den har deklarerats. Detta kan 
man inte kan göra med funktionsuttryck/arrowfunktioner eftersom att dem inte hoistas utan dem måste du skapa först för att sen kunna anropa funktionerna. */

/*3.Förklararar vad som händer om du ändrar variabeln/parametern name i de olika situationerna och hur det påverkar utskrifterna på de olika ställena i koden.*/

/* Variabeln let name = "Mange schmidt"; skapas utanför våran funktionsdeklaration vilket att använder vi console.log(name) utanför 
funktionen och efter att vi har deklarerat variabeln let name = "Mange schmidt" så kommer den skriva ut just Mange schmidt. Skulle vi dock välja att använda console.log(name) kommer den att skriva ut vårt argument som vi har skickat in i funktionens parameter som i detta fall är "Elias".*/

/* 4. Skillnaden mellan parameter, variabel och argument.*/

/*En variabel används som en behållare för att lagra ett värde. Parametern används för att kunna lagra ett namn och fungerar som en inre lokal variabel till funktionen. när vi ska tilldela parametern ett värde så ger vi den ett argument, vårt argument i detta fall är "Elias". parametern tar alltså ett argument("Elias") som funkktionen greet sedan använder.

*/
