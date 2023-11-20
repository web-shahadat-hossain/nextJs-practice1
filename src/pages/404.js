import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
    const router= useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 2000)
    }, [])
  
   
    return (
        <div>
            <h2>404</h2>

        </div>
    );
};

export default NotFound;