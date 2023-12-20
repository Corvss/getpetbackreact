import React from "react";
import logo from '../image/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="navbar navbar-expand-lg p-3">
        <div className="container-fluid"> 
          <a href="index.html"><img src={logo} style={{width: '3rem', marginRight: '2em'}} alt="logo" /></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>    
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to={"/"} className="nav-link px-2 text-secondary">Главная</Link></li>
              <li><Link to={"/cabinet"} className="nav-link px-2 text-white">Личный кабинет</Link></li>
              <li><Link to={"/search"} className="nav-link px-2 text-white">Поиск по объявлениям</Link></li>
              <li><Link to={"/add"} className="nav-link px-2 text-white">Добавить объявление</Link></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark" list="pets" placeholder="Поиск..." aria-label="Search" />
              <datalist id="pets">
                <option value="Кошка">
                </option><option value="Собака">
                </option><option value="Корова">
                </option><option value="Хомяк">
                </option><option value="Птица">
                </option></datalist>
            </form>
            <div className="text-end d-flex">
              <Link to={"/login"} className="btn btn-outline-light me-2">Вход</Link>
              <Link to={"/registration"} className="btn bbtn">Регистрация</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
 
export default Header;