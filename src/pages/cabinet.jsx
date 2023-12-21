import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import Cardslich from "../components/cardslich";
import avatar from "../image/pets.png"
import Footer from "../components/footer";
import Header from "../components/header";

const CabPage = () => {

    let [user, setUser] = useState({});
    let [cards, setCards] = useState([]);
    let [day, setDay] = useState(0);
    let history = useNavigate();

    const load = () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                if ('name' in result) {
                    setUser(result);

                    let a = new Date();
                    a.getDate();
                    let b = new Date(user.registrationDate);
                    let c = Math.floor((a - b) / 1000 / 3600 / 24)
                    setDay(c);
                }
                else {
                    history('/login');
                }
            }
            )
            .catch(error => console.log('error', error));

    }
    useEffect(load, []);

    const loadCards = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.data.orders.length > 0) {

                    setCards(result.data.orders)
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(loadCards, []);

    let block = useRef();
    let blocks = useRef();

    function sendPhone(e) {
        e.preventDefault();

        const forms = document.getElementById('phone')

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.token);

        var raw = JSON.stringify(user);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users/phone", requestOptions)
            .then(response => response.status)
            .then(result => {
                if (result == 200) {
                    let message = 'Номер успешно изменен';
                    blocks.current.innerText = message;
                    blocks.current.style.background = "#D6D6FF"
                    blocks.current.style.color = "black";
                    blocks.current.style.border = "1px solid rgb(119, 119, 255)"
                    blocks.current.style.display = 'flex';
                }
            })
            .catch(error => console.log('error', error));
    }

    function sendEmail(e) {
        e.preventDefault();

        const forms = document.getElementById('email')

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.token);
        var raw = JSON.stringify(user);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users/email", requestOptions)
            .then(response => response.status)
            .then(result => {
                if (result == 200) {
                    let message = 'Почта успешно изменена';
                    block.current.innerText = message;
                    block.current.style.background = "#D6D6FF"
                    block.current.style.color = "black";
                    block.current.style.border = "1px solid rgb(119, 119, 255)"
                    block.current.style.display = 'flex';
                }
            })
            .catch(error => console.log('error', error));
    }

    function vihod() {
        localStorage.clear();
        history('/login');
    }

    return (
        <div className="bg-dark" style={{ minHeight: '70vh' }}>
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="card bg-black mt-5 p-5">
                                <div className="rounded-top text-white bg-black d-flex  justify-content-center" style={{ height: '200px' }}>
                                    <div className="ms-4 d-flex flex-column">
                                        <img src={avatar} alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2 bg-black" style={{ width: '150px' }} />
                                                <div className="d-flex text-center justify-content-center">
                                                    <div>
                                                        <p className="small mb-0 card-text">{day}</p>
                                                        <p className="mb-1 h5">Дней на сайте</p>
                                                    </div>
                                                </div>
                                    </div>
                                    <div className="ms-3">
                                        <h2 className="ms-4">{user.name}</h2>
                                        <div className="container-fluid m-2 p-2" style={{ width: '500px' }}>
                                            <div className="col-sm-9 m-2">
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-white mb-0">{user.email}</p>
                                                    <button type="button" className="btn bbtn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                                        Изменить данные
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-9 m-2">
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-white mb-0">{user.phone}</p>
                                                    <button type="button" className="btn bbtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        Изменить данные
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-9 m-2">
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5" className="btn brd" >Выйти из аккаунта</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="modal" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content bg-black">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Вы уверены что хотите выйти?</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <form >
                                                    <div className="modal-footer d-flex justify-content-around">
                                                        <button type="button" onClick={vihod} className="btn btn-danger" data-bs-dismiss="modal">Выйти из аккаунта</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content bg-black text-white">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Изменение номера телефона</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="needs-validation flex justify-content-center" noValidate id='phone' onSubmit={sendPhone}>
                                                    <div>
                                                        <input type="text" pattern='^[\d\+]{12}$' className="form-control" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                        <div className="invalid-feedback">
                                                            Введите номер телефона, используйте + и цифры
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                        <button className="btn bbtn" type="submit">Сохранить изменение</button>
                                                    </div>
                                                </form>
                                                <div className="alert alert-primary none" role="alert" ref={blocks}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content bg-black text-white">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Изменение email</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="needs-validation flex justify-content-center" noValidate id='email' onSubmit={sendEmail}>
                                                    <div>
                                                        <input type="email" className="form-control" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                                        <div className="invalid-feedback">
                                                            Укажите корректный email
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                                        <button className="btn bbtn" type="submit">Сохранить изменение</button>
                                                    </div>
                                                </form>
                                                <div className="alert alert-primary none" role="alert" ref={block}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className="text-center text-white bbtn m-2">Объявления пользователя</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-3">
                {cards.map((item, index) => <Cardslich data={item} key={index} />)}
            </div>
            <Footer />
        </div>
    );
}

export default CabPage;