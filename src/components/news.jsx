import React from "react"
import { useRef, useState } from "react";

const New = () => {
    let[mail, setMail]=useState();
    let message=useRef(); 
    let error=useRef();

    const load=(e)=> {
        e.preventDefault();

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
  mail
);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://pets.xn--80ahdri7a.site/api/subscription", requestOptions)
  .then(response => response.status)
  .then(result => {console.log(result);
    if(result==204) message.current.classList.remove('d-none')
    else
    if(result==422) error.current.classList.remove('d-none')})
  .catch(error => console.log('error', error));

    }

    return ( 
        <div className="col-md-8 offset-md-1 mb-3">
        <form onSubmit={load}>
          <h5>Подпишитесь на наши новости</h5>
          <p>Делайте добро, воссоединяйте животных и их хозяев вместе с нами.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2 mb-2">
            <label htmlFor="newsletter1" className="visually-hidden">Адрес эл. почты</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Адрес эл. почты" onChange={(e)=>setMail({...mail,email:e.target.value})} required/>
            <button className="btn bbtn" type="submit">Подписаться</button>
          </div>
          <p>// Мы никому не разглашаем ваш адрес эл. почты</p>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Подтвердить подписку
                    </label>
                </div>
        <div className="alert d-none" role="alert" ref={message}>
            Добро пожаловать к нам!
        </div>
        <div className="alert d-none" role="alert" ref={error}>
            <p>Неправильно введенный эл.адрес!</p>
            Пример: example@mail.com
        </div>
        </form>
      </div>
     );
}
 
export default New;