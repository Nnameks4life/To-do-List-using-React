import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [item, setItem] = useState({ url: "", desc: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [bar, setBar] = useState(0);
  const [error, setError] = useState("");

  // useEffect(() => {

  // }, [input])

  const handleSubmit = () => {
    if (!item.url) {
      setError("Url is required!");
      setTimeout(() => setError(""), 4000);
      return;
    }
    if (item.desc.length === 0) {
      setError("Description is required!");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    setLoading(true);
    setBar(20);
    setTimeout(() => {
      // console.log("itemxxx", item);
      const newItem = {
        id: Math.ceil(Math.random() * 400),
        title: item.desc,
        desc: item.desc,
        rating: 0,
        images: item.url,
        userCount: 0,
      };
      props.updateCart(newItem);
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-block mx-auto"
        data-toggle="modal"
        data-target="#myModal"
      >
        {props.title}
      </button>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title color-dark text-dark">
                Modal Heading {props.age}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body text-color-black">
              <div className="form-group">
                <label htmlFor="usr">Product i Url:</label>
                <input
                  type="text"
                  className="form-control"
                  value={item.url}
                  onChange={(event) => {
                    setItem({ ...item, url: event.target.value });
                  }}
                  name="url"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Description:</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={item.desc}
                  onChange={(event) => {
                    setItem({ ...item, desc: event.target.value });
                  }}
                  name="desc"
                ></textarea>
              </div>
              {error.length > 0 && <p className="text-danger">{error}</p>}
              <button
                type="button"
                className={`btn ${props.bgColor}`}
                onClick={handleSubmit}
              >
                {loading === true ? (
                  <i
                    className="fa fa-spin fa-spinner text-white mr-2"
                    style={{ fontSize: "16px" }}
                  />
                ) : (
                  ""
                )}
                Post Item
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
