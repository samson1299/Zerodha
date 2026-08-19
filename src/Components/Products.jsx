import { Link} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const Products = () => {
    return (
        <>
            <nav className='navbar fixed top-0 w-full z-10 bg-white shadow-[2px_1px_2px_#eee] box-border flex items-center justify-between px-20 py-5'>
                <img src="/logo.svg" alt="logo" className='h-[25px]' />
                <div className='flex items-center gap-10 text-[#424242] font-[30px] cursor-pointer '>
                    <Link to="/signup">Signup</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/support">Support</Link>
                </div>
            </nav>
            <main className="block">
                <section className="pt-[100px] pb-[100px] border-b border-[#eee] text-center">
                    <h1 className="text-[1.75rem] leading-[1.25] font-medium mt-0 mb-0 text-center">Zerodha Products</h1>
                    <p className="text-[1.25rem] font-normal mt-[10px] text-center">
                        Sleek, modern, and intuitive trading platforms
                    </p>
                    <p className="text-[1rem] leading-[1.8] mb-[15px] text-center">
                        Check out our <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/investments">investment offerings <span>→</span></a>
                    </p>
                </section>
                <section className="pt-[80px]">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="box-border flex-[0_1_auto] basis-[56.6666666667%] w-[56.6666666667%] ml-0 text-center">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/kite">
                                    <img src="/products-kite.png" />
                                </a>
                            </div>
                            <div className="basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Kite</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px] text-center">
                                    Our ultra-fast flagship trading platform with streaming market data,
                                    advanced charts, an elegant UI, and more. Enjoy the Kite experience
                                    seamlessly on your Android and iOS devices.
                                </p>
                                <div className="box-border flex flex-[0_1_auto] flex-row flex-wrap">
                                    <div className="first:ml-0 basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                                        <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://kite-demo.zerodha.com">Try demo</a>
                                    </div>
                                    <div className="first:ml-0 basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                                        <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/kite">Learn more</a>
                                    </div>
                                </div>
                                <div className="mt-[25px] flex gap-3">
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                                        <img className="first:h-[45px] max-w-full border-none overflow-clip" src="/google-play-badge.svg" />
                                    </a>
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
                                        <img className="last:h-[45px] max-w-full border-none overflow-clip" src="/appstore-badge.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="console">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="first:ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Console</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    The central dashboard for your Zerodha account. Gain insights into
                                    your trades and investments with in-depth reports and
                                    visualisations.
                                </p>
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/console">Learn more <i className="icon-arrow-right"></i></a>
                            </div>
                            <div className="columns seven text-center">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/console">
                                    <img className="max-w-full border-none overflow-clip" src="/products-console.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="coin">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="first:ml-0 text-center basis-[56.6666666667%] w-[56.6666666667%] box-border flex-[0_1_auto] block">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://coin.zerodha.com">
                                    <img src="/products-coin.png" />
                                </a>
                            </div>
                            <div className="basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto] block">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Coin</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    Buy direct mutual funds online, commission-free, delivered directly
                                    to your Demat account. Enjoy the investment experience on your
                                    Android and iOS devices.
                                </p>
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://coin.zerodha.com">Coin <i className="icon-arrow-right"></i></a>
                                <div className="mt-[25px] flex gap-3 block">
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.coin">
                                        <img className="first:h-[45px] max-w-full border-none overflow-clip" src="/google-play-badge.svg" />
                                    </a>
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554">
                                        <img className="last:h-[45px] max-w-full border-none overflow-clip" src="/appstore-badge.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="kite_connect">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="first:ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto]">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Kite Connect API</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    Build powerful trading platforms and experiences with our
                                    super simple HTTP/JSON APIs. If you are a startup, build your
                                    investment app and showcase it to our clientbase.
                                </p>
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/api/">Kite Connect <i className="icon-arrow-right"></i></a>
                            </div>
                            <div className="columns seven text-center">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="/products/api/">
                                    <img className="hover:opacity-80 max-w-full border-none overflow-clip" src="/landing 2.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="varsity">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="columns seven text-center">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
                                    <img src="/varsity-products.svg" />
                                </a>
                            </div>
                            <div className="basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto] block">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Varsity mobile</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                                </p>
                                <div className="mt-[25px] flex gap-3">
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
                                        <img className="first:h-[45px] max-w-full border-none overflow-clip" src="/google-play-badge.svg" />
                                    </a>
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753">
                                        <img className="last:h-[45px] max-w-full border-none overflow-clip" src="/appstore-badge.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="coin">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <p className="landing-subheading text-center">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</p>
                    </div>
                </section>
                <section className="pt-[80px]" id="partner_products">
                    <div className="justify-center text-center">
                        <h2 className="text-center text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">The Zerodha Universe</h2>
                        <p className="center text-[1rem] leading-[1.8] mb-[15px]">
                            Extend your trading and investment experience even further with our
                            partner platforms
                        </p>
                        <div className="mt-[40px] flex flex-row flex-wrap items-center justify-evenly box-border text-center">
                            <div className="block">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://www.zerodhafundhouse.com/">
                                    <img className="h-[55px] max-w-full border-none" src="/zerodhafundhouse.png" />
                                    <br />
                                    <span className="leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</span>
                                </a>
                                <br />
                                <br />
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://streak.tech">
                                    <img className="h-[55px] max-w-full border-none" src="/streak-logo.png" />
                                    <br />
                                    <span className="leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</span>
                                </a>
                            </div>
                            <div className="block">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://sensibull.com">
                                    <img className="h-[40px] max-w-full border-none" src="/sensibull-logo.svg" />
                                    <br />
                                    <span className="relative top-[8px] leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.</span>
                                </a>
                                <br />
                                <br />
                                <a href="https://smallcase.zerodha.com">
                                    <img className="h-[55px] max-w-full border-none" src="/smallcase-logo.png" />
                                    <br />
                                    <span className="relative top-[8px] leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</span>
                                </a>
                            </div>
                            <div className="block">
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://www.tijorifinance.com/">
                                    <img className="h-[55px] max-w-full border-none" src="/tijori.svg" />
                                    <br />
                                    <span className="relative top-[8px] leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</span>
                                </a>
                                <br />
                                <br />
                                <a className="text-[#387ed1] no-underline font-medium bg-transparent" target="_blank" href="https://joinditto.in/">
                                    <img className="h-[55px] max-w-full border-none" src="/ditto-logo.png" />
                                    <br />
                                    <span className="relative top-[8px] leading-[18px] block mt-[10px] text-[#9b9b9b] text-xs">Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px] py-[40px] pb-[80px] text-center">
                    <div className="w-[900px] mx-auto max-w-full box-border">
                        <a className=" mt-[20px] inline-block px-[30px] py-[10px] bg-[#387ed1] text-white text-center text-[1.2em] leading-[1.2em] font-medium no-underline whitespace-nowrap rounded-[3px] border border-[rgba(0,0,0,0)] cursor-pointer box-border  no-underline font-medium hover:bg-black transition-colors duration-300 " href="https://zerodha.com/open-account/">Sign up for free</a>
                    </div>
                </section>
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

export default Products