
function Header (props) {
    return (
        <header className="d-flex justify-between	align-center" >
        <div className="align-center">
        <img  width={25} height={15} src="/img/logo1.png" alt="shoes"/>
        <div>
          <h3 className="text-uppercase">Online story</h3>
          <p className="opacity -5">Лучший магазин обуви</p>
        </div>
        </div>
        <ul className="d-flex justify-between" >
          <li onClick = {props.onClickCart} className="mr-30 cu-p">
            <img className="svg" src="/img/icon/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="heart_svg mr-20 cu-p">
            <img className="svg" src="/img/icon/heart.svg" alt="Bookmarks"/>
          </li>
          <li>
          <img src="/img/icon/user.svg" alt="User" />
          <span>User</span>
          </li>
        </ul>
      </header>
    )
}

export default Header