import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const InfCard = () => {

    const location = useLocation();
    const [card, setCard] = useState([]);

    const request = () => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://pets.сделай.site/api/pets/${location.state}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(location.state);
                console.log(result);
                if ('data' in result) {
                    setCard(result.data.pet);
                }

            })
            .catch(error => console.log('error', error));
    }
    useEffect(request, []);

    return (
        <div>
            <Header />
            <div className="bg-dark" style={{ "minHeight": "82vh" }}>
                <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto ">
                    <div className="col m-auto">
                        <div className="card h-100 mt-5">
                            <img src={'https://pets.сделай.site' + card.photos1} className="card-img-top wwww" alt="..." />
                            <div className="card-body ft">
                                <div>
                                    <h5 className="card-title text-white">{card.kind}</h5>
                                    <p className="card-text">id: {card.id}</p>
                                    <p className="card-text">Телефон: {card.phone}.</p>
                                    <p className="card-text">Имя: {card.name}</p>
                                    <p className="card-text">Вид: {card.kind}</p>
                                    <p className="card-text">Описание: {card.description}</p>
                                    <p className="card-text">Чип: {card.mark}</p>
                                    <p className="card-text">Район: {card.district}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre></pre>
            </div>
            <Footer />
        </div>
    );
}

export default InfCard;