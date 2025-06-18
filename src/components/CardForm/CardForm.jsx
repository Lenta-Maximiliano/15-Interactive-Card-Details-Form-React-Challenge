import { useState } from 'react';
import './CardForm.scss';

export default function CardForm({ onCvcChange, onCardNameChange, onCardNumberChange, onCardMonthChange, onCardYearChange, onSubmitSuccess }){
  
  // Validaciones CVC
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleCvcChange = (e) => {
    const value = e.target.value;
    // Validar que solo contenga números
    const regExp = /^\d*$/g;

    if (!regExp.test(value)) {
      setCvcError("Wrong format, numbers only");
    }else {
      setCvcError("");
    }

    setCvc(value);
    onCvcChange(value);
  };

  // Validaciones CardName
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");

  const handleCardNameChange = (e) => {
    const value = e.target.value;
    const regExp = /^([A-Za-z]{2,}\s[A-Za-z]{2,}|)$/g;

    if (!regExp.test(value)) {
      setCardNameError("First and last name required (letters only, min. 2 characters each)");
    }else {
      setCardNameError("");
    }
    setCardName(value);
    onCardNameChange(value);
  }

  // Validaciones CardNumber
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  const handleCardNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\s/g, ""); // quitar espacios para validar
    const regExp = /^\d*$/;

    if (rawValue === "") {
      setCardNumberError("");
    } else if (!regExp.test(rawValue)) {
      setCardNumberError("Only numbers allowed");
    } else {
      setCardNumberError("");
    }

    const formattedValue = rawValue.replace(/(\d{4})/g, "$1 ").trim();

    setCardNumber(formattedValue);
    onCardNumberChange(formattedValue);
  };

  // Validaciones CardMonth
  const [cardMonth, setCardMonth] = useState("");
  const [cardMonthError, setCardMonthError] = useState("");

  const handleCardMonthChange = (e) => {
    const value = e.target.value;
    const regExp = /^(0?[1-9]|1[0-2])$/g;

    if (!regExp.test(value)) {
      setCardMonthError("Must be a valid month (1 to 12)");
    }
    else {
      setCardMonthError("");
    }

    setCardMonth(value);
    onCardMonthChange(value);
  }

  // Validaciones CardYear
  const [cardYear, setCardYear] = useState("");
  const [cardYearError, setCardYearError] = useState("");

  const handleCardYearChange = (e) => {
    const value = e.target.value;
    const regExp = /^(25|26|27|28|29|30)$/g;

    if (!regExp.test(value)) {
      setCardYearError("Must be a valid year (25 to 30)");
    }
    else {
      setCardYearError("");
    }

    setCardYear(value);
    onCardYearChange(value);
  }

  // Validaciones al enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir recarga
    let hasError = false; 

    if (cvc.trim() === "") {
      setCvcError("Can't be blank");
      hasError = true;
    }

    if (cardName.trim() === "") {
      setCardNameError("Can't be blank");
      hasError = true;
    }

    if (cardNumber.trim() === "") {
      setCardNumberError("Can't be blank");
      hasError = true;
    }

    if (cardMonth.trim() === "") {
      setCardMonthError("Can't be blank");
      hasError = true;
    }

    if (cardYear.trim() === "") {
      setCardYearError("Can't be blank");
      hasError = true;
    }

    if(!hasError){
      onSubmitSuccess();
    }
  };

  return(
    <form className="form" onSubmit={handleSubmit}>

      {/* CardName */}
      <label className="form__label" htmlFor="cardName">Cardholder Name</label>
      <input
        className={`form__input ${cardNameError ? "form__input--error" : ""}`}
        type="text"
        name="cardName"
        id="cardName"
        placeholder="e.g. Jane Appleseed"
        value={cardName} 
        onChange={handleCardNameChange}
      />
      <div className="form__cardholder--error error">{cardNameError}</div>

      {/* Cardnumber */}
      <label className="form__label" htmlFor="cardNumber">Card Number</label>
      <input 
        className={`form__input ${cardNumberError ? "form__input--error" : ""}`}
        type="text" 
        name="cardNumber" 
        id="cardNumber" 
        placeholder="e.g. 1234 5678 9123 0000" 
        maxLength="19"
        value={cardNumber} 
        onChange={handleCardNumberChange}
      />
      <div className="form__inputnumber--error error">{cardNumberError}</div>

      
      {/* <!-- Grid --> */}
      <div className="form__date-cvc">

        {/* <!-- 1 --> */}
        <label className="form__label" htmlFor="cardMonth">Exp. Date (MM/YY)</label>

        {/* <!-- 2 --> */}
        <label className="form__label" htmlFor="cardCvc">CVC</label>

        {/* <!-- 3 --> */}
        <div className="form__date">
          <input 
            className={`form__input ${cardMonthError ? "form__input--error" : ""}`} 
            type="text" 
            maxLength="2" 
            name="cardMonth" 
            id="cardMonth" 
            placeholder="MM"
            value={cardMonth}
            onChange={handleCardMonthChange}
          />
          <input 
            className={`form__input ${cardYearError ? "form__input--error" : ""}`}  
            type="text" 
            maxLength="2" 
            name="cardYear" 
            id="cardYear" 
            placeholder="YY"
            value={cardYear}
            onChange={handleCardYearChange}
          />
        </div>

        {/* <!-- 4 --> */}
        <input 
          className={`form__input ${cvcError ? "form__input--error" : ""}`} type="text" 
          name="cardCvc" 
          id="cardCvc" 
          placeholder="e.g. 123"
          maxLength="3" 
          value={cvc} 
          onChange={handleCvcChange}
        />

        {/* <!-- 5 --> */}
        <div className="form__errors-container"> 
          <div className="form__input-mm--error error">{cardMonthError}</div>
          <div className="form__input-yy--error error">{cardYearError}</div>
        </div>

        {/* <!-- 6 --> */}
        <div className="form__input-cvc--error error">{cvcError}</div>
      </div>
      
      <input className="form__submit" type="submit" value="Confirm"/>
    </form>
  )
}