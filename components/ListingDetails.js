/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function ListingDetails(props) {
  const { listing } = props;

  return (
    <Container>
      <Row>
        <Col lg>
          <Image>
            onError={(event) => {
              event.target.onerror = null; // Remove the event handler to prevent infinite loop
              event.target.src =
                "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className=&quot;img-fluid w-100&quot;
            src={
              listing.images?.picture_url ||
              "https://placehold.co/600x400?text=Photo+Not+Available"
            }
            alt=&quot;Listing Image&quot;
          </Image>
          <br />
          <br />
        </Col>
        <Col lg>
          <p>{listing.neighborhood_overview}</p>
          <br />
          <br />
          <strong>Price:</strong> $
          {listing.price ? listing.price.toFixed(2) : "N/A"}
          <br />
          <br />
          <strong>Room:</strong> {listing.room_type}
          <br />
          <strong>Bed:</strong> {listing.bed_type} ({listing.beds})
          <br />
          <br />
          <strong>Rating:</strong>{" "}
          {listing.review_scores?.review_scores_rating || "N/A"}/100 (
          {listing.number_of_reviews || 0} Reviews)
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}
