import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Text from "@components/Text";
import Title from "@components/Title";
import TransparentLink from "@components/TransparentLink";

import { getPosts } from "../lib/notion";

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>

    <Container alignContent="center" alignItems="center">
      <Title fontSize={["3rem", "4rem"]} as="h2">
        About
      </Title>
      <Container maxWidth={["100%", "700px"]} marginY="2rem">
        <Text>Test</Text>
        <Text>Test</Text>
      </Container>
    </Container>

    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => {
          console.log(data);
          return <TransparentLink>{data.post}</TransparentLink>;
        })}

        {/* <Grid
            gridTemplateColumns="1fr 4fr"
            justifyItems="flex-start"
            gridGap="1rem"
            paddingY="2rem"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            <Container width="100%">
              <Text>01</Text>
            </Container>

            <Grid width="100%" gridTemplateColumns="4fr 1fr">
              <Container width="100%" alignItems="flex-start" textAlign="start">
                <Grid
                  width="100%"
                  gridTemplateColumns="repeat(2, auto)"
                  justifyItems="flex-start"
                  justifyContent="flex-start"
                  gridGap="1rem"
                >
                  <Title fontSize="1.5rem" margin={0} as="h3">
                    Test
                  </Title>
                  <Text
                    fontSize="smaller"
                    margin={0}
                    color="rgba(0, 0, 0, 0.1)"
                  >
                    Test 2
                  </Text>
                </Grid>
                <Text fontSize="1rem">Caption</Text>
              </Container>
              <Text fontSize="1.5rem">???</Text>
            </Grid>
          </Grid> */}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts("experiences");
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
