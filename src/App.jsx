import './App.css'

function App() {

  return (
    <div className="bg-[#C8E6CA] h-screen flex justify-center items-center">
      <div className='bg-white rounded-3xl shadow-xl h-3/4 w-3/4 relative' >      

        <div className='bg-green-600 max-w-xs  h-[68%] rounded-tl-3xl mb-3 text-white pl-5 pt-60 '>
          <h2 className='font-bold'>✉ Email</h2>
          <p>gaspargomez2000@outlook.com</p>
          <br />
          <h3 className='font-bold'>📱 Celular</h3>
          <p>(+54) 387 1234567</p>

        </div>
        <div className='bg-green-600 max-w-xs h-[30%] rounded-bl-3xl pt-5 pl-5 text-white flex flex-col'>
          <h3>Me podés encontrar en</h3>
          <div className='flex'>
          <a href="https://github.com/ggomez0" >
            <img src="/src/assets/github.svg" className='w-8' alt="GitHub"/>
          </a>

          <a href="https://linkedin.com/in/gaspargomez" >
            <img src="/src/assets/linkedin.svg" className='w-8' alt="LinkedIn"/>
          </a></div>
        </div>

        <div className='absolute w-96 top-1/2 left-[39%] transform -translate-x-1/2 -translate-y-1/2'>
      <img src='/src/assets/fotogaspar.jpg' className='w-full' alt="Gaspar's Photo"/>
    </div>
        </div>
      </div>
  )
}

export default App
