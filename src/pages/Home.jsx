import React from "react";
import { useEffect } from 'react'


const Home = () => {
    
    useEffect(() => {
        localStorage.getItem("mode")==="dark"?document.body.classList.add("latex-dark"):localStorage?.getItem("mode")??localStorage.setItem("mode", "light");

        const lfmapiKey = process.env.REACT_APP_API; 
        const lfmusername = process.env.REACT_APP_USER; 
        const lfmapiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lfmusername}&period=7day&limit=1&api_key=${lfmapiKey}&format=json`;

        const grUsername = process.env.GR_USER;
        const grURL = `https://api.piratereads.com/${grUsername}/currently-reading`;

        fetch(lfmapiUrl)
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

        fetch(grURL)
            .then(response => response.json())
            .then(data => {
                let bookTitle = data.books[0].book_title;
                let bookAuthor = data.books[0].book_author;
                document.getElementById("book-title").innerHTML = bookTitle;
                document.getElementById("book-author").innerHTML = bookAuthor;
            })
            .catch(error => {
                console.error('Piratereads error', error);
            });
    }, []);
        
    
    
    return (
        <>
            <div class="abstract">
            
                <p><strong>email:</strong> sleader (at) ualberta (dot) ca</p>
                <p><a href="https://linkedin.com/in/sam-leader">linkedin</a> | <a href="https://github.com/samldr">github</a> | <a href="https://orcid.org/0009-0006-2032-7483">ORCID</a></p>
            </div>
            <p>I am a final-year electrical engineering co-op undergraduate student at the University of Alberta with an interest in instrumentation for space physics. Right now, I am the systems team lead for <a href ="https://albertasat.ca/">AlbertaSat</a>'s Ex-Alta 3 cubesat and I research computational plasma physics with <a href="https://sites.ualberta.ca/~rmarchan/">Dr. Richard Marchand</a>.</p>
            <p>Previously, I was a test specialist intern at <a href="https://xiphos.com/">Xiphos</a> and I developed electronics for superconductivity research for the <a href="https://www.polymtl.ca/expertises/laboratoire-de-supraconductivite-et-magnetisme-lsm">LSM</a> at Polytechnique Montréal. I also used to lead the development of Ex-Alta 3's magnetometer payload.</p>
            <h3>Projects & Interests</h3>
            <ul>
                <li><a href="https://github.com/samldr/wave-optics">wave-optics</a>: a 2D wave optics simulator made in C++ (WIP)</li>
                {/* <li><a href="./cpcb">cpcb</a>: generative art based on graphics from an unseen world...</li> */}
                <li>my favourite song right now is <i id="song"></i> by <span id="artist"></span><label for="sn-1" class="sidenote-toggle sidenote-number"></label>
                <input type="checkbox" id="sn-1" class="sidenote-toggle" />
                    <span class="sidenote">updates automatically</span></li>
                <li>I'm currently reading <i id="book-title"></i> by <span id="book-author"></span><label for="sn-2" class="sidenote-toggle sidenote-number"></label>
                    <input type="checkbox" id="sn-2" class="sidenote-toggle" />
                    <span class="sidenote">also updates automatically</span></li>
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
                <p>last updated 2026-11-24</p>
            </small></div>
        </>
    );
}

export default Home;