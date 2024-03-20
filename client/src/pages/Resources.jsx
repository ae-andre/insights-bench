import React from 'react';
import './';

function Resources() {
  return (
    <div>
      <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710923268/park4_i05cdy.png" alt="A park in the foreground against a city skyline in the background with the words soul bench written across the top. The park has a pavilion and two benches." />
      <h2>Resources Page</h2>
      <p>Description of resources...</p>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h3>Column 1</h3>
            <div id="carouselOne" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselOne" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselOne" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col">
            <h3>Column 2</h3>
            <div id="carouselTwo" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselTwo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselTwo" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3>Column 1</h3>
            <div id="carouselThree" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselThree" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselThree" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col">
            <h3>Column 2</h3>
            <div id="carouselFour" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselFour" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselFour" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col">
            <h3>Column 3</h3>
            <div id="carouselFive" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselFive" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselFive" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;


