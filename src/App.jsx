import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor != target.value));
    }
  }

  function handleChecket(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecket('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecket('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecket('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecket('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecket('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
