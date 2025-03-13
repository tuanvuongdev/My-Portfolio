import React from 'react'

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('https://github.com/tuanvuongdev')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Vuong</p>
                            <p className='grid-subtext'>With 12 years of experience, I have honed my skills in web development, UI/UX design, and project management.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact me</p>
                            <p className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='md:text-sm lg:text-xl font-medium text-gray_gradient text-white'>phamtuanvuong.dev@gmail.com</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About