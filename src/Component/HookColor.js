import { useState } from 'react';
 
const HookColor = () => {
    const [color, setColor] = useState("")
    const generateColor = () => {
        setColor(Math.random().toString(16));
    };
    return { color, generateColor };
 
};
export default HookColor;