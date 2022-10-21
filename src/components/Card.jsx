import React from "react";
import '../styles/Card.css';
const imgStar = "https://images.jairoramirezu.com/images/airbnb/star.png";

function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
      badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
      badgeText = 'ONLINE'
    }


  return (
    <div className="main--Div">
      <div className="main--Card">
        <div>
          {badgeText && <div className="status--Div">
                          <h6 className="main--Status">{badgeText}</h6>
                        </div>
          }
          <img className="main--Pic" src={props.coverImg} />
        </div>
        <div className="main--Info">
          <img src={imgStar} />
          <h6>{props.stats.rating}</h6>
          <h6 className="info--Rel">({props.stats.reviewCount})•{props.location}</h6>
        </div>
        <h6 className="main--Des">{props.title}</h6>
        <div className="main--Price">
          <h6 className="info--Price">${props.price}<small className="card--Person"> / person</small></h6>
          <h6 className="info--Person">{props.cap}</h6>
        </div>
      </div>
    </div>
  )
}

export default Card;