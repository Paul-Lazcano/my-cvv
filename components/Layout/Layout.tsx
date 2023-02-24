import Head from "next/head";
import { FC, ReactNode } from "react";
import s from "./Layout.module.css";

interface Props {
  metadata: {
    title: string;
    description?: string;
  };
  children: ReactNode;
}

const Layout: FC<Props> = ({ metadata, children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata?.description && (
          <meta name="description" content={metadata.description} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={s.main}>
        <div className={s.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
