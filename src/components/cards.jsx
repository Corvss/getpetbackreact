import React from 'react';

const Cards = (props) => {
    return(
        <div className="col">
            <div className="card h-100">
                <img src={'https://pets.сделай.site'+props.data.photos} className="card-img-top wwww" style={{"height":"450px"}} alt="..."/>
                <div className="card-body ft">
                    <div>
                        <h5 className="card-title text-white">{props.data.name}</h5>
                        <p className="card-text">id: {props.data.id}</p>
                        <p className="card-text">Телефон: {props.data.phone}.</p>
                        <p className="card-text">Имя: {props.data.name}</p>
                        <p className="card-text">Вид: {props.data.kind}</p>
                        <p className="card-text">Описание:{props.data.description}</p>
                        <p className="card-text">Чип:{props.data.mark}</p>
                        <p className="card-text">Район:{props.data.district}</p>
                        <p className="card-text">Дата:{props.data.date}</p>
                    </div>

                        <div><button className="btn bbtn ff" style={{marginTop: '2em'}}>Подробнее</button></div>
                </div>
            </div>
        </div>
    );
};


export default Cards;