'use client'
import StackIcon from "tech-stack-icons";
import { TechSection } from "./tech_section";
import { useTheme } from "next-themes";
import { useState } from "react";

const data_eng_and_ai_list = [
    {name:"LangGraph"},
    {name:"Huggingface"},
    {name:"vLLM"},
    {name:"Ollama"},
    {name:"Elasticsearch"},
    {name:"OpenRouter"}
]

const fullstack_list = [
    {name:"Python", iconName:"python"},
    {name:"React (TypeScript)", iconName:"typescript"},
    {name:"NextJS", iconName:"nextjs"},
    {name:"ExpressJS", iconName:"expressjs"},
    // {name:"JavaScript"},
    // {name:"ExpressJS"},
    // {name:"PostgreSQL"},
]

const others_list = [
    {name:"Git"},
    {name:"Docker"},
    {name:"Linux"},
    {name:"Tailwind CSS"},
    {name:"Supabase"}
]

function originalTechStack() {
    return <ul className="grid grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* <TechSection header="Data Engineering/AI" listOfTechCards={data_eng_and_ai_list}/> */}

        <TechSection header="FullStack" listOfTechCards={fullstack_list}/>

        {/* <TechSection header="Others" listOfTechCards={others_list}/> */}
    </ul>
}

export function TechStack() {
    const { theme } = useTheme();

    return (
        <div>
            <div className="text-xl md:text-2xl">Kitchen Utensils</div>

            <div className="grid grid-cols-1 gap-y-8">
                <div className="flex flex-col items-center">
                    <div>Fullstack</div>
                    <p> 
                        <a href="https://skillicons.dev">
                            <img src="https://skillicons.dev/icons?i=js,python,java,postgres&theme=dark" />
                        </a>
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center">Frameworks</div>
                    <p>
                        <a href="https://skillicons.dev">
                            <img src="https://skillicons.dev/icons?i=ts,nextjs,express,django,tailwind&theme=dark" />
                        </a>
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center">Tools</div>
                    <p>
                        <a href="https://go-skill-icons.vercel.app">
                            <img src="https://go-skill-icons.vercel.app/api/icons?i=huggingface,ollama,langchain,vercel,docker,elasticsearch&theme=dark" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}