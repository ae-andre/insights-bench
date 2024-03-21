import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="container text-center">
      <div className="row gx-5">
        <div className="col-md-9">
          <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710923268/park4_i05cdy.png" alt="A park in the foreground against a city skyline in the background with the words soul bench written across the top. The park has a pavilion and two benches." id="park-img" className="img-fluid" />
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          <h2 className="d-flex justify-content-center align-items-center">Resources</h2>
          <p className="w-100 d-flex align-items-center">Here are some curated resources that the Soul Bench creators consider worthwhile. Think of this page as the park playground. Watch the videos, follow the links, take the tests... </p>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h3 className="column-headings">The Bench Movement</h3>

            <div id="carouselOne" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="https://bbc.com/news/uk-wales-50000204" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710962147/happytochatbbcsmall_kizrqb.png" className="d-block w-100" alt="image of 2 women sitting on a happy-to-chat bench" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Happy to Chat benches in the UK and Vancouver</h5>
                  <p><a className="slide-links" href="https://bbc.com/news/uk-wales-50000204" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
              </div>
              <div className="carousel-item">
                <a href="https://www.cbc.ca/news/canada/nova-scotia/happy-to-chat-benches-in-dartmouth-encourage-strangers-to-start-talking-1.6552400" target="_blank" rel="noopener noreferrer">
                  <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710962120/happytochatcbcsmall_sx44mc.png" className="d-block w-100" alt="Another image of two women sitting on a happy-to-chat bench" />
                </a>
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Happy to Chat benches in Dartmouth, N.S.</h5>
                  <p><a className="slide-links" href="https://www.cbc.ca/news/canada/nova-scotia/happy-to-chat-benches-in-dartmouth-encourage-strangers-to-start-talking-1.6552400" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://bbc.com/news/uk-england-nottinghamshire-60057551" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967494/afterlifebench_smaller_a71ria.png" className="d-block w-100" alt="Picture of actors Ricky Gervais and Penelope Wilton, stars of the Netflix series Afterlife, sitting on a bench" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>After-life benches in the UK</h5>
                  <p><a className="slide-links" href="https://bbc.com/news/uk-england-nottinghamshire-60057551" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://www.ydr.com/story/news/2017/06/08/am-american-christian-bucks-popularizes-buddy-bench/339390001/" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967510/buddy_bench_smaller_niocrz.png" className="d-block w-100" alt="11 year old Pennsylvania schoolboy Christian Bucks sits on the buddy bench at his school" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Pennsylvania schoolkid invents the Buddy Bench</h5>
                  <p><a className="slide-links" href="https://www.ydr.com/story/news/2017/06/08/am-american-christian-bucks-popularizes-buddy-bench/339390001/" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://www.thelantern.com/2021/03/nobody-there-a-talking-bench-activated-by-sitting-participants-shares-inspirational-quotes/" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967494/nobody_there_bench_smaller_di1rwr.png" className="d-block w-100" alt="Man sits on a bench as if talking to someone but nobody's there" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Nobody's There Bench theatre installation</h5>
                  <p><a className="slide-links" href="https://www.thelantern.com/2021/03/nobody-there-a-talking-bench-activated-by-sitting-participants-shares-inspirational-quotes/" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
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
            <h3 className="column-headings">General Gold</h3>
            
            <div id="carouselTwo" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="video-container">
                  <iframe
                   width="100%"
                   height="315"
                   src="https://www.youtube.com/embed/iCvmsMzlF7o?si=Z2ZauIi9Q68mFf_S&amp;start=15"
                   title="YouTube video player"
                   frameborder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen 
                  ></iframe>
                </div>
                </div>
                <div className="carousel-item">
                <div className="video-container">
                  <iframe
                   width="100%"
                   height="315"
                   src="https://www.youtube.com/embed/R1vskiVDwl4?si=3xqwMX8Lj9HSH6xZ&amp;start=12"
                   title="YouTube video player"
                   frameborder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen 
                  ></iframe>
                </div>
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
            <h3 className="column-headings">The Big 5 Personality Traits: OCEAN</h3>
            <div id="carouselThree" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <iframe
                    className="d-block w-100"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Q8w6SPNrwqk?si=cITbWuZn1xee_nPm&start=7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
            <h3 className="column-headings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The 5 Love Languages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><br></br>
            <div id="carouselFour" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <iframe
                    className="d-block w-100"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0_E_EdwpAOg?si=0Ci4sMr5LcBcT5Rn&start=11"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
            <h3 className="column-headings">The 5 Conflict Management Styles</h3>
            <div id="carouselFive" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <iframe
                    className="d-block w-100"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pUI9-MwCmGM?si=5uZds2xT8hFWIBkP"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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


