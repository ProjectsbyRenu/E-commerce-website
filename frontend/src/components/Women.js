import './Women.css';
import Footer from './Footer';
import 'aos/dist/aos.css';
import { CartContext } from './CartContext';
import { useContext, useState} from 'react';
import AOS from 'aos';






const Women = () => {
  
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
    { id:1,image: "https://i.pinimg.com/736x/2c/68/e6/2c68e63b16375a8c56c8eb01ba5f9750.jpg?v=1733743681", title: "Officewear Pant", price: "$50" },
    { id:2, image: "https://i.pinimg.com/736x/45/69/31/4569318177b087d4fde26329bf9dd57a.jpg?v=1757575094&width=493?v=1734075770", title: "Comfy Pant", price: "$70" },
    {id:3, image: "https://i.pinimg.com/736x/1b/e1/12/1be11263ec2e0a2b13adbe6400c98ded.jpg?v=1734018374", title: "Oversized Trackpant", price: "$40" },
    {id:4, image: "https://i.pinimg.com/1200x/1f/2e/52/1f2e52fcab12d88844297cfe8cb180fa.jpg?v=1695725994", title: "Straight Fit Jean", price: "$100" }


  ];


  const jacket = [
    {id:101, image: "https://i.pinimg.com/736x/b2/18/35/b21835c18f3a45b95c28e1fb45c1d68a.jpg", title: "Leather Jacket", price: "$50" },
    {id:102, image: "https://i.pinimg.com/736x/a0/20/31/a02031d02d35f255509384911d791017.jpg?v=1732618105", title: "Bomber Jacket", price: "$70" },
    { id:103,image: "https://i.pinimg.com/1200x/92/35/77/9235774b8dd7698ca487c91233a5875a.jpg?v=1712742962", title: "Black Cardigan", price: "$40" },
    { id:104,image: "https://i.pinimg.com/736x/1d/63/70/1d63708e8901132f967391adebd39aa6.jpg?v=1734021526", title: "Cropped Utility Jacket", price: "$100" }


  ];

  const TShirt = [
    { id:201,image: "https://i.pinimg.com/1200x/22/a1/78/22a178e049fdc5ed077a74f8104070d3.jpg?v=1731473790", title: "Drop Shoulder", price: "$50" },
    {id:202, image: "https://i.pinimg.com/736x/d1/39/81/d139812a3359c028806486c11e1fb0f6.jpg?v=1726117600", title: "Oversized Buffywear", price: "$70" },
    {id:203, image: "https://i.pinimg.com/736x/e0/45/0f/e0450f28b3ce5ae01c1ea8353c533d82.jpg?v=1734020455", title: "Shirtype-Top", price: "$40" },
    { id:204,image: "https://i.pinimg.com/1200x/64/96/15/6496158b35fb9a959889898b534b18ff.jpg?v=1731473899", title: "Double Pocket", price: "$100" }


  ];

  const Shirt = [
    {id:301, image: "https://i.pinimg.com/1200x/01/e9/31/01e93152b99489d378b5ecf65e07d6b1.jpg?v=1725601006", title: "Check Shirt", price: "$50" },
    {id:302, image: "https://i.pinimg.com/736x/56/e5/6c/56e56c311f5deb4855c13bb9fefba4c0.jpg?v=1725599576", title: "Half-Sleeve Formal", price: "$70" },
    {id:303, image: "https://i.pinimg.com/1200x/12/92/f2/1292f276028e4eca3a3d4261d4bb1ce9.jpg?v=1726117586", title: "Denim Shirt", price: "$40" },
    { id:304,image: "https://i.pinimg.com/1200x/cb/d4/ed/cbd4eda7a599b6b83eae16d6939a4c3c.jpg?v=1728282907", title: "Full-Sleeve Top", price: "$100" }


  ];




  const boots = [
    {id:401, image: "https://i.pinimg.com/736x/61/02/1a/61021ae5af3b3135798647790a874924.jpg?v=1695736676", title: "White Sneaker", price: "$50" },
    { id:402,image: "https://i.pinimg.com/736x/c0/59/d2/c059d25c67df5390f6678daa12763315.jpg?v=1712301301", title: "Angle Wear Boots", price: "$70" },
    {id:403, image: "https://i.pinimg.com/736x/18/5e/85/185e8508433c7d19b72a396222441c4f.jpg?v=1713512908", title: "Sandle Heels", price: "$40" },
    {id:404, image: "https://i.pinimg.com/736x/48/09/8f/48098f27d87beda1a29edb6f75eb6c53.jpg?v=1713513668", title: "Lady Loffers", price: "$100" }


  ]
  const must = [
    { id:501,image: "https://i.pinimg.com/1200x/9e/62/13/9e6213880b7f72b01b84e945ca5d2fad.jpg?v=1712741829", title: "Leaf locket", price: "$50" },
    {id:502, image: "https://i.pinimg.com/736x/a2/f4/14/a2f414f32914b2416742fcc1dd5151b9.jpg?v=1695724914", title: "Miss Dior", price: "$70" },
    { id:503,image: "https://i.pinimg.com/736x/19/0c/f8/190cf8ee1f72a29636bf54fd3c557558.jpg?v=1695725317", title: "Retro Watch", price: "$40" },
    {id:504, image: "https://i.pinimg.com/1200x/56/1b/15/561b15ad6f6ce24c34f853db61fbd062.jpg?v=1695725426", title: "Purse Vintage", price: "$100" }


  ]



  return (
    <>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
    
      <div style={{ padding: '20px' }}>
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
              }} src='https://levi.in/cdn/shop/collections/Jeans.jpg?v=1724060472'></img>
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
              }} src='https://levi.in/cdn/shop/collections/women_jacket.jpg?v=1724060568'></img>
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
              }} src='https://levi.in/cdn/shop/collections/womens_top.jpg?v=1710416531'></img>
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
              }} src='https://levi.in/cdn/shop/collections/women_t_shirt.jpg?v=1724060619'></img>
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
              }} src='https://levi.in/cdn/shop/collections/footwear_2_d2837be0-07ec-4084-af41-d9a6092623a6.jpg?v=1724060538'></img>
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
              }} src='https://levi.in/cdn/shop/collections/musthaves_b6a2eda7-fea1-43bd-ba45-1ea1f6db6597.jpg?v=1724060590'></img>
            <label style={{ padding: '10px', fontWeight: 'bold' }}>Must have</label>
          </a>

        </div>
      </div>
      </div>
      {/* Women Section */}
      
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://i.pinimg.com/736x/ac/b7/b3/acb7b323d89bec6e18e84b68590405b6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
        />
      </div>

      {/* card */}


      {/* jeaNS */}
    
     
    
    
     
      <div style={{ textAlign: "center" }}><h1 id='jeans'>Women Jeans</h1></div>

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
   
   


  
     
      <div style={{ textAlign: "center" }}><h1 id='jacket'>Women Jacket</h1></div>
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
    


      {/* women top */}
    
      <div style={{ textAlign: "center" }}><h1 id='tshirts'>Women Top</h1></div>

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
     
   
      <div style={{ textAlign: "center" }}><h1 id='shirts'>Women Shirts</h1></div>

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
    
   
      <div style={{ textAlign: "center" }}><h1 id='boots'>Women Shirts</h1></div>

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
    

      <div style={{ textAlign: "center" }}><h1 id='must'>Women Must Have</h1></div>

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


     

      <Footer />
    </>
  );
};

export default Women;
