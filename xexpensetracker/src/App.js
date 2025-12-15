import "./App.css";
import { useMediaQuery } from "react-responsive";
import Heading from "./Components/Header";

function App() {
  const isDesktop = useMediaQuery({
    minWidth: 992,
  });

  const isMacOS = useMediaQuery({
    minWidth: 768,
    maxWidth: 991,
  });

  const isTab_Mobile = useMediaQuery({ maxWidth: 767 });

  // const isDesktop = useMediaQuery({minWidth: 992});

  return ( 
    <div className="App">
      {isTab_Mobile &&
      <Heading title={"Expense Tracker"} />
       }
       {isDesktop &&
      <Heading title={"Expense Tracker"} />
       }
       {isMacOS &&
      <Heading title={"Expense Tracker"} />
       }
        </div>

  );
}

export default App;
