# dojo
Používá Dojo framework, který funguje podobně jako requirejs a má vlastní widgety (dijit)

Vlastní elementy jsou pomocí argumentu data-dojo-type, který určuje jaký widget se použije
```html
<div data-dojo-type="app/MyDivWidget"></div>
```

Dojo buď využiješ jenom na tohle, nebo použiješ i další věci (dojo-attach-point, eventy, již připravené widgety). Pokud bys použil jenom to jádro, jdou includnout jen ty soubory které používáš (dojo/core, dijit/TemplateMixin, ...), nemusíš includovat celej framework.

# webcomponents
Nová specifikace web components (https://en.wikipedia.org/wiki/Web_Components), která ještě není součástí všech prohlížečů (proto polyfill webcomponents-lite.min.js, který v případě nepodpory prohlížeče použije custom implementaci)

Jediný požadavek je, abys provedl registraci všech elementů na začátku, tj v každém tagu si do requirejs dal všechny tagy, které daný tag používá (což je common practice i v Doju nahoře)

teoreticky bys místo text pluginu do requirejs mohl použít html importy (http://www.html5rocks.com/en/tutorials/webcomponents/imports/) a podporu template tagu (http://www.html5rocks.com/en/tutorials/webcomponents/template/) 
