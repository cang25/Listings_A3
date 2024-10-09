import { useRouter } from "next/router";

export default function ListingID() {
  const router = useRouter();
  const { id } = router.query;

  const {data, error, isLoading} = useSWR("https://listingsapi-2-pj3v.onrender.com", fetcher) 
  return (
    <>
      <>TO DO:RENDER LISTING {id}</>
    </>
  );
}
