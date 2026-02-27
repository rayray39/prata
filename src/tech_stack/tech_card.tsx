import StackIcon from "tech-stack-icons";

export function TechCard({name, iconName}:{name:string, iconName:string}) {
    return (
        <div className="techcard flex flex-row justify-between items-center">
            <div className="text-xs">{name}</div>

            <div style={{ width: 30, height: 30 }}>
                <StackIcon name={iconName} variant="dark"/>
            </div>
        </div>
    )
}