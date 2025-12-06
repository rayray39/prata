import { ModeToggle } from "./modeToggle";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="grid grid-cols-3 items-center">
                <div></div>
                <div className="text-3xl text-center">Prata Developer</div>
                <div className="ml-2">
                    <ModeToggle />
                </div>
            </div>
            <div className="flex items-center">
                <div>By Rayner</div>
                <div>
                    <a href="https://www.linkedin.com/in/rayray39/">
                        <img className="w-5 h-5 ml-2" src="linkedin_blue.png" alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
