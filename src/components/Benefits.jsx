import React, { Component } from "react";
import '../sass/benefits.sass';

function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

const benefitItems = [
  {ico: 'ico-benefit-year', name: 'Работаем <br /> с 1996 г', desc: "более 20 лет опыта"},
  {ico: 'ico-benefit-consumer', name: 'Специальные условия', desc: "для постоянных клиентов"},
  {ico: 'ico-benefit-price', name: 'Конкурентные <br /> цены', desc: "и отличные скидки"},
  {ico: 'ico-benefit-quality', name: 'Отличное <br /> качество', desc: "только новые товары"}
]
class Benefits extends Component {
  render() {
    const benefits = benefitItems.map((key, i) => {
      return (
        <BenefitBlock key={i} ico={key.ico} name={key.name} desc={key.desc} />
      );
    });
    return (
      <section className="benefits separator-top dark-bg mt40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="heading">Почему с нами выгодно работать?</div>
            </div>
            { benefits }
          </div>
        </div>
      </section>
    );
  }
}

class BenefitBlock extends Component {
  render() {
    const {ico, name, desc, grid} = this.props;
    const setGrid = grid || 'col-sm-3'
    return(
      <div className={setGrid}>
        <div className="benefit__wrapper">
          <div className="benefit__title">{ breakLine(name) }</div>
          <i className={'ico ' + ico }></i>
          <div className="benefit__desc">{ breakLine(desc) }</div>
        </div>
      </div>
    );
  }
}
export default Benefits;
