import Image from "next/image";

type Props = {
    label: string;
    icon?: any;
    onclick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({label, icon, onclick}: Props) => {
    return (
        <button
            onClick={onclick}
            className="w-50 h-12.5 flex bg-[#1550ff] rounded-[10px] cursor-pointer opacity-100 transition-all duration-300 hover:opacity-80"
        >
            {icon &&
                <div className="h-full flex justify-center items-center border-r border-white/20 px-3.75">
                    <Image src={icon} alt='Icone' className="h-5" />
                </div>
            }
            <div className="h-full text-white flex flex-1 justify-center items-center px-5">
                {label}
            </div>
        </button>
    );
}