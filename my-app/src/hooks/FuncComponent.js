import React, { useState, useEffect } from "react";

export default function FuncComponent() {

    const [name, setName] = useState("ReactJS")
    const [surname, setSurName] = useState("")

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onSurnameChange = (event) => {
        setSurName(event.target.value)
    }

    useEffect(() => {
        console.log("component did mount/did update by dependency")
        document.title = name;
    }, [name])

    useEffect(() => {
        console.log("useEffect call []")
    }, [])

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onNameChange}
            />
            <label htmlFor="surname">Surname</label>
            <input
                type="text"
                id="surname"
                name="surname"
                value={surname}
                onChange={onSurnameChange}
            />
        </div>
    );
}
