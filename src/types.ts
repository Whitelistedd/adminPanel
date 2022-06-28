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
    TotalNum: number,
    Link: string,
    icon: JSX.Element,
}