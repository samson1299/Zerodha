const Signup = () => {

  return (
    <>
      <nav className="fixed top-0 z-10 w-full block perspective-[600px] box-border bg-white shadow-[2px_1px_2px_#eee]">
        <div className="relative w-[1100px] max-w-full mx-auto box-border p-0">
          <div className="flex flex-row flex-wrap justify-between box-border flex-[0_1_auto]">
            <div className="relative box-border flex-[0_1_auto] basis-[39.3333333333%] w-[39.3333333333%]">
              <a href="/">
                <img className="logo-img relative top-[18px] max-h-[17px] max-w-full align-middle border-0" src="/logo.svg" alt="Zerodha logo"></img>
              </a>
            </div>
            <div className="box-border basis-[56.666667%] w-[56.666667%] flex-[0_1_auto]  items-center justify-center ">
              <ul className="list-none flex justify-end text-righ">
                <li>
                  <a className="inline px-5 inline-block   box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]" href="">Signup</a>
                </li>
                <li>
                  <a className="inline px-5 inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]" href="">About</a>
                </li>
                <li>
                  <a className="inline px-5 inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]" href="">Products</a>
                </li>
                <li>
                  <a className="inline px-5 inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]" href="">Pricing</a>
                </li>
                <li>
                  <a className="inline px-5 inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]" href="">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className="block">
        <div className="pt-[100px] pb-[50px]">
          <div className="relative w-full max-w-[1100px] mx-auto box-border">
            <h1 className="text-center text-[#424242] px-5 text-center text-[1.75rem] leading-[1.25] mt-0 mb-5 font-medium">Open a free demat and trading account online</h1>
            <p className="mt-2.5 mb-[15px] text-[1.25rem] leading-[1.7] text-[#666666] text-center">
              Start investing brokerage free and join a community of <span className="client-count">1.6+ crore</span> investors and traders
            </p>
          </div>
        </div>
        <div className="pt-5 px-10">
          <div className="relative w-full max-w-[1100px] mx-auto box-border">
            <div className="flex flex-row flex-wrap flex-[0_1_auto] items-center justify-evenly box-border">
              <div className="box-border text-center flex-[0_1_auto]">
                <img src="/account_open.svg" className="w-[500px] h-auto mx-auto " alt=""></img>
              </div>
              <div className="max-w-[400px] basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                <div className="hidden">Open a free demat &amp; trading account online</div>
                <div className="mb-[10px] text-left text-2xl leading-[1.5] font-medium">Signup now</div>
                <span className="text-[#9b9b9b] ">Or track your existing application</span>
                <form action="relative">
                  <div className="relative box-border flex flex-[0_1_auto] flex-row flex-wrap">
                    <span className=" text-[#424242] absolute left-[1px] top-[1px] h-[55px] w-[90px] flex items-center justify-center gap-1 text-[#424242] border-r border-r-[#d1d1d1] text-[1.2em]">
                      <img className="w-[20px] h-auto border-none" src="/india-flag.svg" alt="img" />
                      +91
                      <span className="hidden absolute w-[170px] text-[14px] p-[10px] bg-white border border-[#e1e1e1] rounded-[3px] top-[60px] left-[2px]">NRI account? <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://zerodha.com/open-account/nri/">Click here</a>
                      </span>
                    </span>
                    <input type="tel" className="w-full text-[1.2em] leading-[1.2em] h-[57px] pl-[105px] p-[10px] mb-0 bg-white border border-[#d1d1d1] rounded-[2px] shadow-none box-border appearance-none outline-none" min="1000000000" max="9999999999" name="mobile" id="user_mobile" placeholder="Enter your mobile number"></input>
                    <p className="mt-[5px] hidden text-[0.75rem] leading-[1.8] mb-[15px] text-[#f6461a]"></p>
                    <input className="font-inherit text-[100%] leading-[1.15] m-0" type="hidden" name="source" id="user_source" value="zerodha"></input>
                    <input className="[font-family:inherit] text-[100%] leading-[1.15] m-0" type="hidden" name="partner_id" id="user_id" value="" ></input>
                  </div>
                  <div className="mt-[30px]">
                    <button className="relative m-4 hover:bg-black transition-colors duration-300 px-[30px] py-[10px] bg-[#387ed1] text-white text-center text-[1.2em] leading-[1.2em] font-medium no-underline whitespace-nowrap rounded-[3px] border border-transparent cursor-pointer box-border appearance-auto w-[260px] h-[54px] mb-[20px]" type="submit" id="open_account_proceed_form">
                      Get OTP
                    </button>
                  </div>
                </form>
                <p className="text-grey text-xs leading-[1.8]  mb-[15px] ">
                  <span className="text-[#666] ">
                    By proceeding, you agree to the Zerodha
                    <a href="" target="_blank">terms</a>
                    &amp;
                    <a href="" target="_blank">privacy policy</a>
                  </span>
                </p>
                <hr />
                <span className="pt-[65px]  text-[#424242]">Looking to open NRI account? <a href="https://zerodha.com/open-account/nri/">Click here</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="account-open-sections acop-transfer-section pt-[60px] px-[40px]">
          <div className="w-[900px] max-w-full mx-auto box-border text-center">
            <div className="text-2xl leading-[1.5] font-medium mb-[10px]">Already have a demat account?</div>
            <p className="text-gray-600">
              Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500,
              <a href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares/transfer-securities/articles/refund-of-transfer-charges" target="_blank">learn more</a>.
            </p>
          </div>
        </div>
        <div className="px-[40px]">
          <div className="w-[900px] max-w-full mx-auto box-border pt-[100px] pb-[100px]">
            <h2 className="text-center text-2xl leading-[1.5] font-medium mt-0 mb-[50px]">
              Investment options with Zerodha demat account
            </h2>
            <div className="grid grid-cols-2 gap-y-[64px] gap-x-[112px] py-[24px]">
              <div className="flex">
                <img className="w-[60px] h-full shrink-0 max-w-full border-none" src="/stocks-acop.svg" alt="invest in stocks" />
                <div className="block">
                  <h3 className="text-xl leading-[1.6] font-medium mt-0 mb-0">Stocks</h3>
                  <p className="text-base leading-[1.8] mt-[5px] mb-0 text-[#666]">Invest in all exchange-listed securities</p>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <img className="w-[60px] h-full shrink-0 max-w-full border-none" src="/mf-acop.svg" alt="invest in mutual funds" />
                <div className="block">
                  <h3 className="text-xl leading-[1.6] font-medium mt-0 mb-0" >Mutual funds</h3>
                  <p className="text-base leading-[1.8] mt-[5px] mb-0 text-[#666]">Invest in commission-free direct mutual funds</p>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <img className="w-[60px] h-full shrink-0 max-w-full border-none" src="ipo-acop.svg" alt="invest in IPO" />
                <div className="block ">
                  <h3 className="text-xl leading-[1.6] font-medium mt-0 mb-0">IPO</h3>
                  <p className="text-base leading-[1.8] mt-[5px] mb-0 text-[#666]">Apply to the latest IPOs instantly via UPI</p>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <img className="w-[60px] h-full shrink-0 max-w-full border-none" src="/fo-acop.svg" alt="invest in Futures and Options" />
                <div className="block">
                  <h3 className="text-xl leading-[1.6] font-medium mt-0 mb-0">Futures &amp; options</h3>
                  <p className="text-base leading-[1.8] mt-[5px] mb-0 text-[#666]">Hedge and mitigate market risk through simplified F&amp;O trading</p>
                </div>
              </div>
            </div>
            <p className="text-center text-base leading-[1.8] mb-[15px]">
              <a href="https://zerodha.com/investments/" className="bg-[#387ed1] text-white !border !border-[rgba(0,0,0,0)] rounded-[7px] mt-[30px] px-5 py-3 text-xl hover:bg-black transition-colors duration-300">Explore Investments</a>
            </p>
          </div>
        </div>
        <div className="bg-[#fafafb] pt-[50px] pb-[70px] px-[40px]">
          <div className="w-[900px] mx-auto max-w-full box-border">
            <h2 className="mb-[50px] text-center text-[1.5rem] leading-[1.5] mt-0 font-medium">
              Steps to open a demat account with Zerodha
            </h2>
            <div className="flex gap-[40px] justify-around">
              <div className="flex w-full">
                <img className="cursor-pointer object-contain max-w-full border-none" src="/steps-acop.svg" alt="Steps to open a demat account" id="video-trigger-acop" />
                <div className="hidden relative h-full w-auto aspect-[16/9] overflow-hidden">
                  <iframe id="youtube-iframe-acop" className="absolute top-0 left-0 w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
              </div>
              <div className="pt-[20px] pb-[20px] w-full">
                <div className="border-b border-[#ddd]">
                  <div className="inline-block border border-[#ddd] rounded-full w-[38px] h-[28px] text-center">01</div>
                  <p className="inline-block text-[20px] font-medium ml-[15px] text-[1rem] leading-[1.8] mb-[15px]">Enter the requested details</p>
                </div>
                <div className="border-b border-[#ddd]">
                  <div className="inline-block border border-[#ddd] rounded-full w-[38px] h-[28px] text-center">02</div>
                  <p className="inline-block text-[20px] font-medium ml-[15px] text-[1rem] leading-[1.8] mb-[15px]">Complete e-sign &amp; verification</p>
                </div>
                <div className="border-b border-[#ddd]">
                  <div className="inline-block border border-[#ddd] rounded-full w-[38px] h-[28px] text-center">03</div>
                  <p className="inline-block text-[20px] font-medium ml-[15px] text-[1rem] leading-[1.8] mb-[15px]">Start investing!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[100px] pb-[100px] pl-[40px] pr-[40px]">
          <div className="relative w-[1100px] max-w-full mx-auto box-border">
            <div className="box-border flex flex-[0_1_auto] flex-row flex-wrap items-center justify-between">
              <div className="ml-0 basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                <p className="text-center text-base leading-[1.8] mb-[15px]">
                  <img className="w-[350px] max-w-full mb-[15px]" src="/acop-benefits.svg" alt="benefits of Zerodha"/>
                </p>
                <h2 className="mt-0 mb-[50px] text-2xl leading-[1.5] font-medium">
                  Benefits of opening a Zerodha demat account
                </h2>
              </div>
              <div className="basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">Unbeatable pricing</h3>
                <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Zero charges for equity &amp; mutual fund investments. Flat ₹20 fees for intraday and F&amp;O trades.</p>
                <br/>
                  <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">Best investing experience</h3>
                  <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                  <br/>
                    <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">No spam or gimmicks</h3>
                    <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <br/>
                      <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">The Zerodha universe</h3>
                      <p className="text-[#666] text-base leading-[1.8] mb-[15px]">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                  </div>
              </div>
            </div>
          </main>
        </>
        )
}

        export default Signup