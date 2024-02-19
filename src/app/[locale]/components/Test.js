"use client";

import { useState } from "react";

export default function Test(props) {
  return (
    <div style={{ position: "fixed" }}>
      <h1>{props.test}</h1>
      <h2>{props.description}</h2>
      <p>{props.text}</p>
    </div>
  );
}
