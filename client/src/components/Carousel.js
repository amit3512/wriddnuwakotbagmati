import slider from "../images/slide2.jpg";
import slider1 from "../images/slide1.jpg";
import slider2 from "../images/slide3.jpg";

function Carousel() {
  return (
    <div
      id="my-carousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="2000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#my-carousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#my-carousel" data-slide-to="1"></li>
        <li data-target="#my-carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 carousel-image"
            src={slider}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slider1} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slider2} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#my-carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#my-carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
