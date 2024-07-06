import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
    return <>
        <footer className="py-2 px-5 flex justify-between items-center">
            <div>
                <ul className="flex gap-3 text-sm font-semibold text-[var(--secondary-color)] opacity-40 cursor-pointer">
                    <li>Docs</li>
                    <li>Blog</li>
                    <li>Discord</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div>
                <button className="bg-[var(--primary-color)] py-2  px-3 rounded-sm text-white font-medium text-sm flex gap-1 items-center">Mirrors <IoIosArrowUp /></button>
            </div>
        </footer>
    </>
}