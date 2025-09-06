import imgHome from '../assets/image 1 (1).png'

function Home() {
  return (
    <>
    <div className="home min-h-screen max-w-full flex ">
        <div className="flex flex-col   lg:justify-between container mx-auto py-5  sm:px-10 sm:py-10 gap-10 items-center text-center justify-center  lg:text-left lg:flex-row text-base">

            <div className='flex flex-col gap-2 justify-center w-80 mx-auto sm:mx-0 sm:justify-start'>
                <h1 className='text-tertiary lg:text-4xl md:text-3xl sm:text-2xl text-3xl font-bold'>Implemente</h1>
                <h2 className=' text-white lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold' >O seu futuro global agora!</h2>
                <p className='text-white text-sm font-normal'>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
                <button className='py-7 flex justify-center lg:justify-start'>
                    <span className='text-white bold rounded-2xl  text-base bg-tertiary transition duration-300 hover:drop-shadow-[0_0_15px_#E4105D] p-2'>Começar agora</span>
                </button>
            </div>
            <img src={imgHome} alt="" className="max-w-full
            " />

        </div>
    </div>
    </>
  )
}

export default Home