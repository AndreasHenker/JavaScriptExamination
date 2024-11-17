import React from 'react'

function SectionAll() {
    return (
      <main>
          
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
      <div id="third" className="flex-container">
          <div><h1>How Does it Work?</h1></div>
          <div className="flex-row">
              <div><img src="./src/assets/images/phones/first_of_three.svg"  /></div>
              <div><img src="./src/assets/images/phones/second_of_three.svg"  /></div>
              <div><img src="./src/assets/images/phones/third_of_three.svg"  /></div>
          </div>
          <footer>
              <div><h4>Latest transaction history</h4></div>
              <div>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</div>
          </footer>
      </div>
      <div id="fourth" className="section section-4">
          <div className="flex-container section">
              <div className="sqr_of_four">
                  <div className="firstsquare">
                      <h2>Make your money transfer simple and clear</h2>
                      <ul className="checklist">
                          <li>Banking transactions are free for you</li>
                          <li>No monthly cash commission</li>
                          <li>Manage payments and transactions online</li>
                      </ul>
                      <button>Learn more &#8594</button>
  
                  </div>
                  
              </div>
              <div className="sqr_of_four">
                  <img src="./src/assets/images/diagram_square.svg"  />
                  <img className="pic_float off_to_right" src="./src/assets/images/send_money.svg"  />
              </div>
              
          </div>
          <div className="flex-container section">
              <div className="sqr_of_four">
                  <img src="./src/assets/images/contacts.square.svg"  />
                  <img className="pic_float h_center" src="./src/assets/images/visa_card.svg"  />
              </div>
              <div className="sqr_of_four">
                  <h2>Receive payment from international bank details</h2>
                  <div className="flex-row">
                      <div className="info-card">
                          <div className="icon"><img src="./src/assets/images/icons/payment.svg"  /></div>
                          <div className="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto pariatur nihil amet!
                          </div>
                      </div>
                      <div className="info-card">
                          <div className="icon"><img src="./src/assets/images/icons/payment.svg"  /></div>
                          <div className="card-text">
                              A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                          </div>
                      </div>
                  </div>
                  <button>Learn more &#8594</button>
              </div>
          </div>
      </div>
      <div id="fifth" className="section section-5 flex-container">
          <div className="flex-column">
              <div className="flex-row">
                  <div className="title-card"><h2>Clients are Loving Our App</h2></div>
                  <div className="card-rating">
                      <div className="quote-box">&#8220</div>
                      <div className="flex-row rating-stars">
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                      </div>
                      <div className="rating-text">
                          Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
                      </div>
                      <div className="flex-row signature-card">
                          <img src="./src/assets/images/icons/avatar_fanny.svg"  />
                          <div>
                              <h5>Fanny Summers</h5>
                              Designer
                          </div>
                      </div>
                  </div>
                  <div className="card-rating">
                      <div className="quote-box">&#8220</div>
                      <div className="flex-row rating-stars">
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_full.svg" />
                          <img src="./src/assets/images/icons/star_blank.svg" />
                      </div>
                      <div className="rating-text">
                          Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
                      </div>
                      <div className="flex-row signature-card">
                          <img src="./src/assets/images/icons/avatar_albert.svg"  />
                          <div>
                              <h5>Albert Flores</h5>
                              Developer
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="sixth" className="section">
          <div className="faq-box">
  
              <div id="faq-sec" className="flex-item">
                  <ul className="nochecklist">
                      <li><details><summary>Is any of my personal information stored in the App?</summary>Lorem ipsum dolor sit.</details></li>
                      <li><details><summary>What formats can I download my transaction history in?</summary>Lorem ipsum dolor sit.</details></li>
                      <li><details><summary>Can I schedule future transfers?</summary>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</details></li>
                      <li><details><summary>When can I use Banking App services?</summary>Lorem ipsum dolor sit.</details></li>
                      <li><details><summary>Can I create my own password that is easy for me to remember?</summary>Lorem ipsum dolor sit.</details></li>
                      <li><details><summary>What happens if I forget or lose my password?</summary>Lorem ipsum dolor sit.</details></li>
                  </ul>
              </div>
              
              <div className="flex-column faq-contact">
                  <div>
                      <div><h2>Any Questions? Check out the FAQs</h2></div>
                      <div>Still have unanswered questions and need to get in touch?</div>
                  </div>
                  <div className="flex-row flex-on-edge">
                      <div className="question-box">
                          <div><img src="./src/assets/images/icons/phone.svg"  /></div>
                          <div>Still have questions?</div>
                          <div className="phone">Contact us --\</div>
                      </div>
                      <div className="question-box">
                          <div><img src="./src/assets/images/icons/comic_talk.svg"  /></div>
                          <div>Don't like phone calls?</div>
                          <div className="notalk">Contact us --\</div>
                      </div>
                  </div>
              </div>
  
          </div>
          <div className="flex-container subscribe">
              <div className="flex-row bell">
                  <img src="./src/assets/images/icons/bell.svg"  />
                  <h4>
                      Subscribe to our newsletter to stay informed about latest updates
                  </h4>
              </div>
              <div className="subscribe-email flex-row"><input type="email" name="" placeholder="Your Email" id="subscribe_news" /><button>Subscribe</button></div>
          </div>
      </div>
      <footer className="flex-container">© 2024 Silicon. All rights reserved. Credit MadrasThemes</footer>
  </main>
    )
  }

export default SectionAll