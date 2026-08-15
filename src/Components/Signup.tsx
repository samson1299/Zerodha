import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
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
                  <Link
                    to="/signup"
                    className="inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]"
                  >
                    Signup
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    className="inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/pricing"
                    className="inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    to="/support"
                    className="inline-block box-border p-5 text-[0.9rem] text-[#666] font-normal no-underline transition-colors duration-300 hover:text-[#387ed1]"
                  >
                    Support
                  </Link>
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
                  <img className="w-[350px] max-w-full mb-[15px]" src="/acop-benefits.svg" alt="benefits of Zerodha" />
                </p>
                <h2 className="mt-0 mb-[50px] text-2xl leading-[1.5] font-medium">
                  Benefits of opening a Zerodha demat account
                </h2>
              </div>
              <div className="basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">Unbeatable pricing</h3>
                <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Zero charges for equity &amp; mutual fund investments. Flat ₹20 fees for intraday and F&amp;O trades.</p>
                <br />
                <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">Best investing experience</h3>
                <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                <br />
                <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">No spam or gimmicks</h3>
                <p className="text-[#666] text-base leading-[1.8] mb-[15px]">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                <br />
                <h3 className="text-[20px] leading-[1.6] mt-0 mb-[20px] font-medium">The Zerodha universe</h3>
                <p className="text-[#666] text-base leading-[1.8] mb-[15px]">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="relative w-[1100px] max-w-full mx-auto box-border">
            <h2 className="mb-[50px] text-center text-[1.5rem] leading-[1.5] mt-0 font-medium">
              Explore different account types
            </h2>
            <div className="box-border flex flex-row flex-wrap flex-[0_1_auto] items-center justify-between">
              <div className="ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                <a className="inline-block border border-[#e1e1e1] rounded-[5px] p-[30px] relative text-[#387ed1] no-underline font-medium bg-transparent" href="https://zerodha.com/open-account/">
                  <img className="absolute left-[-18px] bg-[#eff6ff] rounded-full p-[6px] max-w-full border-none" src="acop-individual.svg" alt="individual account opening" />
                  <h3 className="text-[#444] text-[18px] leading-[1.6] mt-0 font-medium mb-[20px]">Individual Account</h3>
                  <p className="mb-0 font-normal text-[#666] text-[1rem] leading-[1.8]">Invest in equity, mutual funds and derivatives</p>
                </a>
              </div>
              <div className=" basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                <a className="inline-block border border-[#e1e1e1] rounded-[5px] p-[30px] relative text-[#387ed1] no-underline font-medium bg-transparent" href="https://zerodha.com/open-account/nri/">
                  <img className="absolute left-[-18px] bg-[#eff6ff] rounded-full p-[6px] max-w-full border-none" src="/acop-nri.svg" alt="NRI account opening" />
                  <h3 className="text-[#444] text-[18px] leading-[1.6] mt-0 font-medium mb-[20px]">NRI Account</h3>
                  <p className="mb-0 font-normal text-[#666] text-[1rem] leading-[1.8]">Invest in equity, mutual funds, debentures, and more</p>
                </a>
              </div>
              <div className=" basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                <a className="inline-block border border-[#e1e1e1] rounded-[5px] p-[30px] relative text-[#387ed1] no-underline font-medium bg-transparent" href="https://zerodha.com/open-account/huf/">
                  <img className="absolute left-[-18px] bg-[#eff6ff] rounded-full p-[6px] max-w-full border-none" src="/acop-huf.svg" alt="HUF account opening" />
                  <h3 className="text-[#444] text-[18px] leading-[1.6] mt-0 font-medium mb-[20px]">HUF Account</h3>
                  <p className="mb-0 font-normal text-[#666] text-[1rem] leading-[1.8]">Make tax-efficient investments for your family</p>
                </a>
              </div>
            </div>
            <br /> <br />
            <div className="items-center flex justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
              <div className="box-border flex flex-row flex-wrap flex-[0_1_auto] items-center justify-between">
                <a className="inline-block border border-[#e1e1e1] rounded-[5px] p-[30px] relative text-[#387ed1] no-underline font-medium bg-transparent" href="https://zerodha.com/open-account/minor/">
                  <img className="absolute left-[-18px] bg-[#eff6ff] rounded-full p-[6px] max-w-full border-none" src="/acop-minor.svg" alt="minor account opening" />
                  <h3 className="text-[#444] text-[18px] leading-[1.6] mt-0 font-medium mb-[20px]">Minor Account</h3>
                  <p className="mb-0 font-normal text-[#666] text-[1rem] leading-[1.8]">Teach your little ones about money &amp; invest for their future with them</p>
                </a>
              </div>
              <div className="box-border flex flex-row flex-wrap flex-[0_1_auto] items-center justify-between">
                <a className="inline-block border border-[#e1e1e1] rounded-[5px] p-[30px] relative text-[#387ed1] no-underline font-medium bg-transparent" href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening">
                  <img className="absolute left-[-18px] bg-[#eff6ff] rounded-full p-[6px] max-w-full border-none" src="/acop-corporate.svg" alt="corporate account opening" />
                  <h3 className="text-[#444] text-[18px] leading-[1.6] mt-0 font-medium mb-[20px]">Corporate / LLP/ Partnership</h3>
                  <p className="mb-0 font-normal text-[#666] text-[1rem] leading-[1.8]">Manage your business surplus and investments easily</p>
                </a>
              </div>
              <div className="box-border flex flex-row flex-wrap flex-[0_1_auto] items-center justify-between">&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="py-[40px]">
          <div className="max-w-[1100px] mx-auto px-[40px] pb-[80px]">
            <h2 className="text-[18px] font-medium leading-[1.6] py-[40px] mt-0 mb-[20px] md:text-[24px] md:pt-[40px] md:pb-[40px]">FAQs</h2>
            <div className="flex flex-col gap-[20px]">
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">What is a Zerodha account</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</p>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">What documents are required to open a demat account?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>The following documents are required to open a Zerodha account online:</p>
                  <ul>
                    <li>PAN number</li>
                    <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                    <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                    <li>Income proof (Required only if you wish to trade in Futures &amp; options)</li>
                  </ul>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">Is Zerodha account opening free?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>Yes, It is completely free.</p>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">Are there any AMC (Account Maintenance Charges) for a demat account?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>There is no AMC for the first year on all new resident individual accounts opened from June 1, 2026. From the second year, charges depend on the account type.<br />
                    For Basic Services Demat Account (BSDA): Zero charges on holdings up to ₹4 lakh; ₹100/year between ₹4 lakh and ₹10 lakh.<br />
                    For non-Basic Services Demat Account: ₹300 per year + GST.<br />
                    To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/online-account-opening/online-account-opening-process/articles/how-to-open-a-basic-service-demat-account-at-zerodha" target="_blank">Click here</a>.</p>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">Can I open a demat account without a bank account?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>To open a demat account, you must have a bank account in your name.<br />
                    If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">What is a Basic Services Demat Account (BSDA)?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.</p>
                </div>
              </details>
              <details className="list-none">
                <summary className="relative flex justify-between items-center gap-[20px] cursor-pointer border-t border-[#eaeaea] pt-[12px] pb-[12px]">
                  <h3 className="font-medium text-[14px] leading-[1.7] m-0 md:text-[16px]">Can I open a demat and trading account using the mobile app?</h3>
                  <span className="inline-block mr-[8px] self-center transition-transform duration-200"></span>
                </summary>
                <div className="list-none">
                  <p>Yes, You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="px-[40px] pb-[100px]">
          <div className="relative w-[1100px] max-w-full mx-auto box-border text-center">
            <h2 className="text-[30px] leading-[1.5] mt-0 font-medium mb-0 text-center">Open a Zerodha account</h2>
            <p className="font-normal text-[18px] leading-[1.6] text-[#666] my-[30px] text-center">
              Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&amp;O trades.
            </p>
            <div className="text-center">
              <a href="https://zerodha.com/open-account/" className=' flex items-center justify-center mt-5 px-[30px] py-[10px] text-center text-[1.2em] leading-[1.2em] font-medium text-white no-underline whitespace-nowrap bg-[#387ed1] border border-transparent rounded-[3px] cursor-pointer box-border hover:bg-black transition-colors duration-300'>Sign up for free</a>
            </div>
          </div>
        </div>
      </main>
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
                    <img src="/whatsapp-logo.svg" className='w-5 h-5' alt="whatsapp" />
                  </a>
                </li>
                <li>
                  <a target="_blank" className='no-underline bg-transparent text-[#666] font-normal text-xl leading-none ' href="https://t.me/zerodhain"><FaTelegram /></a>
                </li>
              </ul>
              <div className='mt-5 flex gap-[10px] text-[0.875rem]'>
                <a target="_blank" className='' href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                  <img src="https://zerodha.com/static/images/google-play-badge-light.svg" alt="Get it on Google Play" />
                </a>
                <a target="_blank" href="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
                  <img src="https://zerodha.com/static/images/appstore-badge-light.svg" alt="Download on the App Store" />
                </a>
              </div>
            </div>
            <div className='basis-[74%] w-[74%] box-border flex-[0_1_auto]  '>
              <div className='flex flex-row flex-wrap justify-between box-border flex-[0_1_auto]  '>
                <div className='basis-[22%] w-[22%] box-border flex-[0_1_auto]  '>
                  <ul className='list-none m-0 p-0  '>
                    <li className='text-lg font-medium mb-[10px] '>Account</li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/open-account/">Open demat account</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/open-account/minor/">Minor demat account</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/open-account/nri/">NRI demat account</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/open-account/huf/">HUF demat account</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/commodities/">Commodity</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/dematerialise/">Dematerialisation</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/fund-transfer/">Fund transfer</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/mtf/">MTF</a>
                    </li>
                  </ul>
                </div>
                <div className='basis-[20%] w-[20%] box-border flex-[0_1_auto]'>
                  <ul className='list-none m-0 p-0'>
                    <li className='text-lg font-medium mb-[10px]'>Support</li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/contact/">Contact us</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://support.zerodha.com">Support portal</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a target="_blank" href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha">How to file a complaint?</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a target="_blank" href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets">Status of your complaints</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/marketintel/bulletin/">Bulletin</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/marketintel/circulars/">Circular</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/z-connect/">Z-Connect blog</a>
                    </li>
                    <li className='mb-[10px]'>
                      <a href="https://zerodha.com/resources/">Downloads</a>
                    </li>
                  </ul>
                </div>
                <div className='basis-[20%] w-[20%] box-border flex-[0_1_auto]'>
                  <ul className='list-none m-0 p-0'>
                    <li className='text-lg font-medium mb-[10px]'>Company</li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/about/">About</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/about/philosophy/">Philosophy</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/media/">Press &amp; media</a></li>
                    <li className='mb-[10px]'><a href="https://careers.zerodha.com/">Careers</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/cares/">Zerodha Cares (CSR)</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.tech/">Zerodha.tech</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/open-source/">Open source</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/refer/">Referral program</a></li>
                  </ul>
                </div>
                <div className='basis-[20%] w-[20%] box-border flex-[0_1_auto]'>
                  <ul className='list-none m-0 p-0'>
                    <li className='text-lg font-medium mb-[10px]'>Quick links</li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/ipo/">Upcoming IPOs</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/charges/">Brokerage charges</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/marketintel/holiday-calendar/">Market holidays</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/markets/calendar/">Economic calendar</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/calculators/">Calculators</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/markets/stocks/">Markets</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/markets/sector/">Sectors</a></li>
                    <li className='mb-[10px]'><a href="https://zerodha.com/market/giftnifty/">Gift Nifty</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Signup