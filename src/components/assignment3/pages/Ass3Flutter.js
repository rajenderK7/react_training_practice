function Ass3Flutter() {
  const flutterLogo =
    "https://logowik.com/content/uploads/images/flutter5786.jpg";
  const flutterDemo1 =
    "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.";
  const flutterDemo2 =
    "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, Web platform, and the web from a single codebase.";
  const flutterCarousel1 =
    "https://storage.googleapis.com/cms-storage-bucket/images/case_study_part_2_Stadia.width-635.png";
  const flutterCarousel2 =
    "https://storage.googleapis.com/cms-storage-bucket/images/case_study_part_1_Google_Pay_1.width-635.png";
  const flutterCarousel3 =
    "https://storage.googleapis.com/cms-storage-bucket/images/case_study_part_1_Nubank.width-635.png";
  return (
    <div className="container mx-auto text-center">
      <div className="flutter-logo">
        <img
          className="image-fluid mx-auto d-block"
          style={{ height: "180px", width: "230px" }}
          src={flutterLogo}
          alt="Flutter Logo"
        />
        <h1>Flutter</h1>
      </div>
      <div className="firebase-demo lead">
        <p>{flutterDemo1}</p>
        <p>{flutterDemo2}</p>
      </div>
      <div className="m-3">
        <h3>Some of the industry leaders using Flutter.</h3>
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
                  src={flutterCarousel1}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
                <h2 className="m-2">Google Stadia</h2>
              </div>
              <div className="carousel-item">
                <img
                  src={flutterCarousel2}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
                <h2 className="m-2">Google Pay</h2>
              </div>
              <div className="carousel-item">
                <img
                  src={flutterCarousel3}
                  className="d-block mx-auto w-100 h-50"
                  alt="..."
                />
                <h2 className="m-2">Nubank</h2>
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
          Try Flutter today
        </h2>
        {/* <br /> */}
        <button className="btn btn-primary" type="button">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Ass3Flutter;
