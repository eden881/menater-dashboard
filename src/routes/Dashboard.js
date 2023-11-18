import { useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Dashboard.css";

function Dashboard() {
  const [googleApiKey, setGoogleApiKey] = useState("");
  const [showKeyModal, setShowKeyModal] = useState(false);

  function handleSaveKey(event) {
    event.preventDefault();
    setGoogleApiKey(event.target.googleApiKey.value);
  }

  return (
    <>
      <h1>מבט על</h1>
      {googleApiKey ? (
        <p style={{ color: "green" }}>
          מפתח הוזן{" "}
          <Button onClick={() => setShowKeyModal(true)}>שנה מפתח</Button>
        </p>
      ) : (
        <>
          <p style={{ color: "red" }}>
            מפתח לא הוזן{" "}
            <Button onClick={() => setShowKeyModal(true)}>הזן מפתח</Button>
          </p>
        </>
      )}

      <Container className="maps-container">
        <iframe
          className="maps-iframe"
          title="map"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=Beer+Sheva`}
        />
      </Container>

      <Modal show={showKeyModal} onHide={() => setShowKeyModal(false)}>
        <Form onSubmit={handleSaveKey}>
          <Modal.Header closeButton>
            <Modal.Title>הזן מפתח API של גוגל</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="googleApiKey"
                placeholder="הזן מפתח כאן"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowKeyModal(false)}>
              ביטול
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => setShowKeyModal(false)}
            >
              שמור
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Dashboard;
