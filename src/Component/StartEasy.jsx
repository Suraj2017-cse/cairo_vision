import React from 'react'

const StartEasy = () => {
    const carouselItems = [
        { id: 1, imageUrl: 'https://images.pexels.com/photos/16638671/pexels-photo-16638671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Item 1' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/15858942/pexels-photo-15858942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Item 2' },
        { id: 3, imageUrl: 'image3.jpg', title: 'Item 3' },
      ];
    
      return (
        <>
        <h1>carousel</h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item${index === 0 ? ' active' : ''}`}
          >
            <img src={item.imageUrl} className="d-block w-100" alt={item.title} />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
        </>
      );
    
    
    
    
}

export default StartEasy