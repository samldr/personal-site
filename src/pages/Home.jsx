import React from "react";
import { useState, useEffect } from 'react'


const Home = () => {
    
    useEffect(() => {
        localStorage.getItem("mode")==="dark"?document.body.classList.add("latex-dark"):localStorage?.getItem("mode")??localStorage.setItem("mode", "light");

        const apiKey = process.env.REACT_APP_API; 
        const username = process.env.REACT_APP_USER; 
        const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&period=7day&limit=1&api_key=${apiKey}&format=json`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let track = data.toptracks.track[0];
                let song = track.name;
                let artist = track.artist.name;
                
                document.getElementById("song").innerHTML = song;
                document.getElementById("artist").innerHTML = artist;
                
            })
            .catch(error => {
                console.error('last.fm error', error);
            });
    }, []);
        
    
    
    return (
        <>
            <div class="abstract">
            
                <p><strong>email:</strong> sleader (at) ualberta (dot) ca</p>
                <p><a href="https://linkedin.com/in/sam-leader">linkedin</a> | <a href="https://github.com/samldr">github</a></p>
            </div>
            <p>I am a fourth-year electrical engineering co-op student at the University of Alberta. Right now, I'm a test specialist intern at <a href="https://xiphos.com/">Xiphos</a>. I also co-lead the development of <a href ="https://albertasat.ca/">AlbertaSat's</a> magnetometer payload for the Ex-Alta 3 cubesat, I research computational plasma physics with <a href="https://sites.ualberta.ca/~rmarchan/">Dr. Richard Marchand</a>, and I previously developed electronics for superconductivity research for the <a href="https://www.polymtl.ca/expertises/laboratoire-de-supraconductivite-et-magnetisme-lsm">LSM</a> at Polytechnique Montréal.</p>
            <h3>Projects & Interests</h3>
            <ul>
                <li><a href="https://github.com/samldr/wave-optics">wave-optics</a>: a 2D wave optics simulator made in C++ (WIP)</li>
                <li><a href="./cpcb">cpcb</a>: generative art based on graphics from an unseen world...</li>
                <li>my favourite song right now is <i id="song"></i> by <span id="artist"></span><label for="sn-1" class="sidenote-toggle sidenote-number"></label>
                    <input type="checkbox" id="sn-1" class="sidenote-toggle" />
                    <span class="sidenote">updates automatically</span></li>
            </ul>
{/*         
            <h3>Publications, etc.</h3>
            <p>Includes journal publications, conference proceedings, posters, basically everything.</p>
            <ul>
                <li><i>Simulation of Lander-space interaction in Lunar environment,</i> (2024) <br/> R. Marchand, S. Leader - 17th Spacecraft Charging and Technology Conference</li>
            </ul> */}
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