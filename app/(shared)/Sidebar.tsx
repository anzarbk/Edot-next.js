import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
      <section>
          <h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-xs font-bold text-center'>Subscribe and follow</h4>
          <div className='my-5 mx-5'>
              <SocialLinks isDark/>
          </div>
          <Subscribe />
          <div className='bg-wh-900 my-8'>advert image</div>
          <h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-xs font-bold text-center'>About the Blog</h4>
          <div className='bg-wh-900'>profile image</div>
          <h4 className='py-2 px-5 text-wh-500 text-xs font-bold text-center'>Geoffrey Epstein </h4>
          <p className='text-wh-500 text-center text-sm '>asdasd asdsdas asdasdasdas  asdasdasd asdasdasdasd asddas dassdasdasd </p>
    </section>
  )
}

export default Sidebar