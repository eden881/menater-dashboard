import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

let nextId = 3;
const initialNatars = [
  { id: 0, title: "בית חולים סורוקה" },
  { id: 1, title: "מתחם ביג" },
  { id: 2, title: "גרנד קניון" },
];

function NatarList() {
  const [natars, setNatars] = useState(initialNatars);

  function handleAddNatar(event) {
    event.preventDefault();
    setNatars([
      ...natars,
      {
        id: nextId++,
        title: event.target.newNatarName.value,
      },
    ]);
  }

  return (
    <>
      <h1>רשימת נט"רים</h1>
      <Form className="mb-2" onSubmit={handleAddNatar}>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="newNatarName" />
        </Form.Group>
        <Button variant="primary" type="submit">
          + הוסף נט"ר
        </Button>
      </Form>

      <ul>
        {natars.map((natar) => (
          <li key={natar.id}>{natar.title}</li>
        ))}
      </ul>
    </>
  );
}

export default NatarList;
