import React from "react";

const Spinner = () =>{

    return (
        
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="100px" height="100px" viewBox="0 0 100 30" preserveAspectRatio="xMidYMid">
        <circle cx="84" cy="50" r="10" fill="#a3c3f2">
            <animate attributeName="r" repeatCount="indefinite" dur="0.8333333333333334s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="fill" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#a3c3f2;#fb583e;#3f8eda;#f47e60;#a3c3f2" begin="0s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#a3c3f2">
        <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        </circle><circle cx="50" cy="50" r="10" fill="#f47e60">
        <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8333333333333334s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8333333333333334s"></animate>
        </circle><circle cx="84" cy="50" r="10" fill="#3f8eda">
        <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666667s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666667s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#fb583e">
        <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate>
        </circle>
    </svg>
    )
    

}

export default Spinner