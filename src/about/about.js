
import React, { Component } from "react";
import "./about.css"
import abttallback from "./../images/abttallback.png";
import howitworksgraphic from "./../images/howitworksgraphic.png";
import "./about.scss";
import socrates from "./../images/socrates.png"
class AboutPage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

   render() {
     return (


<div>
<div class = "howitworks">
<div class = "howitworkstext">How it Works:</div>
<img class = "howitworksgraphic" src = {howitworksgraphic} />
<div class = "twotypesofuser">Two Types of User</div>



<div class = "twotypesofuserrow">
      <div class ="typeofusercolumn">


<div class = "justworkpleasetwo">
    <div class="container">
  <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
    </svg>
   Public Figures
  </a>
  </div>
</div>


          <p class = "publicfiigurerdescripton">Reportr defines Public Figures as folks who are leaders in their community in any capacity. Reportr gives these Public Figures the opportunity to advocate for the people in their community, discuss topics with Public Figures who have different views on a given headline, and clarify their own positions on issues. Public Figures receive requests from other users to have conversations with other requested Public Figures - they can either accept or forfeit those requests. Accepted requests launch a conversation between these two figures, which is then posted on the front page of the site.</p>
      </div>

      <div class ="typeofusercolumn">

<div class = "justworkplease">
    <div class="container">
        <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
         General Users
        </a>
    </div>
</div>


          <p class = "generaluserdescripton">General users on Reportr have the power to hold Public Figures accountable by facilitating conversations. By casting requests, general users force Public Figures to the table and force a conversation about a given trending news headline. By submitting these requests, general users not only facilitate conversation, but they can expose which Public Figures are afraid to publicly defend their ideas. If a Public Figure forfeits the conversation you requested, that’s pretty telling. General users also can vote on segments of posted conversations, giving you the ability to directly interact with whatever is being said.</p>
      </div>
</div>

<div class="abttallback"></div>

<h1 class ="anotefromthefounder">A note from the Founder</h1>
<div class = "headingline"></div>

         <h2 class ="Everyoneisveryangry">Everyone is very angry.</h2>
  <div class ="maintext">

<p class ="theageof">The Age of Information was supposed to bring us closer together, but we’re more polarized, disconnected, and disillusioned than ever. Why? Are we just all just naturally pissed at each other? Destined to spend our lives scrolling through Twitter, Reddit, and Facebook getting angrier and angrier at those who shout the loudest?  Doomed to have no alternative to the shit-show that has become the entire mainstream news?</p>

<p>Yea, maybe.</p>

<p class = "ormaybe">Or, maybe the Age of Information was hijacked. Throughout the past decade, social media platforms and news-networks have realized that you, dear reader, are a lucrative revenue source. And that revenue comes in the form of views, and more specifically clicks. So, having no regard for the potential impact on society, these folks decided to turn you into a click machine.

Anger is easy clicks, and easy clicks is easy revenue.</p>

<p class="callitspin">Call it spin. Call them echo chambers. Whatever you want to call it, you better believe they were created intentionally by these multinational entertainment conglomerates for the specific purpose of making you angry at people you don’t even know, and for shutting down any legitimate productive dialogue.

We need to force those channels of communication back open. We need open dialogue. We need a way to publicly hold people in charge accountable, and alternatively give those people in charge a fair chance to explain themselves.</p>


<p class = "wasfounded">Reportr was founded for the sole reason that some kid (yours truly) got so annoyed by how terrible things have gotten that out of pure spite he created a place where this open dialogue could occur, because that is the only way things will get better. We are independent and non-partisan. Our only allegiance is to open, unfettered, uncut, raw dialogue between anyone anywhere. </p>

<p class = "quote">“When the debate is over, slander becomes the tool of the loser.” Socrates
</p>
</div>


</div>

<div>
<img class = "socrates" src = {socrates} />
</div>
</div>


     );
   }
 }
export default AboutPage;
