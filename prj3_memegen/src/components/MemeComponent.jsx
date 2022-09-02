import React from "react"

import memeplace from "../assets/memeimg.png"
import memesData from "../memesData"

export default function MemeComponent() {
    const [meme, setMeme] = React.useState({
        "topText": "",
        "bottomText": "",
        "randomImage": memeplace
    })

    const [allMemeImages, setMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const data = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * data.length);
        const newMemeUrl = data[randomNum].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: newMemeUrl
            }
        })
    }

    return (
        <main className="main">
            <div className="mform">
                <div className="mform--inputs">
                    <input className="mform--input" placeholder="Shut up"></input>
                    <input className="mform--input" placeholder="and take my money"></input>
                </div>
                <input type="button" onClick={getMemeImage} className="mform--button" value="Get a new meme image 😄"></input>
            </div>
            <img className="meme" src={meme.randomImage}></img>
        </main>
    )
}