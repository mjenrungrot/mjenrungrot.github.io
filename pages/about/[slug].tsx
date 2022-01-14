import Head from "next/head";
import Container from "@components/Container";

const About = (): JSX.Element => (
  <Container
    width={["100%", 1200]}
    maxWidth="100vw"
    marginBottom={["1rem", "4rem"]}
  >
    <Head>
      <title>Test Slug</title>
    </Head>
    Test Slug
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "about1",
        },
      },
      {
        params: {
          id: "about2",
        },
      },
    ],
    fallback: true,
  };
};

export default About;
