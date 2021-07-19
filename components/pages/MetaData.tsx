import Head from 'next/head';
import {
  description as PackageDescription,
  name as PackageName
} from 'package.json';
import type { FC } from 'react';

type MetaDataProps = {
  name?: string;
  description?: string;
};

const MetaData: FC<MetaDataProps> = ({
  name = PackageName,
  description = PackageDescription
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{name}</title>
  </Head>
);

export default MetaData;
