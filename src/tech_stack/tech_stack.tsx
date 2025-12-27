import { TechSection } from "./tech_section";

const data_eng_and_ai_list = [
    {name:"LangGraph"},
    {name:"Huggingface"},
    {name:"vLLM"},
    {name:"Ollama"},
    {name:"Elasticsearch"},
    {name:"OpenRouter"}
]

const fullstack_list = [
    {name:"Python"},
    {name:"React (TypeScript)"},
    {name:"NextJS"},
    {name:"JavaScript"},
    {name:"ExpressJS"},
    {name:"PostgreSQL"},
]

const others_list = [
    {name:"Git"},
    {name:"Docker"},
    {name:"Linux"},
    {name:"Tailwind CSS"},
    {name:"Supabase"}
]

export function TechStack() {
    return (
        <div>
            <div className="text-xl md:text-2xl">Kitchen Utensils</div>

            <ul className="grid grid grid-cols-1 md:grid-cols-3 gap-2">
                <TechSection header="Data Engineering/AI" listOfTechCards={data_eng_and_ai_list}/>

                <TechSection header="FullStack" listOfTechCards={fullstack_list}/>

                <TechSection header="Others" listOfTechCards={others_list}/>
            </ul>
        </div>
    )
}