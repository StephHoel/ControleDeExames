import { ReactNode } from "react";

export interface ChildrenProps {
   children?: ReactNode;
}

export interface HeaderProps extends ChildrenProps {
   col1: string;
   link1: string;
}

export interface PageProps extends ChildrenProps {
   title: String;
   col1?: string;
   link1?: string;
}
