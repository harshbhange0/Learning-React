import React, { useState } from "react";
import { Input } from "../../../components";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl font-semibold">Log In </h1>
     
      <form action="" className="flex w-[30rem] flex-col gap-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Email"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mx-auto my-4 rounded-md border border-gray-500 px-3 py-2 transition active:border-white"
          type="submit"
        >
          Log In
        </button>
      </form>
    </section>
  );
}

export default LogIn;
