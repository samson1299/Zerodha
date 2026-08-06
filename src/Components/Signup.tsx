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
               <img  src= "/account_open.svg" className="w-[500px] h-auto mx-auto "alt=""></img>
             </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup