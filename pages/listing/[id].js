import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });

export default function ListingID() {
  const router = useRouter();

  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://listingsapi-hyam.onrender.com/api/listings/${id}`,
    fetcher
  );

  const listing = data;

  if (isLoading) {
    return null;
  } else {
    if (error) {
      return (
        <>
          <Error statusCode={404} /> 
        </>
      );
    } else {
      return (
        <>
          <PageHeader text = {data.name}></PageHeader>
          <ListingDetails listing={listing}></ListingDetails>
        </>
      );
    }
  }
}
