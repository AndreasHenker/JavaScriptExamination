import React from 'react'

function  RatingCard() {
  return (
    <>
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
    </>
  )
}

export default  RatingCard