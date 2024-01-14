import Card from './Card'


const Playlist = ({vdos,removeVdo}) =>{
    return (
        <div>
            <div className='text-4xl justify-center m-5 flex items-center gap-5 text-white'>
                <img src="https://yt3.googleusercontent.com/0Egx7lEwqyEe9VK7TJgA4fJIpGtDkFIZD4pq4O_pQH2iWyyhfR14C_HRHf7254jypADS_pBJIzA=s176-c-k-c0x00ffffff-no-rj" className='h-[80px] rounded-full' alt='Logo' ></img>
                GeekNerd POTD Videos
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 md:gap-0 grid-cols-1 gap-4'>
                    {
                        vdos.map((vdo)=>{
                            return <Card title={vdo.title} description={vdo.description} thumbnail={vdo.hdThumbnailUrl} videoDuration={vdo.videoDuration} videoUrl={vdo.videoUrl} videoId={vdo.videoId} removeVdo={removeVdo}
                            ></Card>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Playlist;