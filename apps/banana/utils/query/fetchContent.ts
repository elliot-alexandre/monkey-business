export async function fetchContent(query: string) {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(
      `There was a problem retrieving entries with the query ${query}`
    );
    console.error('[error-fetching]', error);
  }
}
