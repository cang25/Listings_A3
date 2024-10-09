import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";


export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve,reject)=>{
    fetch('https://listingsapi-2-pj3v.onrender.com/api/listings/_id').then(res=>res.json()).then(data=>{
      resolve({ props: { listing: data } })
    })
  })

}

export default function About(props) {

  //get id: 95560
  return (
    <>
      <PageHeader text="About the Developer : Christine Ang."/>
      <Card>
        <Card.Body><p>I am a computer programming student excited to learn new things! </p>
        <p> When I am not coding, I love to spend time outdoors hiking and doing fun activities.</p>
        <p>A place I would love to visit someday is the <Link href="https://listingsapi-2-pj3v.onrender.com/api/listings/95560">La Sagrada Familia in Spain.</Link></p>
        </Card.Body>
        <ListingDetails listing={props.listing} />
      </Card>
    </>
  );
}

