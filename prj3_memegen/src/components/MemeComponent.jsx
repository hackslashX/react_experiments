import React from "react"

import memeplace from "../assets/memeimg.png"

export default function MemeComponent() {
    const [meme, setMeme] = React.useState({
        "topText": "",
        "bottomText": "",
        "image": ""
    })

    const [allMemeImages, setMemeImages] = React.useState("")

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(data => setMemeImages(data.data.memes))
    }, [])

    React.useEffect(() => {
        if (allMemeImages) {
            getMemeImage()
        }
    }, [allMemeImages])

    function getMemeImage() {
        const data = allMemeImages;
        const randomNum = Math.floor(Math.random() * data.length);
        const newMemeUrl = data[randomNum].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: newMemeUrl
            }
        })
    }

    function changeMemeText(event) {
        console.log(event)
        const {name, value} = event.target
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main className="main">
            <div className="mform">
                <div className="mform--inputs">
                    <input
                        type="text"
                        className="mform--input"
                        placeholder="Top Text"
                        value={meme.topText}    
                        name="topText"
                        onChange={changeMemeText}
                    />
                    <input
                        className="mform--input"
                        placeholder="Bototm Text"
                        value={meme.bottomText}    
                        name="bottomText"
                        onChange={changeMemeText}
                    />
                </div>
                <input type="button" onClick={getMemeImage} className="mform--button" value="Get a new meme image 😄"></input>
            </div>
            <div className="meme">
                <img src={meme.image}></img>
                <h2 className="meme--text top">{meme.topText}</h2> 
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}