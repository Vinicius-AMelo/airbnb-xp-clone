import React from 'react'
import './cards.css'
import StarIcon from "./images/star.png"

export default function Cards(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'Online'
    }

    return (
        <div className='card'>
            <img src={props.img} className="card--image" alt='Imagem do Card'></img>

            <div className='card--stats'>
                {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img src={StarIcon} className="star--image" alt='Icon'></img>
                <span> {props.rate}</span>
                <span className='gray'>({props.ratings}) • </span>
                <span className='gray'>{props.location}</span>
                <p className='texto--cards'>{props.title}</p>
                <p className='texto--cards'><strong>From R${props.value}</strong> / person</p>
            </div>
        </div>
    )
}