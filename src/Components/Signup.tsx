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
                    <button className="relative m-4 px-[30px] py-[10px] bg-[#387ed1] text-white text-center text-[1.2em] leading-[1.2em] font-medium no-underline whitespace-nowrap rounded-[3px] border border-transparent cursor-pointer box-border appearance-auto w-[260px] h-[54px] mb-[20px]" type="submit" id="open_account_proceed_form">
                      Get OTP
                    </button>
                  </div>
                </form>
                <p className="text-grey text-xs leading-[1.8] mb-[15px]">
                  <span className="text-[#666] font-light">
                    By proceeding, you agree to the Zerodha
                    <a href="" target="_blank">terms</a>
                    &amp;
                    <a href="" target="_blank">privacy policy</a>
                  </span>
                </p>
                <hr />
                <span className="pt-[65px] text-[#424242]">Looking to open NRI account? <a href="https://zerodha.com/open-account/nri/">Click here</a></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup