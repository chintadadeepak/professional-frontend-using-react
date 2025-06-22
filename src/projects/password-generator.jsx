import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState();
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);

  // creating a reference to the input field.
  const passwordRef = useRef(null);

  const generateRandomPassword = useCallback(() => {
    let newPassword = "";
    let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) allCharacters += "0123456789";
    if (charAllowed) allCharacters += "!@#$%^&*()_+-={}[]";
    for (let i = 0; i < length; i++)
      newPassword +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    setPassword(newPassword);
  }, [numAllowed, charAllowed, length, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    // as we're working on core react, which underhood compiled into JS,
    //  it was the reason by which we'd access to window object.
    // however in NextJS, where these components compiled on the server called as SSR -> serverside rendering,
    // where we don't have access to window object

    // before the copying the value, we want to provide a feel to user that, content got selected.
    // selecting entire content on the input field
    passwordRef.current?.select();
    // selecting specific range of characters
    // passwordRef.current?.setSelectionRange(0, 4);

    // one way to copy the content and add to clipboard
    // window.navigator.clipboard.writeText(password);
  }, [password]);

  //
  useEffect(() => {
    generateRandomPassword();
  }, [length, numAllowed, charAllowed]);

  return (
    <div className="flex flex-col text-black w-6xl h-8xl rounded-4xl">
      <h3 className="m-auto text-2xl">Password Generator</h3>
      <div className="m-auto my-2 flex flex-row">
        <input
          ref={passwordRef}
          placeholder="Password"
          readOnly
          value={password}
          className="bg-white w-65 h-2xs border-2 rounded-1xl"
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="w-15 h-2xs bg-blue-700 px-3 py-1.5 rounded-2xl m-3 cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="m-auto my-2 flex flex-row">
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(event) => setLength(event.target.value)}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          onChange={() => {
            setNumAllowed((prevValue) => !prevValue);
          }}
        />
        <label>Numbers </label>
        <input
          type="checkbox"
          onChange={() => {
            setCharAllowed((prevValue) => !prevValue);
          }}
        />
        <label>Characters </label>
      </div>
    </div>
  );
}

export default PasswordGenerator;
