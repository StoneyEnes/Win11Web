import './App.css'
import Taskbar from "./Components/Taskbar/index.jsx";
import LightWallpaper from "../src/assets/wallpaper.jpg";
import Screen from "~/Components/Screen/index.jsx";

function App() {

    return (
        <div className="h-full overflow-hidden max-h-screen">
            {/*TODO: AYARLARDAN GELECEK DINAMIK VERIYE GORE DEGISTIR.*/}
            {/*<div className="pointer-events-none  max-h-screen">*/}
            {/*    <img src={LightWallpaper} className="" alt=""/>*/}
            {/*</div>*/}

            <Screen/>


            <Taskbar/>
        </div>
    )
}

export default App
