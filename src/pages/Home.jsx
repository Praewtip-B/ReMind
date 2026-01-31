export default function Home({ onStart, lang, setLang, ui }) {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <button
          className={`btn-lang ${lang === "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          className={`btn-lang ${lang === "th" ? "active" : ""}`}
          onClick={() => setLang("th")}
        >
          TH
        </button>
      </div>

     <h1>ReMind</h1>

      <button className="btn-primary" onClick={onStart}>
        {ui.ready}
      </button>
    </>
  );
}
