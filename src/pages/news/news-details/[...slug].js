import { useRouter } from 'next/router';
import React from 'react';

const newsFilter = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router= useRouter()
    return (
        <div>
            <h2>news filter {router.query.slug}</h2>
        </div>
    );
};

export default newsFilter;