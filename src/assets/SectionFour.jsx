import React from 'react'

function SectionFour() {
  return (
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
  )
}

export default SectionFour