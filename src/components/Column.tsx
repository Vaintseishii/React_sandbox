import { ColumnContainer, ColumnTitle } from "../styles";
import { Card } from "./Card";
import React from "react";
import { AddNewItem } from "./AddNewItem";
import { useState } from "react";

type ColumnProps = {
    text?: string;
    tasks: string[];
    children?: React.ReactNode;
}


export const Column: React.FC<ColumnProps> = ({ text, tasks }: ColumnProps) => {
    const [columnTasks, setColumnTasks] = useState<string[]>(tasks);
    
    return (
        <ColumnContainer>
            <ColumnTitle>{text ? text : "Unnamed Column"}</ColumnTitle>
            { columnTasks.map((task) => (
                <Card text={task} />
            )) }
            <AddNewItem toggleButtonText="+ Add another card" 
            onAdd={(text) => setColumnTasks(
                (prevTasks) => [...prevTasks, text])} 
                dark/>
        </ColumnContainer>
    )
}