import React from "react"
import StatCard from "../components/StatCard"
import "./StatCardPage.css"
import useWindowDimensions from "../util/windowDimensions" 

const StatCardPage = () => {
    const { height } = useWindowDimensions()

    return (
        <div className={`statCardPage ${  height < 800 ? "padding" : ""}`}>
            <StatCard />
        </div>
    )
}

export default StatCardPage