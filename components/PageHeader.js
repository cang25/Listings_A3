import { Card } from "react-bootstrap";

export default function PageHeader(props) {
  return (
    <>
      <br></br>
      <Card className="bg-light">
        <Card.Body>{props.text}</Card.Body>
      </Card>
      <br />
    </>
  );
}
