import { ColumnContainer, ColumnTitle } from "../styles";
import { Card } from "./Card";
import React from "react";
import { AddNewItem } from "./AddNewItem";
import { useState } from "react";
import { useAppState } from "../state/AppStateContext";

type ColumnProps = {
    text?: string;
    id: string;
}


export const Column: React.FC<ColumnProps> = ({ text, id }: ColumnProps) => {
    const { getTasksByListId } = useAppState();

    const tasks = getTasksByListId(id);
    
    return (
        <ColumnContainer>
            <ColumnTitle>{text ? text : "Unnamed Column"}</ColumnTitle>
            { tasks.map((task) => (
                <Card text={task.text} id={task.id} />
            )) }
            <AddNewItem toggleButtonText="+ Add more responsibilities" 
            onAdd={console.log}
                dark/>
        </ColumnContainer>
    )
}