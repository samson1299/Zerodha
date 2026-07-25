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
          <a href="" className='block w-fit mx-auto  bg-[#387ed1] text-white border border-transparent rounded-[3px] px-[30px] py-[10px] text-center cursor-pointer box-border text-[1.2em] leading-[1.2em] hover:bg-black transition-colors duration-300 '>Sign up for free</a>
        </div>
        <section className="container  flex items-center  relative w-[1100px] max-w-full mx-auto box-border ">
          <div className='section w-1/2 '>
            <div className='columns '>
              <h3 className='text-[2rem] leading-1.5 font-medium  mb-[40px] text-[#424242]'>Trust with confidence </h3>
            </div>
            <div>
              <h3 className='text-[25px]'>Customer-first always</h3>
              <p className='mt-[5px] mb-8 text-[#666] text-base leading-[1.8]'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
              <h3 className='text-[25px]'>No spam or gimmicks</h3>
              <p className="mt-[5px] mb-8 text-[#666] text-base leading-[1.8]">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div>
              <h3 className='text-[25px]'>The Zerodha universe</h3>
              <p className="mt-[5px] mb-8 text-[#666] text-base leading-[1.8]">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div>
              <h3 className='text-[25px]'>Do better with money</h3>
              <p className="mt-[5px]  text-[#666] text-base leading-[1.8]">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          </div>
          <div className="img w-1/2">
            <img src="/zerodha.png" alt="why-us" className='w-full' />
          </div>
        </section>
        <section className='mb-[120px] px-[20px] mt-[30px] pb-[60px] py-[20px] bg-[#f6fbff]'>
          <div className='img flex items-center gap-[35px]'>
            <img src="/kc-logo-landing.svg" alt="kite" />
            <span className='text-[#424242]'>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. </span>
            <img src="/kc-banner-image.svg" alt="" />
          </div>
        </section>
        <section className='pricing px-5 pb-[120px]'>
          <div className='container relative mx-auto w-[1100px] max-w-full box-border'>
            <div className='grid items-start gap-12 lg:grid-cols-[0.95fr_1.35fr]'>
              <div className='max-w-[420px] '>
                <h2 className='text-2xl leading-6 font-medium mt-0 mb-5 text-[#424242]'>Unbeatable pricing</h2>
                <p className='text-base leading-7 text-[#424242]'>
                  We pioneered the concept of discount broking and price transparency
                  in India. Flat fees and no hidden charges.
                </p>
              </div>

              <div className='grid gap-8 md:grid-cols-3'>
                <div className='pricing-card flex flex-col items-center text-center gap-3  '>
                  <img src='/O.svg' alt='pricing' className='h-[80px] w-auto' />
                  <p className='text-lg leading-6 text-[#666]'>
                    Free account
                    <br />
                    opening
                  </p>
                </div>

                <div className='pricing-card flex flex-col items-center text-center  gap-3 position-relative'>
                  <img src='/O.svg' alt='pricing' className='h-[80px] w-auto' />        
                  <p className='text-lg leading-6 text-[#666]'>
                    Free equity delivery
                    <br />
                    and direct mutual funds
                  </p>
                </div>

                <div className='pricing-card flex flex-col items-center text-center gap-3'>
                  <img src='/20.svg' alt='pricing' className='h-[80px] w-auto' />
                  <p className='text-lg leading-6 text-[#666]'>
                    Intraday and
                    <br />
                    F&amp;O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container relative w-[1100px] mx-w-[100%] m-auto box-border '>
            <div className=''>
              <div>
                <a href="https://zerodha.com/varsity/"> <img src="/index-education.svg" alt="education" /></a>
              </div>
              <div className='column'>
                <h2>Free and open market education</h2>
                <p>
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
              </p>
              <a href="https://zerodha.com/varsity">Varsity 
              <i className='icon-arrow'></i>
              </a>
              <p>
              TradingQ&amp;A, the most active trading and investment community in
              India for all your market related queries.
             </p>
             <a href="https://tradingqna.com/">
             TradingQ&amp;A 
             <i className='icon-arrow'></i>
             </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
