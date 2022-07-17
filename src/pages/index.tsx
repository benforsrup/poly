import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { Button, Anchor } from "@mantine/core";
import Link from "next/link";

const Home: NextPage = () => {
  const { data } = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Link href="/testing">
        <Button>this page!</Button>
      </Link>
      <div>{data?.greeting} </div>
    </>
  );
};

export default Home;
