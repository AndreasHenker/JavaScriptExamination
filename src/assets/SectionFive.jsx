import React from 'react'

function SectionFive() {
  return (
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
  )
}

export default SectionFive