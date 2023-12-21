import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Cards from "../components/cards";
import AnimalCarousel from "../components/carusel";

const Main = () => {

    let [card, setCard] = useState({ data: { orders: [] } });
    useEffect(() => req_card(card, setCard), []);
    function req_card(card, setCard) {


        fetch("https://pets.сделай.site/api/pets")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)

            })
            .catch(error => console.log('error', error));

    }
    let cards = card.data.orders.map((order, index) => {
        return <Cards data={order} />;
    })

    return (
        <div className="bg-black">
            <Header />
            <h2 className="text-center text-white bg-dark mb-md-0" style={{ padding: '1em' }}>Найденные животные</h2>
            <AnimalCarousel />
            <h2 className="text-center text-white bg-primary mb-lg-0 p-3 bg-dark">Карточки потерянных животных</h2>
            <div className="album py-5 bg-dark">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cards}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;