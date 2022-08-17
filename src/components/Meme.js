import React from 'react'
//import memesData from '../memesData'

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  // console.log(meme)

  const [allMemeImages, setAllMemeImages] = React.useState([])

  // console.log(allMemeImages)

  React.useEffect(() => {
    console.log("Effect ran")
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  console.log(allMemeImages)

  function getMemeImage(){
    const randomIndex = Math.floor(Math.random() * allMemeImages.length)
    setMeme(prevState => {
      return{
        ...prevState,
        randomImage: allMemeImages[randomIndex].url
      }
    })
  }

  function getText(event){
    const {name, value} = event.target
    setMeme(prevState => {
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      {/* <p>{url}</p> */}
      <div className='form'>
        <input type="text" className='form-input' placeholder='Top text' name="topText" value={meme.topText} onChange={getText}/>
        <input type="text" className='form-input' placeholder='Bottom text' name="bottomText" value={meme.bottomText} onChange={getText} />
        <button className='form-button' onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme-image'/>
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}
