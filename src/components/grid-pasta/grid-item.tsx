import Image from "next/image";

import b7Svg from "@/svgs/b7.svg"

import { items } from "@/data/items";
import { GridItemType } from "@/types/gridItemType";

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`h-25 rounded-[20px] flex justify-center items-center cursor-pointer opacity-100 transition-all duration-200 hover:opacity-80 hover:scale-102
                ${item.permanentShown || item.shown ? 'bg-[#1550ff]' : 'bg-[#e2e3e3]'}
            `}
        > 
            {!item.permanentShown && !item.shown &&
                <Image src={b7Svg} alt="B7web icone" className="w-10 h-10 opacity-10" />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <Image src={items[item.item].icon} alt={items[item.item].name} className="w-10 h-10" />
            }
        </div>
    );
}