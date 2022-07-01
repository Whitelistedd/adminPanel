import React from "react"

export interface NavListProps {
    listName: string,
    NavList:  NavLocationsProps[]
}

export interface NavLocationsProps {
    icon: JSX.Element,
    title: string,
}

export type LeftNavListType = Array<{
    listName: string,
    NavLocations: NavLocationsProps[]
}>

export interface SmallWidgetProps {
    title: string
    PercentageNum: string,
    TotalNum: string,
    Link: string,
    icon: JSX.Element,
    isCurrency: boolean,
}

export interface StatsProps {
    List: Array<string>,
    numbers: number,
}

export interface ProgressProps {
    valueStart: number,
    valueEnd: number,
    children?: any,
}

export interface LayoutProps {
    children: React.ReactNode
}

export interface DataTableProps {
    rows: any[]
    columns: any[]
}