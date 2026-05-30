// App.js

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = React.useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  
  const products = [
    {
      id: 1,
      name: "Macbook",
      price: 120000,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-specs-select-202601-13inch-midnight?wid=5120&hei=3280&fmt=webp&qlt=90&.v=ajdLenRnamROTGJtUHRvOGZlUzI4MU0yT2lzdkN4K05EeWJacEtORTNwZTVFT3l4YzdjbU9SNjRscVJWQjRYMUVlNEJLYXlpcWN3dVUzSHNPQldJNDUyTGQvczVjTzVnd1B6UVQwaE1kY2lrL0ZaT3RUUHBnLzlIcmhSeFQ5UVZyTEhqaFJlNk5MelQyK0xzSUliR3h3&traceId=1",
    },
    {
      id: 2,
      name: "HP Victus Gaming Laptop",
      price: 120000,
      image:
        "https://vsprod.vijaysales.com/media/catalog/product/2/4/243615_1_1.jpg?optimize=medium&fit=bounds&height=500&width=500",
    },
    {
      id: 3,
      name: "Lenovo Legion 5 Intel Core i7 14th Gen ",
      price: 124990,
      image:
        "https://rukminim1.flixcart.com/image/982/982/xif0q/computer/1/w/p/-original-imahg4usyzjghtkn.jpeg?q=90",
    },
    {
      id: 4,
      name: "IPAD",
      price: 125000,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-space-gray-wifi?wid=5120&hei=2880&fmt=webp&qlt=90&.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM3hxSU9Rc1hENld5ZlZGbisxZU9hWHRiNzVnbmkvN1ZZYkRMenpIV2Q5ekNlK1pFRmg5Nk5jMkFxQWRaWlM3TXppOHgxUjM1bG1hRnArQXQ1elR1RlAzRk50S1FYUDZkYVAwZURDcENXcUY2Sm1vYmRTdXVOSmZsWUgyTzhKVjNB&traceId=1",
    },
    {
      id: 5,
      name: "Samsung Galaxy Tab S11",
      price: 122999,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/tablet/m/2/0/-original-imahfqbmnnx3cg53.jpeg?q=90",
    },
    {
      id: 6,
      name: "One Plus Tab 4",
      price: 65000,
      image:"https://m.media-amazon.com/images/I/61tTZgq1OIL._SL1500_.jpg",
    },
    {
      id: 7,
      name: "iPhone 17 Pro max",
      price: 150000,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RnVrUzFnTVVSUnNLVnZUWUMxNTBGaGhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHQyaWthYXpzcEpXMExJLy9GTE9wWkNn&traceId=1",
    },
    {
      id: 8,
      name: "Samsung Galaxy S24 Ultra",
      price: 130000,
      image: "https://www.triveniworld.com/cdn/shop/files/samsung-galaxy-s24-ultra-5g-ai-smartphone-titanium-black-12gb-256gb-storage-triveni-world-1.jpg?v=1736300725&width=990",
    },
    {
      id: 9,
      name: "Xiaomi 17 Ultra",
      price: 140000,
      image: "https://vsprod.vijaysales.com/media/catalog/product/0/_/0_2.jpg?optimize=medium&fit=bounds&height=500&width=500",
    },
    {
      id: 10,
      name: "Samsung 98 inch Ultra HD LED Smart Tizen TV",
      price: 279990,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/television/t/f/1/-original-imahyvvhd88pe8dc.jpeg?q=90",
    },
    {
      id: 11,
      name: "Samsung 75 inch AI Smart TV",
      price: 90000,
      image: "https://m.media-amazon.com/images/I/81PUr03bMpL._SL1500_.jpg",
    },
    {
      id: 12,
      name: "SONY BRAVIA 5 247 cm (98 inch) 1 Star Mini LED Ultra HD Smart Google TV",
      price: 553290,
      image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/317198_0_SMWZKweua.png?updatedAt=1760547527678?tr=w-640",
    },
    {
      id: 13,
      name: "Apple Watch Ultra 2 GPS" ,
      price: 104999,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/smartwatch/0/i/y/-original-imah4jmacntnedtr.jpeg?q=90",
    },
    {
      id: 14,
      name: "Samsung Galaxy Watch " ,
      price: 45000,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/smartwatch/l/l/f/-original-imahe8sqxggtvkhy.jpeg?q=90",
    },
    {
      id: 15,
      name: "GARMIN Forerunner 965 Smartwatch" ,
      price: 74299,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/smartwatch/t/x/i/-original-imahg4nx8y7zbpvn.jpeg?q=90",
    },
    {
      id: 16,
      name: "VERSACE Analogue Watch For Men" ,
      price: 91840,
      image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260203/csh1/69820d79cbfa0d5608bcf7dd/-473Wx593H-701160260-silver-MODEL.jpg",
    },
    {
      id: 17,
      name: "Xylys Triumph Swiss Chronograph Dial Watch" ,
      price: 35900,
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw53e90f13/images/Xylys/Catalog/40056KM01E_1.jpg?sw=600&sh=600",
    },
    {
      id: 18,
      name: "TISSOT Men PR516 Chronograph Watch" ,
      price: 58000,
      image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250910/i87b/68c1379e8bfb9009acf2c735/-473Wx593H-700472225-grey-MODEL.jpg",
    },
    {
      id: 19,
      name: "Nike ZoomX  White Particle Sneaker" ,
      price: 24000,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ96PEzUKrVG01FAfoKQnBi4HAXfBNmp-7TeA1SCPdXEZjceHy3MKc7NBA52aCS1LcLWTRr3Qaq86q4xF2Ux_HV2eZ3eUaOS4OfLebUD9EhLJk7WC50mv-N",
    },
    {
      id: 20,
      name: "Nike - Air Max 97 Premium QS sneakers Black" ,
      price: 35000,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAer_w6VmVlflOHiVP8AlMNAotTOZ8t4Gtdxzwv2aynoJSQKodcjxbS3rph6a2peF7WQl1jldDVAZRADzoj5LikcbGr6cyBs-Mod2E8G_NXfHYJWxNJ01f7Q",
    },
    {
      id: 21,
      name: "Nike Air Zoom Pegasus Premium Airscape Sneaker" ,
      price: 37000,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8B4kT1SmgjpwHw69nL-1x33FsG2sq2GYWjaa6YWzB6hkbkZ2UIXx4n4ngJSB5_S_kbcy3MX7D4-XOdVUwb-etCJT8lRousvw3D066M4vBEIYNhDOkQ9WE6g",
    },
    {
      id: 22,
      name: "Balmain Black Cotton T-Shirt",
      price: 22700,
      image: "https://littletagsluxury.com/cdn/shop/files/BV8Q21Z0116930AG-a_f004e9e6-f144-4d1f-8911-022ec8417206.jpg?v=1765178133&width=900",
    },
    {
       id: 23,
      name: "Burberry EKD cotton jersey T-shirt",
      price: 32000,
      image: "https://www.mytheresa.com/image/1094/1238/100/d2/P01014614.jpg",
    },
    {
       id: 24,
      name: "Printed Cotton-Jersey T-Shirt",
      price: 25000,
      image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwf13a0560/original/90_1014226-1A10088_1B000_10_PrintedCotton~JerseyT~Shirt-T~shirts~~Polos-Versace-online-store_2_1.jpg?sw=1200&q=85&strip=true",
    }

  ];
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
       <div>

    {/* Navbar */}
    <Navbar cartCount={count} />

    {/* Login */}
    <Login
      showLogin={showLogin}
      setShowLogin={setShowLogin}
    />

    {/* Hide Search + Products During Login */}
    {!showLogin && (
      <>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Products */}
        <div className="product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                count={count}
                setCount={setCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))
          ) : (
            <h2 className="not-found">
              Please search the item present in the site or item given below.
            </h2>
          )}
        </div>

        {/* Cart Section */}
        <div className="cart-section">

          <h2>Added Products</h2>

          {cartItems.length === 0 ? (
            <p>No product added</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}

        </div>

      </>
    )}

  </div>
);
}
export default App;