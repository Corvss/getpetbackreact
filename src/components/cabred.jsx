import React, { useEffect, useState } from "react";
import avatar from "../image/pets.png"

const Cab_red = () => {
    function Redact(profile, SetProfile) {
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
    SetProfile(result)
    console.log(profile, result)})
  .catch(error => console.log('error', error));
  }
  const [profile, SetProfile] = useState({name:'',phone:'', email:'', registrationDate: new Date(), countOrder:'', countPets:''})
  useEffect(() => {
    Redact(profile, SetProfile)
  }, [])

let [phone, setPhone]=useState({phone: ''})
let [email, setEmail]=useState({email: ''})

function sendPhone(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

var raw = JSON.stringify(phone);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch('https://pets.xn--80ahdri7a.site/api/users/phone', requestOptions)
  .then(response => response.status)
  .then(result => {console.log(result)
  switch(result){
    case 422:
    <p>Ошибка авторизации</p>
    break;
    case 401:
    <p>Ошибка валидации</p>
    break;
    case 200:
    <p>Успешно!</p>
  }
  })
  .catch(error => console.log('error', error));
  }

  function sendEmail(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
  
  var raw = JSON.stringify(email);
  
  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch('https://pets.xn--80ahdri7a.site/api/users/email', requestOptions)
    .then(response => response.status)
    .then(result => {console.log(result)
      switch(result){
        case 422:
        <p>Ошибка авторизации</p>
        break;
        case 401:
        <p>Ошибка валидации</p>
        break;
        case 200:
        <p>Успешно!</p>
      }
    })
    .catch(error => console.log('error', error));
    }

  let countDay = Math.floor ((new Date() - new Date(profile.registrationDate)) / 86400000)
    return ( 
        <div>
        <div className="card bg-black">
        <div className="rounded-top text-white bg-black d-flex  justify-content-center" style={{height: '200px' }}>
          <div className="ms-4 d-flex flex-column" style={{marginTop: '7em'}}>
            <img src={avatar} alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2 bg-black" style={{width: '150px'}} />
          </div>
          <div className="ms-3" style={{marginTop: '130px', zIndex: 1}}>
            <h2>{profile.name}</h2>
            <div className="d-flex mb-2">
            <p className="d-flex align-items-center" style={{width:"300px"}}>Номер телефона:</p><input style={{margin: '1em'}} type="text" className="form-control rounded-3" id="floatingInput" pattern="^\+[0-9]+$" defaultValue={profile.phone} onChange={(e)=>setPhone({phone: e.target.value})} required/>
            <button type="button" className="btn bbtn m-2" onClick={()=>sendPhone("phone")}>Редактировать</button>
            </div>
            <div className="d-flex">
            <p className="d-flex align-items-center" style={{width:"300px"}}>Эл. почта:</p><input style={{margin: '1em'}} type="email" className="form-control rounded-3" id="floatingInput" defaultValue={profile.email} onChange={(e)=>setEmail({email: e.target.value})} required/>
            <button type="button" className="btn bbtn m-2" onClick={()=>sendEmail("email")}>Редактировать</button>          
          </div>
          </div>
        </div>
        <div className="p-4 card-text">
          <div className="d-flex text-center py-1 justify-content-center" style={{marginTop: '7em'}}>
          <div className="px-3">
              <p className="small mb-0 card-text">{String(countDay)}</p>
              <p className="mb-1 h5">Дней на сайте</p>
            </div>
            <div className="px-3">
              <p className="small mb-0 card-text">{profile.countOrder}</p>
              <p className="mb-1 h5">Количество добавленных объявлений</p>
            </div>
            <div className="px-3">
              <p className="small mb-0 card-text">{profile.countPets}</p>  
              <p className="mb-1 h5">Количество найденных животных</p>
            </div>
          </div>
        </div>
      </div>
</div>
     );
    }
export default Cab_red;