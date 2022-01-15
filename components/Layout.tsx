import React from "react";
import Head from "next/head";
import Container from "@components/Container";
import Nav from "@components/Nav";

import styles from "@styles/Home.module.css";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = "Teerapat Jenrungrot",
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Teerapat Jenrungrot" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Teerapat Jenrungrot" />
        <meta property="og:description" content="Description" />
        <meta property="og:type" content="website" />
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
      </Container>
    </div>
  );
};

export default Layout;
