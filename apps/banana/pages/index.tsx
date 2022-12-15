import { Heading } from "../components/atoms";
import { Grid } from "../components/templates";
import { HEADING_SIZE, Page, Section } from "../types";

type Props = {
  pageProps: Page | null;
  sectionProps: Section[] | null;
  pageId: String | null;
};
export default function Home({ pageProps }: Props) {
  return (
    <Grid>
      <Heading variant={HEADING_SIZE.h1}>{"Heading 1"}</Heading>
      <Heading variant={HEADING_SIZE.h2}> {"Heading 2"}</Heading>
    </Grid>
  );
}
