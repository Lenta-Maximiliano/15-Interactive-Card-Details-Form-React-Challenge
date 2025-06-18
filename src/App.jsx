import { useState } from 'react';
import CardBack from './components/CardBack/CardBack';
import CardForm from './components/CardForm/CardForm';
import CardFront from './components/CardFront/CardFront';
import ThanksSection from './components/ThanksSection/ThanksSection';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'

function App() {
  const [cvc, setCvc] = useState("000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <main className='main-container'>
        <section className='main-container__bg-section'>
          <CardBack cvc={cvc}/>
          <CardFront 
            cardName={cardName} 
            cardNumber={cardNumber} 
            cardMonth={cardMonth} 
            cardYear={cardYear}
          />
        </section>
        <section className='main-container__form-section'>
          {!isSubmitted ? (
            <CardForm 
              onCvcChange={setCvc} 
              onCardNameChange={setCardName} 
              onCardNumberChange={setCardNumber} 
              onCardMonthChange={setCardMonth} 
              onCardYearChange={setCardYear}
              onSubmitSuccess={() => setIsSubmitted(true)} 
            />
          ) : (
            <ThanksSection 
              onContinue={() => {
                  setIsSubmitted(false)
                  setCvc("000")
                  setCardName("Jane Appleseed")
                  setCardNumber("0000 0000 0000 0000")
                  setCardMonth("00")
                  setCardYear("00")
                } 
              }
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
