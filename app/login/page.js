
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Login() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <section className="page-title">
                    <div className="overlay" />
                </section>

                <div>
                    <section className="tf-section project-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <form action="#">
                                        <div className="project-info-form form-login">
                                            <h6 className="title">Login</h6>
                                            <h6 className="title show-mobie"><Link href="/register">Register</Link></h6>
                                            <h6 className="title link"><Link href="/register">Register</Link></h6>
                                            <p>Enter your credentials to access your account</p>
                                            <div className="form-inner">
                                                <fieldset>
                                                    <label>
                                                        Email address *
                                                    </label>
                                                    <input type="email" placeholder="Your email" required />
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Password *
                                                    </label>
                                                    <input type="password" placeholder="Your password" required />
                                                </fieldset>
                                            </div>
                                            <Link href="/forget-password" className="fogot-pass">Fogot password?</Link>
                                        </div>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style2">
                                                Login
                                            </button>
                                        </div>
                                    </form>
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