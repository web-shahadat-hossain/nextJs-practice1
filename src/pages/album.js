import Image from 'next/image';
import React from 'react';
import flower from "@/assets/images/pink-324175_640.jpg"

const Album = () => {
    return (
        <div>
            <h1>this is album</h1>
      
              <img src='https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg'  alt='flowyer' width="100%"/>
       <h1>next js images</h1>
        <Image 
        src="https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
      alt="Picture of the author" width={500} height={500} layout='responsive' />

      <div>
        <Image src={flower}  width={500} height={500} layout='responsive' alt='' />
      </div>
        </div>
    );
};

export default Album;