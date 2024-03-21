import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="container text-center">
      {/* FIRST ROW.  IMAGE, RESOURCES HEADING, AND BLURB WELCOMING USERS TO THE PLAYGROUND*/}
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
        {/* SECOND ROW OF TWO COLUMNS, EACH WITH A CAROUSEL FOR BENCH MOVEMENT AND GENERAL GOLD*/}
        <div className="feature-row row">
          <div className="col">
            <h3 className="column-headings">The Bench Movement</h3>

            <div id="carouselOne" className="carousel slide carousel-fade">
              <div className="article-container carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-content">
                    <a href="https://bbc.com/news/uk-wales-50000204" target="_blank" rel="noopener noreferrer">
                      <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710962147/happytochatbbcsmall_kizrqb.png" className="d-block w-100" alt="image of 2 women sitting on a happy-to-chat bench" />
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="carousel-one-h5">Happy to Chat benches, UK & Vancouver</h5>
                      <p><a className="slide-links slide-links-carousel-one" href="https://bbc.com/news/uk-wales-50000204" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                    </div>
                  </div>
                </div>
              <div className="carousel-item">
                <a href="https://www.cbc.ca/news/canada/nova-scotia/happy-to-chat-benches-in-dartmouth-encourage-strangers-to-start-talking-1.6552400" target="_blank" rel="noopener noreferrer">
                  <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710962120/happytochatcbcsmall_sx44mc.png" className="d-block w-100" alt="Another image of two women sitting on a happy-to-chat bench" />
                </a>
                  <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-one-h5">Happy to Chat benches, Dartmouth, N.S.</h5>
                  <p><a className="slide-links slide-links-carousel-one" href="https://www.cbc.ca/news/canada/nova-scotia/happy-to-chat-benches-in-dartmouth-encourage-strangers-to-start-talking-1.6552400" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://bbc.com/news/uk-england-nottinghamshire-60057551" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967494/afterlifebench_smaller_a71ria.png" className="d-block w-100" alt="Picture of actors Ricky Gervais and Penelope Wilton, stars of the Netflix series Afterlife, sitting on a bench" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-one-h5">Netflix installs 25 After-life benches around UK</h5>
                  <p><a className="slide-links slide-links-carousel-one" href="https://bbc.com/news/uk-england-nottinghamshire-60057551" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://www.ydr.com/story/news/2017/06/08/am-american-christian-bucks-popularizes-buddy-bench/339390001/" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967510/buddy_bench_smaller_niocrz.png" className="d-block w-100" alt="11 year old Pennsylvania schoolboy Christian Bucks sits on the buddy bench at his school" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-one-h5">Pennsylvania schoolkid invents Buddy Bench</h5>
                  <p><a className="slide-links slide-links-carousel-one" href="https://www.ydr.com/story/news/2017/06/08/am-american-christian-bucks-popularizes-buddy-bench/339390001/" target="_blank" rel="noopener noreferrer">Read the article</a></p>
                </div>
                </div>
                <div className="carousel-item">
                  <a href="https://www.thelantern.com/2021/03/nobody-there-a-talking-bench-activated-by-sitting-participants-shares-inspirational-quotes/" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710967494/nobody_there_bench_smaller_di1rwr.png" className="d-block w-100" alt="Man sits on a bench as if talking to someone but nobody's there" />
                  </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-one-h5">Nobody's There Bench theatre installation</h5>
                  <p><a className="slide-links slide-links-carousel-one" href="https://www.thelantern.com/2021/03/nobody-there-a-talking-bench-activated-by-sitting-participants-shares-inspirational-quotes/" target="_blank" rel="noopener noreferrer">Read the article</a></p>
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
  <div className="carousel-container">
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/iCvmsMzlF7o?si=Z2ZauIi9Q68mFf_S&amp;start=15"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-caption-carousel-two d-none d-md-block">
          <h5>Brene Brown on Vulnerability</h5>
          <a className="slide-links" href="https://brenebrown.com/books-audio/" target="_blank" rel="noopener noreferrer">See her books</a>
        </div>
        </div>
      <div className="carousel-item">
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/R1vskiVDwl4?si=3xqwMX8Lj9HSH6xZ&amp;start=12"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-caption-carousel-two d-none d-md-block">
          <h5>Celeste Headlee on having better conversations</h5>
          <a className="slide-links" href="https://www.adventurebook.com/connect/how-to-have-better-conversations-with-your-partner/" target="_blank" rel="noopener noreferrer">Applied to couples</a>
        </div>
      </div>
      <div className="carousel-item">
      <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/arj7oStGLkU?si=5DLUQu_Rg_TbNOQN&amp;start=12"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-caption-carousel-two d-none d-md-block">
          <h5>Tim Urban on Procrastination</h5>
          <a className="slide-links" href="https://jamesclear.com/procrastination#Why%20Do%20We%20Procrastinate?" target="_blank" rel="noopener noreferrer">Re: Science & Strategies</a>
        </div>
      </div>
      <div className="carousel-item">
      <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/f01ni1dx2jk?si=WtzAFjYM1GyeGQLL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-caption-carousel-two d-none d-md-block">
          <h5>Jordan Peterson on How to Live Responsibly</h5>
          <a className="slide-links" href="https://www.jordanbpeterson.com/" target="_blank" rel="noopener noreferrer">Visit his website</a>
        </div>
      </div>
      <div className="carousel-item">
      <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/mhZ7JtEShGE?si=SaH7QXZk7hH4I8_Q&amp;start=74"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-caption-carousel-two d-none d-md-block">
          <h5>Anderson Cooper's Grief Podcast</h5>
          <a className="slide-links" href="https://podcasts.apple.com/us/podcast/all-there-is-with-anderson-cooper/id1643163707" target="_blank" rel="noopener noreferrer">Links to episodes</a>
        </div>
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
        

        <div className="assessments-row row">
          {/* THIRD ROW OF THREE COLUMNS, EACH WITH AN H3, A CAROUSEL FOR BIG 5, LOVE LANGUAGES AND CONFLICT STYLES, A LINK TO THE ASSESSMENTS AND SPANNING THE WHOLE ROW UNDER THE COLUMNS, THE ASSESSMENT CAVEAT */}
          <div className="col">
            <h3 className="column-headings">The Big 5 Personality Traits</h3>
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
                  <a className="assessment-links" href="https://bigfive-test.com/" target="_blank" rel="noopener noreferrer">Take the Big Five Personality Assessment</a>
                  {/* In future if there are more resources related to Big 5 personality, other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
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
            <h3 className="column-headings">The 5 Love Languages</h3>
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
                  <a className="assessment-links" href="https://www.covenantcc.co/sovlib/external_articles/five_love_languages_quiz.pdf" target="_blank" rel="noopener noreferrer">Take the Love Languages Assessment</a>
                  {/* In future if there are more resources related to the love languages other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
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
            <h3 className="column-headings">The 5 Conflict Styles</h3>
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
                  <a className="assessment-links" href="https://static.rsagroup.com/rsa/brokers-and-partners/broker-leadership-hub/2022/thomas-kilmann-conflict-mode-instrument-questionnaire.pdf" target="_blank" rel="noopener noreferrer">Take the Conflict Styles Assessment</a>
                </div>
                {/* In future if there are more resources related to conflict management style other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
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
          <p className="assessment-caveat">**VERY IMPORTANT** The assessments impose "forced-choice". There may be questions where you feel that both answers describe you but ask yourself "if forced to choose...", and answer accordingly. It is essential that you complete the assessment ON YOUR OWN and not by asking someone close to you to describe you. If you collaborate, it will invalidate the results. The goal is to discern the kind of issues that arise when people close to one another have marked differences in personality, love language, or conflict management style.</p>
        </div>


        <div className="financial-personal-career-row row">
          {/* FOURTH ROW OF THREE COLUMNS, EACH WITH AN H3, A CAROUSEL FOR FINANCIAL, PERSONAL AND CAREER */}
          <div className="col">
            <h3 className="column-headings">Financial</h3>
            <div id="carouselSix" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711046401/hiddenbrainfinancerecommendcardsmall_ysris3.png" className="d-block w-100" alt="information slide recommending a podcast with its description and the hidden brain brand header" />  
                  <a className="assessment-links" href="https://hiddenbrain.org/podcast/money-2-0-rewrite-your-money-story/" target="_blank" rel="noopener noreferrer">Take me there</a>
                  {/* In future if there are more resources related to Financial, other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
                
                <div className="carousel-item">
                  <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711049421/nostupidquestionskidsallowancesvsjobsmall_qcvwkd.png" className="d-block w-100" alt="Slide 2" />
                  <a className="assessment-links" href="https://freakonomics.com/podcast/should-you-give-kids-an-allowance-or-make-them-get-jobs/" target="_blank" rel="noopener noreferrer">Take me there</a>
                  {/* In future if there are more resources related to Financial, other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                </div>
                
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselSix" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselSix" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
          <div className="col">
            <h3 className="column-headings">Personal</h3>
            <div id="carouselSeven" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711052296/anxietycbtworkbooksmaller_sus0e0.png" className="d-block w-100" alt="recommendation card for the Generalized Anxiety Disorder Workbook by Melisa Robichaud and Michel Dugas, showing the book's cover" />
                  <a className="assessment-links" href="https://www.newharbinger.com/9781626251519/the-generalized-anxiety-disorder-workbook/" target="_blank" rel="noopener noreferrer">See Details</a>
                  {/* In future if there are more resources related to Personal other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                </div>
                <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711051422/depressioncbtworkbooksmall_fe3vb0.png" className="d-block w-100" alt="recommendation card for the Cognitive Behavioral Workbook for Depression by William Knaus and Albert Ellis, showing the book's cover" />
                  <a className="assessment-links" href="https://www.newharbinger.com/9781608823802/the-cognitive-behavioral-workbook-for-depression/" target="_blank" rel="noopener noreferrer">See Details</a>
                  {/* In future if there are more resources related to Personal other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
                <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711056393/havekidspodcastsmall_vcf7oa.png" className="d-block w-100" alt="recommendation card for the Cognitive Behavioral Workbook for Depression by William Knaus and Albert Ellis, showing the book's cover" />
                  <a className="assessment-links" href="https://freakonomics.com/podcast/is-having-children-worth-it/" target="_blank" rel="noopener noreferrer">Take me there</a>
                  {/* In future if there are more resources related to Personal other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
                <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711057155/Forgive_for_good_lldtdj.png" className="d-block w-100" alt="recommendation card for Dr Fred Luskin's Forgive for Good, showing the book's cover" />
                  <a className="assessment-links" href="https://www.goodreads.com/book/show/1459610.Forgive_for_Good?from_search=true&from_srp=true&qid=2BxxE4GZNE&rank=1" target="_blank" rel="noopener noreferrer">Read Reviews</a>
                  {/* In future if there are more resources related to Personal other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
                <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711057542/griefcastsmall_wfccu9.png" className="d-block w-100" alt="recommendation card for a podcast featuring UK comedian Cariad Lloyd, on the subject of grief" />
                  <a className="assessment-links" href="https://podcasts.apple.com/us/podcast/griefcast/id1178572854" target="_blank" rel="noopener noreferrer">Take me there</a>
                  {/* In future if there are more resources related to Personal other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselSeven" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselSeven" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col">
            <h3 className="column-headings">Career</h3>
            <div id="carouselEight" className="carousel slide carousel-fade">
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711054153/fromgoodtogreat_if1din.png" className="d-block w-100" alt="book cover of Jim Collins' Good to Great" />  
                  <a className="assessment-links" href="https://www.goodreads.com/book/show/76865.Good_to_Great?from_search=true&from_srp=true&qid=4jCQRgk4Fo&rank=1" target="_blank" rel="noopener noreferrer">Read Reviews</a>
                  {/* In future if there are more resources related to Financial, other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                
                </div>
                
                <div className="carousel-item">
                  <img src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711054607/gettingtoyes_arpz6y.png" className="d-block w-100" alt="Cover of the book Getting to Yes, by Roger Fisher and William Ury" />
                  <a className="assessment-links" href="https://www.goodreads.com/book/show/313605.Getting_to_Yes?from_search=true&from_srp=true&qid=h5XQ1CuqWr&rank=1" target="_blank" rel="noopener noreferrer">Read Reviews</a>
                  {/* In future if there are more resources related to Financial, other carousel slides can be added in here
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/800x600" className="d-block w-100" alt="Slide 2" />
                </div>
                */}
                </div>
                
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselEight" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselEight" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> {/* COLUMN CLOSE*/}
        </div> {/* ROW CLOSE*/}


      </div>
    </div>
  );
}

export default Resources;


