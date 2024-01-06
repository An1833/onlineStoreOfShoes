
function Cart ({onClose, onRemove, items = []}) {
    return (
        <div className="overlay ">

          <div className="drawer">

            <div className="d-flex justify-between">
              <h2 className="mb-30">Корзина </h2>
              <img onClick={onClose} width={30} height={30} className="cu-p" src="/img/btn/btn-del.svg" alt="Close"/>
            </div>
            
            {items.length > 0 ? (
             <div>
             <div className=" mb-20"> 
                {items.map((obj) => (
                  <div className="cartBoxCard cartItem d-flex align-center">
                    <img className="mr-20" width={100} height={70} src={obj.imgUrl} alt="shoes"/>
                    <div className="mr-20" >
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img onClick={() => onRemove(obj.id) } width={30} height={30}
                      className="cu-p" 
                      src="/img/btn/btn-del.svg" 
                      alt="Delete"/>
                  </div> 
                  ))} 
              </div>
            
                <div className="mt-40 align-center">
                  <div>
                    <ul className="cartTotalBlock">
                      <li className="d-flex">
                        <span>Итого</span>
                        <div></div>
                        <b>21 498 руб.</b>
                      </li>
                      <li className="d-flex">
                      <span>Налог 5% </span>
                        <div></div>
                        <b>1 074 руб.</b>
                      </li>
                    </ul> 
                  </div> 
                  <button className="orderButton">Оформить заказ</button>       
                </div>
              </div>
            ) : (
              <div className="cartEmpty">
                <img className="mb-20" width={120} height={120} src="/img/empty-cart.png" alt="Empty"/>
                <h2>Корзина пустая</h2>
                <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={onClose} className="greenButton">
                  <img src="/img/icon/arrow.svg" alt="Arrow" />
                  Вернуться назад
                </button>
              </div>
              ) 
          }

          </div>
        </div>
    )
}

export default Cart;