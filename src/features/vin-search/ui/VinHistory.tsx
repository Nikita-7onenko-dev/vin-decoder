type Props = {
  history: string[];
  onSelectVin: (vin: string) => void;
  currentVin: string;
  clearHistory: () => void;
}

export default function VinHistory({history, onSelectVin, currentVin, clearHistory}: Props) {

  const isNoHistory = history.length === 0;

  return ( 
    <section className="vin-history">
      <h2>VIN History</h2>
      {isNoHistory ? (
        <p>No VIN history yet</p>
      ) : (
        <>
          <ul>
            {history.map( vin => (
              <li key={vin} >
                [<button 
                  onClick={() => onSelectVin(vin)}
                  className={vin === currentVin ? "vin-history__item vin-history__item--active" : "vin-history__item"}
                >
                  {vin}
                </button>]
              </li>
            ))}
          </ul>
          <button className="main-button" onClick={clearHistory}>Clear History</button>
        </>
      )}
    </section>
   )
}