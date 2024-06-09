import WindowsLogo from "~/assets/TaskbarIcons/windows.svg";
import TaskViewLogo from "~/assets/TaskbarIcons/taskview.png";
import Explorer from "~/assets/TaskbarIcons/explorer.png";
import MicrosoftStore from "~/assets/TaskbarIcons/microsoftstore.svg";
import Edge from "~/assets/TaskbarIcons/edge.svg";
import Teams from "~/assets/TaskbarIcons/teams.svg";
import { IoIosArrowDown } from "react-icons/io";
import TaskButton from "~/Components/Taskbar/Components/TaskButton.jsx";
import SearchBar from "~/Components/Taskbar/Components/SearchBar.jsx";
// Icons
import { Reorder } from "framer-motion";
import { useState } from "react";




export default function Taskbar() {
    const [taskbarList, setTaskbarList] = useState([
        {
            id: 1,
            name: "Explorer",
            icon: Explorer,
        },
        {
            id: 2,
            name: "Microsoft Edge",
            icon: Edge,
        },
        {
            id: 3,
            name: "Microsoft Store",
            icon: MicrosoftStore,
        },
        {
            id: 4,
            name: "Microsoft Teams",
            icon: Teams,
        },
    ]);

    return (
        <div className="h-11 w-full px-2 absolute bottom-0 bg-gradient-to-r from-[#e3eef9] via-[#dfe5f7] to-[#e2eef9] flex justify-between items-center">
            <div className="flex items-center gap-x-2 hover:shadow-inner hover:shadow-white cursor-default px-2 py-1 hover:bg-white/40 rounded">
                <div className="bg-gradient-to-br from-[#fce660] to-[#ff9700] rounded-full w-5 h-5" />
                <div className="flex flex-col">
                    <h4 className="text-[11px]">19 °C</h4>
                    <p className="text-gray-500 text-[11px] -mt-1">Gunesli</p>
                </div>
            </div>

            <div className="gap-x-2 rounded flex items-center transition-all">
                <TaskButton hoverOption={true} icon={WindowsLogo} size={6} />
                <SearchBar />

                <Reorder.Group
                    axis="x"
                    values={taskbarList}
                    onReorder={setTaskbarList}
                    className={`flex gap-x-2 w-[${7 * taskbarList.length}px]`}
                >
                    {taskbarList.map((item) => (
                        <Reorder.Item key={item.id} value={item} className="flex items-center hover:shadow-inner hover:bg-white/40 hover:shadow-white rounded">
                            <TaskButton icon={item.icon} size={6} />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>

            <div>
                <IoIosArrowDown />
            </div>
        </div>
    );
}
