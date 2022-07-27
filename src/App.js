import Button from "./components/Button";
import Modal from "./components/Modal";
import { SideNavbar } from "./components/SideNavbar";
import SingleDatePicker from "./components/SingleDatePicker";
import Toggle from "./components/ToggleButton";
function App() {
  return (
    <div className=" m-10 grid grid-flow-row gap-3">
      {" "}
      {/* <SingleDatePicker />
      <Button className=" bg-red-400 py-5" type="button">
        Click Me
      </Button>
      <Toggle />
      <div className="">
        <Modal />
      </div> */}
      <SideNavbar />
    </div>
  );
}

export default App;
