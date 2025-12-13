
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
    return (
        <div className="border rounded-lg p-4 mt-4">
            <li className="list-none">
                <div className="flex justify-between items-center">
                    <div className="text-lg">{header.emoji}</div>
                    <div>
                        <div>
                            <a href={header.githubLink}>
                                <img className="w-5 h-5" src="github_new.png" alt="github"/>
                            </a>
                        </div>
                        <div>{header.projectLink}</div>
                    </div>
                </div>
    
                <div className="text-lg font-extrabold">{title}</div>

                <div className="text-sm">{description}</div>

                <div className="text-sm">{techStack}</div>
            </li>
        </div>
    )
}