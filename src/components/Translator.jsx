import { useState } from "react";
import {
  convertToMacaco,
  traduzirFrase,
} from "/src/hooks/translator.js?t=1710717546675";
const Translator = () => {
  const [translation, setTranslation] = useState("");

  const handleChange = (e) => {
    var text = e.target.value;
    var checkText = text.trim().split(/\s+/);
    if (checkText.length === 1) {
      const result = convertToMacaco(e.target.value);
      setTranslation(result);
    } else {
      const result = traduzirFrase(e.target.value);
      setTranslation(result);
    }
  };

  return (
    <div>
      <div>
        <h1>Tradutor de camaco</h1>
        <h3>Digite o Texto</h3>
      </div>

      <div>
        <input onChange={handleChange} type="text" />
        <h3>{translation}</h3>
      </div>
    </div>
  );
};

export default Translator;
