import Head from 'next/head';
import {
  description as PackageDescription,
  name as PackageName
} from 'package.json';
import type { FC } from 'react';

const MetaData: FC = () => (
  <Head>
    <meta name="description" content={PackageDescription} />
    <title>{PackageName}</title>
  </Head>
);

export default MetaData;
