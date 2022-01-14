import "./Ass3Home.css";

function Ass3Home() {
  const imgLink =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  const text_ =
    "Important idea to observe right here is that the breakpoint values for the different display scales vary by a specific pixel depending to the fundamental that has been actually used like:Small display scales - ( min-width: 576px) and ( max-width:575px), Medium screen scale - ( min-width: 768px) and ( max-width";
  return (
    <div className="container text-center">
      <div className="container my-3">
        <h4>Welcome to S E V E N</h4>
      </div>
      <div className="my-3">
        <img
          className="imgLink rounded shadow border border-dark mx-2"
          src={imgLink}
          // style={{ width: "500px", height: "300px" }}
          alt="Nature.."
        ></img>
      </div>
      <div className="sub-title">
        <h3 className="mb-3 text-primary">Rows and Columns</h3>
      </div>
      <div>
        <div className="row mb-5 justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4 my-1 ">
            <p
              style={{ fontSize: "1rem" }}
              className="type text-danger text-dark text-start"
            >
              {text_}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-1 ">
            <p
              style={{ fontSize: "1rem" }}
              className="type text-info text-dark text-start"
            >
              {text_}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-1 ">
            <p
              style={{ fontSize: "1rem" }}
              className="type text-success text-dark text-start"
            >
              {text_}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ass3Home;
