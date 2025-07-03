
import Chart1 from "@/components/elements/Chart1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Token() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Token">
                <div>
                    <section className="tf-section tf-token pt60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tf-title left mb40" data-aos-delay={500} data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Statistics token
                                        </h2>
                                    </div>
                                    <div className="desc-token" data-aos-delay={500} data-aos="fade-up" data-aos-duration={800}>
                                        <div className="total-token">
                                            <p>Total Supply: <span>15,000,000</span></p>
                                            <p>Public sale: <span> $0.24</span></p>
                                        </div>
                                        <ul className="describe_chart">
                                            <li>
                                                <img src="/assets/images/chart/color_1.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Farming Pool</p>
                                                    <p className="number">27.3%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_2.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Staking</p>
                                                    <p className="number">15.3%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_3.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Ecosystem</p>
                                                    <p className="number">7.5%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_4.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Advisor</p>
                                                    <p className="number">7.03%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_5.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Private Sale</p>
                                                    <p className="number">23.45%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_6.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Liquidity</p>
                                                    <p className="number">13.3%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_7.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Marketing</p>
                                                    <p className="number">7.3%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_8.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Team</p>
                                                    <p className="number">5.3%</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div data-aos="fade-left" data-aos-delay={500} data-aos-duration={800}>
                                        <Chart1 />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="tf-title left mt17 mb40" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Tokenomics
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="tokenomics-wrapper" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Marketing</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>14%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>24,000,000</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>12 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>24</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Ecosystem</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>	12%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>	65,000,00</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>3 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>9</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Team</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>8%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>70,000,00</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>2 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>16</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Advisors</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>5%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>	11,000,00</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>6 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>12</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Staking</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>22%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>9,000,000</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>3 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>4</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Private Round</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>45%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>88,000,000</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>7 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>4</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Category</p>
                                                <p>Exchange <br /> Liquidity</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Allocation</p>
                                                <p>5.8%</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Raise</p>
                                                <p>5,000,000</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Locked</p>
                                                <p>1 Month</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Vesting (Month)</p>
                                                <p>2</p>
                                            </div>
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