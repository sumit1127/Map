import Jokes from "./JokesData";

import Joke from "./Joke";

const JokesArray = () => {
  const ans = Jokes.map((x, i) => (
    <Joke key={i} setup={x.setup} punchline={x.punchline} />
  ));
  return <div>{ans}</div>;
};

export default JokesArray;
