
function Cart ({onClose, onRemove, items = []}) {
    return (
        <div className="overlay ">
          <div className="drawer">
            <div className="d-flex justify-between">
            <h2 className="mb-30">Корзина </h2>
            <img onClick={onClose} width={30} height={30} className="cu-p" src="/img/btn/btn-del.svg" alt="Close"/>
            </div>
            <div className=" mb-20">
              {items.map((obj) => (
              <div className="cartBoxCard cartItem d-flex align-center">
              <img className="mr-20" width={100} height={70} src={obj.imgUrl} alt="shoes"/>
              {/* <div style={{backgroundImage: `url(${obj.imageUrl})`}}></div> */}
              <div className="mr-20" >
                
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img onClick={() => onRemove(obj.id) } width={30} height={30} className="cu-p" src="/img/btn/btn-del.svg" alt="Delete"/>
              </div>
              
              )
              )}
            
            </div>
            

            <div className="items mt-40">

              <ul className="cartTotalBlock">
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex">
                <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>  
              <button>Оформить заказ</button>       
            </div>


          </div>
        </div>
    )
}

export default Cart;