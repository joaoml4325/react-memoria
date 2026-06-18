import { formatTimeElepsed } from "@/helpers/formatTimeElepsed";
import { InfoItem } from "./info-item";

type Props = {
    time: number;
    moveValue: number;
}

export const InfoArea = ({ time, moveValue }: Props) => {
    return (
        <div className="w-full my-2.5 flex justify-around text-center lg:flex-col lg:justify-start lg:text-left">
            <InfoItem label="Tempo" value={formatTimeElepsed(time)} />
            <InfoItem label="Movimentos" value={moveValue.toString()} />
        </div>
    );
}