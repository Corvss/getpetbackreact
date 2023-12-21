import React from "react";
import facebook from "../image/facebook.png"
import instagram from "../image/instagram.png"
import twitter from "../image/twitter.png"
import { Link } from "react-router-dom";
import New from "./news";

const Footer = () => {
  return (
    <main className="bg-black">
      <div className="container card-text">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>GetPetBack</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to={"/"} className="nav-link p-0 card-text">Главная</Link></li>
                <li className="nav-item mb-2"><Link to={"/search"} className="nav-link p-0 card-text">Поиск по объявлениям</Link></li>
                <li className="nav-item mb-2"><Link to={"/add"} className="nav-link p-0 card-text">Добавить объявление</Link></li>
                <li className="nav-item mb-2"><Link to={"/cabinet"} className="nav-link p-0 card-text">Личный кабинет</Link></li>
                <li className="nav-item mb-2"><Link to={"/registration"} className="nav-link p-0 card-text">Регистрация</Link></li>
              </ul>
            </div>
            <New />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 GetPetBack. Все права защищены.</p>
            <ul className="list-unstyled d-flex" style={{ width: '22%' }}>
              <li style={{ padding: '1em' }}><a className="link-body-emphasis" href="#"><img src={twitter} width="50px" /></a></li>
              <li style={{ padding: '1em' }}><a className="link-body-emphasis" href="#"><img src={facebook} width="50px" /></a></li>
              <li style={{ padding: '1em' }}><a className="link-body-emphasis" href="#"><img src={instagram} width="50px" /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
export default Footer;