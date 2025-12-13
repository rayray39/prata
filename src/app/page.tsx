import { About } from "@/about/about";
import { ModeToggle } from "./modeToggle";
import { Contact } from "@/contact/contact";
import { Projects } from "@/projects/projects";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center min-h-screen overflow-y-auto">
            <div className="flex justify-center items-center mt-4">
                <div className="text-2xl md:text-4xl text-center">Prata Developer</div>
                <div className="ml-1 md:ml-2">
                    <ModeToggle />
                </div>
            </div>
            <div className="flex justify-center items-center mb-2">
                <div>By Rayner</div>
                <div>
                    <a href="https://www.linkedin.com/in/rayray39/">
                        <img className="w-5 h-5 ml-2" src="linkedin_blue.png" alt="linkedin" />
                    </a>
                </div>
            </div>

            <div className="w-xl md:w-3xl lg:w-4xl mb-6">
                <About />
            </div>

            <div className="w-xl md:w-3xl lg:w-4xl mb-6">
                <Projects />
            </div>

            <div className="w-xl md:w-3xl lg:w-4xl">
                <Contact />
            </div>
        </div>
    </div>
  );
}
