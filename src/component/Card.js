const Card = ({title,description,thumbnail,videoDuration,videoUrl,videoId,removeVdo}) => {
    const desc = description.substring(0,200);
    const removeCard = ()=>{
        removeVdo(videoId);
    }
    return (
        <div className="w-[370px] h-[450px] flex relative z-0 flex-col px-5 py-5 m-2 rounded-xl hover:z-10 md:hover:scale-110 bg-gray-200 hover:border border-gray-400 overflow-hidden hover:shadow-2xl md:opacity-80 hover:opacity-100 transition-all ease-in-out duration-300">
            <a href={videoUrl} target="_blanck">
                <div className="h-[180px] w-full rounded-md border relative border-gray-400 overflow-hidden group">
                    <img src={thumbnail} className="relative bottom-8 group-hover:blur-[2px]" alt="unable to upload"></img>
                    <i class="fa-solid fa-play text-white hidden group-hover:absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] text-[30px]"></i>
                </div>
            </a>
            <div className="flex justify-between text-md my-2 h-6 overflow-hidden">
                <p className="font-medium">{title}</p>
                <p className="text-sm relative top-[15%] text-gray-600">{videoDuration}</p>
            </div>
            <p className="text-sm font-thin">{desc.length!==0?desc:"No description"}{desc.length!==0?<span>....<a href={videoUrl} className="text-blue-600 font-normal hover:text-blue-800 hover:underline" target="_blanck">Read more</a></span>:""}</p>
            <button className="absolute bottom-4 left-[50%] -translate-x-[50%] py-2 px-4 my-2 rounded-md bg-red-600 hover:bg-red-800 text-white" onClick={removeCard}>
            <i class="fa-solid fa-trash"></i>  Remove
            </button>
        </div>
    )
}
export default Card;