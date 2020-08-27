import React from 'react';
import Footer from '../components/footer'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import link from '../../assets/link.png'
import roadmapComdex from '../../assets/roadmap-comdex.svg'
import comdexIcon from '../../assets/comdex-icon.svg'
import terraIcon from '../../assets/terra-icon.svg'
import ixoIcon from '../../assets/ixo-icon.svg'
import wuIcon from '../../assets/WU-icon.svg'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Roadmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Tab: '', 
            isOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var quarter = (Math.ceil(month / 3))
        const element = document.getElementById("timeline-"+year+"-"+quarter);
        window.scrollTo(0, element.offsetTop);
        document.body.classList = "";
        // if(element){
        //     document.getElementById("timeline-"+year+"-"+quarter).classList.add('active');
        // }
        document.getElementById('nav-bar-team').classList.add('navbar-white');
    }

    render() {

        return (
            <div>
                <div id="sdis-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar-team">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" /></Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                                <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                    <li className="nav-item active"><Link className="nav-link" to="/">Products</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/" data-target="#useCases">Use cases</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/">Validators</Link></li>
                                    <li class="nav-item dropdown">
                                        <NavDropdown title="About" id="basic-nav-dropdown">
                                            <NavDropdown.Item><Link to="team">Team</Link></NavDropdown.Item>
                                            <NavDropdown.Item href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link">Blog</NavDropdown.Item>
                                            <NavDropdown.Item><Link to="roadmap">Roadmap</Link></NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                </ul>

                                <div className={this.state.isOpen ? "nav-button" : "nav-button"}>
                                    <ul className="nav navbar-nav navbar-left">

                                        <li>

                                            <div className="header-buttons">
                                                <a href="https://explorer.persistence.one/" className="button-explorer" rel="noopener noreferrer" target="_blank">Explorer</a>

                                                <Link className="button-app" to="content">App</Link>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <section className="roadmap-section">
                    <div className="container">
                       
                        <div className="col-md-12">
                        <span className="vertical-line line-1"></span>
                        <span className="vertical-line line-2"></span>
                        <span className="vertical-line line-3"></span>
                        <span className="vertical-line line-4"></span>
                     
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <h3 className="roadmap-head">Project Roadmap and Milestones</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="timeline-section" id="timeline-2021-3">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Integration with other Protocols and Chains through Interchain Communication Protocols</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Additional SDK Modules Development</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q3 2021</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2021-2">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Persistence Native dApp Launch</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Stablecoin Integrations</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Mainnet Launch</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Validator Set Expansion</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q2 2021</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2021-1">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Expand Exchange Listings; Wallet and Block Explorer Integration</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Incentivised Testnet Launch</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q1 2021</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2020-4">

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Integration with CosmWasm</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">NFT Module Spec Implementation with multiple Chains</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Mainnet Launch</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">Token Generation Event</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q4 2020</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2020-3">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Incentivized Testnet Launch</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>SDK Open-sourced</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img className="icon-bg" src={wuIcon} alt="WU" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Western Union Integration Completion</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q3 2020</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2020-2">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"><img className="icon-bg" src={terraIcon} alt="terra" /></div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://medium.com/persistence-blog/terra-and-persistence-announce-partnership-to-drive-adoption-via-a-token-swap-and-community-677df3d0f6e0" target="_blank"><p>Partnership with Terra &nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://medium.com/persistence-blog/goz-updates/home" target="_blank"><p>Participated in Cosmos Network’s Game of Zones; Won Liveness Reward&nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Comdex completed $30 Million Worth of Trades</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Persistence SDK Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q2 2020</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2020-1">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>World’s Top 10 PoS Validators Onboarded</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Persistence comes out of Stealth</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q1 2020</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2019-4">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://finance.yahoo.com/news/comdex-completes-over-10m-worth-070800123.html" target="_blank"><p>Comdex Completes $10 Million Worth of Trades&nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="year-section"><span className="year-quarterName">Q4 2019</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2019-3">
                                    <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"><img className="icon-bg" src={ixoIcon} alt="IXO" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Partnership with IXO</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>First Set of Validators Onboarded</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Comdex Testnet Launched</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>MVP of Persistence SDK</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q3 2019</span></div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2019-2">
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Cross-border Transaction PoC Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img className="icon-bg" src={roadmapComdex} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>Comdex Onboarded</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <h5>PERSISTENCE ONE ESTABLISHED!</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="year-section"><span className="year-quarterName">Q2 2019</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer />
            </div>
        );
    }


}


export default Roadmap 
