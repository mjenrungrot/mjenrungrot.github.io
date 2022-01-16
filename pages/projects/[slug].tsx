import { SyntheticEvent, CSSProperties } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Container from "@components/Container";
import { NotionAPI } from "notion-client";
import {
  NotionRenderer,
  NotionRendererProps,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x";
import { getAllPagesInSpace } from "notion-utils";

interface ProjectsProps {
  projectsRecordMap: NotionRendererProps["recordMap"];
}

const Projects: NextPage<ProjectsProps> = ({ projectsRecordMap }) => {
  const customizedMapPageUrl = (rootPageId?: string) => (pageId: string) => {
    pageId = (pageId || "").replace(/-/g, "");
    return `/blog/${pageId}`;
  };

  return (
    <Container>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Blog" />
      </Head>
      <NotionRenderer
        fullPage
        recordMap={projectsRecordMap}
        mapPageUrl={customizedMapPageUrl()}
        customImages
        components={{
          image: ({
            src,
            alt,

            height,
            width,

            className,
            style,
            loading,
            decoding,

            ref,
            onLoad,
          }: {
            src: string;
            alt: string;
            height: number;
            width: number;
            className: string;
            style: CSSProperties;
            loading: string;
            decoding: string;
            ref: string;
            onLoad: SyntheticEvent;
          }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className={className}
              style={style}
              src={src}
              ref={ref}
              width={width}
              height={height}
              loading="lazy"
              alt={alt}
              decoding="async"
            />
          ),
          collection: Collection,
          collectionRow: CollectionRow,
          code: Code,
        }}
      />
    </Container>
  );
};

const notion = new NotionAPI();

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPagesInSpace(
    "67362327fed647e1b7e4f8915a97dde3",
    undefined,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    },
  );
  const paths = Object.keys(pages).map((pageId) => `/projects/${pageId}`);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<ProjectsProps>> => {
  const pageId = (context?.params?.slug as string) || "";
  const projectsRecordMap = await notion.getPage(pageId);

  return {
    props: {
      projectsRecordMap: projectsRecordMap,
    },
    revalidate: 60,
  };
};

export default Projects;