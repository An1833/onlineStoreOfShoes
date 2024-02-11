import Card from "../components/Card.jsx";

function Home ({items, searchValue, setSearchValue, onChangeSearchInput, onAddFavorite, onAddToCard}) {
    
    return (
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
                onFavorite={(obj) => onAddFavorite (obj)}
                onPlus={(obj) => onAddToCard (obj)}
                />
            ))
            }
            </div>
        </div>
    );
};

export default Home;