import { TechCard } from "./tech_card"

interface Card {
    name:string
}

export function TechSection({
    header, listOfTechCards
}:{header:string, listOfTechCards:Card[]}) {
    return (
        <div className="techstack-section">
            <li className="list-none">
                <div className="flex flex-col">
                    <div>{header}</div>

                    {
                        listOfTechCards.map((item, index) => (
                            <TechCard key={index} name={item.name}/>
                        ))
                    }
                </div>
            </li>
        </div>
    )
}