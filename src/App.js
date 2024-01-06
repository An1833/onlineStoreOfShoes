import React from "react";
import axios from "axios";
import Card from "./components/Card.jsx"
import Cart from "./components/Cart.jsx"

import Header from "./components/Header.jsx";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get("https://65849524022766bcb8c76035.mockapi.io/api/v1/items")
    .then((res) => {
      setItems(res.data);  
    });  

    axios.get("https://65849524022766bcb8c76035.mockapi.io/api/v1/cart")
    .then((res) => {
      setCartItems(res.data); 
    });

  },[]);

  const onAddToCard = (obj) => {
    axios.post("https://65849524022766bcb8c76035.mockapi.io/api/v1/cart", obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
  //axios.delete("https://65849524022766bcb8c76035.mockapi.io/api/v1/cart/${id}")
    setCartItems((prev) => prev.filter(item => item.id !== id ));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App clear">
      
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      
      <Header onClickCart = {() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between" >
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки` }</h1>
          <div className="d-flex  align-center search-block">
          <img src="/img/icon/search.svg" />
            {searchValue && <img onClick={() => setSearchValue("")}width={15} height={15} className="clear cu-p" src="/img/btn/btn-del.svg" alt="Clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter ((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card 
              key={index}
              title={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl} 
              onFavorite={()=> console.log ("Добавили в закладки")}
              onPlus={(obj) => onAddToCard (obj)}
              />
          ))
          }
        </div>

      </div>
    </div>
    
  );
}


export default App;
