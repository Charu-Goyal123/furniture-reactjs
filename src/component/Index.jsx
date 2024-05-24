import React from 'react'

const Index = () => {
  return (
    <div>
        <div className='bg-customGreen'>
            <div className='w-full px-3 flex justify-between'>
                <a className='text-2xl font-semibold text-white ml-12 mt-10' href='/'>Furni<span className='opacity-40'>.</span></a>
                <div className='flex justify-between mr-12 gap-12 mt-10'>
                    <ul className='flex list-none  gap-12'>
                        <li><a className='text-white text-sx border-b-4 border-yellow-400'>Home</a></li>
                        <li><a className='text-white text-sx'>About Us</a></li>
                        <li><a className='text-white text-sx'>Services</a></li>
                        <li><a className='text-white text-sx'>Blog</a></li>
                        <li><a className='text-white text-sx'>Contact Us</a></li>
                    </ul>
                    <ul className='flex gap-6'>
                        <li className=''><a><img src='https://themewagon.github.io/furni/images/user.svg'></img></a></li>
                        <li className=''><a><img src='https://themewagon.github.io/furni/images/cart.svg'></img></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-customGreen'>
            <div className='w-full px-3'>
                <div className='flex justify-between'>
                    <div className='w-[60%] p-12'>
                        <div className='flex flex-col justify-start items-start'>
                            <h1 className='text-white text-left font-bold text-6xl mt-32 mb-8 w-full'>Modern Interior <br />Design Studio</h1>
                            <p className='text-white text-left opacity-50 text-md'>
                             Donec vitae odio quis nisl dapibus malesuada.Nullam ac aliquet velit.
                             Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                             <p className='mt-12 flex gap-4'>
                                <a className='text-black bg-amber-400 border-amber-400 font-bold py-3 px-8 rounded-full'>Shop Now</a>
                                <a className='text-white font-bold py-3 px-8 border-2 border-gray-400 rounded-full'>Explore</a>
                             </p>
                        </div>
                        
                    </div>
                    <div className=''>
                        <div className='relative'>
                            <img src='https://themewagon.github.io/furni/images/couch.png' className='mt-32 relative z-10'></img>
                            <img src='https://themewagon.github.io/furni/images/dots-light.svg' className='absolute right-2 top-4 z-0'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-28 px-0'>
            <div className='w-full'>
                <div className='flex'>
                    <div className='mb-12 text-start ml-16 max-w-[20%]'>
                        <h2 className='text-black text-4xl mb-6 mt-0 block'>Crafted with <br></br>excellent<br></br> material.</h2>
                        <p className='text-black opacity-50 text-left'>Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <p className='mt-12'>
                            <a className='text-white font-bold py-3 p-8 rounded-full bg-black' href='/'>Explore</a>
                        </p>
                    </div>
                    <div className='w-1/3'>
                        <a href=''><img src='https://themewagon.github.io/furni/images/product-1.png' alt='/' className=''></img>
                        <h3 className='font-bold'>Nordic Chair</h3>
                        <strong className='text-2xl font-extrabold'>$50.00</strong>
                        </a>
                    </div>
                    <div className='w-1/3'>
                        <a href=''><img src='https://themewagon.github.io/furni/images/product-2.png' alt='/' className=''></img>
                        <h3 className='font-bold'>Kruzo Aero Chair</h3>
                        <strong className='text-2xl font-extrabold'>$78.00</strong>
                        </a>
                    </div>
                    <div className='w-1/3'>
                        <a href=''><img src='https://themewagon.github.io/furni/images/product-3.png' alt='/' className=''></img>
                        <h3 className='font-bold'>Ergonomic Chair</h3>
                        <strong className='text-2xl font-extrabold'>$43.00</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-28 px-0 block'>
            <div className='w-full'>
                <div className='flex justify-between gap-24'>
                    <div className='flex flex-col text-start ml-14'>
                        <h2 className='text-black font-semibold text-2xl mt-0 mb-3'>Why Choose Us</h2>
                        <p className='text-black opacity-50 mt-0 mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.<br></br>
                         Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                         <div className='grid grid-cols-2 gap-4 my-12'>
                            <div className=''>
                                <div className=''>
                                    <div className=''>
                                        <img src='https://themewagon.github.io/furni/images/truck.svg' alt='/' className=''></img>
                                    </div>
                                    <h3 className='text-black font-medium text-sm'>Fast & Free Shipping</h3>
                                    <p className='text-black opacity-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    <div className=''>
                                        <img src='https://themewagon.github.io/furni/images/bag.svg' alt='/' className=''></img>
                                    </div>
                                    <h3 className='text-black font-medium text-sm'>Easy to Shop</h3>
                                    <p className='text-black opacity-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    <div className=''>
                                        <img src='https://themewagon.github.io/furni/images/support.svg' alt='/' className=''></img>
                                    </div>
                                    <h3 className='text-black font-medium text-sm'>24/7 Support</h3>
                                    <p className='text-black opacity-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    <div className=''>
                                        <img src='https://themewagon.github.io/furni/images/return.svg' alt='/' className=''></img>
                                    </div>
                                    <h3 className='text-black font-medium text-sm'>Hassle Free Returns</h3>
                                    <p className='text-black opacity-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                         </div>
                    </div>
                    <div className=''>
                        <div className='mr-10 relative'>
                            <img src='https://themewagon.github.io/furni/images/why-choose-us-img.jpg' alt='/' className='rounded-2xl max-w-full relative h-auto z-10'></img>
                            <img src='https://themewagon.github.io/furni/images/dots-yellow.svg' alt='/' className='absolute -top-20 right-72 z-0'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-28 px-0'>
            <div className=''>
                <div className='flex justify-start gap-4 relative ml-14'>
                            <div className='w-[40%]'>
                                <img src='https://themewagon.github.io/furni/images/img-grid-1.jpg' alt='/' className='h-[90%] w-full rounded-2xl z-10'></img>
                                <img src='https://themewagon.github.io/furni/images/dots-green.svg' alt='/' className='-z-50 absolute -left-10 -top-20'></img>
                            </div>
                            <div className=''>
                                <img src='https://themewagon.github.io/furni/images/img-grid-2.jpg' alt='/'className='h-52 w-52 rounded-2xl'></img>
                            </div>
                            <div className='absolute left-96 top-56'>
                                <img src='https://themewagon.github.io/furni/images/img-grid-3.jpg' alt='/' className='h-96 w-80 rounded-2xl'></img>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Index