import React, { useState } from 'react';
import './style.scss';

const SettingOptions = ({ generatePassword }) => {
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const changeUppercase = e => {
    setUppercase(e.target.checked);
  };

  const changeLowercase = e => {
    setLowercase(e.target.checked);
  };

  const changeNumbers = e => {
    setNumbers(e.target.checked);
  };

  const changeSymbols = e => {
    setSymbols(e.target.checked);
  };

  const handleSetPassword = () => {
    generatePassword({ uppercase, lowercase, numbers, symbols });
  };

  return(
    <div className="btn-warp">
      <div className="setting-options">
        <div className="title">SEETTINGS</div>
        <div className="settings">
          <div className="setting">
            <input type="checkbox" id="uppercase" checked={uppercase} onChange={(e) => changeUppercase(e)} />
            <label for="uppercase"> Include Uppercase </label>
          </div>
          <div className="setting">
            <input type="checkbox" id="lowercase" checked={lowercase} onClick={(e) => changeLowercase(e)} />
            <label for="lowercase"> Include Lowercase </label>
          </div>
          <div className="setting">
            <input type="checkbox" id="number" checked={numbers} onClick={(e) => changeNumbers(e)} />
            <label for="number"> Include Numbers </label>
          </div>
          <div className="setting">
            <input type="checkbox" id="symbol" checked={symbols} onClick={(e) => changeSymbols(e)} />
            <label for="symbol"> Include Symbols </label>
          </div>
        </div>
      </div>

      <div className="generate" onClick={handleSetPassword}> Generate Password </div>
    </div>
  );
};

export default SettingOptions;