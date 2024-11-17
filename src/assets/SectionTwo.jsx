import React from 'react'

function SectionTwo() {
  return (
    <div id="second" className="section">
        <div id="logo_bar" className="flex-container">
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_1.svg"  /></div>
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_2.svg"  /></div>
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_3.svg"  /></div>
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_4.svg"  /></div>
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_5.svg"  /></div>
            <div><img className="logo-item" src="./src/assets/images/logos/logo_bar_6.svg"  /></div>
        </div>
        <div className="flex-container">
            <div ><img src="./src/assets/images/phone_single.svg"  /></div>
            
            <div id="features" className="card-grid">

                <div className="card-grid-head card-grid-item">
                    <div className="card-text">
                        <h1>App Features</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</div>
                    </div>
                </div>
        
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/payment.svg"  />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Easy Payments</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
                
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/security.svg" />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Data Security</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
                
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/statistics.svg"  />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Cost Statistics</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
                
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/support.svg"  />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Support 24/7</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
                
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/cashback.svg"  />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Regular Cashback</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
                
                <div className="card card-grid-item">
                    <div className="card-side">
                        <div className="icon">
                            <img src="./src/assets/images/icons/standards.svg"  />
                        </div>
                    </div>
                    <div className="card-text">
                        <h5>Top Standards</h5>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SectionTwo