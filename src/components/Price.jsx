import React, { Component } from "react";
import '../sass/price.sass';

class Price extends Component {
  render() {
    const {heading, desc, populate} = this.props;
    const blocks = populate.map(function(key, i) {
      return (
         <PriceBlock key={i} priceName={key.name} priceVal={key.price} priceDesc={key.desc} priceChars={key.chars} priceAvailable={key.availalbe} />
      );
    });
    return (
      <section className="price parallax__layer parallax__layer--base z3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 pt50 text-center heading">{heading}</div>
            <div className="col-sm-8 offset-sm-2 text-center subheading">{desc}</div>
          </div>
          <div className="row">
            {blocks}
          </div>
        </div>
      </section>
    );
  }
}

// цена
function managePriceClass(string){
  if (string === "под заказ" ){
    return <div className="price__value price__value--no">{string}</div>
  } else {
    return <div className="price__value">{string} <i className="ico ico-rub">q</i></div>
  }
}
// кнопка
function managePriceBtn(string){
  if (string === "под заказ" ){
    return <a href="#" className="btn btn--outline btn--green btn--bounce">Узнать цену</a>
  } else {
    return <a href="#" className="btn btn--outline btn--green btn--bounce">Оформить заявку</a>
  }
}
//доступность
function managePriceAvailability(string){
  if (string === "yes" ){
    return <div className="price__availability"> <i className="ico ico-available" data-toggle="tooltip" data-placement="top" title="В наличии"></i></div>
  } else {
    return <div className="price__availability"> <i className="ico ico-non-available" data-toggle="tooltip" data-placement="top" title="Под заказ"></i></div>
  }
}

// ставим подсказку
function setTooltipMessage(string) {
  if (string === "performance" ) {
    return "Прозиводительность"
  } else if (string === "pressure" ) {
    return "Давление гомогенизации"
  } else if (string === "plungers" ) {
    return "Количество плунжеров"
  } else if (string === "engine" ) {
    return "Мощность двигателя"
  } else if (string === "size" ) {
    return "Габаритные размеры"
  } else if (string === "weight" ) {
    return "Масса"
  }
}

class PriceBlock extends Component {
  render() {
    const {priceName, priceDesc, priceVal, priceChars, priceAvailable} = this.props;
    // const characteristics = Object.entries(priceChars).map((key, i) => {
    const characteristics = Object.keys(priceChars).map(function(key, i) {
      return (
        <div className="price__icon-row" key={i}>
          <i className={'ico ico-' + key} data-toggle="tooltip" data-placement="right" title={ setTooltipMessage(key) }></i> <span>{priceChars[key]}</span>
        </div>
      );
    });
    return (
      <div className="col-5 price__block">
        <div className="price__name">{priceName}</div>
        <div className="price__description">{priceDesc}</div>
        <div className="price__icons">
          {characteristics}
        </div>
        { managePriceClass(priceVal) }
        { managePriceAvailability(priceAvailable) }
        { managePriceBtn(priceVal) }
      </div>
    );
  }
}

export default Price;
