import react from "react";
import { Balance } from "../components/Balance";
import DoughnutChart from "../components/DoughnutChart";
import Navbar from "../components/Navbar";

export default function Chart() {
    return (
        <div className="min-h-screen">
            <header>
                <Navbar/>
            </header>
            
            <main className="flex flex-col w-full flex-1 px-1 text-center">
                <Balance/>
                <div className="border shadow-lg p-4 flex justify-between my-6 w-full">
                    <DoughnutChart title="Income"/>
                    <DoughnutChart title="Expense"/>
                </div>
                
            </main>   
        </div>
    )
}