import { useState } from 'react'







import   './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  
<div className='pt-16 px-[48px]'>
  


<header className='flex justify-between items-center '>  
  <div className='text-left'>
    <p className='font-bold text-lg'>FYRE MAGAZINE</p>
  </div>

  <div className='flex text-right gap-4'>
    <p className=''>Magazine</p>
    <p>Authors</p>
    <p>Podcast</p>
    <p>-</p>
    <img src="pics/insta.png" alt="" />
    <img src="pics/twitter.png" alt="" />
    <img src="pics/youtube.png" alt="" />
    <img src="pics/wifi.png" alt="" />
  </div>



</header>
<hr className="border-b border-black mt-6" />

<div className='text-center'>
  <p className='font-bold text-[13.3rem]'>ART & LIFE</p>
</div>
    
<div className='flex flex-row text-lg bg-black p-4 text-white gap-5 overflow-hidden whitespace-nowrap'>
    <p className='font-semibold '>NEWS TICKER+++</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
</div>   
      
  
<div className="flex justify-between gap-10 mt-10">

  <div className="max-w-[480px]">
    <p className="font-bold text-[4.2rem] leading-[4.2rem]">DON’T CLOSE YOUR EYES</p>
  </div>

  <div className="flex flex-col justify-between ">
    <p className="max-w-[560px] text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>

    <div className="flex items-center justify-between mt-6">

      <div className="flex flex-row gap-6 text-xs ">
        <div className="flex gap-1">
          <p className="font-semibold">Text</p>
          <p>Jakob Gronberg</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Date</p>
          <p>16. March 2022</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Duration</p>
          <p>1 Min</p>
        </div>
      </div>

      <button className="px-3 py-1 border border-black rounded-full text-xs">LABEL</button>
    </div>
  </div>

</div>


<div className='mt-15'>
  <img src="pics/weird_womans.png" alt="" />
</div>
    
<div className="flex  justify-center gap-20 mt-10">
    
  <div className="flex flex-col gap-10 ">
    
    <div className="flex flex-row gap-10">
      <img className='max-w-[200px]' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
    </div>

    <hr className="border-b border-black mt-6 max-w-[600px]" />
    
    <div className="flex flex-row gap-10">
      <img className='w-50' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
        </div>

        <div className="flex items-center justify-between gap-18">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
    </div>

    <hr className="border-b border-black mt-6 w-full" />

    <div className="flex flex-row gap-10">
      <img className='w-50' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>        
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
    </div>

    <hr className="border-b border-black mt-6 w-full" />

    <div className="flex flex-row gap-10">
      <img className='w-50' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
    </div>

    <hr className="border-b border-black mt-6 w-full" />

    <div className="flex flex-row gap-10">
      <img className='w-50' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
    </div>

    <hr className="border-b border-black mt-6 w-full" />

    <div className="flex flex-row gap-10">
      <img className='w-50' src="pics/high-woman.png" alt="" />
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Hope dies last</p>
          <p className="text-[0.8rem] w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-5 text-sm">
            <div className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Jakob Gronberg</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Read</p>
              <p>1 Min</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-black rounded-full text-xs">ART</button>
        </div>
      </div>
      
    </div>
    

  
    
    <div className='mt-10 mb-20 text-sm font-semibold'>ALL ARTICLES -></div>
  </div>

  <div className="flex flex-col gap-10 text-left max-w-xs">

    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold">PRINTMAGAZINE</p>
      <p className="text-4xl font-semibold">03/2022</p>

      <div className="relative">
        <img src="pics/male-man.png" alt="" className="w-full h-auto" />
      </div>

      <button className="px-4 py-2 bg-black text-white text-xs border border-black w-fit">BUTTON</button>
    </div>

    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold ">MOST POPULAR</p>

      <div className="flex gap-7 items-start">
        <p className="font-semibold  ">01</p>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Street art festival</p>
          <p className="text-xs"><span className="font-semibold">Text</span> Cristofer Vacaro</p>
        </div>
      </div>
      <hr className='border-black'/>

      <div className="flex gap-7 items-start">
        <p className="font-semibold">02</p>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Hope dies last</p>
          <p className="text-xs"><span className="font-semibold">Text</span> Anne Henry</p>
        </div>
      </div>
      <hr className='border-black' />

      <div className="flex gap-7 items-start">
        <p className="font-semibold">03</p>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Artists who want to rise above</p>
          <p className="text-xs"><span className="font-semibold">Text</span> Anna Nielsen</p>
        </div>
      </div>
    </div>

      <div className='flex flex-col px-2 py-10 bg-[#F8F8F8]'>
        <div className='font-semibold flex flex-col gap-4'>
          <p>NEWSLETTER</p>
          <p className='font-semibold text-2lg'>Design News to your inbox</p>
          <input className='bg-white' placeholder='Email' />
          <button className='px-2 py-2 bg-black text-sm text-white border-black w-fit'>SIGN UP</button>
          
        </div>
      </div>
  </div>

  
</div>

<hr className="border-b border-black  w-full" />

<div className='mt-12'>
  
  <div className='flex justify-between items-center '>  
      <div className='text-left'>
        <h1 className='font-bold text-6xl'>PODCAST</h1>
      </div>
    

    <div className='flex text-right'>
      <p className='font-semibold text-sm'>ALL EPISODES -></p>
      
    </div>
  </div>
    <div class="grid grid-cols-3 mt-20 ">
      <div className=' p-6 flex flex-col border border-black gap-8'>
        <img className='max-h-[380px] ' src="pics/zebra.png" alt="" />
        <p className='text-xl font-semibold'>The Problem of today’s cultural development</p>
        <div className="flex flex-row gap-6 text-xs ">
          
          <div className="flex gap-1">
            <p className="font-semibold">Date</p>
            <p>16. March 2022</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Duration</p>
            <p>1 Min</p>
          </div>
        </div>
      </div>
      
      <div className='p-6 flex flex-col border border-black gap-8'>
        <img className='max-h-[380px]' src="pics/einstein.png" alt="" />
        <p className='text-xl font-semibold'>The hidden messages of Jack Nielson</p>
        <div className="flex flex-row gap-6 text-xs ">
          
          <div className="flex gap-1">
            <p className="font-semibold">Date</p>
            <p>16. March 2022</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Duration</p>
            <p>1 Min</p>
          </div>
        </div>
      </div>

      <div className='p-6 flex flex-col border border-black gap-8'>
        <img className='max-h-[380px]' src="pics/painter.png" alt="" />
        <p className='text-xl font-semibold'>Behind the scenes of the street art culture</p>
        <div className="flex flex-row gap-6 text-xs ">
          
          <div className="flex gap-1">
            <p className="font-semibold">Date</p>
            <p>16. March 2022</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Duration</p>
            <p>1 Min</p>
          </div>
        </div>

      </div>
    </div>

<hr className="border-b border-black w-full mt-20" />
</div>

  <div className='mt-12'>
    
    <div className='flex justify-between items-center '>  
        <div className='text-left'>
          <h1 className='font-bold text-6xl'>AUTHORS</h1>
        </div>
      

      <div className='flex text-right'>
        <p className='font-semibold text-sm'>ALL EPISODES -></p>
        
      </div>
    </div>

    <div class="grid p-6 grid-cols-2 mt-20 px-0">
      <div className='flex p-4 flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/gronberg.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' p-4 flex flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/jensen.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>

      </div>
      <div className=' p-4 flex flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/henry.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' p-4 flex flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/gronberg.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' p-4 flex flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/gronberg.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' p-4 flex flex-row border border-black gap-8'>
        <img className='rounded-full w-28 h-28' src="pics/gronberg.png" alt="" />
        <div className='mt-7 '>
          <p className='font-semibold text-xl'>Jakob Gronberg</p>
          <div className=' flex row gap-5 text-sm '>
            <div className="flex gap-1">
              <p className="font-semibold">Date</p>
              <p>16. March 2022</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Duration</p>
              <p>1 Min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className='bg-black mb-10 w-full'>
  <p>aaa</p>
    <div className='flex flex-row text-lg text-white gap-5 overflow-hidden whitespace-nowrap'>
    <p className='font-semibold '>NEWS TICKER+++</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
  </div>   
</div>
</div>    
  )
}

export default App





