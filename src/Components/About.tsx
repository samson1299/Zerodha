import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const About = () => {
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
        <main className="block">
          <section className="first:pt-[100px] first:pb-[100px] border-b border-[#eee] text-center relative w-[1100px] max-w-full mx-auto box-border pt-[80px] block">
            <h2 className="first:mb-0 text-2xl leading-[1.5] mt-0 font-medium mb-[20px] block text-center">
              We pioneered the discount broking model in India.<br />Now, we are
              breaking ground with our technology.
            </h2>
          </section>
          <section className="pt-[80px] block">
            <div className="w-[900px] mx-auto max-w-full box-border block">
              <div className="justify-between box-border flex flex-[0_1_auto] flex-row flex-wrap block">
                <div className="first:ml-0 basis-[48%] w-[48%] box-border flex-[0_1_auto] block">
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    We kick-started operations on the 15th of August, 2010 with the
                    goal of breaking all barriers that traders and investors face in
                    India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    Over <span className="text-base leading-[1.8] mb-[15px]">1.6+ crore</span> clients place billions of orders every year
                    through our powerful ecosystem of investment platforms,
                    contributing over 15% of all Indian retail trading volumes.
                  </p>
                </div>
                <div className="basis-[48%] w-[48%] box-border flex-[0_1_auto] block">
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    In addition, we run a number of popular open online educational
                    and community initiatives to empower retail traders and
                    investors.
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    <a href="https://rainmatter.com/" target="_blank">Rainmatter</a>, our fintech fund and incubator, has invested in
                    several fintech startups with the goal of growing the Indian
                    capital markets.
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px] block">
                    And yet, we are always up to something new every day. Catch
                    up on the latest updates on our
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="/z-connect"> blog</a> or see what
                    the media is
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="/media"> saying about us</a> or
                    learn more about our business and product <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="/about/philosophy/">philosophies</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-[80px] last:pb-[80px]">
            <div className="w-[900px] max-w-full mx-auto box-border">
              <h2 className="text-center text-2xl leading-[1.5] mt-0 font-medium mb-5">People</h2>
              <div className="pt-10 pb-[100px] justify-between box-border flex flex-row flex-wrap">
                <div className="first:ml-0 text-center basis-[39.3333333333%] w-[39.3333333333%] box-border flex-[0_1_auto]">
                  <img className="h-[295px] mb-2.5 rounded-full max-w-full border-0 text-center" src="/nithin-kamath.jpg" alt="Nithin Kamath, CEO" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Nithin Kamath</h5>
                  <p className="text-grey  leading-[1.8] mb-[15px] block">Founder, CEO</p>
                </div>
                <div className="box-border flex-[0_1_auto]">
                  <p className="text-base leading-[1.8] mb-[15px]">
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                    hurdles he faced during his decade long stint as a trader.
                    Today, Zerodha has changed the landscape of the Indian broking
                    industry.
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px]">
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                  </p>
                  <p className="text-base leading-[1.8] mb-[15px]">Playing basketball is his zen.</p>
                  <p className="text-base leading-[1.8] mb-[15px]">
                    Connect on
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" target="_blank" href="https://nithinkamath.me/" title="Homepage"> Homepage</a> /
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" target="_blank" href="https://tradingqna.com/u/nithin/summary" title="TradingQnA">TradingQnA</a> /
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" target="_blank" href="https://twitter.com/Nithin0dha">Twitter</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[1100px] max-w-full mx-auto box-border">
              <div className="box-border flex flex-[0_1_auto] flex-row flex-wrap justify-between">
                <div className="pt-5 pb-5 pl-[50px] pr-[50px] first:ml-0 text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/Nikhil.jpg" alt="Nikhil Kamath, Chief Investment Officer" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Nikhil Kamath</h5>
                  <p className="text-gray  leading-[1.8] mb-[15px]">Co-founder &amp; CFO</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio</a>
                  </p>
                  <div className=" py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left">
                    <p className="text-base leading-[1.8] mb-[15px] text-left justify-start">
                      Nikhil is an astute and experienced investor, and he
                      heads financial planning at Zerodha. An avid
                      reader, he always appreciates a good game of chess.
                    </p>
                  </div>
                </div>
                <div className="py-5 px-[50px] text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/Kailash.jpg" alt="Dr. Kailash Nadh, CTO" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Dr. Kailash Nadh</h5>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0">CTO</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio <i className="icon-angle-down"></i></a>
                  </p>
                  <div className="py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left">
                    <p className="text-base leading-[1.8] mb-[15px] text-left justify-start">
                      Kailash has a PhD in Artificial Intelligence &amp; Computational
                      Linguistics, and is the brain behind all our technology and
                      products. He has been a developer from his adolescence and
                      continues to write code every day.
                    </p>
                  </div>
                </div>
                <div className="py-5 px-[50px] text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/Venu.jpg" alt="Venu Madhav, Chief of Operations" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Venu Madhav</h5>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0">COO</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio <i className="icon-angle-down"></i></a>
                  </p>
                  <div className=" py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left">
                    <p className="text-base leading-[1.8] mb-[15px] text-left justify-start text-center">
                      Venu is the backbone of Zerodha taking care of operations and
                      ensuring that we are compliant to rules and regulations. He
                      has over a dozen certifications in financial markets and is
                      also proficient in technical analysis. Workouts, cycling, and
                      adventuring is what he does outside of Zerodha.
                    </p>
                  </div>
                </div>
              </div><br /><br />
              <div className="box-border flex flex-[0_1_auto] flex-row flex-wrap justify-between">
                <div className="py-5 px-[50px] first:ml-0 text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/Seema.jpg" alt="Seema Patil, Director" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Seema Patil</h5>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0">Director</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio <i className="icon-angle-down"></i></a>
                  </p>
                  <div className=" py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left text-center">
                    <p className="text-base leading-[1.8] mb-[15px] text-center justify-start">
                      Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an
                      extremely disciplined fitness enthusiast.
                    </p>
                  </div>
                </div>
                <div className="py-5 px-[50px] first:ml-0 text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/karthik.jpg" alt="Karthik Rangappa, Chief of Education" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Karthik Rangappa</h5>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0">Chief of Education</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio <i className="icon-angle-down"></i></a>
                  </p>
                  <div className=" py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left text-center">
                    <p className="text-base leading-[1.8] mb-[15px] text-center justify-start">
                      Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                    </p>
                  </div>
                </div>
                <div className="py-5 px-[50px] first:ml-0 text-center basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                  <img className="w-full max-w-full rounded-full mb-2.5 border-0 text-center" src="/Austin.jpg" alt="" />
                  <h5 className="text-center text-[1.125rem] font-normal mt-0 mb-0">Austin Prakesh</h5>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0">Director Strategy</p>
                  <p className="text-center text-[#666] text-[0.9rem] leading-[1.8] m-0 mt-[5px]">
                    <a className="text-[#387ed1] no-underline font-medium bg-[rgba(0,0,0,0)] text-base leading-[1.8] mb-[15px]" href="#">Bio <i className="icon-angle-down"></i></a>
                  </p>
                  <div className=" py-[15px] transition-opacity duration-200 ease-in bg-white justify-start text-left text-center">
                    <p className="text-base leading-[1.8] mb-[15px] text-center justify-start">
                      Austin is a successful self-made entrepreneur from Singapore.
                      His area of specialty revolves around helping organisations
                      including grow by optimizing revenue streams and creating
                      growth strategies. He is a boxing enthusiast and loves
                      collecting exquisite watches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
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
export default About