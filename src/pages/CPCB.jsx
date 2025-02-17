import React from "react";
import { useState, useEffect } from 'react'

import attractor1 from "../images/cpcb/attractor1.jpg";
import spiral2 from "../images/cpcb/spiral2.jpg";


const Home = () => {
    
    useEffect(() => {
        localStorage.getItem("mode")=="dark"?document.body.classList.add("latex-dark"):localStorage?.getItem("mode")??localStorage.setItem("mode", "light");
    }, []);
        
    
    
    return (
        <>
            <div class="abstract">
                <p><strong>Computers, Pattern, Chaos, and Beauty</strong></p>
                <p><a href="/.">back</a></p>
            </div>   
            <p>Clifford A. Pickover's <em>Computers, Patterns, Chaos, and Beauty: Graphics from an Unseen World</em> is one of my favourite books. Here are some generative art pieces I made in MATLAB based on his algorithms.</p>
            <br/>
            <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                <img src={attractor1} />
                <figcaption style={{maxWidth: 'fitContent', marginLeft: 'auto', marginRight: 'auto'}}>Figure 1: Strange Attractor</figcaption>
            </figure>
            <br/>
            <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                <img src={spiral2}/>
                <figcaption style={{maxWidth: 'fitContent', marginLeft: 'auto', marginRight: 'auto'}}>Figure 2: Spiral</figcaption>
            </figure>
{/* <!--     
    <br>
    <figure style="display: block; margin-left: auto; margin-right: auto; width: 80%; ">
        <img src="../assets/images/cpcb/attractor2.jpg">
        <figcaption style="max-width: fit-content; margin-left: auto; margin-right: auto;">Figure 3: Strange Attractor #2</figcaption>
    </figure>
    
    <br>
    <figure style="display: block; margin-left: auto; margin-right: auto; width: 80%; ">
        <img src="../assets/images/cpcb/spiral1.jpg">
        <figcaption style="max-width: fit-content; margin-left: auto; margin-right: auto;">Figure 4: Spiral #2</figcaption> 
    </figure> --> */}


    <div class="abstract"><small>
    <a href="javascript:void(0);" id="dark-mode-toggle" onClick={() => {
                    document.body.classList.toggle("latex-dark");
                    document.body.classList.contains("latex-dark")?localStorage.setItem("mode", "dark"):localStorage.setItem("mode", "light");
                }}>dark/light</a>
        <p>last updated 2025-02-16</p>
    </small></div>
        </>
    );
}

export default Home;