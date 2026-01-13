import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Magazine from './Magazine'
import './App.css'
import Post from './Post'
import Podcast from './Podcast'
import PodcastPost from './PodcastPost'
import Authors from './Authors'
import AuthorPost from './AuthorPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="pt-6">

        <header className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-[48px]">
          <p className="font-bold text-lg">FYRE MAGAZINE</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/magazine" className="hover:underline">Magazine</Link>
            <Link to="/authors" className="hover:underline">Authors</Link>
            <Link to="/podcast" className="hover:underline">Podcast</Link>
            <p>-</p>
            <img src="pics/insta.png" className="w-4 h-4" />
            <img src="pics/twitter.png" className="w-4 h-4" />
            <img src="pics/youtube.png" className="w-4 h-4" />
            <img src="pics/wifi.png" className="w-4 h-4" />
          </div>
        </header>

        <hr className="border-black mt-6 mx-4 md:mx-[48px]" />

        <Routes>
          <Route path="/" element={
            <>
              <div className="px-4 md:px-[48px]">
                <p className="font-bold text-center text-[4rem] md:text-[13.9rem] leading-none mt-10">ART & LIFE</p>

                <div className="flex gap-6 bg-black text-white p-4 mt-6 overflow-hidden whitespace-nowrap text-sm">
                  <p className="font-semibold">NEWS TICKER+++</p>
                  <p>Lorem ipsum dolor sit amet +++</p>
                  <p>Lorem ipsum dolor sit amet +++</p>
                  <p>Lorem ipsum dolor sit amet +++</p>
                  <p>Lorem ipsum dolor sit amet +++</p>
                  <p>Lorem ipsum dolor sit amet +++</p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 mt-16">
                  <p className="font-bold text-4xl md:text-[4.2rem] leading-tight max-w-md">DON'T CLOSE YOUR EYES</p>

                  <div className="flex flex-col gap-6 max-w-xl">
                    <p className="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>

                    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span><b>Text</b> Jakob Gronberg</span>
                        <span><b>Date</b> 16. March 2022</span>
                        <span><b>Duration</b> 1 Min</span>
                      </div>
                      <button className="border border-black rounded-full px-3 py-1 text-xs w-fit">LABEL</button>
                    </div>
                  </div>
                </div>

                <img src="pics/weird_womans.png" className="mt-16 w-full" />

                <div className="flex flex-col lg:flex-row gap-20 mt-20">

                  <div className="flex flex-col gap-12 flex-1">

                    <div>
                      <div className="flex flex-col md:flex-row gap-6">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      <div className="flex flex-col md:flex-row gap-6 mt-7">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      <div className="flex flex-col md:flex-row gap-6 mt-7">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam. </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      <div className="flex flex-col md:flex-row gap-6 mt-7">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      <div className="flex flex-col md:flex-row gap-6 mt-7">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam. </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      <div className="flex flex-col md:flex-row gap-6 mt-7">
                        <img src="pics/high-woman.png" className="w-full md:w-[200px]" />
                        <div className="flex flex-col justify-between gap-6 flex-1">
                          <div>
                            <p className="font-semibold text-xl">Hope dies last</p>
                            <p className="text-xs max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span><b>Text</b> Jakob Gronberg</span>
                              <span><b>Date</b> 16. March 2022</span>
                              <span><b>Read</b> 1 Min</span>
                            </div>
                            <button className="border border-black rounded-full px-3 py-1 text-xs">ART</button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-black mt-6" />

                      
                    </div>

                    

                    <p className="font-semibold text-sm">ALL ARTICLES →</p>
                  </div>

                  <div className="flex flex-col gap-12 max-w-sm w-full">
                    <div>
                      <p className="text-sm font-semibold">PRINTMAGAZINE</p>
                      <p className="text-4xl font-semibold mt-2">03/2022</p>
                      <div className="relative mt-4 w-full">
                        <img src="pics/male-man.png" className="w-full" />
                        <div className="absolute inset-0 "></div>
                        <div className="absolute top-6 left-6 text-white">
                          <p className="text-[6.5rem] font-bold leading-none">FYRRE</p>
                          <p className="text-sm font-bold mt-1">MAGAZIN</p>
                        </div>
                        <div className="text-white -rotate-10 mt-45 absolute left-6 top-32 bg-[#ECC584] rounded-full w-28 h-28 flex flex-col items-center justify-center text-center text-xs font-bold ">
                          <p className="text-[10px]">EXCLUSIVE</p>
                          <p className="text-sm mt-1">JACOB<br />GRONBERG</p>
                          <p className="text-[10px] mt-1">INTERVIEW</p>
                        </div>
                        <p className="absolute bottom-6 left-6 text-white text-xl font-bold">03/2022</p>
                      </div>
                      <button className="mt-4 bg-black text-white px-4 py-2 text-xs">BUTTON</button>
                    </div>

                    <div>
                      <p className="text-xs font-bold mb-4">MOST POPULAR</p>
                      <div>
                        <div className="flex gap-4 items-start text-sm">
                          <p className="font-bold">01</p>
                          <div>
                            <p className="font-bold text-lg">Hope dies last</p>
                            <p className="text-xs"><b>Text</b> Anne Henry</p>
                          </div>
                        </div>
                        <hr className="border-black my-4" />
                        <div className="flex gap-4 items-start text-sm">
                          <p className="font-bold">02</p>
                          <div>
                            <p className="font-bold text-lg">Hope dies last</p>
                            <p className="text-xs"><b>Text</b> Anne Henry</p>
                          </div>
                        </div>
                        <hr className="border-black my-4" />
                        <div className="flex gap-4 items-start text-sm">
                          <p className="font-bold">03</p>
                          <div>
                            <p className="font-bold text-lg">Hope dies last</p>
                            <p className="text-xs"><b>Text</b> Anne Henry</p>
                          </div>
                        </div>
                        <hr className="border-black my-4" />
                      </div>
                    </div>

                    <div className="bg-[#F8F8F8] p-6">
                      <p className="font-semibold">NEWSLETTER</p>
                      <p className="font-bold mt-2 text-xl">Design News to your inbox</p>
                      <input className="mt-4 w-full p-2 bg-white text-sm" placeholder="Email" />
                      <button className=" mt-4 bg-black text-white px-4 py-2 text-sm">SIGN UP</button>
                    </div>
                  </div>
                </div>

                <hr className="border-black mt-24" />

                <div className="mt-16">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-4xl md:text-6xl">PODCAST</p>
                    <p className="font-semibold text-sm">ALL EPISODES →</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3  mt-16">
                    <div className="border border-black p-6 flex flex-col gap-6">
                      <div className="relative mt-4 w-full h-[380px] overflow-hidden">
                        <img src="pics/zebra.png" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                        <div className="absolute top-6 left-6 text-white">
                          <p className="text-[3.5rem] font-bold leading-none">FYRRE</p>
                          <p className="text-sm font-bold mt-1">PODCAST</p>
                        </div>
                        
                        <p className="absolute bottom-6 left-6 text-white text-xl font-bold">EP 05</p>
                      </div>
                      
                      <p className="font-semibold text-xl">The hidden messages of culture</p>
                      <div className="flex gap-6 text-xs">
                        <span><b>Date</b> 16. March 2022</span>
                        <span><b>Duration</b> 1 Min</span>
                      </div>
                    </div>

                    <div className="border border-black p-6 flex flex-col gap-6">
                      <div className="relative mt-4 w-full h-[380px] overflow-hidden">
                        <img src="pics/einstein.png" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                        <div className="absolute top-6 left-6 text-white">
                          <p className="text-[3.5rem] font-bold leading-none">FYRRE</p>
                          <p className="text-sm font-bold mt-1">PODCAST</p>
                        </div>
                        
                        <p className="absolute bottom-6 left-6 text-white text-xl font-bold">EP 04</p>
                      </div>
                      <p className="font-semibold text-xl">The hidden messages of culture</p>
                      <div className="flex gap-6 text-xs">
                        <span><b>Date</b> 16. March 2022</span>
                        <span><b>Duration</b> 1 Min</span>
                      </div>
                    </div>
                    <div className="border border-black p-6 flex flex-col gap-6">
                      <div className="relative mt-4 w-full h-[380px] overflow-hidden">
                        <img src="pics/painter.png" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                        <div className="absolute top-6 left-6 text-white">
                          <p className="text-[3.5rem] font-bold leading-none">FYRRE</p>
                          <p className="text-sm font-bold mt-1">PODCAST</p>
                        </div>
                        
                        <p className="absolute bottom-6 left-6 text-white text-xl font-bold">EP 03</p>
                      </div>
                      <p className="font-semibold text-xl">The hidden messages of culture</p>
                      <div className="flex gap-6 text-xs">
                        <span><b>Date</b> 16. March 2022</span>
                        <span><b>Duration</b> 1 Min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-black mt-24" />

                <div className="mt-16">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-4xl md:text-6xl">AUTHORS</p>
                    <p className="font-semibold text-sm">ALL AUTHORS →</p>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-2  mt-16">
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
                      </div>
                    </div>
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
                      </div>
                    </div>
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
                      </div>
                    </div>
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
                      </div>
                    </div>
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
                      </div>
                    </div>
                    <div  className="border border-black p-4 flex gap-6 items-center">
                      <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
                      <div>
                        <p className="font-semibold text-xl">Jakob Gronberg</p>
                        <div className="flex gap-4 text-xs mt-2">
                          <span><b>Date</b> 16. March 2022</span>
                          <span><b>Duration</b> 1 Min</span>
                        </div>
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
            </>
          } />

          <Route path="/magazine" element={<Magazine />} />
          <Route path="/post" element={<Post />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/podcastpost" element={<PodcastPost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authorpost" element={<AuthorPost />} />


        </Routes>

      </div>
    </Router>
  )
}

export default App