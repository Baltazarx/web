
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ForgotPass() {

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
                                        <div className="project-info-form forget-form">
                                            <h4 className="title">Forget Password</h4>
                                            <p>enter your email address in the form below and we will send you further instructions on how to reset your password</p>
                                            <div className="form-inner">
                                                <fieldset>
                                                    <label>
                                                        Email address
                                                    </label>
                                                    <input type="email" placeholder="Your email" required />
                                                </fieldset>
                                            </div>
                                            <div className="bottom">
                                                Nevermind.
                                                <Link href="/login">Sign in</Link>
                                            </div>
                                        </div>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style1">
                                                Reset password
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