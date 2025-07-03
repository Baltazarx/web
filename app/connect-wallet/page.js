'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ConnectWallet() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                
            <section className="page-title">
                    <div className="overlay" />
                </section>
                <div>
                    <section className="tf-section tf-wallet" data-aos-delay={500} data-aos="fade-up" data-aos-duration={800}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wallet-form">
                                        <h4>Connect Wallet</h4>
                                        <p className="sub">Please Choose a network &amp; select a wallet to connect to this marketplace</p>
                                        <div className="spacing" />
                                        <div className="choose-network flat-tabs">
                                            <h6>Choose network</h6>
                                            <ul className="menu-tab">
                                                <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}>
                                                    <img src="/assets/images/common/wallet_1.png" alt="" />
                                                    <span>BSC</span>
                                                </li>
                                                <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}>
                                                    <img src="/assets/images/common/wallet_2.png" alt="" />
                                                    <span>ETH</span>
                                                </li>
                                                <li className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}>
                                                    <img src="/assets/images/common/wallet_3.png" alt="" />
                                                    <span>BTC</span>
                                                </li>
                                                <li className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}>
                                                    <img src="/assets/images/common/wallet_4.png" alt="" />
                                                    <span>XRP</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="connect-wallet">
                                            <h6>Connect wallet</h6>
                                            <ul>
                                                <li>
                                                    <Link href="#"><img src="/assets/images/common/wallet_5.png" alt="" />
                                                        <span>MetaMask</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/images/common/wallet_6.png" alt="" />
                                                        <span>Coibase Walet</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/images/common/wallet_7.png" alt="" />
                                                        <span>WaletConnect</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/images/common/wallet_8.png" alt="" />
                                                        <span>Phantom</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/images/common/wallet_9.png" alt="" />
                                                        <span>Core</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/images/common/wallet_10.png" alt="" />
                                                        <span>Bitski</span>
                                                        <span className="icon">
                                                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            By connecting your wallet, you agree to our <Link href="#">Terms of Service</Link> and our <Link href="#">Privacy Policy</Link>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section tf_CTA">
                        <div className="container relative">
                            <div className="overlay">
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tf-title left mt56" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Launch on Risebot
                                        </h2>
                                        <p className="sub">Full support in project incubation</p>
                                        <div className="wrap-btn">
                                            <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                        <img className="move4" src="/assets/images/common/img_cta.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}