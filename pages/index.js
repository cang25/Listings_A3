import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(
    `https://listingsapi-hyam.onrender.com/api/listings?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1); 
    }
  };

  const next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings"></PageHeader>
      <Accordion defaultActiveKey="0">
        {data.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong>&nbsp;&nbsp;
              {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing}></ListingDetails>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={previous} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}
