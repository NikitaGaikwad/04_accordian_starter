import { useState } from "react";
import Questions from "./Questions";
import questions from './data'



const App = () => {
  let [question, setQuestion] = useState();
  return (
    <main>
      <Questions questions={questions} />
    </main>

  )
};
export default App;
