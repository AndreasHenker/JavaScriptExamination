import React from 'react'

function SectionOne() {
  return (
        <div id="first" className="section">
            <header className="flex-container">

                    <div className="flex-row head-element">
                        <div className="light"><img src="./src/assets/images/logos/logo_silicon.svg" /></div>
                        <div className="dark"><img src="./src/assets/images/logos/logo_silicon_dark.svg" /></div>
                        <div className="nav">Features</div>
                    </div>
                    <div  className="flex-row head-element">
                        <div className="flex-row">
                            <label htmlFor="darkmode">Darkmode</label>
                            <button id="btnDark" className="light lightswitch" onClick="theForce('dark')" name="darkmode"></button>
                            <button id="btnLight" className="dark lightswitch" onClick="theForce('light')"  name="darkmode"></button>
                        </div>
                        <button><span className="symbolfont">&#4912</span>  Sign in / up</button>
                    </div>

            </header>
            <div className="flex-container">
                <div className="flex-column sec-1">
                    <div><h1>Manage All Your Money in One App</h1></div>
                    <div>We offer you a new generation of the mobile banking.
                        Save, spend & manage money in your pocket.</div>
                    <div className="light">
                        <img src="./src/assets/images/store_apple.svg"  />
                        <img src="./src/assets/images/store-play.svg"  />
                    </div>
                    <div className="dark">
                        <img src="./src/assets/images/store_apple_dk.svg"  />
                        <img src="./src/assets/images/store-play-dk.svg"  />
                    </div>
                    <div>
                        <button className="discover nav"><img id="btn_arrow" src="./src/assets/images/icons/arrow-down.svg" />Disover more</button>
                    </div>
                </div>
            
                <div className="section-1 pic_bottom">
                    <img className="pic_float pic_behind" src="./src/assets/images/phone1_back.svg"  />
                    <img className="pic_float pic_front" src="./src/assets/images/phone1_front.svg"  />
                </div>
            </div>    
    </div>
  )
}

export default SectionOne