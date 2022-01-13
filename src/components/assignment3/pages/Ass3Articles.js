import { Link, Outlet } from "react-router-dom";

function Ass3Articles() {
  return (
    <div className="mt-3">
      <div className="container w-50 bg-white">
        <ul class="nav nav-pills  justify-content-center">
          <li class="nav-item">
            <Link
              className="mx-4 my-2 bg-info shadow text-dark nav-link"
              to="flutter"
            >
              Flutter
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="mx-4 my-2 bg-warning shadow text-dark nav-link"
              to="firebase"
            >
              Firebase
            </Link>
          </li>
        </ul>
        <hr></hr>
      </div>
      <div className="mt-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Ass3Articles;
