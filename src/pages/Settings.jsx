import { useState } from "react";
import { categories as enCat, attributes as enAttr } from "../data/en/categories";
import { categories as thCat, attributes as thAttr } from "../data/th/categories";

export default function Settings({ onStart, lang, ui }) {
  const [mode, setMode] = useState("category");
  const [selected, setSelected] = useState([]);
  const [timer, setTimer] = useState(60);

  const categories = lang === "en" ? enCat : thCat;
  const attributes = lang === "en" ? enAttr : thAttr;

  const options =
    mode === "category" ? categories :
      mode === "attribute" ? attributes :
        [...categories, ...attributes];

  function toggle(item) {
    setSelected((s) =>
      s.includes(item) ? s.filter((i) => i !== item) : [...s, item]
    );
  }

  return (
    <>
      <h2>{ui.settings}</h2>

      <div className="mode-group">
        <label className="inter-label">
          <input
            type="radio"
            checked={mode === "category"}
            onChange={() => setMode("category")}
          />
          {ui.category}
        </label>

        <label className="inter-label">
          <input
            type="radio"
            checked={mode === "attribute"}
            onChange={() => setMode("attribute")}
          />
          {ui.attribute}
        </label>

        <label className="inter-label">
          <input
            type="radio"
            checked={mode === "both"}
            onChange={() => setMode("both")}
          />
          {ui.both}
        </label>
      </div>


      <div style={{ marginTop: 16 }}>
        {options.map((o) => (
          <button
            key={o}
            className={`option-btn ${selected.includes(o) ? "selected" : ""}`}
            onClick={() => toggle(o)}
          >
            {o}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <p className="inter-label">{ui.timer}</p>
        <input
          type="number"
          min="5"
          value={timer}
          onChange={(e) => setTimer(+e.target.value)}
          className="timer-input"
        />
      </div>

      <button
        className="btn-primary"
        disabled={selected.length === 0}
        onClick={() => onStart({ selected, timer })}
        style={{ marginTop: 20 }}
      >
        {ui.start}
      </button>
    </>
  );
}
