import React, { useState } from 'react';
import SettingOptions from './components/SettingOptions';
import './App.scss';

const CreatePassword = () => {
  const [passwordText, setPassword] = useState('');
  const [passwordLen, setPasswordLen] = useState('16');

  const clickCopy = () => {
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = passwordText;
    textArea.select();
    document.execCommand("copy");
  };

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    'uppercase': getRandomUpper,
    'lowercase': getRandomLower,
    'numbers': getRandomNumber,
    'symbols': getRandomSymbol,
  };

  const handleChangeLength = e => {
    setPasswordLen(e.target.value)
  }

  const setInputStyle = () => {
    const percentage = (100 * (passwordLen - 4)) / (32 - 4);
    return { background: `linear-gradient(90deg, rgb(11, 30, 223) ${percentage}%, rgba(255, 255, 255, 0.216) ${percentage + 0.1}%)` }
  }

  const handleGenerate = ({ uppercase, lowercase, numbers, symbols }) => {
    let generatedPassword = '';
    const typesCount = uppercase + lowercase + numbers + symbols; // 判断所有的action是否都是true. true+true+true+true = 1+1+1+1
    const typesArr = [{ uppercase }, { lowercase }, { numbers }, { symbols }].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
      setPassword('');
      return;
    }

    for (let i = 0; i < passwordLen; i++) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    setPassword(generatedPassword.slice(0, passwordLen));
  }

  return (
    <div className="page">
      <div className="container">
        <div className="header"> Generate Password </div>
        <div className="password-container">
          { passwordText ?
            <div onClick={clickCopy}>
              { passwordText }
            </div> :
            <div> CLICK GENERATE </div>
          }
        </div>
        <div className="password-length">
          <div className="title">LEHGTH: <span className="text"> {passwordLen} </span></div>
          <div className="password-text">
            <span>4</span>
            <input
              style={setInputStyle()}
              className="slider"
              type="range"
              min='4'
              max='32'
              value={passwordLen}
              onChange={(e) => handleChangeLength(e)}
            />
            <span>32</span>
          </div>
        </div>
        <SettingOptions generatePassword={handleGenerate} />
      </div>
    </div>
  );
}

export default CreatePassword;
