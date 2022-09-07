import React, { useState, useEffect } from "react";
import Card from "./Card";
import './App.css'
// import { robots } from "./robots";

export default function App() {
    const [text, setText] = useState('');
    const [robots, setRobots] = useState([]);
    const filterRobot = (robot) => {
        for (let i = 0; i < text.length; i++) {
            if (robot.name.toLowerCase()[i] !== text.toLowerCase()[i]) {
                return false
            }
        }
        return true
    }
    const filteredRobots =
        (text.length === 0) ? robots : robots.filter(robot => {
            return filterRobot(robot);
        });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])
    return (
        <>
            <h1 className="f1 tc">robofriends</h1>
            <div className="pa2 tc">
                <input
                    className="pa2 ba b--green bg-lightest-blue"
                    type="search"
                    placeholder="search robots"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className="container">
                {
                    filteredRobots.map((item, index) => {
                        return (
                            <Card key={index} id={item.id} name={item.name} username={item.username} email={item.email} />
                        )
                    })
                }
            </div>
        </>
    )
}