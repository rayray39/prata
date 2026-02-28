'use client'
import { useTheme } from "next-themes";
import { useState } from "react";


const fullstack_list:string = "js,python,java,postgres";
const frameworks_list:string = "ts,nextjs,express,django,tailwind";
const tools_list:string = "huggingface,ollama,langchain,vercel,docker,elasticsearch";

export function TechStack() {
    const { theme } = useTheme();

    return (
        <div>
            <div className="text-xl md:text-2xl">Kitchen Utensils</div>

            <div className="grid grid-cols-1 md:gap-y-8 sm:gap-y-4">
                <div className="flex flex-col items-center">
                    <div>Fullstack</div>
                    <p> 
                        <a href="https://skillicons.dev">
                            <img src={`https://skillicons.dev/icons?i=${fullstack_list}&theme=dark`} />
                        </a>
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center">Frameworks</div>
                    <p>
                        <a href="https://skillicons.dev">
                            <img src={`https://skillicons.dev/icons?i=${frameworks_list}&theme=dark`} />
                        </a>
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center">Tools</div>
                    <p>
                        <a href="https://go-skill-icons.vercel.app">
                            <img src={`https://go-skill-icons.vercel.app/api/icons?i=${tools_list}&theme=dark`} />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}