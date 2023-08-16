import Lottie from 'lottie-react';
import pageNotFound from './../animations/pageNotFound.json';

function PageNotFound() {
  return (
    <div className='h-[90vh]'>
      <Lottie className='h-full' animationData={pageNotFound} />
    </div>
  );
}

export default PageNotFound;
