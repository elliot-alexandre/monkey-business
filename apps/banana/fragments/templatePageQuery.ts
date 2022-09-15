import gql from 'graphql-tag';

export const PageQuery = gql`
  query PageTemplateQuery($var: String!) {
    pages(filter: { id: $var }) {
      data {
        id
        Page: attributes {
          Name
          Title
          Slug
          Description
          sections {
            data {
              id
              Section: attributes {
                Name
                Description
                Type
                Variant
                Blocks {
                  Name
                  Description
                  Type
                  Variant
                  Text
                  Medias {
                    Name
                    Description
                    Media {
                      data {
                        id
                        Content: attributes {
                          width
                          height
                          previewUrl
                          url
                        }
                      }
                    }
                  }
                  Links {
                    Name
                    Type
                    Variants
                    Url
                    Page {
                      data {
                        id
                      }
                    }
                    Section {
                      data {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
