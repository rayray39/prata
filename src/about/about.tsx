
export function About() {
    // about section

    return (
        <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-semibold mb-4">
                About the chef
            </div>

            <div className="about-description rounded-lg border border-border bg-card p-6 shadow-sm">
                <p className="mb-6">
                    I'm currently a Software Engineer at DSTA, where I help build information analysis systems using Natural Language Processing and AI tools.
                </p>
                <p>
                    I enjoy working on fullstack web development, powering applications using AI solutions, and creating cute little web applications just for fun!
                </p>
            </div>
        </div>
    )
}
