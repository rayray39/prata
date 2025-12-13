import { ProjectCard } from "./project_card";

export function Projects() {
    return (
        <div className="flex flex-col">
            <div className="text-2xl">Menu</div>

            <ul className="grid grid-cols-3 gap-2">
                <ProjectCard 
                    header={{
                        emoji: "🍨",
                        githubLink: "https://github.com/rayray39/chendol",
                        projectLink: ""
                    }}
                    title="Chendol AI"
                    description="some placeholder text"
                    techStack="python"
                />

                <ProjectCard 
                    header={{
                        emoji: "🍜",
                        githubLink: "",
                        projectLink: ""
                    }}
                    title="HokkienMee"
                    description="some placeholder text"
                    techStack="java"
                />

                <ProjectCard 
                    header={{
                        emoji: "🥘",
                        githubLink: "",
                        projectLink: ""
                    }}
                    title="CharKwayTeow"
                    description="some placeholder text"
                    techStack="javascript"
                />
            </ul>
        </div>
    )
}