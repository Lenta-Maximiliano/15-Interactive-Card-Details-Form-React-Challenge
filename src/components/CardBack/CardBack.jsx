import './CardBack.scss'

export default function CardBack({ cvc }){
  const displayedCvc = cvc.trim() === "" ? "000" : cvc;
  return(
    <div className="card-back">
      <p className="card-back__cvc">{displayedCvc}</p>
    </div>
  )
}