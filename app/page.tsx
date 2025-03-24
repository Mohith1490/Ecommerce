import { CategoryCard, ProductCard, SimpleCard } from '@/components/Cards'
import {InfiniteTextMoving}  from '@/components/animations/Animations'

export default function Home() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center relative mt-5 mb-5" >
        <div className="w-[95%] h-full border-2 border-black rounded-2xl relative" >

        </div>
      </div>
      <div className="w-full h-auto " >
        <h1 className="text-3xl text-gray-800 text-center font-bold" >Discover birthday gifts as special as they are</h1>
        <div className='w-full h-66 flex items-center justify-evenly' >
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
      <InfiniteTextMoving/>
      <div className='w-full h-auto mt-5 '  >
        <h1 className="text-3xl text-gray-800 font-bold ml-8" >Amazing deals, updated daily</h1>
        <div className='w-[95%] p-3 h-auto overflow-x-scroll relative m-auto flex self-center no-scrollbar' >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='w-full h-auto border-2 border-black' >
        <h1 className="text-3xl text-gray-800 font-bold ml-8" >Featured categories</h1>
        <div className='w-full h-auto border-2 border-black' >
           <CategoryCard/>
        </div>
      </div>
    </>
  );
}
