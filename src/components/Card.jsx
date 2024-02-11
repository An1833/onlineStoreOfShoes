import React from "react";


function Card({title, imgUrl, price, onPlus, onFavorite}) {

  const [isAdded, setIsAdded] = React.useState(false); 
  const [isFavorite, setIsFavorite] = React.useState(false); 
  
  const onClickPlus = () => {
    onPlus({title, imgUrl, price,});
    setIsAdded (!isAdded);
  }
   
  const onClickFavorite = () => {
    onFavorite({title, imgUrl, price});
    setIsFavorite (!isFavorite);
  }

    return ( 
        <div className="card">
          <div className="favorite " onClick={onClickFavorite}>
              <img src={isFavorite ? "/img/btn/heart-liked.svg" : "/img/btn/heart-unliked.svg"} alt="Unliked"/>
          </div >
          <img width={130} height={90} src={imgUrl} alt="shoes"/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column price">
              <span>Цена:</span>
              <b className="cardPrice">{price} руб</b>
            </div>
            
            <img className="card_button_plus" onClick={onClickPlus} src={isAdded ? "/img/btn/btn-plus-choice.svg" :"/img/btn/btn-plus.svg" } alt="add" />
            
          </div>
        </div>
    );

}

export default Card;
