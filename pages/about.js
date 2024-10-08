import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader text="About the Developer : Christine Ang. I am a computer programming student excited to learn new things! When I am not coding, I love to spend time outdoors hiking and doing fun activities." />
      <Card>
        <Card.Body>TO DO : LISTING DATA</Card.Body>
        <ListingDetails />
      </Card>
    </>
  );
}
