import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ResourceCards() {
  const targetRef = useRef();

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={targetRef}
      className='text-3xl sm:text-2xl md:text-2xl lg:text-3xl animated-section'
    >
      <div className='mt-[100px] mb-20 bg-black grid grid-cols-1 text-white items-center gap-x-4 gap-y-12 justify-items-center sm:grid-cols-2 md:grid-cols-3'>
        <div className='w-2/3 h-[22rem] card-container'>
          <div className='w-full h-full card'>
            <div className='w-full h-full card-front rounded-md'>HTML</div>
            <div className='w-full h-full card-back rounded-md'>
              <Link to='/html'>Open Resource</Link>
            </div>
          </div>
        </div>

        <div className='card-container w-2/3 h-[22rem]'>
          <div className='w-full h-full card'>
            <div className='w-full h-full card-front rounded-md'>CSS</div>
            <div className='w-full h-full card-back rounded-md'>
              <Link to='/CSS'>Open Resource</Link>
            </div>
          </div>
        </div>

        <div className='card-container w-2/3 h-[22rem]'>
          <div className='w-full h-full card'>
            <div className=' w-full h-full card-front rounded-md'>
              JavaScript
            </div>
            <div className='w-full h-full card-back rounded-md'>
              <Link to='/JS'>Open Resource</Link>
            </div>
          </div>
        </div>

        {/* <div className='card-container w-2/3 h-[22rem]'>
          <div className='w-full h-full card'>
            <div className='w-full h-full card-front rounded-md'>NODE.JS</div>
            <div className='w-full h-full card-back rounded-md'>
              Open Resource
            </div>
          </div>
        </div> */}

        {/* <div className='card-container w-2/3 h-[22rem]'>
          <div className='w-full h-full card'>
            <div className='w-full h-full card-front rounded-md'>COLORS</div>
            <div className='w-full h-full card-back rounded-md'>
              Open Resource
            </div>
          </div>
        </div>

        <div className='card-container w-2/3 h-[22rem]'>
          <div className='w-full h-full card'>
            <div className='w-full h-full card-front rounded-md'>ICONS</div>
            <div className='w-full h-full card-back rounded-md'>
              Open Resource
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ResourceCards;
