import React, { useState } from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    color: #000000;
    font-size: 20px;
    text-align: center;
`;

export const Hello = function () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Paragraph>You clicked {count} times</Paragraph>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};
