import { ClipLoader } from "react-spinners";

import "./loader.css";

const Loader = () => (
  <div className="loader-container">
    <ClipLoader size={50} color={"#123abc"} loading={true} />
  </div>
);

export default Loader;
