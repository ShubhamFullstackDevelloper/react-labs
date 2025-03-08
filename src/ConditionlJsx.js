    import React from "react";

    export default class ConditionalJsx extends React.Component {
    render() {
        let greeting = "Hello World";
        const date = new Date();
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensures two-digit format for minutes

        if (hours < 12) {
        greeting = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon";
        } else if (hours >= 17 && hours < 20) {
        greeting = "Good Evening";
        } else {
        greeting = "Good Night";
        }

        return (
        <div style={{ backgroundColor: "green", padding: "20px", color: "white" }}>
            <h1>{greeting}</h1>
            <p>The current time is {hours}:{minutes}</p>
        </div>
        );
    }
    }
