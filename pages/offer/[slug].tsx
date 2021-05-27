import { fetchSingleEntry, entries } from "../../lib";
import slugify from "slugify";

const Offer = ({ params, parsedRes }) => {
  return (
    <>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <pre>{JSON.stringify(parsedRes, null, 2)}</pre>
    </>
  );
};

export async function getStaticPaths() {
  const contentfulEntry = await fetchSingleEntry(entries.oferta);

  const paths = contentfulEntry.items.map((item) => {
    //   @ts-ignore
    return { params: { slug: slugify(item.fields.tytul, { lower: true }) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const contentfulEntry = await fetchSingleEntry(entries.oferta);

  const parsedRes = contentfulEntry.items.filter((item) => {
    //   @ts-ignore
    return slugify(item.fields.tytul, { lower: true }) === params.slug;
  });

  console.log(parsedRes);
  return {
    props: { params, parsedRes },
  };
}

export default Offer;
