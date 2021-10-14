import React, { useState } from "react";
import { DATA } from "../../utils";
import Modal from "../../component/modal/Modal";
// import { Link } from "react-router-dom";

const Landing = () => {
  const [product, setProduct] = useState([...DATA]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-dark text-white landing-header">
          <h1 className="text-center  font-weight-bold">My Market Place</h1>
          <p className="text-center">
            Naija update this Shop Homepage Template{" "}
          </p>
          <div>
            <Modal
              updateCart={(item) => setProduct([item, ...product])}
              title="Create Product"
              age="32"
              bgColor="btn-primary"
            />
            {/* <Modal title="Create Product" age="32" bgColor="btn-warning" /> */}
          </div>
          {/* <Link to="/modal" className="btn Purchase-item">
            Purchase Item
          </Link> */}
        </div>
      </div>
      <div className="row" style={{ marginTop: "80px" }}>
        <div className="col-12 col-sm-8 col-md-10 mx-auto">
          <div className="row px-2">
            {product.map((data, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="row">
                  <div className="col-11 mx-auto card list-box">
                    <img src={data.images} alt="e-commerce products" />
                  </div>
                  <div className="col-11 mx-auto card list-box">
                    <h5 className="des">{data.title}</h5>
                    <h6 className="des">{data.desc}</h6>
                    <button
                      className="btn btn-danger mx-5 "
                      onClick={() => console.log(data.id)}
                    >
                      <i className="fas fa-trash-alt text-white"></i>
                    </button>
                    <h6 className="des my-3">
                      {data.rating > 1 ? (
                        data.rating === 1.5 ? (
                          <i className="fas fa-star-half-alt" />
                        ) : (
                          <i className="fas fa-star" />
                        )
                      ) : (
                        <i className="far fa-star" />
                      )}
                      {data.rating > 2 ? (
                        data.rating === 2.5 ? (
                          <i className="fas fa-star-half-alt" />
                        ) : (
                          <i className="fas fa-star" />
                        )
                      ) : (
                        <i className="far fa-star" />
                      )}
                      {data.rating > 3 ? (
                        data.rating === 3.5 ? (
                          <i className="fas fa-star-half-alt" />
                        ) : (
                          <i className="fas fa-star" />
                        )
                      ) : (
                        <i className="far fa-star" />
                      )}
                      {data.rating > 4 ? (
                        data.rating === 4.5 ? (
                          <i className="fas fa-star-half-alt" />
                        ) : (
                          <i className="fas fa-star" />
                        )
                      ) : (
                        <i className="far fa-star" />
                      )}
                      {data.rating >= 5 ? (
                        <i className="fas fa-star" />
                      ) : (
                        <i className="far fa-star" />
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="row">
                <div className="col-11 mx-auto card list-box">List 1</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="row">
                <div className="col-11 mx-auto card list-box">List 1</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="row">
                <div className="col-11 mx-auto card list-box">List 1</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
