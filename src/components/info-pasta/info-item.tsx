type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="my-5">
            <div className="text-[15px] text-[#6a7d8b]">{label}</div>
            <div className="text-[37px] text-[#101c40] font-bold">{value}</div>
        </div>
    );
}