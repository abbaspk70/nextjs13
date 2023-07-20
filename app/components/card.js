import Image from "next/image";
import Link from "next/link";

export default function Card({ imgUrl, title, contact, gotoUrl }) {
    return (
        <div className="w-48 bg-indigo-200 m-3 rounded-md text-center">
            <Link href={`${gotoUrl}`}>
                <Image className="mx-auto rounded-full m-6 object-cover" src={imgUrl} width={100} height={100} alt="user photo" />
            </Link>
            <div className="m-3">
                <h3>{title}</h3>
                <div className="contact">
                    <a href={`mailto:${contact}`}>Contact</a>
                </div>
            </div>
        </div >

    );
}