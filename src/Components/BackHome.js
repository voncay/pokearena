import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="backhome">
      <Link to="/">
        <p className="backhomebtn">Return to Title !</p>
      </Link>
      <Link to="/select">
        <p className="backhomebtn">To Team Select ! !</p>
      </Link>
      <div class="spacer"></div>
    </div>
  );
};

export default BackHome;
