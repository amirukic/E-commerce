import Product from "../images/image-product-1.jpg";

function Main() {
  return (
    <main>
      <img src={Product} alt="Product image" id="product-image"/>
      <aside className="image-text">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneaker are your perfect casualwear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
        <h2>$125.00    <p>50%</p></h2>
        <p>$250.00</p>
        <div>- 0 +  <button>Add to cart</button></div>

      </aside>
    </main>
  );
}

export default Main;
