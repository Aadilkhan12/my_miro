import { NewButton } from "./new-button"
import { List } from "./list";
export const Sidebar=()=>{
    return(
        <aside className=" fixed h-full left-0 p-3 bg-blue-950 w-[60px] z-[1] flex flex-col gap-y-4 test-white">
            <List/>
            <NewButton/>
        </aside>
    )
}