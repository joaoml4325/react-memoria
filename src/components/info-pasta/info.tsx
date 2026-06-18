'use client'

import { LogoLink } from "./logo-link";
import { InfoArea } from "./info-area";
import { Button } from "./button";

import RestartImage from '@/svgs/restart.svg'

type Props = {
    func: () => void;
    time: number;
    moveValue: number;
}

export const Info = ({ func, time, moveValue }: Props) => {
    return (
        <div className="flex flex-col w-auto mb-12.5 items-center lg:mb-0 lg:items-start">
            <LogoLink />

            <InfoArea time={time} moveValue={moveValue} />

            <Button icon={RestartImage} label="Reiniciar" onclick={func} />
        </div>
    );
}