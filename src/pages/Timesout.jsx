export default function Timesout({ last, isLast, onNext, onFinish, ui }) {
  if (!last) return null;

  return (
    <>
      <h2>{ui.timeUp}</h2>
      <p>{last.topic}</p>
      <p>{ui.score}: {last.score}</p>

      {!isLast ? (
        <button className="btn-primary" onClick={onNext}>
          {ui.continue}
        </button>
      ) : (
        <button className="btn-success" onClick={onFinish}>
          {ui.showResult}
        </button>
      )}
    </>
  );
}
