import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Example = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <img width="100%" height="100%"src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                </Modal.Body>
            </Modal>
        </>
    )
}; export default Example
