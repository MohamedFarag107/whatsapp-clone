import { useSelector, useDispatch } from "react-redux";
import { darkModeActions } from "../../store/darkModeSlice";
export default function Toggle() {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(darkModeActions.toggleDarkMode());
  };
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            readOnly
          />
          <div
            onClick={toggle}
            className="w-11 h-6 bg-alt-light rounded-full peer  peer-focus:ring-dark  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-alt-dark"
          ></div>
        </label>
      </div>
    </div>
  );
}
