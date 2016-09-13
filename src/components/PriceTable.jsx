import React, { Component } from "react";

class PriceTableSelector extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.price-table__switcher a').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.row').find('.price-table__tables div').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  }
  render() {
    const {heading, desc} = this.props;
    return(
      <section className="price-table pt40 parallax__layer parallax__layer--base z3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center heading">{heading}</div>
            <div className="col-sm-8 offset-sm-2 text-center subheading">{desc}</div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="price-table__switcher">
                <a href="#">К5-ОГ2А-500</a>
                <a href="#">К5-ОГ2А-1,25</a>
                <a href="#">А1-ОГ2М</a>
                <a href="#">К5-ОГА-10</a>
              </div>
                <PriceTable />
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default PriceTableSelector;

class PriceTable extends Component {
  render() {
    return (
<div className="price-table__tables">
<div>
  <table className="table">
  <thead>
  <tr><th>Код</th><th>Описание</th><th >Цена</th><th >Аналог</th></tr>
  </thead>
  <tbody>
  <tr>
  <td>01.000сб</td>
  <td>кр. шатун механизм</td>
  <td>180 000</td>
  <td>-</td>
  </tr>
  <tr>
  <td>01.002</td>
  <td>коленвал</td>
  <td>60 000</td>
  <td>38 000</td>
  </tr>
  <tr>
  <td>01.006</td>
  <td>вкладыш (пара)</td>
  <td>1 700</td>
  <td>-</td>
  </tr>
  <tr>
  <td>01.008</td>
  <td>втулка ползуна</td>
  <td>3 300</td>
  <td>2 400</td>
  </tr>
  <tr>
  <td>01.012</td>
  <td>кольцо</td>
  <td>520</td>
  <td>270</td>
  </tr>
  <tr>
  <td>01.016</td>
  <td>крышка-отражатель</td>
  <td>630</td>
  <td>250</td>
  </tr>
  <tr>
  <td>01.021</td>
  <td>палец шатуна</td>
  <td>650</td>
  <td>320</td>
  </tr>
  <tr>
  <td>01.032</td>
  <td>набивка на ползун (6 шт)</td>
  <td>580</td>
  <td>340</td>
  </tr>
  <tr>
  <td>01.101cб</td>
  <td>шатун в сборе</td>
  <td>9 000</td>
  <td>6 200</td>
  </tr>
  <tr>
  <td>01.102</td>
  <td>втулка шатуна</td>
  <td>830</td>
  <td>580</td>
  </tr>
  <tr>
  <td>01.103</td>
  <td>ползун</td>
  <td>10 300</td>
  <td>6 900</td>
  </tr>
  <tr>
  <td>7310</td>
  <td>Подшипник</td>
  <td>1200</td>
  <td>-</td>
  </tr>
  <tr>
  <td></td>
  <td>Манжета 50*70/70*95</td>
  <td>120/140</td>
  <td>80/90</td>
  </tr>
  <tr className="price">
  <td><b>02.000cб</b></td>
  <td><b>плунжерный блок</b></td>
  <td><b>180 000</b></td>
  <td><b>&nbsp;112 000</b></td>
  </tr>
  <tr>
  <td>01.017</td>
  <td>плунжер</td>
  <td>2 800</td>
  <td>1 100</td>
  </tr>
  <tr>
  <td>02.001в</td>
  <td>крышка внутренняя</td>
  <td>4 290</td>
  <td>2 730</td>
  </tr>
  <tr>
  <td>02.001н</td>
  <td>крышка&nbsp;наружная</td>
  <td>2 640</td>
  <td>1 680</td>
  </tr>
  <tr>
  <td>02.003</td>
  <td>пружина</td>
  <td>240</td>
  <td>190</td>
  </tr>
  <tr>
  <td>02.004</td>
  <td>клапан</td>
  <td>1 210</td>
  <td>770</td>
  </tr>
  <tr>
  <td>02.005</td>
  <td>втулка</td>
  <td>1 510</td>
  <td>970</td>
  </tr>
  <tr>
  <td>02.006</td>
  <td>седло</td>
  <td>1 080</td>
  <td>690</td>
  </tr>
  <tr>
  <td>02.007</td>
  <td>кольцо нажимное</td>
  <td>720</td>
  <td>380</td>
  </tr>
  <tr>
  <td>02.008</td>
  <td>набивка на плунжер (2шт.) (рамилон)</td>
  <td>1 360</td>
  <td>960</td>
  </tr>
  <tr>
  <td>02.009</td>
  <td>кольцо</td>
  <td>420</td>
  <td>280</td>
  </tr>
  <tr>
  <td>02.011</td>
  <td>прокладка</td>
  <td>460</td>
  <td>300</td>
  </tr>
  <tr>
  <td>02.012</td>
  <td>кольцо опорное</td>
  <td>250</td>
  <td>70</td>
  </tr>
  <tr>
  <td>02.013</td>
  <td>манжета</td>
  <td>66</td>
  <td>45</td>
  </tr>
  <tr>
  <td>02.017</td>
  <td>блок-деталь</td>
  <td>118 500</td>
  <td>68 600</td>
  </tr>
  <tr>
  <td>02.019</td>
  <td>гайка</td>
  <td>870</td>
  <td>550</td>
  </tr>
  <tr>
  <td>02.021</td>
  <td>фланец</td>
  <td>2 500</td>
  <td>1 750</td>
  </tr>
  <tr>
  <td>02.022в</td>
  <td>шпилька</td>
  <td>480</td>
  <td>310</td>
  </tr>
  <tr>
  <td>05.900*</td>
  <td>гайка</td>
  <td>860</td>
  <td>550</td>
  </tr>
  <tr>
  <td>02.100МА-1 /-2</td>
  <td>фильтр</td>
  <td>2 800</td>
  <td>1 650</td>
  </tr>
  <tr>
  <td>02.300</td>
  <td>штунцер</td>
  <td>2 890</td>
  <td>1 680</td>
  </tr>
  <tr>
  <td>02.500</td>
  <td>фланец</td>
  <td>2 290</td>
  <td>1 350</td>
  </tr>
  <tr className="price">
  <td><b>05.000сб</b></td>
  <td><b>гомогенизир. головка</b></td>
  <td><b>72 000</b></td>
  <td><b>47 000</b></td>
  </tr>
  <tr>
  <td>05.003*</td>
  <td>втулка</td>
  <td>1 500</td>
  <td>1 100</td>
  </tr>
  <tr>
  <td>05.007</td>
  <td>пружина</td>
  <td>340</td>
  <td>230</td>
  </tr>
  <tr>
  <td>05.008*</td>
  <td>толкатель</td>
  <td>1 300</td>
  <td>670</td>
  </tr>
  <tr>
  <td>05.012*</td>
  <td>прокладка</td>
  <td>70</td>
  <td>70</td>
  </tr>
  <tr>
  <td>05.012-01</td>
  <td>прокладка</td>
  <td>70</td>
  <td>70</td>
  </tr>
  <tr>
  <td>05.013</td>
  <td>клапан</td>
  <td>1 330</td>
  <td>850</td>
  </tr>
  <tr>
  <td>05.014</td>
  <td>кольцо</td>
  <td>600</td>
  <td>400</td>
  </tr>
  <tr>
  <td>05.015</td>
  <td>седло</td>
  <td>1 120</td>
  <td>720</td>
  </tr>
  <tr>
  <td>05.034*</td>
  <td>втулка</td>
  <td>820</td>
  <td>540</td>
  </tr>
  <tr>
  <td>05.045*</td>
  <td>воротник</td>
  <td>72</td>
  <td>38</td>
  </tr>
  <tr className="price">
  <td><b>07.000сб*</b></td>
  <td><b>предохранит. клапан</b></td>
  <td><b>7 480</b></td>
  <td><b>5 040</b></td>
  </tr>
  <tr>
  <td>07.027</td>
  <td>пружина</td>
  <td>730</td>
  <td>470</td>
  </tr>
  <tr>
  <td>07.029А*</td>
  <td>седло клапана</td>
  <td>2 240</td>
  <td>1 430</td>
  </tr>
  <tr>
  <td>07.031А*</td>
  <td>вставка</td>
  <td>590</td>
  <td>380</td>
  </tr>
  <tr>
  <td>07.032А*</td>
  <td>клапан</td>
  <td>2 370</td>
  <td>1 520</td>
  </tr>
  </tbody>
  </table>
</div>
<div>
second
</div>
<div>
third
</div>
<div>
fourth
</div>
</div>
    );
  }
}

