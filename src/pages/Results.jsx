export default function Result({ results, onHome, ui }) {
  return (
    <>
      <h2>{ui.results}</h2>

      {results.map((r, i) => (
        <p key={i}>
          {r.topic}: {r.score}
        </p>
      ))}

      <button className="btn-primary" onClick={onHome}>
        {ui.backHome}
      </button>
    </>
  );
}
