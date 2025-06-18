import './ThanksSection.scss';

export default function ThanksSection({ onContinue }){
  return(
    <section className="thanks-section">
      <img className="thanks-section__img" src="./images/icon-complete.svg" alt="complete icon"/>
      <h1 className="thanks-section__title">Thank you!</h1>
      <p className="thanks-section__text">We've added your card details</p>
      <button className="thanks-section__button" onClick={onContinue}>Continue</button>
    </section>
  )
}