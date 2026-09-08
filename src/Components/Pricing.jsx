import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const Pricing = () => {
    const [activeTab, setActiveTab] = useState("equity");

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
                <section className="pt-20 last:pb-20">
                    <div className="relative w-[1100px] max-w-full mx-auto box-border">
                        <div className="block">
                            <nav className="flex flex-row flex-wrap border-b border-[#e1e1e1] mb-[30px] block">
                                <button onClick={() => setActiveTab('equity')}
                                    className={`block min-w-[130px] rounded-t-[3px] border-none
                                     px-[35px] pt-0 pb-[5px] text-center text-[1.5rem]
                                     font-medium bg-transparent ${activeTab === "equity" ? "border-b-2 border-b-[#387ed1] text-[#666]" : "text-[#387ed1]"
                                        }`}> Equity
                                </button>
                                <button onClick={() => setActiveTab('fo')}
                                    className={`block min-w-[130px] rounded-t-[3px] border-none
                                    px-[35px] pt-0 pb-[5px] text-center text-[1.5rem]
                                    font-medium bg-transparent
                                    ${activeTab === "fo" ? "border-b-2 border-b-[#387ed1] text-[#666]" : "text-[#387ed1]"

                                        }`} >f&O

                                </button>
                                <button onClick={() => setActiveTab("currency")}
                                    className={`block min-w-[130px] rounded-t-[3px] border-none
                                      px-[35px] pt-0 pb-[5px] text-center text-[1.5rem]
                                     font-medium bg-transparent ${activeTab === "currency" ? "border-b-2 border-b-[#387ed1] text-[#666]" : "text-[#387ed1]"}`}>Currency
                                </button>
                                <button onClick={() => setActiveTab("commodity")}
                                    className={`block min-w-[130px] rounded-t-[3px] border-none
                                      px-[35px] pt-0 pb-[5px] text-center text-[1.5rem]
                                     font-medium bg-transparent ${activeTab === "commodity" ? "border-b-2 border-b-[#387ed1] text-[#666]" : "text-[#387ed1]"}`}> Commodity

                                </button>
                            </nav>

                            {activeTab === "equity" && (
                                <div className="block overflow-hidden clear-both rounded-[3px]" >
                                    <h3 className="hidden text-[1.25rem] leading-[1.6] mt-0 font-medium mb-[20px] block">Equity</h3>
                                    <div className="overflow-auto w-full max-w-full block">
                                        <table className='border-spacing-0 w-full rounded-[3px] border border-[#ddd] table box-border border-separate'>
                                            <thead className='table-header-group align-middle border-inherit'>
                                                <tr className='border-b border-[#f4f4f4] table-row align-middle border-inherit'>
                                                    <th className='mx-auto first:pl-[15px] first:border-l-0 first:pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>&nbsp;</th>
                                                    <th className='mx-auto first:pl-[15px] first:border-l-0 first:pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>Equity delivery</th>
                                                    <th className='mx-auto first:pl-[15px] first:border-l-0 first:pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>Equity intraday</th>
                                                    <th className='mx-auto first:pl-[15px] first:border-l-0 first:pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>F&amp;O - Futures</th>
                                                    <th className='mx-auto first:pl-[15px] first:border-l-0 first:pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>F&amp;O - Options</th>
                                                </tr>
                                            </thead>
                                            <tbody className='table-row-group align-middle border-inherit'>
                                                <tr className='border-b border-[#f4f4f4] table-row align-middle border-inherit'>
                                                    <td className="text-[0.9rem] text-[#666] pl-[15px] first:pl-[15px] first:border-l-0 border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle">Brokerage</td>
                                                    <td className='border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>0.03% or Rs. 20/executed order whichever is lower</td>
                                                    <td className='border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>0.025% on the sell side</td>
                                                    <td className="border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle">0.03% or Rs. 20/executed order whichever is lower</td>
                                                    <td className="border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle">Flat Rs. 20 per executed order</td>
                                                </tr>
                                                <tr className="border-b border-[#f4f4f4] table-row align-middle border-inherit">
                                                    <td className="text-[0.9rem] text-[#666] pl-[15px] first:pl-[15px] first:border-l-0 border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle">STT/CTT</td>
                                                    <td className='border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>0.1% on buy &amp; sell</td>
                                                    <td className='border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] table-cell align-middle'>0.025% on the sell side</td>
                                                    <td className="border-none! text-sm px-[15px] py-3">0.05% on the sell side</td>
                                                    <td className="border-none! text-sm px-[15px] py-3">
                                                        <ul className="pl-5 list-disc">
                                                            <li className='mb-[5px]'>
                                                                0.15% of the intrinsic value on options that are bought and exercised
                                                            </li>
                                                            <li className='mb-[5px]'>
                                                                0.15% on sell side (on premium)
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="text-[0.9rem] text-[#666] !pl-[15px]">Transaction charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.1% on buy &amp; sell</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.025% on the sell side</td>
                                                    <td className="py-[12px] px-[15px] text-left border-b border-[#eee]">0.05% on the sell side</td>
                                                    <td className="py-[12px] px-[15px] text-left border-b border-[#eee]">
                                                        <ul className="pl-5 list-disc">
                                                            <li className='mb-[5px]'>
                                                                0.15% of the intrinsic value on options that are bought and exercised
                                                            </li>
                                                            <li className='mb-[5px]'>
                                                                0.15% on sell side (on premium)
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="text-[0.9rem] text-[#666] !pl-[15px] !border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] !pl-[15px] border-l-0 pl-0">Transaction charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                                    <td className="py-[12px] px-[15px] text-left border-b border-[#eee]">NSE: 0.00183%<br />BSE: 0</td>
                                                    <td className="py-[12px] px-[15px] text-left border-b border-[#eee]">NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="text-[0.9rem] text-[#666] !pl-[15px] !border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] !pl-[15px] border-l-0 pl-0">GST</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="text-[0.9rem] text-[#666] !pl-[15px] !border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] !pl-[15px] border-l-0 pl-0">SEBI charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                    <td className="hide-on-mobile">₹10 / crore</td>
                                                    <td className="hide-on-mobile">₹10 / crore</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="text-[0.9rem] text-[#666] !pl-[15px] !border-none text-[0.875rem] py-[12px] px-[15px] text-left border-b border-[#eee] !pl-[15px] border-l-0 pl-0">Stamp charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.015% or ₹1500 / crore on buy side</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.003% or ₹300 / crore on buy side</td>
                                                    <td className="hide-on-mobile">0.002% or ₹200 / crore on buy side</td>
                                                    <td className="hide-on-mobile">0.003% or ₹300 / crore on buy side</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            )}
                            {activeTab === "f0" && (
                                <div className="hidden overflow-hidden clear-both rounded-[3px]">
                                    <h3 className="title" >F&amp;O</h3>
                                    <div className="table-container">
                                        <table>
                                            <thead>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <th>&nbsp;</th>
                                                    <th>F&amp;O - Futures</th>
                                                    <th>F&amp;O - Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Brokerage</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.03% or Rs. 20/executed order whichever is lower</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Flat Rs. 20 per executed order</td>
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
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Transaction charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.00183%<br />BSE: 0</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads\">GST</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads\">SEBI charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads">Stamp charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.002% or ₹200 / crore on buy side</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.003% or ₹300 / crore on buy side</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-12 color-grey">*SEBI charges will be reduced to &#8377;15 per crore once the regulator announces a date.</p>
                                </div>
                            )}

                            {activeTab === "currency" && (

                                <div className="section" id="currency" >
                                    <h3 className="title">Currency</h3>
                                    <div className="table-container">
                                        <table>
                                            <thead>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <th>&nbsp;</th>
                                                    <th>Currency futures</th>
                                                    <th>Currency options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Brokerage</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.03% or ₹ 20/executed order whichever is lower</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹ 20/executed order</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads">STT/CTT</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>No STT</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>No STT</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Transaction charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NSE: 0.0311%<br />BSE: 0.001%</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads">GST</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">SEBI charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads\">Stamp charges</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.0001% or ₹10 / crore on buy side</td>
                                                    <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>0.0001% or ₹10 / crore on buy side</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === "commodity" && (

                                <div className="hidden overflow-hidden clear-both rounded-[3px]" >
                                    <h3 className="hidden text-[1.25rem] leading-[1.6] mt-0 font-medium mb-[20px]" >Commodity</h3>
                                    <div className="overflow-auto w-full max-w-full">
                                        <table className='border-spacing-0 w-full rounded-[3px] border border-[#ddd]'>
                                            <thead className='table-header-group align-middle'>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <th className='mx-auto !pl-[15px] border-l-0 pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee]'>&nbsp;</th>
                                                    <th className='mx-auto !pl-[15px] border-l-0 pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee]'>Commodity futures</th>
                                                    <th className='mx-auto !pl-[15px] border-l-0 pl-0 text-[0.875rem] font-medium border-b border-[#ddd] py-[12px] px-[15px] text-left border-b border-[#eee]'>Commodity options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Brokerage</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>0.03% or Rs. 20/executed order whichever is lower</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>₹ 20/executed order</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads">STT/CTT</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>0.01% on sell side (Non-Agri)</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>0.05% on sell side</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">Transaction charges</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>MCX: 0.0418%<br />NSE: 0.001%</td>
                                                </tr>
                                                <tr className="even:bg-[#fbfbfb] bg-[#fafafb] border-b border-[#f4f4f4]">
                                                    <td className="charges-heads">GST</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>18% on (brokerage + SEBI charges + transaction charges)</td>
                                                </tr>
                                                <tr className='border-b border-[#f4f4f4]'>
                                                    <td className="charges-heads">SEBI charges</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'><strong>Agri:</strong><br />₹1 /
                                                        crore<br /><strong>Non-agri:</strong><br />₹10 / crore</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>₹10 / crore</td>
                                                </tr>
                                                <tr className="grey-back" colSpan="2">
                                                    <td className="charges-heads">Stamp charges</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>0.002% or ₹200 / crore on buy side</td>
                                                    <td className='!border-none text-[1.875rem] py-[12px] px-[15px] text-left'>0.003% or ₹300 / crore on buy side</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}


                        </div><br />
                        <p className="text-[2.25rem] font-normal mt-0 mb-[20px] text-center text-[1rem] leading-[1.8] mb-[15px]"><a className="font-normal text-[#387ed1] no-underline bg-transparent text-[2.25rem] mt-0 mb-[20px] text-center text-[1rem] leading-[1.8] mb-[15px]" href="/brokerage-calculator">Calculate
                            your costs upfront</a> using our brokerage calculator</p>
                        <section className="pt-[80px]">
                            <div className="relative w-[1100px] max-w-full mx-auto box-border">
                                <h2 className="text-[1.5rem] leading-[1.5] mt-0 font-medium mb-[20px] text-[#424242]">Charges for account opening</h2>
                                <div className="overflow-auto w-full max-w-full">
                                    <table className='border-spacing-0 w-full rounded-[3px] border border-[#ddd]'>
                                        <thead className='table-header-group align-middle' >
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <th className='"first:!pl-[15px] first:border-l-0 text-sm font-medium border-b border-[#ddd] py-3 px-[15px] text-left'>Type of account</th>
                                                <th className='"first:!pl-[15px] first:border-l-0 text-sm font-medium border-b border-[#ddd] py-3 px-[15px] text-left'>Charges</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Individual account</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'><span className="uppercase text-[11px] font-medium text-white bg-[#4caf50] py-1 px-[10px] rounded-[2px]">free</span></td>
                                            </tr>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Minor account</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'><span className="uppercase text-[11px] font-medium text-white bg-[#4caf50] py-1 px-[10px] rounded-[2px]">free</span></td>
                                            </tr>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>NRI account</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹ 500</td>
                                            </tr>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>HUF account</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'><span className="uppercase text-[11px] font-medium text-white bg-[#4caf50] py-1 px-[10px] rounded-[2px]">free</span> (online) / ₹ 500 (offline)</td>
                                            </tr>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Partnership, LLP, and Corporate accounts (offline only)</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹ 500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                        <section className="pt-20">
                            <div className="relative w-[1100px] max-w-full mx-auto box-border">
                                <h2 className="text-2xl leading-[1.5] mt-0 font-medium mb-5">Demat AMC (Annual Maintenance Charge)</h2>
                                <p className="inline-block py-[5px] pr-5 pl-[15px] border-l-4 border-[#387ed1] bg-[#f6fafd] rounded-[2px] text-base leading-[1.8] mb-[15px]">
                                    Free for first year*
                                </p>
                                <p className="text-xs leading-[1.8] mb-[15px]">
                                    From second year onwards, for BSDA accounts:
                                </p>
                                <div className="overflow-auto w-full max-w-full">
                                    <table className='overflow-auto w-full max-w-full'>
                                        <thead className='table-header-group align-middle border-inherit'>
                                            <tr className='border-b border-[#f4f4f4]'>
                                                <th className='first:!pl-[15px] first:border-l-0 text-sm font-medium border-b border-[#ddd] py-3 px-[15px] text-left align-middle'>Value of holdings</th>
                                                <th className='first:!pl-[15px] first:border-l-0 text-sm font-medium border-b border-[#ddd] py-3 px-[15px] text-left align-middle'>AMC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Up to ₹4 lakh</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'><span className="uppercase text-[11px] font-medium text-white bg-[#4caf50] py-1 px-[10px] rounded-[2px]">free</span></td>
                                            </tr>
                                            <tr>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹4 lakh - ₹10 lakh</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹100 per year + 18% GST, charged quarterly</td>
                                            </tr>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Above ₹10 lakh</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>₹300 per year + 18% GST, charged quarterly</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs leading-[1.8] mb-[15px]">
                                    For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
                                </p>
                                <p className="text-xs leading-[1.8] mb-[15px]">
                                    To learn more about BSDA, <a className='text-[#387ed1] no-underline font-medium bg-transparent text-xs' href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">click here</a>. To learn more about AMC, <a className='text-[#387ed1] no-underline font-medium bg-transparent text-xs' href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">click here</a>.
                                </p>
                                <p className="text-xs leading-[1.8] mb-[15px]">
                                    *Resident individual accounts only.
                                </p>
                            </div>
                        </section>
                        <section className="pt-20">
                            <div className="relative w-[1100px] max-w-full mx-auto box-border">
                                <h2 className="text-2xl leading-[1.5] mt-0 mb-5 font-medium">Charges for optional value added services</h2>
                                <div className="overflow-auto w-full max-w-full">
                                    <table className='border-spacing-0 w-full rounded-[3px] border border-[#ddd]'>
                                        <thead className='align-middle border-inherit'>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <th className='!pl-[15px] border-l-0 py-3 px-[15px] text-left border-b border-[#eee]'>Service</th>
                                                <th className='!pl-[15px] border-l-0 py-3 px-[15px] text-left border-b border-[#eee]'>Billing Frequency</th>
                                                <th className='!pl-[15px] border-l-0 py-3 px-[15px] text-left border-b border-[#eee]'>Charges</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Tickertape</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Monthly / Quarterly / Annual</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Free: 0 | Pro: 249/699/2399</td>
                                            </tr>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Smallcase</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Per transaction</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Buy &amp; Invest More: 100 | SIP: 10</td>
                                            </tr>
                                            <tr className="border-b border-[#f4f4f4]">
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Kite Connect</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Monthly</td>
                                                <td className='!border-none text-[0.875rem] py-[12px] px-[15px] text-left'>Connect: 500 | Personal: Free</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                        <h2 className='text-2xl pt-20 leading-[1.5] mt-0 font-medium mb-5 text-[#424242]'>Charges explained</h2>
                        <div className="flex flex-row flex-wrap flex-[0_1_auto] justify-between box-border">
                            <div className="box-border flex-[0_1_auto] basis-[48%] w-[48%] ml-0">
                                <p className='text-base leading-[1.8] mb-[15px]'>Securities/Commodities transaction tax</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Tax by the government when transacting on the exchanges. Charged as
                                    above on both buy and sell sides when trading equity delivery. Charged only on selling side when
                                    trading intraday or on F&amp;O.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">When trading at Zerodha, STT/CTT can be a lot more than the brokerage
                                    we charge. Important to keep a tab.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Transaction/Turnover Charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
                                    ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">BSE has revised transaction charges in SS and ST groups to ₹1,00,000
                                    per crore of gross turnover.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Call &amp; trade</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Stamp charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>NRI brokerage charges</p>
                                <ul className="text-xs leading-[1.8] list-items">
                                    <li className='mb-[5px]'>
                                        For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&amp;O (whichever is lower).
                                    </li>
                                    <li className='mb-[5px]'>
                                        For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                                    </li>
                                    <li className='mb-[5px]'>
                                        ₹500 + GST as yearly account maintenance charges (AMC) charges.
                                    </li>
                                </ul>
                                <p className='text-base leading-[1.8] mb-[15px]'>Account with debit balance</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                                <ul className="list-items text-xs leading-[1.8]">
                                    <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                                    <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                                    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                                </ul>
                                <p className='text-base leading-[1.8] mb-[15px]'>Margin Trading Facility (MTF)</p>
                                <ul className="list-items text-xs leading-[1.8]">
                                    <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                                    <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                                    <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                                </ul>
                            </div>
                            <div className="basis-[48%] w-[48%] box-border flex-[0_1_auto]">
                                <p className='text-base leading-[1.8] mb-[15px]'>GST</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Tax levied by the government on the services rendered. 18% of (
                                    brokerage + SEBI charges + transaction charges)</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>SEBI Charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Charged at ₹10 per crore + GST by Securities and Exchange Board of
                                    India for regulating the markets.</p>
                                <p id="depo_charges">DP (Depository participant) charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                                <p id="depo_charges">Pledging charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">₹30 + GST per pledge request per ISIN.</p>
                                <p>AMC (Account maintenance charges)</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Free for the first year on all new resident individual accounts.</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">Click here</a></p>
                                <p className="text-xs leading-[1.8] mb-[15px]">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">Click here</a></p>
                                <p>Corporate action order charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">₹20 plus GST will be charged for OFS / buyback / takeover / delisting
                                    orders placed through Console.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Off-market transfer charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">₹25 per transaction.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Physical CMR request</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">First CMR request is free. ₹20 + ₹100 (courier charge) +
                                    18% GST for subsequent requests.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Payment gateway charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">₹9 + GST (Not levied on transfers done via UPI)</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Delayed Payment Charges</p>
                                <p className="text-xs leading-[1.8] mb-[15px]">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges">Learn more</a>.</p>
                                <p className='text-base leading-[1.8] mb-[15px]'>Trading using 3-in-1 account with block functionality</p>
                                <ul className="list-items text-xs leading-[1.8] mb-[15px]">
                                    <li className='mb-[5px]'><b>Delivery &amp; MTF Brokerage:</b> 0.5% per executed order.</li>
                                    <li className='mb-[5px]'><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-base leading-[1.8] mb-[15px]'>Disclaimer</p>
                        <p className="text-xs leading-[1.8] mb-[15px]">
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

export default Pricing