import React from "react"
import { useRef, useState } from "react";

const RegForm = () => {
  const [user, setUser] = useState('');
  let message = useRef();
  let error = useRef();

  const load = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      user
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pets.xn--80ahdri7a.site/api/register", requestOptions)
      .then(response => response.status)
      .then(result => {
        console.log(result);
        if (result == 204) message.current.classList.remove('d-none')
        else
          if (result == 422) error.current.classList.remove('d-none')
      })
      .catch(error => console.log('error', error));
  }
  return (
    <form onSubmit={load} className>
      <div className="form-floating mb-3">
        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Людмила" pattern="[а-яА-ЯЁё\-\s]+" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
        <label htmlFor="floatingInput">Имя</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="+78005553535" pattern="^\+[0-9]+$" onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
        <label htmlFor="floatingInput">Номер телефона</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <label htmlFor="floatingInput">Эл. почта</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
        <label htmlFor="floatingPassword">Пароль</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" pattern={user.password} onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })} required />
        <label htmlFor="floatingPassword">Повторите пароль</label>
      </div>
      <div class="form-check text-white">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(e) => setUser({ ...user, confirm: e.target.checked })} required />
        <label class="form-check-label" for="flexCheckDefault">
          Подтвердить регистрацию
        </label>
      </div>
      <button className="w-100 mb-2 btn btn-lg rounded-3 bbtn" type="submit">Регистрация</button>
      <small className="card-text">Внимание! При регистрации вы соглашаетесь с нашими правилами пользования.</small>
      <hr className="my-4 card-text" />

      <div className="alert text-white d-none" role="alert" ref={message}>
        Добро пожаловать к нам!
      </div>
      <div className="alert text-white d-none" role="alert" ref={error}>
        <p>Неправильно введенные данные!</p>
      </div>
    </form>
  );
}

export default RegForm;