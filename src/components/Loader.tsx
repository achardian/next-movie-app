"use client";

import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <Oval
        height={40}
        width={40}
        color='#ddd'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#ddd'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
