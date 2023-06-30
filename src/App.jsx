import { useEffect } from "react";
import { useState } from "react";
import { Game } from "./Components/Game";
import TextInput from "./Components/TextInput";

function App() {
  
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [games, SetGames] = useState(() => {
    if (!localStorage.getItem("Biblioteca de jogos")) {
      return [];
    }
    return JSON.parse(localStorage.getItem("Biblioteca de jogos"));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, cover);
    const id = Math.floor(Math.random() * 10000000);
    {
      title !== "" &&
        cover !== "" &&
        SetGames((prv) => {
          const dadosDoJogo = [...prv, { title, cover, id }];
          localStorage.setItem(
            "Biblioteca de jogos",
            JSON.stringify(dadosDoJogo)
          );
          return dadosDoJogo;
        });
    }
    setTitle("");
    setCover("");
  };

  const handleRemove = (id) => {
    SetGames((prevGames) => {
      const dadosDoJogo = prevGames.filter((ele, i) => ele.id !== id);
      localStorage.setItem("Biblioteca de jogos", JSON.stringify(dadosDoJogo));
      return dadosDoJogo;
    });
  };

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id={"title"}
        />
        <TextInput
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          id={"cover"}
        />
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((ele, index) => (
          <Game
            key={ele.id}
            cover={ele.cover}
            handleRemove={() => handleRemove(ele.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
