import { ListGroup, ListGroupItem } from "reactstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Shopping(props) {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImage(product);
  };

  return (
    <>
      <div id="sort-price" class="center-screen">
        <p>Sort Price By: 
          <span class="sort-button">
            <select name="sort">
              <option value="normal">Normal</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </span>
        </p>
        
      </div>
      
      <ListGroup>
        {props.shoppinglists.map((shoppinglist) => (
          <ListGroupItem key={shoppinglist.id}>
            <h5>{shoppinglist.desc}
              <span class="price">${shoppinglist.price}</span>
            </h5>
            <img
              className="home-img"
              src={shoppinglist.image}
              alt="product img"
              onClick={() => handleShow(shoppinglist)}
            ></img>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{showImage.desc}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={showImage.image}
                  width="350"
                  alt={showImage.desc}
                  className="mx-5"
                />
                <p>
                  <span className="text-dark">Ratings:</span> {showImage.rating}/5
                </p>
              </Modal.Body>
            </Modal>
            <div className="btn-group">
              <button
                type="button"
                className="add"
                onClick={() => props.updateAdd(shoppinglist)}
              >
                <div>+</div>
              </button>
              <button
                type="button"
                className="sub"
                onClick={() => props.updateSub(shoppinglist)}
              >
                <div>-</div>
              </button>
            </div>
            <div className="qty-group">
              <p>Quantity</p>
              <div className="qty">{shoppinglist.value}</div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default Shopping;
