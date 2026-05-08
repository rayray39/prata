
export function Contact() {
    // contact section

    return (
        <div className="flex flex-col mb-4">
            <div className="text-xl md:text-2xl font-semibold mb-4">Make a reservation</div>

            <div className="contact-section flex flex-col justify-center items-center rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center mt-4">
                    <img className="w-5 h-5 mr-2" src="linkedin_blue.png" alt="linkedin" />
                    <a href="https://www.linkedin.com/in/rayray39/">rayray39</a>
                </div>
                <div className="flex items-center mt-4">
                    <img className="w-5 h-5 mr-2" src="github_new.png" alt="github" />
                    <a href="https://www.github.com/rayray39">rayray39</a>
                </div>
            </div>
        </div>
    )
}