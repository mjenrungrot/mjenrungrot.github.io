import Container from "@components/Container";
import Title from "@components/Title";
import Text from "@components/Text";
import Image from "@components/Image";

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
        <Image
          src="#"
          alt="Teerapat Jenrungrot"
          width="120px"
          height="120px"
          objectFit="cover"
          className={styles.image}
        />
        <Title>Teerapat Jenrungrot</Title>
        <Title fontSize="2rem" color="rgba(0,0,0,0.6)" fontWeight="500" as="h2">
          AI Researcher (Audio + Computer Vision)
        </Title>
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
