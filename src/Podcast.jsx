import { Link } from 'react-router-dom'

function Art() {
  return (
    <div className="">
      <div className='flex justify-center'>
        <p className="font-bold text-[4.7rem] md:text-[16.1rem] leading-none mt-10 ">PODCAST</p>
      </div> 

       <div className="mt-24">

        
        <div className="flex items-center justify-between py-10 border-t border-black">
          <p className="w-16 text-sm font-semibold">05</p>

          <div className="relative mt-4 ">
            <img src="pics/zebra.png" className="w-32 h-32 object-cover" />
            <div className="absolute inset-0 "></div>
            <div className="absolute top-2 left-2 text-white">
              <p className="text-[1rem] font-bold leading-none">FYRRE</p>
              <p className="text-[0.6rem] font-bold mt-1">PODCAST</p>
            </div>
            
            <p className="absolute bottom-3 left-2 text-white text-[0.6rem] font-bold">EP 05</p>
          </div>

          <p className="flex-1 px-10 text-xl md:text-2xl font-semibold leading-tight">The Problem of today’s cultural development</p>

          <div className="hidden md:flex items-center gap-14 w-[320px] justify-end">
            <div className="flex gap-10 text-xs whitespace-nowrap">
              <p><b>Date</b> 16. March 2022</p>
              <p><b>Duration</b> 1hr 20min</p>
            </div>

            
            <Link to="/podcastpost" className="text-sm font-semibold whitespace-nowrap "
              > LISTEN
            </Link>
          </div>

        </div>

        
        <div className="flex items-center justify-between py-10 border-t border-black">
          <p className="w-16 text-sm font-semibold">04</p>

          <div className="relative mt-4 ">
            <img src="pics/einstein.png" className="w-32 h-32 object-cover" />
            <div className="absolute inset-0 "></div>
            <div className="absolute top-2 left-2 text-white">
              <p className="text-[1rem] font-bold leading-none">FYRRE</p>
              <p className="text-[0.6rem] font-bold mt-1">PODCAST</p>
            </div>
            
            <p className="absolute bottom-3 left-2 text-white text-[0.6rem] font-bold">EP 05</p>
          </div>

          <p className="flex-1 px-10 text-xl md:text-2xl font-semibold leading-tight">The hidden messages of Jack Nielson</p>

          <div className="hidden md:flex items-center gap-14 w-[320px] justify-end">
            <div className="flex gap-10 text-xs whitespace-nowrap">
              <p><b>Date</b> 16. March 2022</p>
              <p><b>Duration</b> 1hr 20min</p>
            </div>

            <p className="text-sm font-semibold whitespace-nowrap">
              LISTEN →
            </p>
          </div>
        </div>

        
        <div className="flex items-center justify-between py-10 border-t border-black">
          <p className="w-16 text-sm font-semibold">03</p>

          <div className="relative mt-4 ">
            <img src="pics/painter.png" className="w-32 h-32 object-cover" />
            <div className="absolute inset-0 "></div>
            <div className="absolute top-2 left-2 text-white">
              <p className="text-[1rem] font-bold leading-none">FYRRE</p>
              <p className="text-[0.6rem] font-bold mt-1">PODCAST</p>
            </div>
            
            <p className="absolute bottom-3 left-2 text-white text-[0.6rem] font-bold">EP 05</p>
          </div>

          <p className="flex-1 px-10 text-xl md:text-2xl font-semibold leading-tight">Behind the scenes of the street art culture</p>

          <div className="hidden md:flex items-center gap-14 w-[320px] justify-end">
            <div className="flex gap-10 text-xs whitespace-nowrap">
              <p><b>Date</b> 16. March 2022</p>
              <p><b>Duration</b> 1hr 20min</p>
            </div>

            <p className="text-sm font-semibold whitespace-nowrap">LISTEN →</p>
          </div>
        </div>

        
        <div className="flex items-center justify-between py-10 border-t border-black">
          <p className="w-16 text-sm font-semibold">02</p>

          <div className="relative mt-4 ">
            <img src="pics/zebra.png" className="w-32 h-32 object-cover" />
            <div className="absolute inset-0 "></div>
            <div className="absolute top-2 left-2 text-white">
              <p className="text-[1rem] font-bold leading-none">FYRRE</p>
              <p className="text-[0.6rem] font-bold mt-1">PODCAST</p>
            </div>
            
            <p className="absolute bottom-3 left-2 text-white text-[0.6rem] font-bold">EP 05</p>
          </div>

          <p className="flex-1 px-10 text-xl md:text-2xl font-semibold leading-tight">The art of movement</p>

          <div className="hidden md:flex items-center gap-14 w-[320px] justify-end">
            <div className="flex gap-10 text-xs whitespace-nowrap">
              <p><b>Date</b> 16. March 2022</p>
              <p><b>Duration</b> 1hr 20min</p>
            </div>

            <p className="text-sm font-semibold whitespace-nowrap">LISTEN →</p>
          </div>
        </div>

        
        <div className="flex items-center justify-between py-10 border-t border-black">
          <p className="w-16 text-sm font-semibold">01</p>

          <div className="relative mt-4 ">
            <img src="pics/zebra.png" className="w-32 h-32 object-cover" />
            <div className="absolute inset-0 "></div>
            <div className="absolute top-2 left-2 text-white">
              <p className="text-[1rem] font-bold leading-none">FYRRE</p>
              <p className="text-[0.6rem] font-bold mt-1">PODCAST</p>
            </div>
            
            <p className="absolute bottom-3 left-2 text-white text-[0.6rem] font-bold">EP 05</p>
          </div>
          <p className="flex-1 px-10 text-xl md:text-2xl font-semibold leading-tight">10 artists you should definitely know</p>

          <div className="hidden md:flex items-center gap-14 w-[320px] justify-end">
            <div className="flex gap-10 text-xs whitespace-nowrap">
              <p><b>Date</b> 16. March 2022</p>
              <p><b>Duration</b> 1hr 20min</p>
            </div>

            <p className="text-sm font-semibold whitespace-nowrap">LISTEN →</p>
          </div>
        </div>

        
        <div className="border-t border-black"></div>

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
  )
}

export default Art
