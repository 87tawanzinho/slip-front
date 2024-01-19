"use client";
import React, { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      console.log(email, password);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col gap-4 rounded">
        <input
          type="text"
          placeholder="E-mail"
          className="p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp} className="bg-green-400 rounded p-2">
          Criar uma nova conta
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
