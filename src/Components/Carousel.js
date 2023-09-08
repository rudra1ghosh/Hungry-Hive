import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/2000x700/?chickenbiryani" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <center><strong><h4 style={{backgroundColor:"#FF9B50", borderRadius:"25px", color:"black", width:'25%'}}>Chicken Biryani</h4></strong></center>
        <p style={{backgroundColor:"#C63D2F", borderRadius:"25px", color:"white",fontSize:"1rem"}}>"Indulge in the irresistible flavors of our signature Chicken Biryani – where tradition meets taste, only at Hungry Hive. 🍗🍚"</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/2000x700/?mutton" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <center><strong><h4 style={{backgroundColor:"#FF9B50", borderRadius:"25px", color:"black", width:'25%'}}>Mutton Roganjosh</h4></strong></center>
        <p style={{backgroundColor:"#C63D2F", borderRadius:"25px", color:"white",fontSize:"1rem"}}>"Savor the rich and aromatic Mutton Rogan Josh that's a culinary masterpiece. A Kashmiri delight that's sure to tantalize your taste buds! 🍖🌶️ </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/2000x700/?kebab" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <center><strong><h4 style={{backgroundColor:"#FF9B50", borderRadius:"25px", color:"black", width:'25%'}}>Kebabs</h4></strong></center>
        <p style={{backgroundColor:"#C63D2F", borderRadius:"25px", color:"white",fontSize:"1rem"}}>Grilled to perfection, our kebabs are a symphony of flavors that will have you coming back for more. Experience the art of kebab indulgence. 🔥🍢</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
