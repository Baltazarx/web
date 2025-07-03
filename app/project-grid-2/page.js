'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ProjectGrid2() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Grid">
                <div>
                    <section className="tf-section project">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="flat-tabs" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="wrapper_menutab">
                                            <ul className="menu-tab wrapper">
                                                <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}><span>Open IGO</span></li>
                                                <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Upcoming</span></li>
                                                <li className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>Past IGO</span></li>
                                            </ul>
                                            <div className="seclect-box" data-aos="fade-in" data-aos-duration={800}>
                                                <div className="dropdown selector-drop" id="category">
                                                    <Link href="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="boder" />All access
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Forgotten Samurai</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Star Batter</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Calvary Deneral</li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown selector-drop" id="artworks">
                                                    <Link href="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="boder" />All Block Chain
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Sort by Popularity</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by Latest</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by View</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-tab mt40">
                                            <div className="content-inner project-box-style6_wrapper" style={{ display: `${activeIndex == 1 ? "flex" : "none"}` }}>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_54.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">She Sees Red</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_55.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Sky: Children of the Light</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_15.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Angry Birds Friends</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_56.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_57.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_58.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Forward Assault</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_59.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Legend of Ace</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_60.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_61.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_62.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Shadowmatic</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_63.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Critical Ops: Multiplayer</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_64.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">8 Ball Blitz</Link> </h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner project-box-style6_wrapper" style={{ display: `${activeIndex == 2 ? "flex" : "none"}` }}>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_54.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">She Sees Red</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_55.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Sky: Children of the Light</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_15.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Angry Birds Friends</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_56.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_57.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_58.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Forward Assault</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_59.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Legend of Ace</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_60.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_61.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_62.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Shadowmatic</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_63.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Critical Ops: Multiplayer</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_64.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">8 Ball Blitz</Link> </h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner project-box-style6_wrapper" style={{ display: `${activeIndex == 3 ? "flex" : "none"}` }}>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_54.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">She Sees Red</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_55.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Sky: Children of the Light</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_15.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Angry Birds Friends</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_56.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_57.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Zombie plant 2</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_58.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Forward Assault</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_59.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Legend of Ace</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_60.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_61.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Clash of Kings</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_62.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Shadowmatic</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_63.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">Critical Ops: Multiplayer</Link></h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-box-style4">
                                                    <div className="image">
                                                        <div className="img_inner">
                                                            <img src="/assets/images/common/project_64.png" alt="" />
                                                            <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                        </div>
                                                        <div className="label">
                                                            1ST Phase
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-details">8 Ball Blitz</Link> </h5>
                                                        <p className="desc">Ookeenga is the no.1 Vertical Multiplayer Real Time Strategy Game with breathtaking 3D visuals...</p>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Min allocation</p>
                                                                <p className="price">0.01</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">TBA</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">Public</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <ul className="panigation mt6" data-aos="fade-up" data-aos-duration={800}>
                                        <li>
                                            <Link href="#">
                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.5 1L1.5 6L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="active">
                                                1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1L6.5 6L1.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
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
                                    <div className="tf-title left mt66" data-aos="fade-up" data-aos-duration={800}>
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
                                        <img className="move4" src="/assets/images/common/img_cta_1.png" alt="" />
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