import React, { useState } from "react";
import "../components/styles/index.css"

const Tutorial = () => {
    const [username, setUsername] = useState("");
    const [userAvatarUrl, setUserAvatarUrl] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("https://api.github.com/users/" + username);
        const data = await res.json();
        console.log(data);
        setUserAvatarUrl(data.avatar_url);
    }
    
    const handleUsernameInput = (newUsername) => {
        setUsername(newUsername.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text">REST API Tutorial</h1><br/>
                <div> {userAvatarUrl ?
                    <img src={userAvatarUrl} alt="*"/> :
                    <div><p className="text">No data</p></div>
                }</div>
                <br/>
                <label htmlFor="name" className="text">Name: </label>
                <input value={username} onChange={handleUsernameInput}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Tutorial;
