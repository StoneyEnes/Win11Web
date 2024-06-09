import {useState} from "react";
import DraggableGrid from "~/Components/Screen/Components/DraggableGrid.jsx";
import ThisPc from "~/assets/thispc.png";
import RecycleBin from "~/assets/recyclebin.png";


export default function Screen() {

    const [desktopItems, setDesktopItems] = useState([
        {
            id: 1,
            image: ThisPc,
            imageVertical: false,
            content: 'This PC'
        },
        {
            id: 2,
            image: RecycleBin,
            imageVertical: true,
            content: 'Recycle Bin'
        },
    ]);

    return (
        <div className="h-screen w-screen">
            <DraggableGrid items={desktopItems} setItems={setDesktopItems}/>
        </div>
    )
}