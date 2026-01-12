import { Link } from 'react-router-dom' 
import React from 'react';

function AuthorPost() {
  return (
    <div className="">
        <div className="flex justify-between items-center mt-11">
          <p className="font-semibold ">GO BACK</p>
          <p className=" text-xl font-bold  ">AUTHOR</p>
        </div>
        <div className="flex flex-col md:flex-row gap-18 mt-16  ">
        
        <div className="flex flex-col gap-4 md:w-1/3 relative md:left-33 ">
          
            <img src="pics/jensen.png" className="w-62 h-62 rounded-full rounded " />
            
          
          <hr className="border-black w-60 " />
          <div className="flex flex-col gap-4 text-xs">
            

            
            
            <div className="flex  gap-34 mt-1">
              <p className="font-bold text-l">FOLLOW</p>
              <div className="flex  gap-3">
                <img src="pics/insta.png" className="w-4 h-4" />
                <img src="pics/twitter.png" className="w-4 h-4" />
                <img src="pics/youtube.png" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="md:w-2/4 flex flex-col gap-6 text-sm leading-6">
            
            <p className='font-bold text-3xl md:text-8xl leading-tight'>LOUISE JENSEN</p>

            <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
            <p>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</p>

            

          
        </div>
         
      </div>
      <hr className="border-black mt-20 " />
      <div>
        <p className='font-semibold text-2xl md:text-6xl mt-10'>Articles by Louise Jensen</p>

        <div className="grid grid-cols-3 md:grid-cols-2  mt-8">
            <div  className="border border-black p-4 flex gap-6 items-center">
            <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
            <div>
                <p className="font-bold text-xl">The best art museums</p>
                <div className="flex gap-4 text-xs mt-2">
                <span><b>Date</b> 16. March 2022</span>
                <span><b>Read</b> 1 Min</span>
                </div>
            </div>
            </div>
            <div  className="border border-black p-4 flex gap-6 items-center">
            <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
            <div>
                <p className="font-bold text-xl">An inde­struc­tible hope</p>
                <div className="flex gap-4 text-xs mt-2">
                <span><b>Date</b> 16. March 2022</span>
                <span><b>Read</b> 1 Min</span>
                </div>
            </div>
            </div>
            <div  className="border border-black p-4 flex gap-6 items-center">
            <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
            <div>
                <p className="font-bold text-xl">The chains of our lives</p>
                <div className="flex gap-4 text-xs mt-2">
                <span><b>Date</b> 16. March 2022</span>
                <span><b>Read</b> 1 Min</span>
                </div>
            </div>
            </div>
            <div  className="border border-black p-4 flex gap-6 items-center">
            <img src="pics/gronberg.png" className="w-24 h-24 rounded-full" />
            <div>
                <p className="font-bold text-xl">Keep on smiling</p>
                <div className="flex gap-4 text-xs mt-2">
                <span><b>Date</b> 16. March 2022</span>
                <span><b>Read</b> 1 Min</span>
                </div>
            </div>
            </div>
            
            
        </div>
      </div>
      <div className="bg-black text-white px-4 md:px-[48px] pt-20 mt-35">
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
  );
}

export default AuthorPost;
