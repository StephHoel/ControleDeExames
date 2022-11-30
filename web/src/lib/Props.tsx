import { ReactNode } from "react";

export interface ChildrenProps {
   children?: ReactNode
}

export interface MainProps extends ChildrenProps{
   title: String
}

export interface HeaderProps extends ChildrenProps{
   col1: string;
   link1: string;
}