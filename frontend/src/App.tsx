// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Header from './components/Header/Header';

function App() {
  return (
    <div className="flex-col h-screen text-center justify-center bg-hero bg-cover bg-center" >
      <Header />
      <div className='flex justify-around w-full '>
        <div className='w-[500px]'>
          <h1 className='font-medium text-white text-7xl'>Consulte agora agora mesmo</h1>
        </div>
        
        <div className='flex-col w-[512px] text-left gap-8'>
          <div className='flex-col gap-2'>
            <h1 className='text-4xl text-white'>Os melhores fornedores de energia</h1>
            <h2 className='text-sm text-white'>A empresa que vai fazer você ecomizar ate 40% na conta de energia da sua empresa</h2>
          </div>

          <div className='flex gap-4 justify-center'>
            <input className='bg-white rounded-lg' placeholder='Digite seu consulmo mensal' type="text" name="" id="" />
            <button className='rounded-full border-2 bg-white border-white bg-effects-white-80 shadow-button backdrop-blur-35 p-1'>Ver fornecedores</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
