function Ass3Firebase() {
  const firebaseLogo =
    "https://www.gstatic.com/devrel-devsite/prod/v2da93aa60669b71438f99bb5fb68249484fcf793f7af3b913066e15e86e01923/firebase/images/touchicon-180.png";
  const firebaseDemo1 =
    "Firebase helps you build and run successful apps Backed by Google and loved by app development teams - from startups to global enterprises";
  const firebaseDemo2 =
    "In Firebase, you can directly access the backend from your client app";
  const firebaseCarousel1 =
    "https://firebase.google.com/images/summit/firebase_summit_2021_blog.png";
  const firebaseCarousel2 =
    "https://firebase.google.com/images/events/02_firebaselive.png";
  const firebaseCarousel3 =
    "https://1.bp.blogspot.com/-MXn_kNo8yFI/YYWPCtkQxmI/AAAAAAAAF-8/tehHlefn3xcnqNmV7xTvhSwKQfFfFwOLQCLcBGAsYHQ/s0/FBS21_Blog_v3.png";
  return (
    <div className="container mx-auto text-center">
      <div className="firebase-image">
        <img
          src={firebaseLogo}
          s
          className="image-fluid d-block mx-auto"
          alt="Firebase Logo"
        />
        <h1>Firebase</h1>
      </div>
      <div className="firebase-demo lead">
        <p>{firebaseDemo1}</p>
        <p>{firebaseDemo2}</p>
      </div>
      <div className="container">
        <div className="firebase-carousel my-2 w-100 mx-auto d-block">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={firebaseCarousel1}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={firebaseCarousel2}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={firebaseCarousel3}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-text mb-3 mt-4">
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Try Firebase today
        </h2>
        {/* <br /> */}
        <button className="btn btn-primary" type="button">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Ass3Firebase;
