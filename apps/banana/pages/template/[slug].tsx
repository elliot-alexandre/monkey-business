import { Heading } from "../../components/atoms";
import { Page, Section } from "../../types";

type Props = {
  pageProps: Page | null;
  sectionProps: Section[] | null;
  pageId: String | null;
};
export default function Page({ pageProps }: Props) {
  return (
    <>
      <Heading>{"Hello World"}</Heading>

      <div>
        <pre style={{ width: "500px", height: "fit-content" }}>
          <code>{JSON.stringify(pageProps, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}
/*
export async function getStaticProps() {
  const { data } = await client.query({
    query: PageQuery,
    variables: { var: "test" },
  });
  
  return {
    props: {
      pageProps: { ...data },
    },
  };
}
*/
