"use client";

import Link from "next/link";
import { ChangeEventHandler, useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <label>Enter a username</label>
      <input type="text" onChange={handleChange} />
      <Link href={`/${username}`}>Submit</Link>
    </div>
  );
}
