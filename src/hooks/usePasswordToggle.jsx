import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function usePasswordToggle() {
    const [visible, setVisibility] = useState(false);

    const Icon = visible ? <FaRegEye /> : <FaRegEyeSlash />;
    const InputType = visible ? 'text' : 'password';

    const toggleVisibility = () => {
        setVisibility((prevVisibility) => !prevVisibility);
    };

    return [InputType, Icon, toggleVisibility];
}

export default usePasswordToggle;
