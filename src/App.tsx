import './App.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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
          <a href="https://zerodha.com/open-account/" className=' flex items-center justify-center mt-5 px-[30px] py-[10px] text-center text-[1.2em] leading-[1.2em] font-medium text-white no-underline whitespace-nowrap bg-[#387ed1] border border-transparent rounded-[3px] cursor-pointer box-border hover:bg-black transition-colors duration-300'>Sign up for free</a>
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
            <div className='flex justify-between items-center box-border '>
              <div className='ml-0 text-center'>
                <a href="https://zerodha.com/varsity/"> <img src="/index-education.svg" alt="education" /></a>
              </div>
              <div className='column basis-[48%] w-[48%] box-border flex-[0_1_auto]'>
                <h2 className='m-0  font-medium mb-[20px] text-2xl leading-[1.5]'>Free and open market education</h2>
                <p className='text-base leading-[1.8] mb-[15px] text-[#424242]'>
                  Varsity, the largest online stock market education book in the world
                  covering everything from the basics to advanced trading.
                </p>
                <a className='text-[#387ed1] no-underline font-medium' href="https://zerodha.com/varsity">Varsity
                </a>
                <p className='mt-[30px] text-base leading-[1.8] mb-[15px] text-[#424242]'>
                  TradingQ&amp;A, the most active trading and investment community in
                  India for all your market related queries.
                </p>
                <a className='text-[#387ed1]  no-underline font-medium' href="https://tradingqna.com/">
                  TradingQ&amp;A
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='pt-20 py-10 text-center last:pb-20'>
        <div className='w-[900px] max-w-full mx-auto box-border'>
          <h2 className='text-2xl m-[20px] leading-[1.5] font-medium'>Open a Zerodha account</h2>
          <p className='text-[#666] text-base leading-[1.8] mb-[15px] '>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.
          </p>
          <a href="https://zerodha.com/open-account/" className="inline-block mt-5 px-[30px] py-[10px] text-center text-[1.2em] leading-[1.2em] font-medium text-white no-underline whitespace-nowrap bg-[#387ed1] border border-transparent rounded-[3px] cursor-pointer box-border hover:bg-black transition-colors duration-300">Sign up for free</a>
        </div>
      </section>
      <footer className='bg-[#fbfbfb] p-4  border-[#eee] '>
        <div className='relative w-full max-w-[1100px] mx-auto box-border'>
          <div className='flex flex-row flex-wrap justify-between text-sm grow-0 shrink basis-auto box-border'>
            <div className='basis-[22%] w-[22%] grow-0 shrink box-border first:ml-0'>
              <div className=' logo py-[10px]'>
                <img src="/logo.svg" alt="logo" className='h-[25px]' />
              </div>
              <p className="copyright text-grey m-0 text-[0.8rem] text-[#666] block my-4 mx-0 leading-[1.8]">© 2010 - 2026, Zerodha Broking Ltd.</p>
              <p className="copyright text-grey m-0 text-[0.8rem] text-[#666] block my-4 mx-0 leading-[1.8]">All rights reserved.</p>
              <ul className='text-[#424242] list-none m-0 mt-[15px] p-0 text-sm flex gap-4 '>
                <li>
                  <a href="https://x.com/zerodha" target="_blank" rel="noopener noreferrer" className='no-underline bg-transparent text-[#666] font-normal text-xl leading-none'><img src="x-twitter.svg" alt="x" /></a>
                </li>
                <li>
                  <a target="_blank" href="https://facebook.com/zerodha.social" className='no-underline bg-transparent text-[#666] font-normal text-xl leading-none'><FaFacebook /></a>
                </li>
                <li>
                  <a target="_blank" href="https://instagram.com/zerodhaonline/" className='no-underline bg-transparent text-[#666] font-normal text-xl leading-none'><FaInstagram /></a>
                </li>
                <li>
                  <a target="_blank" href="https://linkedin.com/company/zerodha" className='no-underline bg-transparent text-[#666] font-normal text-xl leading-none'><FaLinkedin />
                  </a>
                </li>
              </ul>
              <hr className='border-0 border-t border-[#eee] h-0 overflow-visible text-sm' />
              <ul className='text-[#424242] list-none m-0 mt-[15px] p-0 text-sm flex gap-4 '>
                <li>
                  <a target="_blank" href="https://www.youtube.com/@zerodhaonline">
                    <img className="youtube-logo" src="https://zerodha.com/static/images/youtube.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                    <img className="whatsapp-logo" src="https://zerodha.com/static/images/whatsapp-logo.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/zerodhain">
            
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
