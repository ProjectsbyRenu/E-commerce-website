import React, { useEffect, useState } from 'react';
import './Men.css'
import Footer from './Footer';
import { CartContext } from './CartContext';
import { useContext} from 'react';





const Men = () => {
  const { addToCart, cartItems} = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);
   

   const handleAddToCart = (product) => {
  addToCart(product);

  setShowAlert(true);

  setTimeout(() => {
    setShowAlert(false);
  }, 2000); // alert disappears after 2 sec
};



  const cards = [
    {id:"01", image: "https://i.pinimg.com/1200x/6a/d2/6e/6ad26ea0c5df40a314096c8d7250ea67.jpg?v=1731410662", title: "Straight Fit Jean", price: "$50" },
    {id:"02", image: "https://i.pinimg.com/1200x/44/92/04/449204bab604cf44feab4d44bbd60d38.jpg", title: "Cargo Pants ", price: "$70" },
    { id:"03",image: "https://i.pinimg.com/1200x/d4/ef/5a/d4ef5ac33c1f6e6e9ce6de9f4f273f1d.jpg?v=1722184747", title: "Formal Pants", price: "$40" },
    {id:"04", image: "https://i.pinimg.com/736x/8c/1e/fe/8c1efe5d000fed9a852cee3931a89fdd.jpg?v=1729589731", title: "Dusty Jean", price: "$100" }


  ];


  const jacket = [
    {id:"001", image: "https://i.pinimg.com/736x/8c/6c/79/8c6c79775fb9e7d363dcc104ad2d2906.jpg?v=1725607956", title: "Brown Jacket ", price: "$50" },
    {id:"002", image: "https://i.pinimg.com/736x/75/35/65/75356578c1d590561e8765444516df14.jpg?v=1727343539", title: "Hoodie Jacket", price: "$70" },
    {id:"003", image: "https://i.pinimg.com/736x/df/50/ea/df50eafd4074275e4537ad943040a59d.jpg?v=1723375041", title: "Versity Jacket", price: "$40" },
    {id:"004", image: "https://i.pinimg.com/1200x/f6/fa/34/f6fa343d80408f4a3aee03a700a7b714.jpg?v=1731414064", title: "Leather Black Jacket", price: "$100" }


  ];

  const TShirt = [
    {id:"0001", image: "https://i.pinimg.com/1200x/71/df/41/71df4151d6a2fb06c660ac60f57d77bd.jpg?v=1723374823", title: "Oversized T-Shirt", price: "$50" },
    {id:"0002", image: "https://i.pinimg.com/736x/69/ed/5e/69ed5e4cf7b009dc84f8ea258321234b.jpg?v=1732828635", title: "Collar T-Shirt", price: "$70" },
    {id:"0003", image: "https://i.pinimg.com/1200x/a7/bb/47/a7bb472ebf295eea8db9a78be7e2c404.jpg?v=1723375521", title: "Collar full-sleeve ", price: "$40" },
    {id:"0004", image: "https://i.pinimg.com/736x/93/25/c9/9325c9a7028aee62ac677868b30bab90.jpg?v=1731409183", title: "Round Neck TShirt", price: "$100" }


  ];

  const Shirt = [
    {id:"0010", image: "https://i.pinimg.com/1200x/f3/67/48/f367488fca1b3a56b1f95255fb39478c.jpg?v=1723375753", title: "Check Shirt", price: "$50" },
    {id:"0020", image: "https://i.pinimg.com/736x/91/9c/9a/919c9afc372156a9620cb46b8ccda452.jpg?v=1723375171", title: "Formal Shirt", price: "$70" },
    { id:"0030",image: "https://i.pinimg.com/1200x/7b/f9/63/7bf963e9cedb4ed351e1bdf276b68012.jpg?v=1731423097", title: "Denim Shirt", price: "$40" },
    {id:"0040", image: "https://i.pinimg.com/736x/fe/fb/82/fefb82e2bd41e536e4070f3f5c44eda5.jpg?v=1723375830", title: "Half-Sleeve Shirt", price: "$100" }


  ];




  const boots = [
    {id:"00100", image: "https://i.pinimg.com/736x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg?v=1713542678", title: "Jordan Nike", price: "$50" },
    {id:"00200", image: "https://i.pinimg.com/736x/07/d7/be/07d7be474706fc674775292c7ccbb1ae.jpg?v=1712301301", title: "Chelsey Shoes", price: "$70" },
    {id:"00300", image: "https://i.pinimg.com/736x/5d/9c/08/5d9c0875a3ac4770ec84abd7de5ff14b.jpg?v=1713512908", title: "Gucci Loffer", price: "$40" },
    { id:"00400",image: "https://i.pinimg.com/736x/14/f4/fe/14f4fe3684469c2954e47d2a91988751.jpg?v=1713513668", title: "Boots Wear", price: "$100" }


  ]
  const must = [
    {id:"010", image: "https://i.pinimg.com/736x/fe/f6/25/fef6257178505376aad47571121da92d.jpg?v=1712743461", title: "YOU Men Perfume", price: "$50" },
    {id:"020", image: "https://i.pinimg.com/736x/09/3b/06/093b0655c06ec5b871cfefcdafb4e83b.jpg?v=1712744464", title: "Premium Watch", price: "$70" },
    {id:"030", image: "https://i.pinimg.com/1200x/a4/15/61/a415617218dc5273f8c2260d905cecd0.jpg?v=1695724483", title: "Ney York Prnit Cap", price: "$40" },
    {id:"040", image: "https://i.pinimg.com/736x/f0/10/bc/f010bc202703817a6d659c19114703b7.jpg?v=1695724483", title: "Neck Pendent", price: "$100" }


  ]





  const categories = [
    { label: 'Jeans', image: 'https://i.pinimg.com/236x/42/79/f1/4279f18509cb452609aeb9ed1290e279.jpg' },
    { label: 'Jackets', image: 'https://i.pinimg.com/236x/26/5a/7a/265a7add90f5682fc56ad7ccb656fd01.jpg' },
    { label: 'T-Shirts', image: 'https://i.pinimg.com/236x/5c/70/a4/5c70a4926f0ea515a78b0c76639f91bc.jpg' },
    { label: 'Shirts', image: 'https://i.pinimg.com/236x/73/04/2d/73042de63f8b034dd254edfe9a62ab88.jpg' },
    { label: 'Footwear', image: 'https://i.pinimg.com/236x/0e/be/b3/0ebeb3a6b859819e23a92a5f54c9f3b2.jpg' },
    { label: 'Must Haves', image: 'https://i.pinimg.com/474x/d3/db/81/d3db8159e6405c0d75aed0c334787dfe.jpg' },
  ];

  return (
    <>
      


     
      <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
     
      <div style={{ padding: '20px' }}>
        {/* Hero Section */}
       

        {/* Categories Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '30px',
          }}
        > 
          <a href='#jeans'>
           
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/236x/42/79/f1/4279f18509cb452609aeb9ed1290e279.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Jeans</label>
          </a>

         
          <a href='#jacket'>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/236x/26/5a/7a/265a7add90f5682fc56ad7ccb656fd01.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Jacket</label>
          </a>

          
          <a href='#tshirts'>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/236x/5c/70/a4/5c70a4926f0ea515a78b0c76639f91bc.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Men t-Shirts</label>
          </a>

          <a href='#shirts'>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/236x/73/04/2d/73042de63f8b034dd254edfe9a62ab88.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Men Shirt</label>
          </a>

          <a href='#boots'>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/236x/0e/be/b3/0ebeb3a6b859819e23a92a5f54c9f3b2.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Footwear</label>
          </a>
          <a href='#must'>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }} src='https://i.pinimg.com/474x/d3/db/81/d3db8159e6405c0d75aed0c334787dfe.jpg'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Must have</label>
          </a>
        </div>
      </div>
      </div>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://i.pinimg.com/736x/59/d3/25/59d3256f96d86022c542d053faa8740d.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      />
      </div>

{/*     
      card */}


      {/* jeaNS */}
      
      <div style={{ textAlign: "center" }}><h1 id='jeans'>Men Jeans</h1></div>
     
      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {cards.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>

   
{/* Jacket */}
      <div style={{ textAlign: "center" }}><h1 id='jacket'>Men Jacket</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {jacket.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>
   
        
      {/* tSHIRTS */}
      <div style={{ textAlign: "center" }}><h1 id='tshirts'>Men T-Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {TShirt.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>

{/* shirts */}
      <div style={{ textAlign: "center" }}><h1 id='shirts'>Men Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {Shirt.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>



{/* boot */}
      <div style={{ textAlign: "center" }}><h1 id='boots'>Men Shirts</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {boots.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>

      
{/* must have */}
      <div style={{ textAlign: "center" }}><h1 id='must'>Men Must Have</h1></div>

      <div className="card-men-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
         {must.map((card, index) => {

  const isInCart = cartItems.some(item => item.id === card.id);

  return (
         <div className="card" key={index}>
      <img
        src={card.image}
        style={{ width: "18rem", height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={card.title}
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.price}</p>
          
              <button
  onClick={() => handleAddToCart(card)}
  className="btn"
  style={{
    backgroundColor: isInCart ? "gray" : "#dc3545",
    color: "white",
    border: "none"
  }}
>
  {isInCart ? "Added" : "Add to Cart"}
</button>


            </div>
          </div>
        )
      })};
      </div>



      

      <Footer></Footer>
      

      </>
  );
};

export default Men;
