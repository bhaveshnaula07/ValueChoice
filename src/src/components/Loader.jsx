import "./Loader.css";

function Loader({ message = "Loading..." }) {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-message">{message}</p>
      </div>
    </div>
  );
}

export default Loader;
