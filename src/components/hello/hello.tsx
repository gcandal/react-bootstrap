import { useState } from "react";
import * as React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    color: #000000;
    font-size: 20px;
    text-align: center;
`;

export const Hello: React.FC = () => {
    const [count, setCount] = useState(0);
    const increment = (): void => setCount(count + 1);

    return (
        <div>
            <Paragraph>You clicked {count} times</Paragraph>
            <button onClick={increment}>Click me</button>
        </div>
    );
};
