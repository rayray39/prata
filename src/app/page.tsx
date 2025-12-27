import { About } from "@/about/about";
import { ModeToggle } from "./modeToggle";
import { Contact } from "@/contact/contact";
import { Projects } from "@/projects/projects";
import { TechStack } from "@/tech_stack/tech_stack";

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

            <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-4xl px-2 mb-6">
                <About />
            </div>

            <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-4xl px-2 mb-6">
                <Projects />
            </div>

            <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-4xl px-2 mb-6">
                <TechStack />
            </div>

            <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-4xl px-2">
                <Contact />
            </div>
        </div>
    </div>
  );
}
