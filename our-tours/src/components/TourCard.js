import React from "react";


function TourCard({ tour, getTourId }) {

    const { id, img, title, price, text } = tour
    const [isRead, setIsRead] = React.useState(false)


    return (
        <div className="tour-card">
            <div className="tour-card__inner">
                <div className="tour-card__wrap-img">
                    <img className="tour-card__img" src={img} alt="" />
                </div>
                <div className="tour-card__block">
                    <div className="tour-card__info">
                        <span className="tour-card__title">{title}</span>
                        <span className="tour-card__price">{price}</span>
                    </div>
                    <div className="tour-card__content">
                        <p className="tour-card__text">
                            {
                                isRead ? text : `${text.substring(0, 200)}... `
                            }
                            <button className="tour-card__text-btn btn" onClick={() => setIsRead(!isRead)}>
                                {
                                    isRead ? 'скрыть' : 'читать далее'
                                }
                            </button>
                        </p>
                    </div>
                    <button className="tour-card__button btn" onClick={() => getTourId(id)}>Not Interested</button>
                </div>
            </div>
        </div>
    )
}


export default TourCard;