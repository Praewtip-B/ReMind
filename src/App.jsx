import { useState } from "react";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Rounds from "./pages/Rounds";
import Timesout from "./pages/Timesout";
import Result from "./pages/Results";

import enUI from "./data/en/ui";
import thUI from "./data/th/ui";

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  const ui = lang === "en" ? enUI : thUI;

  const [topics, setTopics] = useState([]);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState(30);

  function startGame({ selected, timer }) {
    setTopics(selected);
    setTimer(timer);
    setResults([]);
    setCurrent(0);
    setPage("round");
  }

  function endRound(score) {
    setResults((r) => [...r, { topic: topics[current], score }]);
    setPage("timesout");
  }

  function next() {
    if (current + 1 < topics.length) {
      setCurrent((c) => c + 1);
      setPage("round");
    } else {
      setPage("result");
    }
  }

  return (
    <div className="container">
      <div className="card">
        {page === "home" && (
          <Home
            onStart={() => setPage("settings")}
            lang={lang}
            setLang={setLang}
            ui={ui}
          />
        )}

        {page === "settings" && (
          <Settings ui={ui} lang={lang} onStart={startGame} />
        )}

        {page === "round" && (
          <Rounds
            topic={topics[current]}
            timeLimit={timer}
            onTimeout={endRound}
          />
        )}

        {page === "timesout" && (
          <Timesout
            ui={ui}
            last={results[results.length - 1]}
            isLast={current === topics.length - 1}
            onNext={next}
            onFinish={() => setPage("result")}
          />
        )}

        {page === "result" && (
          <Result ui={ui} results={results} onHome={() => setPage("home")} />
        )}
      </div>
    </div>
  );
}
