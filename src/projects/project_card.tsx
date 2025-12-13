'use client'
import { useTheme } from "next-themes";
import "../app/globals.css";

interface ProjectHeader {
    emoji:string,
    githubLink:string,
    projectLink:string
}

interface ProjectDetails {
    header:ProjectHeader,
    title:string,
    description:string,
    techStack:string
}

export function ProjectCard({
    header,
    title,
    description,
    techStack
}:ProjectDetails) {
    const { theme } = useTheme();

    return (
        <div className={theme === "light" ? "light-project-card" : "dark-project-card"}>
            <li className="list-none">
                <div className="flex justify-between items-center">
                    <div className="text-lg">{header.emoji}</div>
                    <div className="grid grid-cols-2 gap-1 items-center">
                        <div>
                            <a href={header.githubLink}>
                                <img className="w-5 h-5" src="github_new.png" alt="github"/>
                            </a>
                        </div>
                        <div>
                            <a href={header.projectLink}>
                                📌
                            </a>
                        </div>
                    </div>
                </div>
    
                <div className="text-lg font-extrabold">{title}</div>

                <div className="text-sm">{description}</div>

                <div className="text-sm">{techStack}</div>
            </li>
        </div>
    )
}