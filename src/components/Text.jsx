import React, { Component } from "react";
import '../sass/text.sass';

function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

class Text extends Component {
  componentWillMount() {
    $(document).ready(function(){
      $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
      });
    });
  }
  renderLayout(){
    const { image, content } = this.props;
    if (image) {
      return(
        <div className="row">
          <div className="col-sm-8">
            { content }
          </div>
          <div className="col-sm-4">
            <a href={ image } className="image-popup-no-margins photos__slide photos__slide--huge">
              <img src={ image } alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      );
    } else {
      return(
        <div className="row">
          <div className="col-sm-12">
            { content }
          </div>
        </div>
      );
    }
  }
  render() {
    const { bg } = this.props;
    const setBg = bg || 'separator-top mt40 light-bg'
    return (
      <section className={"text " + setBg }>
        <div className="container">
          {this.renderLayout()}
        </div>
      </section>
    );
  }
}

export default Text;
