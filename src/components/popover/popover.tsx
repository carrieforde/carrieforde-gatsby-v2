import * as React from 'react';
import { PopoverProps } from "./types"
import { Box } from "@/components/box/box"
import clsx from 'clsx';
import * as s from "@/components/popover/popover.module.css";

export const Popover: React.FC<PopoverProps> = ({children, className, isOpen = false}) => {
    const classes = clsx("popover", s.popover, { [s.open]: true }, className);

    return <Box className={classes}>{children}</Box>
}