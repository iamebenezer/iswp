import logo from '../../public/images/logo.png'
import logoOne from '../../public/images/2.jpeg'
import {AnimatedPinDemo} from '../app/pin'
import {ThreeDCardDemo} from '../app/three'
import {HeroScrollDemo} from '../app/scroll'
import {TracingBeamDemo} from '../app/roadmap'
import { TextGenerateEffectDemo } from '../app/text';
import {BackgroundBeamsDemo} from '../app/join'
export default function Home() {
  return (
    <div>
      <section className="bg-[url('../../public/images/hero.png')]
           h-fit w-screen bg-cover">
          
            <nav className="flex justify-center md:justify-between items-center md:mx-4 p-8">
                <div className="flex justify-center items-center text-white font-sub tracking-widest">
                  <img src="../../public/images/logo.png" className='' alt="" />
                  ISWP
                </div>
                <div className="">
                  <ul className='hidden md:flex space-x-9 text-white font-sub'>
                    <li>About</li>
                    <li>Tokenomics</li>
                    <li>Roadmap</li>
                    <li>Join</li>
                  </ul>
                </div>
            </nav>

            <div className="flex flex-col text-center justify-center items-center p-4 md:p-20">
            
               
              <h1 className="font-head text-white tracking-widest md:text-[50px] text-[50px]">I STAND WITH <br/>
                          <span className='text-green-700'>PARKISTAN</span> </h1>
              {/* <p className='font-texts text-white tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus ullam rerum ratione.</p>
              */}
              <TextGenerateEffectDemo/>
                <a className='bg-neutral-700 text-white font-sub p-4 rounded-xl my-3
                  hover:bg-white hover:text-black transition duration-200 ease-in-out
                '>Join Community</a>
           
             
             
              <AnimatedPinDemo/>
              
           
            </div>

        </section>

                {/* About */}
              <section className='bg-[#000] rounded-3xl mx-4 md:mx-12 h-fit my-10'>
            
                  <div className='flex flex-col md:flex-row justify-between p-2 mx-1 md:mx-12 md:p-12 gap-20'>
                            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-8'>
                              <div className=''>
                                <h1 className='text-white font-head tracking-wider md:text-[40px] mt-4 text-center md:text-start'>About Project</h1>
                              </div>
                                  <div className='text-center md:text-start'>
                                    <h1 className='text-green-600 font-sub tracking-wider md:text-[25px]'>Why We Do It</h1>
                                    <p className='text-gray-300 tracking-wider leading-9 font-texts'>
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    </p>
                                  </div>
                                  <div className='text-center md:text-start'>
                                    <h1 className='text-red-800 font-sub  tracking-wider md:text-[25px]'>What is Our Target</h1>
                                    <p className='text-gray-300 tracking-wider leading-9 font-texts'>
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    font-texts tracking-wider dark:text-white text-black text-2xl leading-snug
                                    </p>
                                  </div>
                            </div>

                            <div className='-mt-24 md:-mt-0'>
                              <ThreeDCardDemo/>
                            </div>
                  </div>
            
              </section>
              
              {/* ISWP */}

              <section className='bg-[#000] rounded-3xl mx-4 md:mx-12 h-fit my-10'>
                  <HeroScrollDemo/>
              </section>
              <section className='bg-[#000] rounded-3xl mx-4 md:mx-12 h-fit my-10 p-8 md:p-8'>
                <div className='text-white flex justify-center items-center'>
                  <h1 className='font-head text-[40px] tracking-wider'>ROADMAP</h1>
                </div>
              <TracingBeamDemo/>
              </section>

              <section className='bg-[#000] rounded-3xl mx-4 md:mx-12 h-fit my-10 p-12'>
              <div className='text-white flex justify-center items-center'>
                  <h1 className='font-head text-[40px] tracking-wider'>TOKENOMICS</h1>

                </div>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4 md:p-8 place-items-center text-white'>
                    <div className='bg-black text-center'>
                      <h2 className='font-sub tracking-wider text-[30px]'>40,000,00</h2>
                      
                      <span className='font-texts md:text-[25px] '>Total Supply</span>
                    </div>
                    <div className='bg-black text-center'>
                      <h2 className='font-sub tracking-wider text-[30px]'>40,000,00</h2>
                      
                      <span className='font-texts md:text-[25px] '>Total Supply</span>
                    </div>
                    <div className='bg-black text-center'>
                      <h2 className='font-sub tracking-wider text-[30px]'>40,000,00</h2>
                      
                      <span className='font-texts md:text-[25px] '>Total Supply</span>
                    </div>
                    
                  </div>
              </section>

              <section className='bg-[#000] rounded-3xl mx-4 md:mx-12 h-fit my-10'>
              <BackgroundBeamsDemo/>

              </section>

              <footer className=''>
                  <div className='flex text-white p-4 justify-center items-center'>
                    <h2 className='font-texts'>All Rights Reserved 2024</h2>
                  </div>
              </footer>
    </div>
  );
}
