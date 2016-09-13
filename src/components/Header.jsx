import React, { Component } from 'react';
import { Link } from 'react-router';
import '../sass/system.sass';
import '../sass/header.sass';
import '../jQuery/main.js';


class Header extends Component {
  render() {
    return (
      <header className="header parallax__group z3">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="header__links">
                  <Link to="/about.html" activeClassName="active">О компании</Link>
                  <Link to="/special.html" activeClassName="active">Специальные предложения</Link>
                  <Link to="/wiki.html" activeClassName="active">Техническая документация</Link>
                  <Link to="/contact.html" activeClassName="active">Контакты</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__center">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="header__logo">
                  <Link to="/">
                  <i className="ico ico--header-logo"></i>
                  <span className="header__logo-name">ООО "МолТехЦентр"</span>
                  <span className="header__slogan">Надежность, проверенная временем</span>
                  </Link>
                </div>
              </div>
              <div className="col-sm-8 text-right">
                <div className="header__phone header__phone--smaller">
                  <span className="header__phone-digits"><a href="tel:+79162880000">8 (916) 288-00-00</a></span>
                  <span className="header__phone-helper">мобильный телефон</span>
                </div>
                <div className="header__phone header__phone--smaller">
                  <span className="header__phone-digits">ats58855@yandex.ru</span>
                  <span className="header__phone-helper">электронная почта</span>
                </div>
                <div className="header__phone">
                  <span className="header__phone-digits">8 (496) 575-88-55</span>
                  <span className="header__phone-helper">Пн-Пт 08:00 - 17:00</span>
                </div>
              </div>
              {/*<div className="col-sm-2">
                <a href="#" className="btn btn--block btn--bounce btn--outline">Онлайн заявка</a>
              </div>*/}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
