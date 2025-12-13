import { ProjectCard } from "./project_card";

export function Projects() {
    return (
        <div className="flex flex-col">
            <div className="text-xl md:text-2xl">Menu</div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <ProjectCard 
                    header={{
                        emoji: "🍨",
                        githubLink: "https://github.com/rayray39/chendol",
                        projectLink: ""
                    }}
                    title="Chendol AI"
                    description="coming soon..."
                    techStack="Next.js (TypeScript)"
                />

                <ProjectCard 
                    header={{
                        emoji: "🍜",
                        githubLink: "",
                        projectLink: ""
                    }}
                    title="HokkienMee"
                    description="AI-powered LinkedIn post generator, using Mistral AI's mistral-7B-instruct."
                    techStack="Next.js (TypeScript), OpenRouter"
                />

                <ProjectCard 
                    header={{
                        emoji: "🥘",
                        githubLink: "",
                        projectLink: ""
                    }}
                    title="CharKwayTeow"
                    description="AI-powered git commit message generator - code smarter, commit better, using Deepseek-R1."
                    techStack="React.js (TypeScript), Express.js, OpenRouter, Supabase"
                />
            </ul>
        </div>
    )
}