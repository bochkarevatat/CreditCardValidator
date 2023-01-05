import isValidCard from './validators.js';
import luhnAlg from './luhnAlg.js';

export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.getMapBlure = this.getMapBlure.bind(this);
    this.getCheckCard = this.getCheckCard.bind(this);
  }

  static get markup() {
    return `
        <h2>Credit Card Validator</h2>
        <ul class="cards-container">
            <li class="card visa" title="visa"></li>
            <li class="card master" title="master"></li>
            <li class="card mir" title="mir"></li>
            <li class="card discover" title="discovery"></li>
            <li class="card jcb" title="jcb"></li>
        </ul>
        <form class="form-validate" data-widget="innogrn-form-widget">
            <div class="form-control">
                <label class="label" for="innorgn-input">Введите номер вашей карты</label>
                <input id="innorgn-input" class="input" data-id="innogrn-input" type="text">
            </div>
            <button class= "button" data-id="innogrn-submit">Click to Validate</button>
        </form>
        `;
  }

  static get inputSelector() {
    return '.input';
  }

  static get cardsAllSelector() {
    return '.card';
  }

  static get buttonSelector() {
    return '.button';
  }

  static get selector() {
    return '.form-validate';
  }

  static get labelSelector() {
    return '.label';
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;
    this.element = this.parentEl.querySelector(Widget.selector);
    this.input = this.element.querySelector(Widget.inputSelector);
    this.label = this.element.querySelector(Widget.labelSelector);
    this.cardsAll = [...document.querySelectorAll(Widget.cardsAllSelector)];
    this.element.addEventListener('input', this.getMapBlure);
    this.element.addEventListener('submit', this.getCheckCard);
  }

  getMapBlure(e) {
    e.preventDefault();
    const valueCard = isValidCard(this.input.value);
    for (const card of this.cardsAll) {
      if (this.input.value.length === 0) {
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0.2;
      }
      if (card.classList.contains(valueCard)) {
        card.style.opacity = 1;
      }
    }
  }

  getCheckCard(event) {
    event.preventDefault();
    const resultAlgorithm = luhnAlg(this.input.value);
    if (this.input.value.length === 0) return;
    if (resultAlgorithm) {
      this.element.style.backgroundColor = 'green';
      this.label.textContent = 'Проверка прошла';
    } else {
      this.element.style.backgroundColor = 'red';
      this.label.textContent = 'Проверьте номер карты!';
    }
  }
}
