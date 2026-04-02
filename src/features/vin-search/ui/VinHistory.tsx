type Props = {
  history: string[];
  onSelectVin: (vin: string) => void;
  currentVin: string;
  clearHistory: () => void;
}

export default function VinHistory({history, onSelectVin, currentVin, clearHistory}: Props) {

  return ( 
    <section className="vin-history">
      <h2>VIN History</h2>
      {history.length === 0 ? (
        <p>No VIN history yet</p>
      ) : (
        <ul>
          {history.map( vin => (
            <li key={vin} >
              [<button 
                onClick={() => onSelectVin(vin)}
                style={{
                  fontWeight: vin === currentVin ? 600 : "normal",
                  color: vin === currentVin ? "#fff" : "#9ca3af",
                }}  
              >{vin}</button>]
            </li>
          ))}
        </ul>
      )}
      {history.length > 0 && <button className="main-button" onClick={clearHistory}>Clear History</button>}
    </section>
   )
}