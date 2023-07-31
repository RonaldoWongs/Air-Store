import React, { useState, useEffect } from 'react';
import TennisItem from './TennisItem';
import Cart from './Cart';


const tennisData = [
  {
    name: 'Air Jordan 1 Zoom CMFT',
    price: 140.99,
    image: 'https://media.revistagq.com/photos/626bf7aa02b483c40ec0a47b/master/w_1600%2Cc_limit/Air-Jordan-1-Zoom-CMFT-2.jpg',
  },
  {
    name: 'Air Jordan 4 Seafoam',
    price: 199.99,
    image: 'https://cdn.shopify.com/s/files/1/2358/2817/files/air-jordan-4-seafoam-1.png?v=1684772633&width=1940',
  },
  {
    name: 'Air Jordan 4 Retro Thunder (2023)',
    price: 209.99,
    image: 'https://drop-shop.mx/cdn/shop/files/jordan-air-jordan-4-retro-thunder-2023_19830660_45179511_2048.webp?v=1684432610',
  },
  {
    name: 'Air Jordan 12',
    price: 499.99,
    image: 'https://www.fayerwayer.com/resizer/WYvXac_8idZ2FI2OF7RIOu7zCZM=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/GE45JGLRENCTFD3XANBWYLDFU4.jpg',
  },
  {
    name: 'Air Jordan 1 Chicago Reimagined',
    price: 673.99,
    image: 'https://phantom-expansion.unidadeditorial.es/6239da431613d30a7ade440a4719e3db/crop/0x378/1074x982/resize/828/f/jpg/assets/multimedia/imagenes/2022/03/21/16478732471407.jpg',
  },
  {
    name: 'Jordan Youth Air Jordan 12 Retro GS',
    price: 209.99,
    image: 'https://m.media-amazon.com/images/I/61PXKhRPjHL._AC_UF894,1000_QL80_.jpg',
  },
  {
    name: ' Air Jordan 1 Mid Taxi',
    price: 150.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4250023d-d5c3-477a-bee1-6793bafdcb40.7f88dd257fda42eb8beff886532bcb4c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
  },
  {
    name: 'Air Jordan 13 Retro',
    price: 220.99,
    image: 'https://ss203.liverpool.com.mx/xl/1100352211.jpg',
  },
  {
    name: 'Air Jordan 4 Retro',
    price: 449.99,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71hjGBF9T9L._AC_UL600_SR600,600_.jpg',
  },
  {
    name: 'Air Jordan 11 retro Criado',
    price: 124.99,
    image: 'https://down-mx.img.susercontent.com/file/479c92403423d86222ba027954d9c0b3',
  },
  {
    name: 'Air Jordan 1 Mid',
    price: 86.99,
    image: 'https://static.nike.com/a/images/t_default/cdea9b12-e7f2-452c-9649-1aa6ba2370b1/calzado-air-jordan-1-mid-ntkGmF.png',
  },
  {
    name: 'Air Jordan 3 Retro',
    price: 226.99,
    image: 'https://m.media-amazon.com/images/I/61OX72O2x+L._AC_UY1000_.jpg',
  },
  {
    name: 'Air Jordan 4 Retro (GS) ',
    price: 338.99,
    image: 'https://m.media-amazon.com/images/I/411GhIA3TOL._AC_.jpg',
  },
  {
    name: 'Air Jordan Retro 6 Bordeaux',
    price: 226.99,
    image: 'https://sensaciondelbloque.com/wp-content/uploads/2021/09/AJ4BDX5.png',
  },
  {
    name: 'Air Jordan Retro 4 UNIVERSITY BLUE',
    price: 464.99,
    image: 'https://deepshopmx.com/cdn/shop/products/tenis-air-jordan-4-retro-university-blue-in-CT8527-400-1_530x@2x.jpg?v=1643837829',
  },
  {
    name: 'Air Jordan Retro I 1 Mid SE Coral Stardust',
    price: 109.99,
    image: 'https://i.ebayimg.com/images/g/YvwAAOSwBNRfNBjP/s-l1200.jpg',
  },
  {
    name: ' Air jordan Retro 1 Dia de muertos 2020',
    price: 104.99,
    image: 'https://sneakersandmoregrasamx.online/wp-content/uploads/2021/10/10.png',
  },
  {
    name: 'Jordan 9 Retro Chile Rojo',
    price: 288.99,
    image: 'https://m.media-amazon.com/images/I/31iYFeYULgL._SL500_.jpg',
  },
  {
    name: 'Jordan 13 Retro Court Purple Black',
    price: 157.99,
    image: 'https://m.media-amazon.com/images/I/41-JxEtNHmS._SL500_.jpg',
  },
  {
    name: 'Air Jordan 4 Retro Black Cat',
    price: 990.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7p74SiqQPCJfpcla1tzzyY0yO7tJH5fNaCWssrXvuPzP7nj7Ynm-vyLlaBGn1ty0glU&usqp=CAU',
  },
  {
    name: 'Jordan Air 14 Retro Gym Rojo',
    price: 275.99,
    image: 'https://m.media-amazon.com/images/I/61xYHPha7wL._AC_UY1000_.jpg',
  },

];

const TennisStore = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const removeAllItemsFromCart = () => {
    setCartItems([]);
    setCartOpen(false);
  };


  return (
    <div className="tennis-store-container">
      <h1 className="store-title">Welcome to Store</h1>
      <button className="cart-toggle-btn" onClick={() => setCartOpen(!cartOpen)}>
        <i className="bx bx-cart"></i>
        {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}
      </button>

      <div className="tennis-items-container">
        {tennisData.map((tennisItem, index) => (
          <div className="tennis-item" key={index}>
            <TennisItem {...tennisItem} addToCart={() => addToCart(tennisItem)} />
          </div>
        ))}
      </div>
      {cartOpen && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} removeAllItemsFromCart={removeAllItemsFromCart} />
      )}
    </div>
  );
};

export default TennisStore;