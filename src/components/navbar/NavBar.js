import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles["nav-belt"]}>
      {/* <div>
        <img
          src="https://docs.flutter.dev/assets/images/docs/catalog-widget-placeholder.png"
        ></img>
      </div> */}
      <img
        width={100}
        height={60}
        // style={{ float: "left" }}
        src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
        alt="amazon.in"
      ></img>

      <h3>Amazon X VNR</h3>
      <img
        width={45}
        height={45}
        style={{ marginRight: "10px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
        alt="amazon.in"
      ></img>
    </div>
  );
};

export default NavBar;
