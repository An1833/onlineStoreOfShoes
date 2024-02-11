import {Link} from 'react-router-dom';

function Header (props) {
    return (
        <header className="d-flex justify-between	align-center" >
        
        <Link to="/">
        <div className="d-flex align-center">
          <img className="mr-10" width={50} height={30} src="/img/logo1.png" alt="Logo"/>
          <div>
            <h3 className="text-uppercase">Online story</h3>
            <p className="opacity -5">Лучший магазин обуви</p>
          </div>
        </div>
        </Link>
        <ul className="d-flex justify-between" >
          <li onClick = {props.onClickCart} className="mr-30 cu-p">
            <img className="svg" src="/img/icon/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="heart_svg mr-20 cu-p">
            <Link to="/favorites">
              <img className="svg" src="/img/icon/heart.svg" alt="Bookmarks"/>
            </Link>
            
          </li>
          <li>
          <img className="mr-5" src="/img/icon/user.svg" alt="User" />
          <span>User</span>
          </li>
        </ul>
      </header>
    )
}

export default Header