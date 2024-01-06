
function Header (props) {
    return (
        <header className="d-flex justify-between	align-center" >
        <div className="align-center">
        <img  width={25} height={15} src="/img/logo1.png" alt="shoes"/>
        <div>
          <h3 className="text-uppercase">Online story</h3>
          <p className="opacity -5">Лучший магазин Андрея</p>
        </div>
        </div>
        <ul className="d-flex justify-between" >
          <li onClick = {props.onClickCart} className="mr-30 cu-p">
            <img className="svg" src="/img/icon/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
          <img src="/img/icon/user.svg" />
          <span>MAN</span>
          </li>
        </ul>
      </header>
    )
}

export default Header