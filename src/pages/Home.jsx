import React, { Component } from 'react';
import { Link } from 'react-router';
import '../sass/home.sass';

// import components
import Hero from '../components/Hero';
import Text from '../components/Text';
import Benefits from '../components/Benefits';

// set variables
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

class Home extends Component {
  render() {
    return (
      <div>
      <section className="home-nav">
        <div className="container">
          <div className="row">
            <HomeNav img={heroImg} name="Гомогенизаторы и запасные части" link="/gomogenizatoryi.html" />
            <HomeNav img="http://moltexcenter.ru/img/ser2.jpg" name="Сепараторы и запасные части" link="/separatoryi.html" />
            <HomeNav img="http://moltexcenter.ru/img/ser3.jpg" name="Молочные насосы и РПА" link="/elektronasosyi.html" />
            <HomeNav img="http://moltexcenter.ru/img/ser4.jpg" name="Нержавеющая арматура" link="/nerzhaveyushhaya-armatura.html.html" />
            <HomeNav img="http://moltexcenter.ru/img/ser6.jpg" name="Нержавеющая труба и лист" link="/truba-nerzhaveyushhaya.html" />
            <HomeNav img="http://moltexcenter.ru/img/ser7.jpg" name="Нержавеющие емкости" link="/emkostnoe-oborudovanie.html" />
          </div>
        </div>
      </section>
      <Text bg="pt40" content={textContent} />
      <Benefits />
      </div>
    );
  }
}

export default Home;


class HomeNav extends Component {
  render() {
    const { img, name, link } = this.props;
    return (
      <div className="col-sm-3">
        <Link to={link} className="home-nav__block">
          <div className="home-nav__image">
            <img src={img} className="img-fluid" alt={name} />
          </div>
          <div className="home-nav__name">
            {name}
          </div>
        </Link>
      </div>
    )
  }
}
