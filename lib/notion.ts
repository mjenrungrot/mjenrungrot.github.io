import fs from "fs";
import path from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import { ExtendedRecordMap } from "notion-types/src/maps";
import { getPageTitle } from "notion-utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const baseDir = path.join(process.cwd(), "./posts");

export const POSTS = {
  hello: {
    date: "2015",
    uri: "259b1026f30f46b0ac976915fc828b81",
  },
};

export const EXPERIENCES = {
  1: {
    date: "2015",
    uri: "259b1026f30f46b0ac976915fc828b81",
  },
  2: {
    date: "2017",
    uri: "259b1026f30f46b0ac976915fc828b81",
  },
};

export interface PageInfo {
  title: string;
  cover?: string;
  coverPosition?: number;
}

export interface Page extends PageInfo {
  date: string;
  uri: string;
}

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
  const info: PageInfo = {
    title: getPageTitle(page),
  };

  const block = Object.values(page.block)[0].value;
  if (block.type === "page" && block.format?.page_cover) {
    info.coverPosition = block.format.page_cover_position;
    info.cover =
      "https://www.notion.so/image/" +
      encodeURIComponent(block.format.page_cover) +
      "?table=block&id=" +
      block.id;
  }
  return info;
};

export interface Post {
  source: MDXRemoteSerializeResult;
  data: { [key: string]: any };
  content: string;
}

export const getPosts = (dir: string): Promise<Post[]> => {
  const contentGlob = path.join(path.join(baseDir, dir), "/*.mdx");
  const files = glob.sync(contentGlob);

  return Promise.all(
    files.map(async (file) => {
      const basename = path.basename(file);
      const slug = basename.replace(".mdx", "");
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);

      data.slug = slug;
      const source = await serialize(content, { scope: data });

      return { data, content: content.trim(), source };
    }),
  );
};
