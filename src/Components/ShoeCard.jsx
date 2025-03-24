const ShoeCard = ({imgUrl,changeBigShoeImg,bigShoeImg}) => {


    const handleClick = () => { 
        if(bigShoeImg !== imgUrl.bigShoe){
          changeBigShoeImg(imgUrl.bigShoe);
        }

    }

  return (
    <div className={`border-2 rounded-xl hover:scale-110 duration-200 shadow-lg dark:bg-slate-800 transition ease-in-out  ${bigShoeImg === imgUrl.bigShoe
         ? 'border-coral-red '
         : 'border-transparent'
        } cursor-pointer max-sm:flex-1 hover:drop-shadow-[0px_0px_14px_rgba(0,0,0,0.3)] hover:border-2 hover:border-coral-red
        `}
        onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} 
            alt="shoe collection"
            width={127}
            height={103}
            className="object-contain"
            />
        </div>
        </div>
  )
}

export default ShoeCard;