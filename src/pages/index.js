import RootLayout from '@/components/layout/RootLayout';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next js practice home page</title>
        <meta name='Home page' description="this next js create home page" />
      </Head>
      <h1>this is homepage</h1>
    </div>
  );
};

export default HomePage;

 
HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
     {page}
    </RootLayout>
  )
}