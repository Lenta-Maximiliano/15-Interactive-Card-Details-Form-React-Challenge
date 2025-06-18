import './CardFront.scss';

export default function CardFront({ cardName, cardNumber, cardMonth, cardYear }){

  const displayedCardName = cardName.trim() === "" ? "Jane Appleseed" : cardName;
  const displayedCardNumber = cardNumber.trim() === "" ? "0000 0000 0000 0000" : cardNumber;
  const displayedCardMonth = cardMonth.trim() === "" ? "00" : cardMonth;
  const displayedCardYear = cardYear.trim() === "" ? "00" : cardYear;

  return(
    <div className="card-front">
      <img className="card-front__logo" src="./images/card-logo.svg" alt="logo" />
      <p className="card-front__number">{displayedCardNumber}</p>
      <div className="card-front__details">
        <p className="card-front__details-name">{displayedCardName}</p>
        <p ><span className="card-front__details-month">{displayedCardMonth}</span>/<span className="card-front__details-year">{displayedCardYear}</span></p>
      </div>
    </div>
  )
}