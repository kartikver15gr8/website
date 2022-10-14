import React from "react";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <p className="banner-heading"><span>Liquid Staking Hub</span></p>
                        <p className="text">
                            Persistence is a Tendermint based specialized Layer-1 powering an ecosystem
                            <span> of DeFi applications focused on unlocking the liquidity of staked assets.</span>
                        </p>
                        <div className={"button-section text-center d-inline-block"}>
                        <a href="https://blog.persistence.one/2021/03/25/xprt-tokenomics-and-utility-powering-the-persistence-ecosystem/" rel="noopener noreferrer"
                            className="button-initial button one" target="_blank">
                            $XPRT
                        </a>
                            <a href="https://drive.google.com/file/d/12cjxcyqFdVDY55i4Wh_31k9viVciemRr/view" rel="noopener noreferrer"
                               target="_blank" className="button-initial button">
                                Ecosystem Grants
                            </a>
                    </div>
                        <div className="stats-container text-white">
                            <div className="stats-section">
                                <h2>$161B</h2>
                                <h6 className="home-desc">POS MarketCap</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$108B</h2>
                                <h6 className="home-desc">Staked Assets Value</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$85B</h2>
                                <h6 className="home-desc">DeFi TVL</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$400B</h2>
                                <h6 className="home-desc">Addressable Market</h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
};
export default Banner;
