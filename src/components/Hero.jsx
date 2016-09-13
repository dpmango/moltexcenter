import React, { Component } from 'react';
import '../sass/hero.sass';
import '../jQuery/parallax.js';

function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

class Hero extends Component {
  componentDidMount() {
    $(document).ready(function() {
    	$('.popup-with-zoom-anim').magnificPopup({
    		type: 'inline',

    		fixedContentPos: false,
    		fixedBgPos: true,

    		overflowY: 'auto',

    		closeBtnInside: true,
    		preloader: false,

    		midClick: true,
    		removalDelay: 300,
    		mainClass: 'my-mfp-zoom-in'
    	});
      $('.form__container__input label').click(function(event){
    	    $(this).parent('.form__container__input').find('input').focus();
    	    $(this).parent('.form__container__input').find('textarea').focus();
    	});
    });
  }
  // logical operators
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      message: '',
      name: '',
      email: '',
      phone: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('fired submit');
    this.setState({ type: 'info', message: 'Отправляю...' }, this.sendFormData);
  }
  sendFormData () {
    // Fetch form values.
    var formData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      content: this.state.content
    };

    // Send the form data.
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  }
  requestBuildQueryString(params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  }
  //render function
  render() {
    const { img, title, subheading, desc } = this.props;
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
      <section className="hero parallax__layer parallax__layer--back z2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="hero__img-wrapper">
                <img src={img} className="hero__img img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-sm-6 text-right">
              <div className="hero__heading">{title}</div>
              <div className="hero__subheading">{subheading}</div>
              <div className="hero__description">{ breakLine(desc) }</div>
              <a href="#hero-order-modal" className="btn btn--hero popup-with-zoom-anim">Заказать сейчас</a>
            </div>
          </div>
        </div>
        {/* form */}
        <div id="hero-order-modal" className="zoom-anim-dialog mfp-hide">
            <form className="form__container" onSubmit={this.handleSubmit}>
  						<div className="forn__container__title">Оставьте заявку на гомогенизатор ОДМЕЗ</div>
              { status }
  						<div className="form__container__input">
  							<input value={this.state.name} onChange={this.handleChange} id="name" name="name" autocomplete="off" type="text" required />
  							<label>Ваше имя</label>
  						</div>
  						<div className="form__container__input">
  							<input value={this.state.phone} onChange={this.handleChange} id="phone" name="phone" autocomplete="off" type="text" required />
  							<label>Ваш телефон</label>
  						</div>
  						<div className="form__container__input">
  							<input value={this.state.email} onChange={this.handleChange} id="email" name="email" autocomplete="off" type="text" required />
  							<label>Ваш email</label>
  						</div>
  						<div className="form__container__input">
  							<textarea value={this.state.content} onChange={this.handleChange} id="content" name="content" type="text" autocomplete="off" required ></textarea>
  							<label>Ваше сообщение</label>
  						</div>

  						<div className="form__container__submit">
  							<button type="submit" className="btn btn--outline btn--green btn--bounce">Оставить заявку</button>
  						</div>
  					</form>
        </div>
      </section>
    );
  }
}

export default Hero;
