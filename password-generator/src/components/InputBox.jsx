import React, { useCallback, useEffect, useRef, useState } from "react";

function InputBox() {
  const [length, setLength] = useState(8);
  const [allowedNumber, setAllowableNumber] = useState(false);
  const [allowedChar, setAllowableChar] = useState(false);
  const [password, setPassword] = useState("");

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";
    if (allowedNumber) str += "01234567890";
    if (allowedChar) str += "~!@#$%^*<>?:'";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedChar, allowedNumber, setPassword]);

  useEffect(() => {
    GeneratePassword();
    console.log(password);
  }, [length, allowedChar, allowedNumber, GeneratePassword]);

  const passwordRef = useRef();

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="flex gap-4 rounded-md shadow-md shadow-purple-900 border-purple-600 border flex-col text-white px-4 py-8 items-center justify-center bg-[#1D267D] w-[40%] ">
      <div className="w-[80%] group transition-colors  flex flex-row bg-[#636aa7] px-3 rounded-md hover:bg-[#373d77]">
        <input
          type="text"
          value={password}
          className="outline-none bg-transparent h-full py-2  w-full"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipBoard}
          className="cursor-pointer active:text-red-400"
        >
          copy
        </button>
      </div>
      <div className="flex  items-center justify-center w-full gap-4 flex-wrap select-none">
        <div className="flex  items-center justify-center  flex-row gap-3">
          <input
            type="range"
            name="length"
            id="length"
            value={length}
            max={100}
            min={6}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex  items-center justify-center  flex-row gap-3">
          <input
            type="checkbox"
            name=""
            id="Number"
            value={allowedNumber}
            onChange={() => setAllowableNumber((prev) => !prev)}
          />
          <label htmlFor="Number">Number</label>
        </div>
        <div className="flex  items-center justify-center flex-row gap-3">
          <input
            type="checkbox"
            name=""
            id="Characters"
            value={allowedChar}
            onChange={() => setAllowableChar((prev) => !prev)}
          />
          <label htmlFor="Characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
