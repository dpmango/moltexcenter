import React, { Component } from "react";
import '../sass/footer.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="footer parallax__group z3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer__subscribe">
                <div className="footer__subscribe__title">
                  Получите специальные предложения
                </div>
                <form>
                  <input type="email" placeholder="my@mail.ru" className="footer__input"/>
                </form>
              </div>
            </div>
            <div className="col-sm-6 text-right">
              <div className="footer__phone">8 (496) 575-88-55</div>
            </div>
            <div className="col-sm-12">
              <div className="footer__copywrite">
                © 2011-2016 ООО “Молтехцентр”. Все права защищены. 
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;