import React from 'react'

const Header = () => {
  return (
    <header className="flex-container">

    <div className="flex-row head-element">
        <div className="light"><img src="./src/assets/images/logos/logo_silicon.svg" /></div>
        <div className="dark"><img src="./src/assets/images/logos/logo_silicon_dark.svg" /></div>
        <div className="nav">Features</div>
    </div>
    <div  className="flex-row head-element">
        <div className="flex-row">
            <label for="darkmode">Darkmode</label>
            <button id="btnDark" className="light lightswitch" onClick="theForce('dark')" name="darkmode"></button>
            <button id="btnLight" className="dark lightswitch" onClick="theForce('light')"  name="darkmode"></button>
        </div>
        <button><span className="symbolfont">&#4912</span>  Sign in / up</button>
    </div>

</header>
  )
}

export default Header