import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => console.log('Hello World')}>Click Me</button>
        </div>
    );
};

export default {
    component: HomePage,
};
