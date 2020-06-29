
import React, { Component } from "react";
import "./about.css"
import abtbackground from "./abtbackground.png";
import howitworksgraphic from "./howitworksgraphic.png"
class AboutPage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

   render() {
     return (



<div class = "howitworks">
<div class = "howitworkstext">How it Works:</div>
<img class = "howitworksgraphic" src = {howitworksgraphic} />
<div class = "twotypesofuser">Two Types of User</div>










<div class="letterfromthefounder">
         <h2 class ="Everyoneisveryangry">Everyone is very angry.</h2>
  <div class ="maintext">

<p class ="theageof">The Age of Information was supposed to bring us closer together, but we’re more polarized, disconnected, and disillusioned than ever. Why? Are we just all just naturally pissed at each other? Destined to spend our lives scrolling through Twitter, Reddit, and Facebook getting angrier and angrier at those who shout the loudest?  Doomed to have no alternative to the shit-show that has become the entire mainstream news?</p>

<p>Yea, maybe.</p>

<p class = "ormaybe">Or, maybe the Age of Information was hijacked. Throughout the past decade, social media platforms and news-networks have realized that you, dear reader, are a lucrative revenue source. And that revenue comes in the form of views, and more specifically clicks. So, having no regard for the potential impact on society, these folks decided to turn you into a click machine.

Anger is easy clicks, and easy clicks is easy revenue.</p>

<p class="callitspin">Call it spin. Call them echo chambers. Whatever you want to call it, you better believe they were created intentionally by these multinational entertainment conglomerates for the specific purpose of making you angry at people you don’t even know, and for shutting down any legitimate productive dialogue.

We need to force those channels of communication back open. We need open dialogue. We need a way to publicly hold people in charge accountable, and alternatively give those people in charge a fair chance to explain themselves.</p>


<p class = "wasfounded">Reportr was founded for the sole reason that some kid (yours truly) got so annoyed by how terrible things have gotten that out of pure spite he created a place where this open dialogue could occur, because that is the only way things will get better. We are independent and non-partisan. Our only allegiance is to open, unfettered, uncut, raw dialogue between anyone anywhere. </p>

<p class = "quote">“When the debate is over, slander becomes the tool of the loser.” – Socrates
</p>
</div>
</div>
</div>

     );
   }
 }
export default AboutPage;
