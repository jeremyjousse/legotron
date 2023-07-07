import { useState } from "react";

export function Home() {
  const handleClick = async () => {
    const modelList = await window.electronAPI.listModels();
    console.log(modelList);
    setModelList(modelList);
  };

  const [modelList, setModelList] = useState([]);

  const listItems = modelList.map((model) => (
    <li key={model.toString()}>{model}</li>
  ));

  return (
    <>
      <h1>Bonjour, </h1>
      modelList: {listItems}
      <br />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
