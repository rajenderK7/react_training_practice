function Post(props) {
  return (
    <div className="card container border border-dark shadow my-2">
      <div className="row pt-2 px-2 justify-content-center">
        <div className="col-sm-12 col-md-4 col-lg-6">
          <div className="avatar pt-2 text-start">
            <img className="image-fluid" src={props.avatar}></img>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 text-start pt-1">
          <div style={{ fontSize: "2rem" }} className="row fw-bold">
            <p>{props.first_name}</p>
          </div>
          <div style={{ fontSize: "1.1rem" }} className="row ">
            <p>{props.last_name}</p>
          </div>
          <div className="row text-secondary">
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
