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
        <div className="project-card">
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
    
                <div className="text-lg font-extrabold mb-2">{title}</div>

                <div className="flex flex-col justify-between">
                    <div className="text-sm mb-5">{description}</div>

                    <div className="text-xs">{techStack}</div>
                </div>
            </li>
        </div>
    )
}