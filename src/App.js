import React from "react";
import {Route} from 'react-router-dom';

import axios from "axios";
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx"
import Cart from "./components/Cart.jsx";


import Header from "./components/Header.jsx";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get(`https://online-story.free.beeceptor.com/items`)
    .then((res) => {
      setItems(res.data);  
    });  

    axios.get(`https://65849524022766bcb8c76035.mockapi.io/api/v1/cart`)
    .then((res) => {
      setCartItems(res.data); 
    });

    axios.get(`https://65849524022766bcb8c76035.mockapi.io/api/v1/items`)
    .then((res) => {
      setFavorites(res.data);
    });

  },[]);

  const onAddToCard = (obj) => {
    axios.post(`https://65849524022766bcb8c76035.mockapi.io/api/v1/cart`, obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
  axios.delete(`https://65849524022766bcb8c76035.mockapi.io/api/v1/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id ));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddFavorite = (obj) => {
    axios.post(`https://65849524022766bcb8c76035.mockapi.io/api/v1/items`, obj)
    setFavorites((prev) => [...prev, obj]);
  };

  return (
    <div className="App clear">
      
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      
      <Header onClickCart = {() => setCartOpened(true)} />

     
      <Route path="/" exact> 
        <Home 
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddToCard={onAddToCard}
        />
        </Route>

        <Route path="/favorites" exact> 
        <Favorites 
        items={favorites}
        />
        </Route>
    </div>
    
  );
}


export default App;
