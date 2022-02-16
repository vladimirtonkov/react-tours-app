import React from "react";
import TourCard from "./TourCard";


function ToursListCards({ tours, getTourId, setCheck }) {

    console.log('tours', tours)

    const renderTourCard = tours.map(tour => {
        return <TourCard key={tour.id} tour={tour} getTourId={getTourId} />
    })


    return (
        <div className="tours-list">
            <div className="container">
                <div className="tours-list__wrapper">
                    <div className="tours-list__inner">
                        <h1 className="tours-list__title">Our Tours</h1>
                        <div className="tours-list__line"></div>
                    </div>
                    <ul className="tours-list__items">
                        {renderTourCard}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default ToursListCards;