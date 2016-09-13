import React, { Component } from 'react';
import { Link } from 'react-router';

import '../sass/top-menu.sass';

class TopMenu extends Component {
  render() {
    return (
      <section className="top-menu parallax__group z3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="top-menu__list">
                <Link to="/gomogenizatoryi.html" activeClassName="active">Гомогенизаторы</Link>&nbsp;
                <Link to="/separatoryi.html" activeClassName="active">Сепараторы</Link>&nbsp;
                <Link to="/elektronasosyi.html" activeClassName="active">Насосы и РПН</Link>&nbsp;
                <Link to="/nerzhaveyushhaya-armatura.html" activeClassName="active">Арматура</Link>&nbsp;
                <Link to="/truba-nerzhaveyushhaya.html" activeClassName="active">Лист / труба</Link>&nbsp;
                <Link to="/emkostnoe-oborudovanie.html" activeClassName="active">Емкости</Link>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TopMenu;
