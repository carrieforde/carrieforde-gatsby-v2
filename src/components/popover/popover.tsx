import * as React from 'react';
import { PopoverProps } from "./types"
import { Box } from "@/components/box/box"

export const Popover: React.FC<PopoverProps> = ({children, className}) => {
    return <Box className={className}>{children}</Box>
}