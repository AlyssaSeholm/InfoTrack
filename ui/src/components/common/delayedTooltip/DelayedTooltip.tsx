import React, { useState, useRef, ReactNode } from 'react';
import { Tooltip } from "@material-tailwind/react";

interface DelayedTooltipProps {
    content: string;               // Tooltip text content
    placement: string;             // Placement of the tooltip
    delay?: number;                // Optional delay in milliseconds
    children: ReactNode;           // Children that trigger the tooltip
}

const DelayedTooltip: React.FC<DelayedTooltipProps> = ({
    content,
    placement = 'bottom',
    delay = 100,                  // Default delay of 1000 milliseconds if not specified
    children
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>();

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current!);  // Clear any existing timeouts
        setShowTooltip(true);               // Show tooltip immediately on hover
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowTooltip(false);         // Hide tooltip after a delay
        }, delay);                         // Delay in milliseconds
    };

    return (
        <Tooltip 
            id='delayedtooltip'
            open={showTooltip}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
            content={content}
            placement={placement}             
            >
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </div>
        </Tooltip>
    );
};

export default DelayedTooltip;