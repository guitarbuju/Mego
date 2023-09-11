import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SpinnerWithTimeout = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-4 mb-4 h-96">
      <div className="card w-96 bg-purple-500 shadow-xl">
        <figure>
          <img
            src="https://megofigures.com/wp-content/uploads/2020/01/logo.png"
            className="w-28 mt-6"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-center">
            {" "}
            {/* Center the span horizontally */}
            {showSpinner ? (
              <span className="loading loading-spinner loading-lg bg-yellow-400"></span>
            ) : (
              <div>
                <h2 className="card-title text-white mb-2">
                  ¡¡THANK YOU FOR YOUR PURCHASE!!
                </h2>

                <div className="card-actions justify-center">
                  <Link to="/">
                    <button className="btn btn-wide btn-secondary"> Home</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpinnerWithTimeout;
