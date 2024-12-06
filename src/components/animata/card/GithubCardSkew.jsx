import React, { useCallback, useRef } from 'react';
import { useMousePosition } from "../../hooks/useMousePosition"; // Ensure this hook is available
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for classNames
import { Card, CardContent } from '@/components/ui/card';
import SlideArrowButton from './SlideArrowButton';

function calculateCardRotation({ currentX, currentY, centerX, centerY, maxRotationX, maxRotationY }) {
    // Calculate the distance from the center
    const deltaX = currentX - centerX;
    const deltaY = currentY - centerY;

    // Calculate the maximum distance (assuming a rectangular area)
    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    // Calculate the actual distance
    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    // Calculate the rotation factor (0 to 1)
    const rotationFactor = distance / maxDistance;

    // Calculate rotations (inverted for natural tilt effect)
    const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
    const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
    return { rotationX, rotationY };
}

export default function GithubCardSkew({ className, image, name, description }) {
    const containerRef = useRef(null);
    const resetRef = useRef(null);

    const update = useCallback(({ x, y }) => {
        if (!containerRef.current) {
            return;
        }

        const { width, height } = containerRef.current.getBoundingClientRect();
        const { rotationX, rotationY } = calculateCardRotation({
            centerX: width / 2,
            centerY: height / 2,
            currentX: x,
            currentY: y,
            maxRotationX: 4,
            maxRotationY: 6,
        });
        containerRef.current.style.setProperty("--x", `${rotationX}deg`);
        containerRef.current.style.setProperty("--y", `${rotationY}deg`);
    }, []);

    useMousePosition(containerRef, update);

    return (
        <div
            ref={containerRef}
            className={cn(
                
                className,
            )}
            style={{
                transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
                transitionDuration: "50ms",
            }}
            onMouseEnter={() => {
                resetRef.current = setTimeout(() => {
                    if (!containerRef.current) {
                        return;
                    }

                    // Reset the transition duration to 0 so that the mouse movement is smooth
                    containerRef.current.style.transitionDuration = "0ms";
                }, 300);
            }}
            onMouseLeave={() => {
                clearTimeout(resetRef.current);
                if (!containerRef.current) {
                    return;
                }

                containerRef.current.style.transitionDuration = "50ms";
                containerRef.current.style.setProperty("--x", "0deg");
                containerRef.current.style.setProperty("--y", "0deg");
            }}
        >
            {/* <h1>{name}</h1>
            <img src={image} alt="" className='h-[250px]' />
            <p className='text-justify text-sm '>{description}</p>
            <div className='flex justify-end'><button className='text-[#89216b] text-[16px]'>Read More</button></div> */}
            <Card>
                <CardContent className="flex p-4 flex-col space-y-3">
                    <h1 className='font-bold'>{name}</h1>
                    <img src={image} alt="" className='h-[250px]' />
                    <p className='text-justify text-sm line-clamp-4'>{description}</p>
                    {/* <div className='flex justify-end'>
                        <button className='text-[#89216b] text-[16px]'>Read More</button>
                    </div> */}
                    <div className='flex justify-end'>
                       <SlideArrowButton text="Read More" primaryColor="#f8841e" className="mt-4" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

