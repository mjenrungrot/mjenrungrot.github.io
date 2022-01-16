import Image from "next/image";
import Container from "@components/Container";
import Title from "@components/Title";
import Text from "@components/Text";
import Grid from "@components/Grid";
import styles from "@styles/Home.module.css";

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Grid
          gridTemplateColumns="1fr 3.5fr"
          justifyItems="flex-start"
          gridGap="3rem"
          paddingY="5rem"
        >
          <Container>
            <Image
              src="/me.png"
              alt="Teerapat Jenrungrot"
              width="160px"
              height="160px"
              objectFit="cover"
              className={styles.image}
            />
          </Container>
          <Container>
            <Title>Teerapat Jenrungrot</Title>
            <Title
              fontSize="2rem"
              color="rgba(0,0,0,0.6)"
              fontWeight="500"
              as="h2"
            >
              AI Researcher (Audio + Computer Vision)
            </Title>
          </Container>
        </Grid>
      </Container>

      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            Teerapat is a Ph.D. student doing research in AI, with a primary
            emphasis on the intersection of audio and computer vision. Living in
            Seattle.
          </Text>
        </Container>
        {/* <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link> */}
      </Container>
    </Container>
  </Container>
);

export default Home;
