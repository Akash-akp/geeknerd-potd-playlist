import './App.css';
import Playlist  from './component/Playlist';
import Data from './component/Data'
import { useState } from 'react';

function App() {
  document.body.classList.add("bg-gray-900");
  const [vdos,setVdos] = useState(Data);

  const removeVdo = (vdoId)=>{
    const newVdos = vdos.filter(vdo => vdo.videoId !== vdoId);
    setVdos(newVdos);
  }

  if(vdos.length === 0){
    return(
      <div>
         <div className='text-4xl justify-center m-5 flex items-center gap-5 text-white'>
            <img src="https://yt3.googleusercontent.com/0Egx7lEwqyEe9VK7TJgA4fJIpGtDkFIZD4pq4O_pQH2iWyyhfR14C_HRHf7254jypADS_pBJIzA=s176-c-k-c0x00ffffff-no-rj" className='h-[80px] rounded-full' alt='Logo' ></img>
            GeekNerd POTD Videos
          </div>
          <div className='text-white h-[50vh] text-3xl flex flex-col justify-center items-center'>
            <h2 className='my-3'>No video left</h2>
            <button className='m-3 py-1 px-4 rounded-xl border border-white bg-white text-black opacity-50 hover:opacity-80 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.6)]' onClick={()=>setVdos(Data)}>Refresh</button>
          </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 m-0 p-0 box-border overflow-x-hidden font-arial pb-10">
      <Playlist vdos={vdos} removeVdo={removeVdo} ></Playlist>
    </div>
  );
}

export default App;
