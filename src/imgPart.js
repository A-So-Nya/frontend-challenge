import { useState } from "react";

export default function ImgPart(props){
    const [isLikedOrHovered, setIsLiked] = useState({
        hovered:false,
        liked:props.liked.includes(props.imgSrc),
    })


    const onHeartClick = (e) => {
        if(!isLikedOrHovered.liked){
            setIsLiked((previous) => ({...previous, liked : true}))
            props.changeLikedCats((alreadyLiked) => alreadyLiked.concat(e.target.previousSibling.attributes.getNamedItem('src').value));
        } else {
            setIsLiked((previous) => ({...previous, liked : false}));
            props.changeLikedCats((alreadyLiked) => (alreadyLiked.filter((src) => src!==props.imgSrc)));
        }
    }

    const onHover = (e) => {
        if(!isLikedOrHovered.liked){
            setIsLiked((previous) => ({...previous, hovered:true}))
        }
    }

    const onMouseLeave = (e) => {
        if(!isLikedOrHovered.liked){
            setIsLiked((previous) => ({...previous, hovered:false}))
        }
    }

    return(
        <div className='imgWithLike'>
            <img 
                src={props.imgSrc} 
                alt="Изображение загружается">
            </img>
            <img 
                className='imgLike' 
                src={isLikedOrHovered.liked ? "Vector (2).png" : isLikedOrHovered.hovered ? "Vector(1).png" : "Vector.png"}
                onMouseEnter={onHover}
                onMouseLeave={onMouseLeave}
                onClick={onHeartClick}
                alt="">
            </img>
        </div>
)
}