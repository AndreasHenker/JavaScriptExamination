import React from 'react'

function SectionSix() {
  return (
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
  )
}

export default SectionSix