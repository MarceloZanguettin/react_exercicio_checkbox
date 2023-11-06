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

  return;
};

export default App;
