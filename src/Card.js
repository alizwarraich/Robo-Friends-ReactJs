import React from "react";
import './Card.css';

export default function Card({ id, name, username, email }) {
    return (
        <div className="tc bg-light-green dib pa3 ma2 grow card">
            <img src={`https://robohash.org/${id}?200x200`} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}