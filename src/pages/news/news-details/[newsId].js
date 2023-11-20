import { useRouter } from 'next/router';
import React from 'react';

const newsDetails = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router= useRouter()
    return (
        <div>
            <h1>Nexw id {router.query.newsId}</h1>
        </div>
    );
};

export default newsDetails;