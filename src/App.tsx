import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {

  return (
    <>
    <h1>Home Page</h1>
    </>
  )
}


export default App;
