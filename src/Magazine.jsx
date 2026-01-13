import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom' 

function Magazine() {
    const [count, setCount] = useState(0)
  return (
    <div className=''>
      <div className="px-4 md:px-[48px]">
        <div className='flex justify-center'>
            <p className="font-bold text-[4.7rem] md:text-[14.1rem] leading-none mt-10 ">MAGAZINE</p>
        </div>  

        <div className="flex justify-between items-center mt-11">
          <p className="font-semibold text-xl md:text-lg">CATEGORIES</p>

          <div className='flex gap-4'>
            <p className=" h-8 text-sm border border-black px-2 py-1 rounded-xl ">ALL</p>
            <p className=" h-8 text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
            <p className=" h-8 text-sm border border-black px-2 py-1 rounded-xl ">STREET ART</p>
            <p className=" h-8 text-sm border border-black px-2 py-1 rounded-xl ">SCULPTURES</p>
          </div>
        </div>
        
                <div className="grid grid-cols-1 md:grid-cols-3  mt-16">
                  <div className="border border-black p-6 flex flex-col gap-6">

                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <Link to="/post" className="text-sm border border-black px-2 py-1 rounded-xl hover:bg-black hover:text-white "
                      > ART
                      </Link>
                    </div>

                    <img src="pics/zebra.png" className="max-h-[380px]" />
                    
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>

                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/einstein.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>

                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                  <div className="border border-black p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center ">
                      <p className=" ">16. March 2022</p>
                      <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                    </div>
                    <img src="pics/painter.png" className="max-h-[380px]" />
                    <p className="font-semibold text-xl">The hidden messages of culture</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                    <div className="flex gap-6 text-xs">
                      <span><b>Date</b> 16. March 2022</span>
                      <span><b>Duration</b> 1 Min</span>
                    </div>
                  </div>
                </div>


                 <div className="flex justify-end mt-12">
                  <p className="flex font-semibold text-sm">NEXT →</p>
                </div>

                
                <div className='mt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-3  mt-16">
                        <div className="border border-black p-6 flex flex-col gap-6">
                          <div className="flex justify-between items-center ">
                            <p className=" ">16. March 2022</p>
                            <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                          </div>
                            <img src="pics/zebra.png" className="max-h-[380px]" />
                            
                            <p className="font-semibold text-xl">The hidden messages of culture</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                            <div className="flex gap-6 text-xs">
                            <span><b>Date</b> 16. March 2022</span>
                            <span><b>Duration</b> 1 Min</span>
                            </div>
                        </div>

                        <div className="border border-black p-6 flex flex-col gap-6">
                          <div className="flex justify-between items-center ">
                            <p className=" ">16. March 2022</p>
                            <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                          </div>
                            <img src="pics/einstein.png" className="max-h-[380px]" />
                            <p className="font-semibold text-xl">The hidden messages of culture</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                            <div className="flex gap-6 text-xs">
                            <span><b>Date</b> 16. March 2022</span>
                            <span><b>Duration</b> 1 Min</span>
                            </div>
                        </div>
                        <div className="border border-black p-6 flex flex-col gap-6">
                          <div className="flex justify-between items-center ">
                            <p className=" ">16. March 2022</p>
                            <p className=" text-sm border border-black px-2 py-1 rounded-xl ">ART</p>
                          </div>
                            <img src="pics/painter.png" className="max-h-[380px]" />
                            <p className="font-semibold text-xl">The hidden messages of culture</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                            <div className="flex gap-6 text-xs">
                            <span><b>Date</b> 16. March 2022</span>
                            <span><b>Duration</b> 1 Min</span>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
              <div className="bg-black text-white px-4 md:px-[48px] pt-20 mt-32">
                <div className="flex gap-6 overflow-hidden whitespace-nowrap text-sm font-semibold">
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                  <p>NEWSLETTER+++</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10 mt-20 items-center">
                  <p className="text-4xl md:text-6xl font-bold max-w-xl">DESIGN NEWS TO YOUR INBOX</p>

                  <div className="flex gap-2 ">
                    <input className="px-4 py-2 bg-[white] text-black text-sm w-full md:w-72" placeholder="Email" />
                    <button className="bg-white text-black px-4 py-2 text-sm font-semibold">SIGN UP</button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-sm">
                  <p className="font-bold">FYRE MAGAZINE</p>
                  <div className="flex flex-col gap-2">
                    <p>Art</p>
                    <p>Design</p>
                    <p>Architecture</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Magazine</p>
                    <p>Podcast</p>
                    <p>Authors</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Styleguide</p>
                    <p>Licensing</p>
                    <p>Changelog</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-20 pb-10 text-xs opacity-70">
                  <p>© Made by Pawel Gola - Powered by Webflow</p>
                  <div className="flex gap-4">
                    <img src="pics/insta.png" className="w-4 h-4" />
                    <img src="pics/twitter.png" className="w-4 h-4" />
                    <img src="pics/youtube.png" className="w-4 h-4" />
                    <img src="pics/wifi.png" className="w-4 h-4" />
                  </div>
                </div>
              </div>
    </div>


  );
}

export default Magazine;