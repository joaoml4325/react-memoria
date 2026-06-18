import Image from "next/image";
import logoImage from "@/assets/devmemory_logo.png";

export const LogoLink = () => {
    return (
        <a href="" className="block">
            <Image
                src={logoImage}
                alt="Logo"
                className="w-50"
            />
        </a>
    );
}