const { Button } =require('antd')
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>About page </h1>
            <Link href="/">
          <Button type='primary'>Home</Button>
          </Link>
        </div>
    );
};

export default AboutPage;