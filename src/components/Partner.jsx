import React, { Component } from 'react';
import '../sass/partners.sass';

const partnersList = [
  "http://moltexcenter.ru/img/1.jpg",
  "http://moltexcenter.ru/img/2.jpg",
  "http://moltexcenter.ru/img/3.jpg",
  "http://moltexcenter.ru/img/4.jpg",
  "http://moltexcenter.ru/img/5.jpg",
  "http://moltexcenter.ru/img/6.jpg",
  "http://moltexcenter.ru/img/7.jpg",
  "http://moltexcenter.ru/img/8.jpg",
  "http://moltexcenter.ru/img/9.jpg",
  "http://moltexcenter.ru/img/10.jpg",
  "http://moltexcenter.ru/img/12.jpg",
  "http://moltexcenter.ru/img/13.jpg",
  "http://moltexcenter.ru/img/15.jpg",
  "http://moltexcenter.ru/img/17.jpg",
  "http://moltexcenter.ru/img/18.jpg",
]

class Partner extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('#partnersSlider').owlCarousel({
          loop: true,
          margin: 15,
          nav: false,
          autoplay: true,
          autoplaySpeed: 1000,
          autoplayTimeout: 1000,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:10
              }
          }
      });
    });
  }
  render() {
    const {heading, desc} = this.props;
    const partners = partnersList.map((key, i) => {
      return (
        <div className="partners__slide" key={i}>
          <img src={key} alt="" className="img-fluid" />
        </div>
      );
    });
    return (
      <section className="partners">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="owl-carousel" id="partnersSlider">
                {partners}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
