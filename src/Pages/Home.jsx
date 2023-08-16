import Lottie from 'lottie-react';
import animation from './../animations/animation.json';

function Home() {
  return (
    <div className='font-serif bg-black grid grid-rows-3 h-screen '>
      <div className='text-white flex flex-col justify-start items-center gap-5 p-5 self-center'>
        <h1 className='title-main sm:text-3xl lg:text-4xl'>CodeCraft Haven</h1>

        <div className='title-secondary flex gap-2'>
          <p className='sm:text-xl lg:text-2xl'>
            Acquire all the resources you need, conveniently assembled
          </p>

          {/* <div className='h-5 w-5'>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div> */}
        </div>
      </div>

      <div className='row-span-2 w-[400px] sm:w-1/2 lg:w-1/3 justify-self-center'>
        <Lottie className='h-full' animationData={animation} />
      </div>
    </div>
  );
}

export default Home;
