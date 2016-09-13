import React, { Component } from 'react';
import '../sass/photos.sass';

const photoList = [
  "http://moltexcenter.ru/photos/a1-og2m.jpg",
  "http://moltexcenter.ru/photos/a1-og2m1.jpg",
  "http://ats77.ru/assets/image-cache/IMG_1434.b2a0fc03.jpg",
  "http://ats77.ru/assets/image-cache/FullSizeRender.b2a0fc03.jpg",
  "http://moltexcenter.ru/photos/g2015_1.jpg",
  "http://moltexcenter.ru/photos/g2015_2.jpg",
  "http://moltexcenter.ru/photos/g2015_3.jpg",
  "http://moltexcenter.ru/photos/g2015_5.jpg"
]

class Photos extends Component {
  componentWillMount() {
    $(document).ready(function(){
      $('#photoSlider').owlCarousel({
          loop: true,
          margin: 15,
          autoplay: true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:5,
                  nav:true
              }
          }
      });

      $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          verticalFit: true
        }
      });

    });
  }
  render() {
    const {heading, desc} = this.props;
    const photos = photoList.map((key, i) => {
      return (
        <a href={key} className="photos__slide" key={i}>
          <img src={key} alt="" className="img-fluid" />
        </a>
      );
    });
    return (
      <section className="photos separator-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center heading">{heading}</div>
            <div className="col-sm-8 offset-sm-2 text-center subheading">{desc}</div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="owl-carousel popup-gallery pt40" id="photoSlider">
                {photos}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
