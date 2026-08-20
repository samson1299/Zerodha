import { Link } from 'react-router-dom';

const Pricing = () => {
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
                <section className="first:pt-[100px] first:pb-[100px] pt-[80px] block">
                    <div className="text-center relative w-[1100px] max-w-full mx-auto box-border block">
                        <h1 className='first:mb-0 text-[1.75rem] leading-[1.25] mt-0 font-medium mb-[20px] block text-center'>Charges</h1>
                        <p className="text-[1.25rem] font-normal mt-[10px] text-[#9b9b9b] leading-[1.8] mb-[15px] block text-center">List of all charges and taxes</p>
                    </div>
                </section>
                <section className="pt-0 text-center relative w-[1100px] max-w-full mx-auto box-border pt-[80px] block">
                    <div className="text-center justify-between box-border flex flex-[0_1_auto] flex-row flex-wrap block">
                        <div className="first:ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto] block">
                            <img className='mb-[15px] w-[250px] max-w-full border-none overflow-clip text-center' src="/O.svg" alt="" />
                            <h2 className="text-[1.75rem] leading-[1.6] mt-0 font-medium mb-[20px] block text-center">Free equity delivery</h2>
                            <p className="text-[#666] text-base leading-[1.8] mb-[15px] block text-center">
                                All equity delivery investments (NSE, BSE), are absolutely free
                                — ₹ 0 brokerage.
                            </p>
                        </div>
                        <div className="first:ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto] block">
                            <img className='mb-[15px] w-[250px] max-w-full border-none overflow-clip text-center' src="/20.svg" alt="" />
                            <h2 className="text-[1.75rem] leading-[1.6] mt-0 font-medium mb-[20px] block text-center">Intraday and F&amp;O trades</h2>
                            <p className="text-[#666] text-base leading-[1.8] mb-[15px] block text-center">
                                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                                intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                            </p>
                        </div>
                        <div className="first:ml-0 basis-[30.6666666667%] w-[30.6666666667%] box-border flex-[0_1_auto] block">
                            <img className='mb-[15px] w-[250px] max-w-full border-none overflow-clip text-center' src="/O.svg" alt="" />
                            <h2 className="text-[1.75rem] leading-[1.6] mt-0 font-medium mb-[20px] block text-center">Free direct MF</h2>
                            <p className="text-[#666] text-base leading-[1.8] mb-[15px] block text-center">
                                All direct mutual fund investments are absolutely free —
                                ₹ 0 commissions &amp; DP charges.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="charges-sections">
                    <div className="container">
                        <div  className="tinytabs"><nav className="tabs"><a className="tab tab-equities sel" href="#tab-equities" >Equity</a><a className="tab tab-fo" href="#tab-fo" >F&amp;O</a><a className="tab tab-currency" href="#tab-currency">Currency</a><a className="tab tab-commodities" href="#tab-commodities" >Commodity</a></nav>
                            <div className="section" >
                                <h3 className="title">Equity</h3>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Equity delivery</th>
                                                <th>Equity intraday</th>
                                                <th className="hide-on-mobile">F&amp;O - Futures</th>
                                                <th className="hide-on-mobile">F&amp;O - Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">Brokerage</td>
                                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                                <td>0.025% on the sell side</td>
                                                <td className="hide-on-mobile">0.03% or Rs. 20/executed order whichever is lower</td>
                                                <td className="hide-on-mobile">Flat Rs. 20 per executed order</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">STT/CTT</td>
                                                <td>0.1% on buy &amp; sell</td>
                                                <td>0.025% on the sell side</td>
                                                <td className="hide-on-mobile">0.05% on the sell side</td>
                                                <td className="hide-on-mobile">
                                                    <ul className="list-items">
                                                        <li>
                                                            0.15% of the intrinsic value on options that are bought and exercised
                                                        </li>
                                                        <li>
                                                            0.15% on sell side (on premium)
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">Transaction charges</td>
                                                <td>0.1% on buy &amp; sell</td>
                                                <td>0.025% on the sell side</td>
                                                <td className="hide-on-mobile">0.05% on the sell side</td>
                                                <td className="hide-on-mobile">
                                                    <ul className="list-items">
                                                        <li>
                                                            0.15% of the intrinsic value on options that are bought and exercised
                                                        </li>
                                                        <li>
                                                            0.15% on sell side (on premium)
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">Transaction charges</td>
                                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                                <td className="hide-on-mobile">NSE: 0.00183%<br />BSE: 0</td>
                                                <td className="hide-on-mobile">NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">GST</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">SEBI charges</td>
                                                <td>₹10 / crore</td>
                                                <td>₹10 / crore</td>
                                                <td className="hide-on-mobile">₹10 / crore</td>
                                                <td className="hide-on-mobile">₹10 / crore</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">Stamp charges</td>
                                                <td>0.015% or ₹1500 / crore on buy side</td>
                                                <td>0.003% or ₹300 / crore on buy side</td>
                                                <td className="hide-on-mobile">0.002% or ₹200 / crore on buy side</td>
                                                <td className="hide-on-mobile">0.003% or ₹300 / crore on buy side</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-12 color-grey">*SEBI charges will be reduced to &#8377;15 per crore once the regulator announces a date.</p>
                            </div>
                            <div className="section show-on-mobile">
                                <h3 className="title" >F&amp;O</h3>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>F&amp;O - Futures</th>
                                                <th>F&amp;O - Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">Brokerage</td>
                                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                                <td>Flat Rs. 20 per executed order</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">STT/CTT</td>
                                                <td>0.05% on the sell side</td>
                                                <td>
                                                    <ul className="list-items">
                                                        <li>
                                                            0.15% of the intrinsic value on options that are bought and exercised
                                                        </li>
                                                        <li>
                                                            0.15% on sell side (on premium)
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">Transaction charges</td>
                                                <td>NSE: 0.00183%<br />BSE: 0</td>
                                                <td>NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads\">GST</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads\">SEBI charges</td>
                                                <td>₹10 / crore</td>
                                                <td>₹10 / crore</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">Stamp charges</td>
                                                <td>0.002% or ₹200 / crore on buy side</td>
                                                <td>0.003% or ₹300 / crore on buy side</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-12 color-grey">*SEBI charges will be reduced to &#8377;15 per crore once the regulator announces a date.</p>
                            </div>
                            <div className="section" id="currency" >
                                <h3 className="title">Currency</h3>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Currency futures</th>
                                                <th>Currency options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">Brokerage</td>
                                                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                                <td>₹ 20/executed order</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">STT/CTT</td>
                                                <td>No STT</td>
                                                <td>No STT</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">Transaction charges</td>
                                                <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                                <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">GST</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">SEBI charges</td>
                                                <td>₹10 / crore</td>
                                                <td>₹10 / crore</td>
                                            </tr>
                                            <tr className="grey-back\">
                                                <td className="charges-heads\">Stamp charges</td>
                                                <td>0.0001% or ₹10 / crore on buy side</td>
                                                <td>0.0001% or ₹10 / crore on buy side</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="section" >
                                <h3 className="title" >Commodity</h3>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Commodity futures</th>
                                                <th>Commodity options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">Brokerage</td>
                                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                                <td>₹ 20/executed order</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">STT/CTT</td>
                                                <td>0.01% on sell side (Non-Agri)</td>
                                                <td>0.05% on sell side</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">Transaction charges</td>
                                                <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                                <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">GST</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">SEBI charges</td>
                                                <td><strong>Agri:</strong><br />₹1 /
                                                    crore<br /><strong>Non-agri:</strong><br />₹10 / crore</td>
                                                <td>₹10 / crore</td>
                                            </tr>
                                            <tr className="grey-back" colSpan="2">
                                                <td className="charges-heads">Stamp charges</td>
                                                <td>0.002% or ₹200 / crore on buy side</td>
                                                <td>0.003% or ₹300 / crore on buy side</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div><br />
                        <p className="text-center brokerage-link"><a className="underline" href="/brokerage-calculator">Calculate
                            your costs upfront</a> using our brokerage calculator</p>
                        <section id="account_opening_charges" className="charges-sections">
                            <div className="container">
                                <h2 className="charges-subheadings">Charges for account opening</h2>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Type of account</th>
                                                <th>Charges</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Individual account</td>
                                                <td><span className="free-tag">free</span></td>
                                            </tr>
                                            <tr>
                                                <td>Minor account</td>
                                                <td><span className="free-tag">free</span></td>
                                            </tr>
                                            <tr>
                                                <td>NRI account</td>
                                                <td>₹ 500</td>
                                            </tr>
                                            <tr>
                                                <td>HUF account</td>
                                                <td><span className="free-tag">free</span> (online) / ₹ 500 (offline)</td>
                                            </tr>
                                            <tr>
                                                <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                                                <td>₹ 500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                        <section className="charges-sections">
                            <div className="container">
                                <h2 className="charges-subheadings">Demat AMC (Annual Maintenance Charge)</h2>
                                <p className="free-amc-banner">
                                    Free for first year*
                                </p>
                                <p className="text-12">
                                    From second year onwards, for BSDA accounts:
                                </p>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Value of holdings</th>
                                                <th>AMC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Up to ₹4 lakh</td>
                                                <td><span className="free-tag">free</span></td>
                                            </tr>
                                            <tr>
                                                <td>₹4 lakh - ₹10 lakh</td>
                                                <td>₹100 per year + 18% GST, charged quarterly</td>
                                            </tr>
                                            <tr>
                                                <td>Above ₹10 lakh</td>
                                                <td>₹300 per year + 18% GST, charged quarterly</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-12">
                                    For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
                                </p>
                                <p className="text-12">
                                    To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">click here</a>. To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">click here</a>.
                                </p>
                                <p className="text-12">
                                    *Resident individual accounts only.
                                </p>
                            </div>
                        </section>
                        <section className="charges-sections">
                            <div className="container">
                                <h2 className="charges-subheadings">Charges for optional value added services</h2>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Billing Frequency</th>
                                                <th>Charges</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tickertape</td>
                                                <td>Monthly / Quarterly / Annual</td>
                                                <td>Free: 0 | Pro: 249/699/2399</td>
                                            </tr>
                                            <tr>
                                                <td>Smallcase</td>
                                                <td>Per transaction</td>
                                                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                                            </tr>
                                            <tr>
                                                <td>Kite Connect</td>
                                                <td>Monthly</td>
                                                <td>Connect: 500 | Personal: Free</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                        <h2 id="charges-explained">Charges explained</h2>
                        <div className="row between">
                            <div className="six columns">
                                <p>Securities/Commodities transaction tax</p>
                                <p className="text-12">Tax by the government when transacting on the exchanges. Charged as
                                    above on both buy and sell sides when trading equity delivery. Charged only on selling side when
                                    trading intraday or on F&amp;O.</p>
                                <p className="text-12">When trading at Zerodha, STT/CTT can be a lot more than the brokerage
                                    we charge. Important to keep a tab.</p>
                                <p>Transaction/Turnover Charges</p>
                                <p className="text-12">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                                <p className="text-12">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
                                    ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                                <p className="text-12">BSE has revised transaction charges in SS and ST groups to ₹1,00,000
                                    per crore of gross turnover.</p>
                                <p className="text-12">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                                <p className="text-12">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                                <p>Call &amp; trade</p>
                                <p className="text-12">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                                <p>Stamp charges</p>
                                <p className="text-12">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                                <p>NRI brokerage charges</p>
                                <ul className="text-12 list-items">
                                    <li>
                                        For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&amp;O (whichever is lower).
                                    </li>
                                    <li>
                                        For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                                    </li>
                                    <li>
                                        ₹500 + GST as yearly account maintenance charges (AMC) charges.
                                    </li>
                                </ul>
                                <p>Account with debit balance</p>
                                <p className="text-12">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                                <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                                <ul className="list-items text-12">
                                    <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                                    <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                                    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                                </ul>
                                <p>Margin Trading Facility (MTF)</p>
                                <ul className="list-items text-12">
                                    <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                                    <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                                    <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                                </ul>
                            </div>
                            <div className="six columns">
                                <p>GST</p>
                                <p className="text-12">Tax levied by the government on the services rendered. 18% of (
                                    brokerage + SEBI charges + transaction charges)</p>
                                <p>SEBI Charges</p>
                                <p className="text-12">Charged at ₹10 per crore + GST by Securities and Exchange Board of
                                    India for regulating the markets.</p>
                                <p id="depo_charges">DP (Depository participant) charges</p>
                                <p className="text-12">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                                <p className="text-12">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                                <p className="text-12">Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                                <p id="depo_charges">Pledging charges</p>
                                <p className="text-12">₹30 + GST per pledge request per ISIN.</p>
                                <p>AMC (Account maintenance charges)</p>
                                <p className="text-12">Free for the first year on all new resident individual accounts.</p>
                                <p className="text-12">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">Click here</a></p>
                                <p className="text-12">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">Click here</a></p>
                                <p>Corporate action order charges</p>
                                <p className="text-12">₹20 plus GST will be charged for OFS / buyback / takeover / delisting
                                    orders placed through Console.</p>
                                <p>Off-market transfer charges</p>
                                <p className="text-12">₹25 per transaction.</p>
                                <p>Physical CMR request</p>
                                <p className="text-12">First CMR request is free. ₹20 + ₹100 (courier charge) +
                                    18% GST for subsequent requests.</p>
                                <p>Payment gateway charges</p>
                                <p className="text-12">₹9 + GST (Not levied on transfers done via UPI)</p>
                                <p>Delayed Payment Charges</p>
                                <p className="text-12">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges">Learn more</a>.</p>
                                <p>Trading using 3-in-1 account with block functionality</p>
                                <ul className="list-items text-12">
                                    <li><b>Delivery &amp; MTF Brokerage:</b> 0.5% per executed order.</li>
                                    <li><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
                                </ul>
                            </div>
                        </div>
                        <p>Disclaimer</p>
                        <p className="text-12">
                            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note.
                            Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier
                            charges.
                            Brokerage will not exceed the rates specified by SEBI and the exchanges.
                            All statutory and regulatory charges will be levied at actuals.
                            Brokerage is also charged on expired, exercised, and assigned options contracts.
                            Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts,
                            and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pricing