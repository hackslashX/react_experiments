import React from "react"

function MainComponent() {
    return (
        <main className="main">
            <h1 className="main--header">Fun facts about React</h1>
            <ul className="main--unlist">
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by Jordan Walke</span></li>
                <li><span>Has well over 100k stars on GitHub</span></li>
                <li><span>Is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
            </ul>
        </main>
    )
}

export default MainComponent