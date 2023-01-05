(()=>{"use strict";class t{constructor(t){this.parentEl=t,this.getMapBlure=this.getMapBlure.bind(this),this.getCheckCard=this.getCheckCard.bind(this)}static get markup(){return'\n        <h2>Credit Card Validator</h2>\n        <ul class="cards-container">\n            <li class="card visa" title="visa"></li>\n            <li class="card master" title="master"></li>\n            <li class="card mir" title="mir"></li>\n            <li class="card discover" title="discovery"></li>\n            <li class="card jcb" title="jcb"></li>\n        </ul>\n        <form class="form-validate" data-widget="innogrn-form-widget">\n            <div class="form-control">\n                <label class="label" for="innorgn-input">Введите номер вашей карты</label>\n                <input id="innorgn-input" class="input" data-id="innogrn-input" type="text">\n            </div>\n            <button class= "button" data-id="innogrn-submit">Click to Validate</button>\n        </form>\n        '}static get inputSelector(){return".input"}static get cardsAllSelector(){return".card"}static get buttonSelector(){return".button"}static get selector(){return".form-validate"}static get labelSelector(){return".label"}bindToDOM(){this.parentEl.innerHTML=t.markup,this.element=this.parentEl.querySelector(t.selector),this.input=this.element.querySelector(t.inputSelector),this.label=this.element.querySelector(t.labelSelector),this.cardsAll=[...document.querySelectorAll(t.cardsAllSelector)],this.element.addEventListener("input",this.getMapBlure),this.element.addEventListener("submit",this.getCheckCard)}getMapBlure(t){t.preventDefault();const e=function(t){let e;return t.match("^(?:4[0-9]{12}(?:[0-9]{3})?)$")?e="visa":t.match("^(?:5[1-5][0-9]{14})$")?e="master":t.match("^(?:220[0|4][0-9]{0,})$")?e="mir":t.match("^(?:6(?:011|5[0-9]{2})[0-9]{12})$")?e="discover":t.match("^(?:(?:2131|1800|35[0-9]{3})[0-9]{11})$")&&(e="jcb"),e}(this.input.value);for(const t of this.cardsAll)0===this.input.value.length?t.style.opacity=1:t.style.opacity=.2,t.classList.contains(e)&&(t.style.opacity=1)}getCheckCard(t){t.preventDefault();const e=function(t){let e=0;const i=t.split("").map(Number);for(const[t,n]of i.entries())if(t%2==0){const t=2*n;e+=t>9?t-9:t}else e+=n;return e%10==0}(this.input.value);0!==this.input.value.length&&(e?(this.element.style.backgroundColor="green",this.label.textContent="Проверка прошла"):(this.element.style.backgroundColor="red",this.label.textContent="Проверьте номер карты!"))}}const e=document.querySelector(".container");new t(e).bindToDOM()})();