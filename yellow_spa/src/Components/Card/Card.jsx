import React from 'react';
import {useNavigate} from "react-router";

function Card(props) {
    const navigate = useNavigate();

    return (
        <div className="card"
        onClick={()=>{
            console.log(props.id)
            navigate(`/details/${props.id}`)
        }}>
            <img className='card__image' src={props.avatar} alt="Avatar"/>
                <h2><b>{props.title}</b></h2>
                <div className='card__rating__date'>
                    <span>{props.rating}</span>
                    <span>{props.timeStamp}</span>
                </div>

        </div>
    );
}

export default Card;