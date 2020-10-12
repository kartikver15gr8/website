import React, { Component } from 'react';
import {connect} from 'react-redux';
import interchain from '../../assets/interchain.png'
import ixo from '../../assets/ixo.png'
import akash from '../../assets/akash.png'
import iris from '../../assets/iris.png'
import gallery_left from '../../assets/gallery_left.png'
import simply_vc from '../../assets/simply_vc.png'
import regen from '../../assets/regen.png'
import rightarrow from '../../assets/right-arrow.svg'
class InterNFT extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
      
       
        return (
            <React.Fragment>
                <section className="section-internft" id="internft">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="align-center info-box">
                               <h1>interNFT</h1>
                               <p>InterNFT is a natively implemented NFT structure for Blockchain applications that implement interoperability protocols. 
                                   The interNFT is defined by a basic interface that any NFT structure has to implement to be called an interNFT.</p>
                                <a className="btn-link" href="https://comdex.sg/" rel="noopener noreferrer" target="_blank">internft.org&emsp;
                                <img className="sub-service-icons" src={rightarrow} alt="arrow" /></a>
                            </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="network-group row">
                                   
                                    <img className="logo-img" src={interchain} alt="interchain" />
                                   
                                    
                                    <img className="logo-img" src={ixo} alt="ixo" />
                                    
                                
                                    <img className="logo-img" src={akash} alt="akash" />
                                   
                                   
                                    <img className="logo-img" src={iris} alt="iris" />
                                    
                                   
                                    <img className="logo-img" src={gallery_left} alt="gallery_left" />
                                   
                                    
                                    <img className="logo-img" src={simply_vc} alt="simply_vc" />
                                   
                                    
                                    <img className="logo-img" src={regen} alt="regen" />
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(InterNFT);