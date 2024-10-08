import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";


export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>res.json()).then(data=>{
      resolve({ props: { staticPost: data } })
    })
  })



export default function About() {

  //get id: 95560
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

