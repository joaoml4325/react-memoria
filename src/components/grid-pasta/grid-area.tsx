import { GridItemType } from "@/types/gridItemType";
import { GridItem } from "./grid-item";

type Props = {
    gridItems: GridItemType[];
    setGridItems: (item: GridItemType[]) => void;
    play: boolean;
    count: number;
    setCount: (count: number) => void;
}

export const GridArea = ({ gridItems, setGridItems, play, count, setCount }: Props) => {
    const handleItemClick = (index: number) => {
        if(play && index !== null && count < 2) {
            let tempGrid = [...gridItems];

            if(tempGrid[index].permanentShown === false && tempGrid[index].shown === false) {
                tempGrid[index].shown = true;
                setCount(count + 1);
            }
            
            setGridItems(tempGrid);
        }
    }
    
    return (
        <div className="flex flex-1 justify-center mx-5 lg:justify-end lg:mx-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 w-107.5">
            {gridItems.map((item, index) => (
                <GridItem
                    key={index}
                    item={item}
                    onClick={() => handleItemClick(index)}
                />
            ))}
            </div>
        </div>
    );
}