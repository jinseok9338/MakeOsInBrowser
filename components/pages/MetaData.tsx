import Head from 'next/head';
import {
  description as PackageDescription,
  name as PackageName
} from 'package.json';
import type { FC } from 'react';
import type { MetaDataProps } from 'types/components/pages/Metadata';

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
