import clsx from "clsx";
import { useSelector } from "react-redux";
import Whatsapp from "./components/Whatsapp";

const App = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <div className={clsx({ dark: darkMode })}>
      <div className="light-body dark:dark-body w-screen h-screen p-24">
        <Whatsapp />
      </div>
    </div>
  );
};

export default App;
