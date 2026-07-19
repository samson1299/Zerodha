import './App.css'
function App() {
  return (
    <>
      <div >
        <nav className='navbar fixed top-0 w-full z-10 bg-white shadow-[2px_1px_2px_#eee] box-border flex items-center justify-between px-20 py-5'>
          <img src="/logo.svg" alt="logo" className='h-[25px]' />
          <div className='flex items-center gap-10 text-[#424242] font-[30px] cursor-pointer '>
            <a >Signup</a>
            <a >About</a>
            <a >Products</a>
            <a >Pricing</a>
            <a >Support</a>

          </div>
        </nav>
        <div className=' relative w-[1100px] max-w-full mx-auto box-border m-30'>
          <img src="/landing.svg" alt="landing" />
          <h1 className='flex items-center justify-center font-medium text-[1.75rem] leading-[1.25] text-[#424242] font-["inter"-serif] '>Invest in everything</h1>
          <p className='flex items-center justify-center font-normal text-[1.25rem] leading-[1.25] text-[#424242] py-2'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <a href="" className='block w-fit mx-auto  bg-[#387ed1] text-white border border-transparent rounded-[3px] px-[30px] py-[10px] text-center cursor-pointer box-border text-[1.2em] leading-[1.2em]  '>Sign up for free</a>
        </div>
        <div className="container flex">
          <div className='section'>
            <div className='columns '>
              <h3>Trust with confidence </h3>
            </div>
            <div>
              <h3>Customer-first always</h3>
              <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
              <h3>No spam or gimmicks</h3>
              <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div>
              <h3>The Zerodha universe</h3>
              <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div>
              <h3>Do better with money</h3>
              <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          </div>
          <div className="img">
            <img src="/zerodha.png" alt="why-us" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
