import React, { Component } from 'react';
// import components
import Hero from '../components/Hero';
import Price from '../components/Price';
import Text from '../components/Text';
import Photos from '../components/Photos';
import Benefits from '../components/Benefits';
import PriceTableSelector from '../components/PriceTable';

// Populate data
import Homogenizers from '../data/homegenizers.json';

// carousel
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import 'imports?jQuery=jquery!owl.carousel';
// magnific
import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import 'imports?jQuery=jquery!magnific-popup';
//import '../jQuery/carousel.js';

import heroImg from '../img/hero-gom.png';

const textContent = [
  <span>
  <h2>Новые гомогенизаторы со склада</h2>
  <p>Мы предлагаем к продаже гомогенизаторы произведенные Одесским Механическим Заводом (ОДМЕЗ) и являемся единственным эксклюзивным диллером гомогенизаторов для предприятий молочно-промышленного комплекса на территории России.
  Последние 20 лет торговля на территории России осуществляется через компанию Агротехснаб (Молтехцентр). </p>
  <p>В стоимость входит опломбированный, растоможенный гомогенизатор в оригинальной заводской упаковке, пульт управления и комплект запасных частей. Гарантия завода на новое оборудование составляет 12 месяцев. </p>
  <p>ООО "Молтехцентр" предлагает купить гомогенизатор по наличию со склада в Подмосковье. Мы производим отправку в любой регион России и страны таможенного союза. Также предлагаем полный комплект оригинальных запасных частей и возможность проведения ремонтных и обслуживающих работ.</p>
  </span>
]

class Emkost extends Component {
  render() {
    return (
	<div className="parallax__group h320">
	  	<Hero img={heroImg} title="Гомогенизаторы ОДМЕЗ" subheading="Новые с заводской гарантией" desc="Производительностью от 500 до 10 000 л/час <br /> От эксклюзивного диллера на территории РФ"/>
	  	<Price populate={Homogenizers} heading="Стоимость Гомогенизаторов ОДМЕЗ" desc="Компания Молтехцентр с 1996 года является официальным диллером Одеского Механического завода. За это время было поставлено более 1000 различных моделей гомогенизаторов" />
	  	<Text content={textContent} image="http://moltexcenter.ru/images/certificate.jpg" />
	  	<Photos heading="Фотографии Гомогенизаторов ОДМЕЗ" desc="Мы предлагаем исключетельно новые гомогенизаторы в заводской упаковке по самым конкуретным ценам" />
	  	<Benefits />
	  	<PriceTableSelector heading="Запасные части для гомогенизаторов" desc="Оригинальные запасные части ОДМЕЗ от официального диллера. Выберите интересующую вас модель гомогенизатора" />
  	</div>
    );
  }
}

export default Emkost;
