import React from "react"
import { useRef, useState } from "react";

const LogForm = () => {
    const[user, setUser]=useState('');
    let message=useRef(); 
    let error=useRef();

    const load=(e)=> {
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

fetch("https://pets.xn--80ahdri7a.site/api/login", requestOptions)
.then(response => response.json())
.then(result => {
    console.log(result);
    if ("data" in result) {
        message.current.classList.remove('d-none')
        localStorage.token=result.data.token;
    }
  else
  if(result.error.code==401) error.current.classList.remove('d-none')})
  .catch(error => console.log('error', error));
    }
    return ( 
        <form onSubmit={load} className>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setUser({...user,email:e.target.value})} required/>
                    <label htmlFor="floatingInput">Эл. почта</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={(e)=>setUser({...user,password:e.target.value})} required/>
                    <label htmlFor="floatingPassword">Введите пароль</label>
                  </div>
                  <button className="w-100 mb-2 btn btn-lg rounded-3 bbtn" type="submit">Войти</button>
                  <hr className="my-4 card-text" />
                  <div className="alert text-white d-none" role="alert" ref={message}>
                    Мы рады снова вас видеть!
                    </div>
                    <div className="alert text-white d-none" role="alert" ref={error}>
                    Неправильно введенные почта, или пароль!
        </div>
        </form>
     );
}
 
export default LogForm;