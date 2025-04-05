import React from "react";
import { useState, useEffect } from 'react'


const Home = () => {
    
    useEffect(() => {
        localStorage.getItem("mode")=="dark"?document.body.classList.add("latex-dark"):localStorage?.getItem("mode")??localStorage.setItem("mode", "light");
    }, []);
        
    
    
    return (
        <>
            <div class="abstract">
                <p><strong>Atriums</strong></p>
                <p>November 19th, 2024</p>
                <p><a href="/.">back</a></p>
            </div>   
   

        <p>Every building at the University of Alberta is built with bricks. I always liked that no matter when the building was built, or what its purpose was supposed to be and what it is now, there was always a kind of underlying theme to the campus, so that the first buildings on campus, Assiniboia, Athabasca, and Pembina halls, complement the building built to commemorate the University’s centennial right next to it, all because they share the same red bricks.</p>

        <p>Another thing that the University does well is atriums. Not one of the maybe half a dozen university campuses I’ve visited has anywhere near the amount of open spaces as the U of A. ETLC, NREF, and the one health science building I only walk through when I’m trying to get to the LRT without going outside all have huge, 5+ story open spaces with places to study at the bottom. I always felt so humbled whenever I would sit at the bottom of one of these, and look up and around and listen to the echoes and background noise. I felt it makes me study better, it was like the opposite of being stuck at my desk in my room.</p>

        <p>My favourite of this type of atrium is probably in CCIS, where giant mirrors reflect sunlight from the 6th floor all the way down to L2, with a maze of bridges, staircases and little study landings. I think if I went to grad grad school at the U of A I would try to do it in physics just so I would have the chance of having an office facing the inside of the atrium where I could look down and see all the people moving around all day. </p>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://www.ualberta.ca/en/newtrail/media-library/issues/2011-spring/ccis/ccismain.jpg"}/>
        <figcaption style={{textAlign: 'center'}}>CCIS, right after it was built<label for="sn-1" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-1" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.ualberta.ca/en/newtrail/media-library/issues/2011-spring/ccis/ccismain.jpg">image source</a></span></figcaption>
        </figure>

        <p>Only two atriums on campus are regularly referred to as atriums, one of which is the ALES atrium in Ag/For, but there are so many more spaces than that I can think of now, even when compared to when I started writing. HUB mall could be considered an atrium, and even CAB, which is probably the ugliest building on the outside on campus, has an open centre going halfway up the building.</p>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://intranet.ales.ualberta.ca/wp-content/uploads/sites/100/2023/06/ALES-Atrium-Feature-Image.png"}/>
        <figcaption style={{textAlign: 'center'}}>The ALES atrium in Ag/For<label for="sn-2" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-2" class="sidenote-toggle" />
<span class="sidenote"><a href="https://intranet.ales.ualberta.ca/">image source</a></span></figcaption>
        </figure>

        <p>One type of atrium that I haven’t seen anywhere else is this type where the atrium has been constructed afterwards to create an interior space between what was at first two separate buildings. The Gunning/Lemieux Chemistry Centre has a 6-story open space above the hallway that divides the west wing from the east wing, with interior windows on both sides of the hallway.  The east side, including the atrium, was constructed after the fact as an add-on. Last year, I took a bunch of summer courses and my favourite spot to sit before my evening class was in the open area on the 2nd floor, on the bridge between the two halves. Below me was one of the busiest hallways on campus, but I was safe, suspended above and below the atrium’s skylights. It still is one of my favourite places to read, even though there was definitely a clover mite infestation at some of the desks.</p>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://www.thinkspace.ca/wp-content/themes/yootheme/cache/ec/alberta_atrium_reno-ece0ff84.webp"}/>
        <figcaption style={{textAlign: 'center'}}>Inside the chem building atrium. It's hard to see in this picture (or any picture I could find online), but it goes up the entire length of the building. In the front, you can see the undergrad chemistry lounge<label for="sn-3" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-3" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.thinkspace.ca/projects/university-of-alberta-chemistry-centre-atrium-renovation/">image source</a></span></figcaption>
        </figure>

        <p>Another atrium like this is the space between the north and south Rutherford libraries.  The south library was built in the 1950s and in the 1970s the north wing and the atrium with a slanted glass room was built around it. Both buildings are, of course, built with bricks. Rutherford North is built in a ‘V’ shape (when looking at it from the side), so that the upper floors stick out over the lower ones. On the side facing the inside of the atrium, there are some desks on the upper floors that have a view of the inside of the atrium through some interior windows. It's hard to describe the type of environment, Rutherford North (and a lot of other buildings on this side of campus) make me feel like I'm stuck in the Soviet era, so I can almost put myself in that time and space when I sit at one of these desks and I need to focus on something in silence. It doesn’t make that much sense when I write it down actually, but these carrel desks and the ones on the 2nd floor of the chem building are my favourite places to go and get work done when I don't need a ton of space or need people to collaborate with. </p>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Interior_view_of_Rutherford_Library_sky-lighted_galleria.jpg/500px-Interior_view_of_Rutherford_Library_sky-lighted_galleria.jpg?20200401184021"}/>
        <figcaption style={{textAlign: 'center'}}>Rutherford library atrium skylight<label for="sn-4" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-4" class="sidenote-toggle" />
<span class="sidenote"><a href="https://commons.wikimedia.org/wiki/File:Interior_view_of_Rutherford_Library_sky-lighted_galleria.jpg">image source</a></span></figcaption>
        </figure>

        <p>The other well-known atrium is the Tory Atrium, which connects the pedway to HUB, the business building and the Tory building (and lecture theatres and the breezeway). Like Rutherford, it is more like an open space than a hallway, but it's like the chem atrium in the sense that its in the middle of the pedway system – when it was cold I would always cut through CCIS, Earth Sciences, then through the Tory breezeway and then the atrium to get to HUB so I could get some food or a Monster or something – so there’s a lot of traffic nonetheless, at least compared to the ‘terminus’ Rutherford library which is just connected to HUB via an inconvenient staircase and an unfortunate permanently locked door. They started doing work on the Tory atrium last summer, and they closed it down for construction. I remember I was going to my aforementioned evening class (philosophy of science, which was in the business building) taking the shortcut I just mentioned because it was raining outside and I had just discovered my shoes had holes in them, just to have to exit the building at the breezeway and walk around to the front, soaking my shoes. It was open for a little while in the fall as far as I can remember, with no lights and half of the area closed off with chain-link fences. It was like you were walking under scaffolding on the street.</p>

        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://scontent.fyhu2-1.fna.fbcdn.net/v/t1.6435-9/50211524_2132180280154259_5680578807170334720_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WQy9xD6Jn_cQ7kNvwHhLtVf&_nc_oc=AdkqSXJgcmdmQP3UZjJKZ8qmeFQlZ2fXL_txyoteSTOk-5sK821Q_a4sacMiTIL65-o&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=RI9txsCLk47bvF0Ilfun5w&oh=00_AYEbkQndtQykI9MFf2N64iOwBlvWKD6E8IzgPWgCAaic2A&oe=6817BE31"}/>
        <figcaption style={{textAlign: 'center'}}>Inside the Tory Atrium<label for="sn-5" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-5" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.facebook.com/UAlbertaBiz/photos/a.364103993628572/2132180276820926/?type=3">image source</a></span></figcaption>
        </figure>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://www.ualberta.ca/en/arts/arts101/tatrium.jpg"}/>
        <figcaption style={{textAlign: 'center'}}>Inside the Tory Atrium, looking the other way<label for="sn-6" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-6" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.ualberta.ca/en/arts/arts101/tory-building.html">image source</a></span></figcaption>
        </figure>
        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/468234372_10160557021870677_839740011165767943_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=j2r-vr2AWncQ7kNvwEDp40G&_nc_oc=Adm0--SDh9cjd4jBLHSktSbBJibXizDwls2ZXAwhbkllgt39weg5D5ZmrD_YMhdkrrY&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=AHM7pbrmJog9Bz5HUcRF5w&oh=00_AYH13xzs5cck9Eq-ZvYG34CW9O7lMLVk4UwVD2d0O4fzEA&oe=67F64983"}/>
        <figcaption style={{textAlign: 'center'}}> Living wall<label for="sn-7" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-7" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.facebook.com/ualberta/photos/a.10150577817575677/10150885464115677/?type=3">image source</a></span></figcaption>
        </figure>


        <p>Some time when I was away they closed it completely to finish the last of the renovations and I hadn’t seen inside since, nor did I really have any idea what they were actually doing in there, until last week when I saw a photo someone took of the renovation progress: they had painted the inside ‘exterior’ of Tory white and removed most of the skylight. I was devastated. </p>

        <br></br>
        <figure style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
        <img src={"https://preview.redd.it/oh-look-its-the-tory-atrium-v0-8s6oqbvusezd1.jpeg?width=1080&crop=smart&auto=webp&s=af2bdb711283db33610a935af8e53685299b310e"}/>
        <figcaption style={{textAlign: 'center'}}>Tory Atrium during renovations<label for="sn-8" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-8" class="sidenote-toggle" />
<span class="sidenote"><a href="https://www.reddit.com/r/uAlberta/comments/1glil2s/oh_look_its_the_tory_atrium/">image source</a></span></figcaption>
        </figure>

        <p>I can see their vision, to make the Tory atrium less of a wide hallway and more of a space for people to sit and meet and study, but in the end they’ve desecrated one of the spaces that embodies the University of Alberta. Bricks, atriums, some brutalism, and its open green spaces and nature have always been my favourite parts of the campus, and what allows it to be unique but still cohesive, and I am sad to see that change.</p>
    


    <div class="abstract"><small>
    <a href="javascript:void(0);" id="dark-mode-toggle" onClick={() => {
                    document.body.classList.toggle("latex-dark");
                    document.body.classList.contains("latex-dark")?localStorage.setItem("mode", "dark"):localStorage.setItem("mode", "light");
                }}>dark/light</a>
        <p>last updated 2025-04-04</p>
    </small></div>
        </>
    );
}

export default Home;