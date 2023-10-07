import Link from "next/link";

export default function NavBarItem({name, url}){
    return <Link href={url} className="text-lg font-bold text-gray-400 cursor-pointer hover:text-white">{name}</Link>;
}
