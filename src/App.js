import React, { useEffect, useState } from 'react'
import API from './API'
import './index.css'
import ImgPart from './imgPart';
function App(){
  const catApi = new API();
  const [cats, setCats] = useState([])
  const [likedCats, setLikedCats] = useState([]);

  const getKittis = () => {
    catApi.getCats().then((moreCats) => setCats((pastCats) => (pastCats.concat(moreCats))))
  }

  const scrollFun = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      getKittis()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFun)
    getKittis()
    return(
      () => {window.removeEventListener('scroll', scrollFun)}
    )
  }, [])

  const [activeFirst, setActiveFirst] = useState(true)

  const firstButtonColor = {
    backgroundColor: activeFirst ? "#1e88e5" : "#2196f3",
  }

  const secondButtonColor = {
    backgroundColor : activeFirst ? "#2196f3" : "#1e88e5",
  }

  return(
    <div id="container">
      <div id="header">
        <div className='navigation'>
          <button onClick={() => setActiveFirst(true)} style={firstButtonColor}>Все котики</button>
          <button onClick={() => setActiveFirst(false)} style={secondButtonColor}>Любимые котики</button>
        </div>
        </div>
        <div id="main">
          {
            activeFirst &&  cats.map((catImg, i) => {
              return (
                <ImgPart liked={likedCats} key={catImg + i} imgSrc={catImg} changeLikedCats={setLikedCats}></ImgPart>
              )
            })
          }
          {!activeFirst && likedCats.map((catImg, i) => {
              return (
                <ImgPart liked={likedCats} key={catImg + i} imgSrc={catImg} changeLikedCats={setLikedCats}></ImgPart>
              )
            })}
        </div>
        <center>... Загружаем ещё котиков ...</center>
      </div>
  )
}
export default App;
