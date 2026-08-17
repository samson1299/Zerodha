const Products = () => {
    return (
        <>
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
                                    <img src="/static/images/products-kite.png" />
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
                                <div className="mt-[25px]">
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                                        <img className="last:h-[45px] max-w-full border-none" src="/static/images/google-play-badge.svg" />
                                    </a>
                                    <a className="text-[#387ed1] no-underline font-medium bg-transparent" href="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
                                        <img className="last:h-[45px] max-w-full border-none" src="/static/images/appstore-badge.svg" />
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
                                <a href="/products/console">Learn more <i className="icon-arrow-right"></i></a>
                            </div>
                            <div className="columns seven text-center">
                                <a href="/products/console">
                                    <img src="/static/images/products-console.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="coin">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="columns seven text-center">
                                <a target="_blank" href="https://coin.zerodha.com">
                                    <img src="/static/images/products-coin.png" />
                                </a>
                            </div>
                            <div className="columns four">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Coin</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    Buy direct mutual funds online, commission-free, delivered directly
                                    to your Demat account. Enjoy the investment experience on your
                                    Android and iOS devices.
                                </p>
                                <a target="_blank" href="https://coin.zerodha.com">Coin <i className="icon-arrow-right"></i></a>
                                <div className="kite-mobile-links">
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.coin">
                                        <img src="/static/images/google-play-badge.svg" />
                                    </a>
                                    <a target="_blank" href="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554">
                                        <img src="/static/images/appstore-badge.svg" />
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
                                <a href="/products/api/">Kite Connect <i className="icon-arrow-right"></i></a>
                            </div>
                            <div className="columns seven text-center">
                                <a href="/products/api/">
                                    <img src="/static/images/kite-trade/landing.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[80px]" id="varsity">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="flex items-center justify-between box-border flex-[0_1_auto] flex-row flex-wrap">
                            <div className="columns seven text-center">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
                                    <img src="/static/images/varsity-products.svg" />
                                </a>
                            </div>
                            <div className="columns four">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">Varsity mobile</h2>
                                <p className="text-[1rem] leading-[1.8] mb-[15px]">
                                    An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                                </p>
                                <div className="kite-mobile-links">
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
                                        <img src="/static/images/google-play-badge.svg" />
                                    </a>
                                    <a target="_blank" href="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753">
                                        <img src="/static/images/appstore-badge.svg" />
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
                    <div className="container center">
                        <h2 className="text-center text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px]">The Zerodha Universe</h2>
                        <p className="center text-[1rem] leading-[1.8] mb-[15px]">
                            Extend your trading and investment experience even further with our
                            partner platforms
                        </p>
                        <div className="row evenly v-align">
                            <div>
                                <a target="_blank" href="https://www.zerodhafundhouse.com/">
                                    <img className="zfh-logo" src="/static/images/partners/zerodhafundhouse.png" />
                                    <br />
                                    <span className="text-12 text-light-grey">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</span>
                                </a>
                                <br />
                                <br className="hide-on-mobile" />
                                <a target="_blank" href="https://streak.tech">
                                    <img className="streak-logo" src="/static/images/products/streak-logo.png" />
                                    <br />
                                    <span className="text-12 text-light-grey">Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</span>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://sensibull.com">
                                    <img className="sensibull-logo" src="/static/images/products/sensibull-logo.svg" />
                                    <br />
                                    <span className="text-12 text-light-grey sensibull-desc">Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.</span>
                                </a>
                                <br />
                                <br className="hide-on-mobile" />
                                <a target="_blank" href="https://smallcase.zerodha.com">
                                    <img className="smallcase-logo" src="/static/images/products/smallcase-logo.png" />
                                    <br />
                                    <span className="text-12 text-light-grey">Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</span>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.tijorifinance.com/">
                                    <img className="goldenpi-logo" src="/static/images/partners/tijori.svg" />
                                    <br />
                                    <span className="text-12 text-light-grey">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</span>
                                </a>
                                <br />
                                <br className="hide-on-mobile" />
                                <a target="_blank" href="https://joinditto.in/">
                                    <img className="ditto-logo" src="/static/images/products/ditto-logo.png" />
                                    <br />
                                    <span className="text-12 text-light-grey">Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="kite-sections text-center kitefooter-container">
                    <div className="mini-container">

                        <a href="https://zerodha.com/open-account/" className="button">Sign up for free</a>
                    </div>
                </section></main>
        </>
    )
}

export default Products