import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch("https://listingsapi-hyam.onrender.com/api/listings/210968")
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { listing: data } });
      });
  });
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer : Christine Ang." />
      <Card>
        <Card.Body>
          <p>
            I am a computer programming student excited to learn new things!{" "}
          </p>
          <p> When I am not coding, I love to spend time outdoors!</p>
          <p>
            A place I would love to visit someday is{" "}
            <Link href="https://listingsapi-hyam.onrender.com/api/listings/210968">
              Hawaii's North Shore in Oahu.
            </Link>
          </p>
        </Card.Body>
        <ListingDetails listing={props.listing} />
      </Card>
    </>
  );
}
