import {IoIosSearch} from "react-icons/io";

export default function SearchBar() {
    return (
        <div onClick={() => console.log("tikladi")} className="relative items-center justify-center">
            <IoIosSearch className="absolute my-auto top-1 left-1 w-5 h-5"/>
            <input placeholder="Ara" className="h-7 rounded-full pb-0.5 pl-8 placeholder:text-gray-500 hover:bg-white/60 focus:bg-white/60"/>
        </div>
    )
}