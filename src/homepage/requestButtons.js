import React, { Component } from "react";
import "./PublicFigureRequestSearchbox.css";
import { getApprovedDebators } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class RequestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
      collapse: true,
      resetNeeded: false,
    };
  }

  componentDidMount() {
    this.props.getApprovedDebators();
  }

  onTextChanged = (e) => {

//     var items = ["Jerry Moran	U.S. Senate Kansas", "Pat Roberts	U.S. Senate Kansas", "Gary Peters	U.S. Senate Michigan","Debbie Stabenow	U.S. Senate Michigan","Tim Kaine	U.S. Senate Virginia","Mark Warner	U.S. Senate Virginia","Chris Van Hollen	U.S. Senate Maryland","Ben Cardin	U.S. Senate Maryland","Dianne Feinstein	U.S. Senate California","Kamala D. Harris	U.S. Senate California","Mike Braun	U.S. Senate Indiana","Todd C. Young	U.S. Senate Indiana","Joni Ernst	U.S. Senate Iowa","Chuck Grassley	U.S. Senate Iowa","John Barrasso	U.S. Senate Wyoming","Mike Enzi	U.S. Senate Wyoming","Mike Crapo	U.S. Senate Idaho","Jim Risch	U.S. Senate Idaho","Tammy Duckworth	U.S. Senate Illinois","Dick Durbin	U.S. Senate Illinois", "Maria Cantwell	U.S. Senate Washington","Patty Murray	U.S. Senate Washington","Jeff Merkley	U.S. Senate Oregon","Ron Wyden	U.S. Senate Oregon","Ronald Harold Johnson	U.S. Senate Wisconsin","Tammy Baldwin	U.S. Senate Wisconsin","Chuck Schumer	U.S. Senate New York","Kirsten Gillibrand	U.S. Senate New York","Tom Cotton	U.S. Senate Arkansas","John Boozman	U.S. Senate Arkansas","Tina Smith	U.S. Senate Minnesota","Amy Klobuchar	U.S. Senate Minnesota","Ted Cruz	U.S. Senate Texas","John Cornyn	U.S. Senate Texas","Mitch McConnell	U.S. Senate Kentucky","Rand Paul	U.S. Senate Kentucky","Rob Portman	U.S. Senate Ohio","Sherrod Brown	U.S. Senate Ohio","Kyrsten Sinema	U.S. Senate Arizona","Martha McSally	U.S. Senate Arizona","Joe Manchin III	U.S. Senate West Virginia","Shelley Moore Capito	U.S. Senate West Virginia","Tom Carper	U.S. Senate Delaware","Chris Coons	U.S. Senate Delaware","Steve Daines	U.S. Senate Montana","Jon Tester	U.S. Senate Montana","David Perdue	U.S. Senate Georgia", "Kelly Loeffler	U.S. Senate Georgia","Elizabeth Warren	U.S. Senate Massachusetts","Edward J. Markey	U.S. Senate Massachusetts","Bernie Sanders	U.S. Senate Vermont","Patrick Leahy	U.S. Senate Vermont","Michael Bennet	U.S. Senate Colorado","Cory Gardner	U.S. Senate Colorado","Richard Shelby	U.S. Senate Alabama","Doug Jones	U.S. Senate Alabama","Catherine Cortez Masto	U.S. Senate Nevada","Jacky Rosen	U.S. Senate Nevada","Tom Udall	U.S. Senate New Mexico","Martin Heinrich	U.S. Senate New Mexico","Lamar Alexander	U.S. Senate Tennessee","Marsha Blackburn	U.S. Senate Tennessee","John Hoeven	U.S. Senate North Dakota","Kevin Cramer	U.S. Senate North Dakota","Richard Burr	U.S. Senate North Carolina","Thom Tillis	U.S. Senate North Carolina","Bill Cassidy	U.S. Senate Louisiana","John Neely Kennedy	U.S. Senate Louisiana","Maggie Hassan	U.S. Senate New Hampshire","Jeanne Shaheen	U.S. Senate New Hampshire","Susan Collins	U.S. Senate Maine","Angus King	U.S. Senate Maine","Rick Scott	U.S. Senate Florida","Marco Rubio	U.S. Senate Florida","John Thune	U.S. Senate South Dakota","Mike Rounds	U.S. Senate South Dakota","Sheldon Whitehouse	U.S. Senate Rhode Island","Jack Reed	U.S. Senate Rhode Island","Bob Menendez	U.S. Senate New Jersey","Cory Booker	U.S. Senate New Jersey","Lindsey Graham	U.S. Senate South Carolina","Tim Scott	U.S. Senate South Carolina","Brian E. Schatz	U.S. Senate Hawaii","Mazie K. Hirono	U.S. Senate Hawaii","Daniel S. Sullivan	U.S. Senate Alaska","Lisa Murkowski	U.S. Senate Alaska","Jim Inhofe	U.S. Senate Oklahoma","James Lankford	U.S. Senate Oklahoma","Ben Sasse	U.S. Senate Nebraska","Deb Fischer	U.S. Senate Nebraska","Christopher S. Murphy	U.S. Senate Connecticut","Richard Blumenthal	U.S. Senate Connecticut","Roger Wicker	U.S. Senate Mississippi","Cindy Hyde-Smith	U.S. Senate Mississippi","Roy Blunt	U.S. Senate Missouri","Josh Hawley	U.S. Senate Missouri","Pat Toomey	U.S. Senate Pennsylvania","Bob Casey Jr.	U.S. Senate Pennsylvania","Mike Lee	U.S. Senate Utah","Mitt Romney	U.S. Senate Utah", "Jennifer Wexton	U.S. House Virginia District 10",
// "Michael F.Q. San Nicolas	U.S. House Guam At-large District",
// "Nanette Barragán	U.S. House California District 44",
// "Andy Biggs	U.S. House Arizona District 5",
// "Elise Stefanik	U.S. House New York District 21",
// "Brett Guthrie	U.S. House Kentucky District 2",
// "Jim Cooper	U.S. House Tennessee District 5",
// "Hank Johnson	U.S. House Georgia District 4",
// "John Curtis	U.S. House Utah District 3",
// "Jackie Walorski	U.S. House Indiana District 2",
// "Henry Cuellar	U.S. House Texas District 28",
// "Andrew Harris	U.S. House Maryland District 1",
// "Lizzie Pannill Fletcher	U.S. House Texas District 7",
// "Barry Loudermilk	U.S. House Georgia District 11",
// "Anthony G. Brown	U.S. House Maryland District 4",
// "Trey Hollingsworth	U.S. House Indiana District 9",
// "Dina Titus	U.S. House Nevada District 1",
// "Peter G. Olson	U.S. House Texas District 22",
// "Dean Phillips	U.S. House Minnesota District 3",
// "Tom Rice	U.S. House South Carolina District 7",
// "Billy Long	U.S. House Missouri District 7",
// "Aston Donald McEachin	U.S. House Virginia District 4",
// "Mark Takano	U.S. House California District 41",
// "Ed Perlmutter	U.S. House Colorado District 7",
// "Marcia Fudge	U.S. House Ohio District 11",
// "Lori Trahan	U.S. House Massachusetts District 3",
// "Donald Payne Jr.	U.S. House New Jersey District 10",
// "Jaime Herrera Beutler	U.S. House Washington District 3",
// "Jared Golden	U.S. House Maine District 2",
// "Thomas Massie	U.S. House Kentucky District 4",
// "Justin Amash	U.S. House Michigan District 3",
// "Blaine Luetkemeyer	U.S. House Missouri District 3",
// "Tom Emmer	U.S. House Minnesota District 6",
// "Ted Budd	U.S. House North Carolina District 13",
// "George E.B. Holding	U.S. House North Carolina District 2",
// "Dan Bishop	U.S. House North Carolina District 9",
// "Ron Estes	U.S. House Kansas District 4",
// "Adrian Smith	U.S. House Nebraska District 3",
// "Bill Huizenga	U.S. House Michigan District 2",
// "Daniel Lipinski	U.S. House Illinois District 3",
// "Michael Waltz	U.S. House Florida District 6",
// "Frederica S. Wilson	U.S. House Florida District 24",
// "Debbie Mucarsel-Powell	U.S. House Florida District 26",
// "Gus M. Bilirakis	U.S. House Florida District 12",
// "Kay Granger	U.S. House Texas District 12",
// "James Comer Jr.	U.S. House Kentucky District 1",
// "Jahana Hayes	U.S. House Connecticut District 5",
// "Brian Higgins	U.S. House New York District 26",
// "Bill Flores	U.S. House Texas District 17",
// "Jesus Garcia	U.S. House Illinois District 4",
// "Seth Moulton	U.S. House Massachusetts District 6",
// "Nydia Velazquez	U.S. House New York District 7",
// "Mike Bost	U.S. House Illinois District 12",
// "Ralph Abraham	U.S. House Louisiana District 5",
// "Debbie Dingell	U.S. House Michigan District 12",
// "Susan Wild	U.S. House Pennsylvania District 7",
// "Tony Cárdenas	U.S. House California District 29",
// "William Hurd	U.S. House Texas District 23",
// "Vicente Gonzalez Jr.	U.S. House Texas District 15",
// "James Clyburn	U.S. House South Carolina District 6",
// "Marc Veasey	U.S. House Texas District 33",
// "Ilhan Omar	U.S. House Minnesota District 5",
// "Andrew Kim	U.S. House New Jersey District 3",
// "John Larson	U.S. House Connecticut District 1",
// "Greg Stanton	U.S. House Arizona District 9",
// "Ronald Wright	U.S. House Texas District 6",
// "Chrissy Houlahan	U.S. House Pennsylvania District 6",
// "Lloyd Smucker	U.S. House Pennsylvania District 11",
// "Mary Gay Scanlon	U.S. House Pennsylvania District 5",
// "Joe Cunningham	U.S. House South Carolina District 1",
// "Anthony Brindisi	U.S. House New York District 22",
// "Roger Marshall	U.S. House Kansas District 1",
// "Fred Keller	U.S. House Pennsylvania District 12",
// "Gil Cisneros	U.S. House California District 39",
// "Michael C. Burgess	U.S. House Texas District 26",
// "Grace Meng	U.S. House New York District 6",
// "Brendan Boyle	U.S. House Pennsylvania District 2",
// "Adriano Espaillat	U.S. House New York District 13",
// "Lucy McBath	U.S. House Georgia District 6",
// "Joe Neguse	U.S. House Colorado District 2",
// "Cedric Richmond	U.S. House Louisiana District 2",
// "Stephanie Murphy	U.S. House Florida District 7",
// "Van Taylor	U.S. House Texas District 3",
// "Jim Himes	U.S. House Connecticut District 4",
// "Ken Calvert	U.S. House California District 42",
// "Jeff Duncan	U.S. House South Carolina District 3",
// "Gary Palmer	U.S. House Alabama District 6",
// "Al Green	U.S. House Texas District 9",
// "Francis Rooney	U.S. House Florida District 19",
// "Mark Pocan	U.S. House Wisconsin District 2",
// "Robert Bishop	U.S. House Utah District 1",
// "Bill Posey	U.S. House Florida District 8",
// "John Sarbanes	U.S. House Maryland District 3",
// "Katie Porter	U.S. House California District 45",
//   "José Serrano	U.S. House New York District 15",
//   "Eliot Engel	U.S. House New York District 16",
//   "Glenn Thompson	U.S. House Pennsylvania District 15",
//   "Mo Brooks	U.S. House Alabama District 5",
//   "Bill Johnson	U.S. House Ohio District 6",
//   "Andy Levin	U.S. House Michigan District 9",
//   "Val Demings	U.S. House Florida District 10",
//   "Mark Amodei	U.S. House Nevada District 2",
//   "Drew Ferguson	U.S. House Georgia District 3",
//   "David Rouzer	U.S. House North Carolina District 7",
//   "Bill Foster	U.S. House Illinois District 11",
//   "Karen Bass	U.S. House California District 37",
//   "Steve Watkins	U.S. House Kansas District 2",
//   "William Timmons	U.S. House South Carolina District 4",
//   "Jim Hagedorn	U.S. House Minnesota District 1",
//   "Bennie Thompson	U.S. House Mississippi District 2",
//   "Steve King	U.S. House Iowa District 4",
//   "Yvette D. Clarke	U.S. House New York District 9",
//   "Phil Roe	U.S. House Tennessee District 1",
//   "Marcy Kaptur	U.S. House Ohio District 9",
//   "Julia Brownley	U.S. House California District 26",
//   "Ross Spano	U.S. House Florida District 15",
//   "Richard Hudson	U.S. House North Carolina District 8",
//   "David N. Cicilline	U.S. House Rhode Island District 1",
//   "Jim Langevin	U.S. House Rhode Island District 2",
//   "Guy Reschenthaler	U.S. House Pennsylvania District 14",
//   "Anna Eshoo	U.S. House California District 18",
//   "Max Rose	U.S. House New York District 11",
//   "Carol Miller	U.S. House West Virginia District 3",
//   "Jim Costa	U.S. House California District 16",
//   "Cathy McMorris Rodgers	U.S. House Washington District 5",
//   "Paul Gosar	U.S. House Arizona District 4",
//   "Harley Rouda	U.S. House California District 48",
//   "André Carson	U.S. House Indiana District 7",
//   "Nancy Pelosi	U.S. House California District 12",
//   "Daniel Webster	U.S. House Florida District 11",
//   "Brad Schneider	U.S. House Illinois District 10",
//   "Bobby Rush	U.S. House Illinois District 1",
//   "Steven Palazzo	U.S. House Mississippi District 4",
//   "David Price	U.S. House North Carolina District 4",
//   "Joseph Morelle	U.S. House New York District 25",
//   "Warren Davidson	U.S. House Ohio District 8",
//   "Kweisi Mfume	U.S. House Maryland District 7",
//   "Trent Kelly	U.S. House Mississippi District 1",
//   "Tom Malinowski	U.S. House New Jersey District 7",
//   "Pramila Jayapal	U.S. House Washington District 7",
//   "Adam Schiff	U.S. House California District 28",
//   "David Joyce	U.S. House Ohio District 14",
//   "Jack Bergman	U.S. House Michigan District 1",
//   "Markwayne Mullin	U.S. House Oklahoma District 2",
//   "Paul Mitchell	U.S. House Michigan District 10",
//   "Brian Mast	U.S. House Florida District 18",
//   "Dave Loebsack	U.S. House Iowa District 2",
//   "Cheri Bustos	U.S. House Illinois District 17",
//   "Dwight Evans	U.S. House Pennsylvania District 3",
//   "Bob Gibbs	U.S. House Ohio District 7",
//   "Greg Gianforte	U.S. House Montana At-large District",
//   "Juan Vargas	U.S. House California District 51",
//   "Kevin Hern	U.S. House Oklahoma District 1",
//   "Judy Chu	U.S. House California District 27",
//   "Jim McGovern	U.S. House Massachusetts District 2",
//   "TJ Cox	U.S. House California District 21",
//   "Don Young	U.S. House Alaska At-large District",
//   "Jeffrey Fortenberry	U.S. House Nebraska District 1",
//   "Ed Case	U.S. House Hawaii District 1",
//   "Dan Meuser	U.S. House Pennsylvania District 9",
//   "Chris Pappas	U.S. House New Hampshire District 1",
//   "Rick Crawford	U.S. House Arkansas District 1",
//   "Jason Crow	U.S. House Colorado District 6",
//   "Lauren Underwood	U.S. House Illinois District 14",
//   "Steve Stivers	U.S. House Ohio District 15",
//   "Sharice Davids	U.S. House Kansas District 3",
//   "Patrick T. McHenry	U.S. House North Carolina District 10",
//   "Ted Lieu	U.S. House California District 33",
//   "Frank Lucas	U.S. House Oklahoma District 3",
//   "Susan Davis	U.S. House California District 53",
//   "Cindy Axne	U.S. House Iowa District 3",
//   "Anthony Gonzalez	U.S. House Ohio District 16",
//   "Steny Hoyer	U.S. House Maryland District 5",
//   "Don Bacon	U.S. House Nebraska District 2",
//   "Tom McClintock	U.S. House California District 4",
//   "Jerry McNerney	U.S. House California District 9",
//   "H. Morgan Griffith	U.S. House Virginia District 9",
//   "Grace Napolitano	U.S. House California District 32",
//   "Mike Conaway	U.S. House Texas District 11",
//   "Conor Lamb	U.S. House Pennsylvania District 17",
//   "Jason Smith	U.S. House Missouri District 8",
//   "Brad Wenstrup	U.S. House Ohio District 2",
//   "Mario Diaz-Balart	U.S. House Florida District 25",
//   "Joseph Kennedy III	U.S. House Massachusetts District 4",
//   "Debbie Wasserman Schultz	U.S. House Florida District 23",
//   "Stacey Plaskett	U.S. House Virgin Islands At-large District",
//   "Scott Tipton	U.S. House Colorado District 3",
//   "David Schweikert	U.S. House Arizona District 6",
//   "Donald Norcross	U.S. House New Jersey District 1",
//   "Jerrold Nadler	U.S. House New York District 10",
//   "John Lewis	U.S. House Georgia District 5",
//   "Josh Harder	U.S. House California District 10",
//   "Tulsi Gabbard	U.S. House Hawaii District 2",
//   "John Carter	U.S. House Texas District 31",
//   "Kendra Horn	U.S. House Oklahoma District 5",
//   "Benjamin Lee Cline	U.S. House Virginia District 6",
//   "Tom Graves	U.S. House Georgia District 14",
//   "Rodney Davis	U.S. House Illinois District 13",
//   "Kathy Castor	U.S. House Florida District 14",
//   "Susie Lee	U.S. House Nevada District 3",
//   "Charlie Crist	U.S. House Florida District 13",
//   "Scott Peters	U.S. House California District 52",
//   "Danny K. Davis	U.S. House Illinois District 7",
//   "Zoe Lofgren	U.S. House California District 19",
//   "Peter DeFazio	U.S. House Oregon District 4",
//   "Lee Zeldin	U.S. House New York District 1",
//   "Suzanne Bonamici	U.S. House Oregon District 1",
//   "Bonnie Watson Coleman	U.S. House New Jersey District 12",
//   "Bruce Westerman	U.S. House Arkansas District 4",
//   "Salud Carbajal	U.S. House California District 24",
//   "Madeleine Dean	U.S. House Pennsylvania District 4",
//   "Roger Williams	U.S. House Texas District 25",
//   "Gregorio Kilili Camacho Sablan	U.S. House Northern Mariana Islands At-large District",
//   "G.K. Butterfield	U.S. House North Carolina District 1",
//   "Bill Pascrell	U.S. House New Jersey District 9",
//   "Robert J. Wittman	U.S. House Virginia District 1",
//   "Kenny Marchant	U.S. House Texas District 24",
//   "Carolyn B. Maloney	U.S. House New York District 12",
//   "Alcee Hastings	U.S. House Florida District 20",
//   "Mac Thornberry	U.S. House Texas District 13",
//   "Pete Stauber	U.S. House Minnesota District 8",
//   "Ben Ray Luján	U.S. House New Mexico District 3",
//   "Mike Gallagher	U.S. House Wisconsin District 8",
//   "Gerald Edward Connolly	U.S. House Virginia District 11",
//   "Rick Allen	U.S. House Georgia District 12",
//   "Terri Sewell	U.S. House Alabama District 7",
//   "Jenniffer Gonzalez-Colon	U.S. House Puerto Rico At-large District",
//   "Mike Johnson	U.S. House Louisiana District 4",
//   "Daniel Crenshaw	U.S. House Texas District 2",
//   "Kim Schrier	U.S. House Washington District 8",
//   "Doris Matsui	U.S. House California District 6",
//   "Hakeem Jeffries	U.S. House New York District 8",
//   "Matt Cartwright	U.S. House Pennsylvania District 8",
//   "F. James Sensenbrenner	U.S. House Wisconsin District 5",
//   "Mike Rogers	U.S. House Alabama District 3",
//   "Alfred Lawson	U.S. House Florida District 5",
//   "Collin Peterson	U.S. House Minnesota District 7",
//   "Sean Casten	U.S. House Illinois District 6",
//   "Jimmy Panetta	U.S. House California District 20",
//   "Eddie Bernice Johnson	U.S. House Texas District 30",
//   "Norma Torres	U.S. House California District 35",
//   "Michael Turner	U.S. House Ohio District 10",
//   "Betty McCollum	U.S. House Minnesota District 4",
//   "David McKinley	U.S. House West Virginia District 1",
//   "Scott Perry	U.S. House Pennsylvania District 10",
//   "Paul Tonko	U.S. House New York District 20",
//   "Lucille Roybal-Allard	U.S. House California District 40",
//   "Darin LaHood	U.S. House Illinois District 18",
//   "Jackie Speier	U.S. House California District 14",
//   "Charles J. Fleischmann	U.S. House Tennessee District 3",
//   "Sheila Jackson Lee	U.S. House Texas District 18",
//   "Jan Schakowsky	U.S. House Illinois District 9",
//   "Aumua Amata Radewagen	U.S. House American Samoa At-large District",
//   "Sam Graves	U.S. House Missouri District 6",
//   "Chip Roy	U.S. House Texas District 21",
//   "William Lacy Clay	U.S. House Missouri District 1",
//   "David Scott	U.S. House Georgia District 13",
//   "Susan Brooks	U.S. House Indiana District 5",
//   "Greg Steube	U.S. House Florida District 17",
//   "Rob Woodall	U.S. House Georgia District 7",
//   "Raul Ruiz	U.S. House California District 36",
//   "Suzan DelBene	U.S. House Washington District 1",
//   "Louis B. Gohmert Jr.	U.S. House Texas District 1",
//   "Lois Frankel	U.S. House Florida District 21",
//   "Nita Lowey	U.S. House New York District 17",
//   "Denny Heck	U.S. House Washington District 10",
//   "Elaine Luria	U.S. House Virginia District 2",
//   "Adam Kinzinger	U.S. House Illinois District 16",
//   "Tim Ryan	U.S. House Ohio District 13",
//   "Randy Weber	U.S. House Texas District 14",
//   "Alexandria Ocasio-Cortez	U.S. House New York District 14",
//   "Jim Jordan	U.S. House Ohio District 4",
//   "Gregory W. Meeks	U.S. House New York District 5",
//   "Theodore E. Deutch	U.S. House Florida District 22",
//   "Gregory Murphy	U.S. House North Carolina District 3",
//   "Ruben Gallego	U.S. House Arizona District 7",
//   "Abigail Spanberger	U.S. House Virginia District 7",
//   "Neal Dunn	U.S. House Florida District 2",
//   "D. Adam Smith	U.S. House Washington District 9",
//   "Colin Allred	U.S. House Texas District 32",
//   "Raul Grijalva	U.S. House Arizona District 3",
//   "Steve Cohen	U.S. House Tennessee District 9",
//   "Emanuel Cleaver	U.S. House Missouri District 5",
//   "Bryan Steil	U.S. House Wisconsin District 1",
//   "Austin Scott	U.S. House Georgia District 8",
//   "Garret Graves	U.S. House Louisiana District 6",
//   "John Garamendi	U.S. House California District 3",
//   "Debbie Lesko	U.S. House Arizona District 8",
//   "Tom O'Halleran	U.S. House Arizona District 1",
//   "Troy Balderson	U.S. House Ohio District 12",
//   "Rashida Tlaib	U.S. House Michigan District 13",
//   "Katherine Clark	U.S. House Massachusetts District 5",
//   "Steve Chabot	U.S. House Ohio District 1",
//   "Donna Shalala	U.S. House Florida District 27",
//   "Mikie Sherrill	U.S. House New Jersey District 11",
//   "Stephen Lynch	U.S. House Massachusetts District 8",
//   "Earl Carter	U.S. House Georgia District 1",
//   "Mike Quigley	U.S. House Illinois District 5",
//   "Kevin McCarthy	U.S. House California District 23",
//   "Michael Doyle	U.S. House Pennsylvania District 18",
//   "Ann Wagner	U.S. House Missouri District 2",
//   "Chellie Pingree	U.S. House Maine District 1",
//   "John Rutherford	U.S. House Florida District 4",
//   "Kevin Brady	U.S. House Texas District 8",
//   "Robin Kelly	U.S. House Illinois District 2",
//   "Richard Neal	U.S. House Massachusetts District 1",
//   "Martha Roby	U.S. House Alabama District 2",
//   "Steve Scalise	U.S. House Louisiana District 1",
//   "Paul Cook	U.S. House California District 8",
//   "Glenn Grothman	U.S. House Wisconsin District 6",
//   "Kathleen Rice	U.S. House New York District 4",
//   "John Rose	U.S. House Tennessee District 6",
//   "Antonio Delgado	U.S. House New York District 19",
//   "Brian Fitzpatrick	U.S. House Pennsylvania District 1",
//   "Doug LaMalfa	U.S. House California District 1",
//   "Clay Higgins	U.S. House Louisiana District 3",
//   "Donald Sternoff Beyer Jr.	U.S. House Virginia District 8",
//   "Dan Newhouse	U.S. House Washington District 4",
//   "Hal Rogers	U.S. House Kentucky District 5",
//   "Maxine Waters	U.S. House California District 43",
//   "John A. Yarmuth	U.S. House Kentucky District 3",
//   "Russ Fulcher	U.S. House Idaho District 1",
//   "Raja Krishnamoorthi	U.S. House Illinois District 8",
//   "Greg Pence	U.S. House Indiana District 6",
//   "Sylvia Garcia	U.S. House Texas District 29",
//   "Robert C. Scott	U.S. House Virginia District 3",
//   "Tim Burchett	U.S. House Tennessee District 2",
//   "Sanford Bishop Jr.	U.S. House Georgia District 2",
//   "Gwen Moore	U.S. House Wisconsin District 4",
//   "Alma Adams	U.S. House North Carolina District 12",
//   "Annie Kuster	U.S. House New Hampshire District 2",
//   "Derek Kilmer	U.S. House Washington District 6",
//   "Xochitl Torres Small	U.S. House New Mexico District 2",
//   "Tom Suozzi	U.S. House New York District 3",
//   "Alan Lowenthal	U.S. House California District 47",
//   "Joe Wilson	U.S. House South Carolina District 2",
//   "Rosa L. DeLauro	U.S. House Connecticut District 3",
//   "David Trone	U.S. House Maryland District 6",
//   "Vicky Hartzler	U.S. House Missouri District 4",
//   "Dan Kildee	U.S. House Michigan District 5",
//   "John Shimkus	U.S. House Illinois District 15",
//   "Ann Kirkpatrick	U.S. House Arizona District 2",
//   "Scott DesJarlais	U.S. House Tennessee District 4",
//   "Bob Latta	U.S. House Ohio District 5",
//   "Jimmy Gomez	U.S. House California District 34",
//   "Ted Yoho	U.S. House Florida District 3",
//   "Doug Lamborn	U.S. House Colorado District 5",
//   "Vern Buchanan	U.S. House Florida District 16",
//   "Mark Green	U.S. House Tennessee District 7",
//   "Kelly Armstrong	U.S. House North Dakota At-large District",
//   "Bill Keating	U.S. House Massachusetts District 9",
//   "Ami Bera	U.S. House California District 7",
//   "Eleanor Holmes Norton	U.S. House Non-Voting Delegate District of Columbia",
//   "Fred Upton	U.S. House Michigan District 6",
//   "Frank Pallone	U.S. House New Jersey District 6",
//   "Jim Banks	U.S. House Indiana District 3",
//   "Mark Walker	U.S. House North Carolina District 6",
//   "Albio Sires	U.S. House New Jersey District 8",
//   "Elissa Slotkin	U.S. House Michigan District 8",
//   "Peter Welch	U.S. House Vermont At-large District",
//   "Tom Tiffany	U.S. House Wisconsin District 7",
//   "Eric Swalwell	U.S. House California District 15",
//   "Ben McAdams	U.S. House Utah District 4",
//   "Ayanna Pressley	U.S. House Massachusetts District 7",
//   "Michael K. Simpson	U.S. House Idaho District 2",
//   "Filemon Vela	U.S. House Texas District 34",
//   "Joyce Beatty	U.S. House Ohio District 3",
//   "Steven Horsford	U.S. House Nevada District 4",
//   "Ro Khanna	U.S. House California District 17",
//   "Haley Stevens	U.S. House Michigan District 11",
//   "Angie Craig	U.S. House Minnesota District 2",
//   "Debra Haaland	U.S. House New Mexico District 1",
//   "Jamie Raskin	U.S. House Maryland District 8",
//   "Brad Sherman	U.S. House California District 30",
//   "Jodey Arrington	U.S. House Texas District 19",
//   "Joaquin Castro	U.S. House Texas District 20",
//   "Mike Kelly	U.S. House Pennsylvania District 16",
//   "Rick Larsen	U.S. House Washington District 2",
//   "Doug Collins	U.S. House Georgia District 9",
//   "Jody Hice	U.S. House Georgia District 10",
//   "Lou Correa	U.S. House California District 46",
//   "Veronica Escobar	U.S. House Texas District 16",
//   "Earl Blumenauer	U.S. House Oregon District 3",
//   "John Moolenaar	U.S. House Michigan District 4",
//   "Virginia Foxx	U.S. House North Carolina District 5",
//   "Ken Buck	U.S. House Colorado District 4",
//   "Mark DeSaulnier	U.S. House California District 11",
//   "Liz Cheney	U.S. House Wyoming At-large District",
//   "Ronald James Kind	U.S. House Wisconsin District 3",
//   "Diana DeGette	U.S. House Colorado District 1",
//   "Mike Thompson	U.S. House California District 5",
//   "Chris Stewart	U.S. House Utah District 2",
//   "Greg Walden	U.S. House Oregon District 2",
//   "Jared Huffman	U.S. House California District 2",
//   "Barbara Lee	U.S. House California District 13",
//   "Peter Visclosky	U.S. House Indiana District 1",
//   "Peter King	U.S. House New York District 2",
//   "Larry Bucshon	U.S. House Indiana District 8",
//   "Lloyd Doggett	U.S. House Texas District 35",
//   "Chris Smith	U.S. House New Jersey District 4",
//   "Pete Aguilar	U.S. House California District 31",
//   "Bradley Byrne	U.S. House Alabama District 1",
//   "Lance Gooden	U.S. House Texas District 5",
//   "Michael Guest	U.S. House Mississippi District 3",
//   "Devin Nunes	U.S. House California District 22",
//   "John Katko	U.S. House New York District 24",
//   "Sean Maloney	U.S. House New York District 18",
//   "Dusty Johnson	U.S. House South Dakota At-large District",
//   "Andy Barr	U.S. House Kentucky District 6",
//   "Denver Lee Riggleman III	U.S. House Virginia District 5",
//   "Abby Finkenauer	U.S. House Iowa District 1",
//   "Joe Courtney	U.S. House Connecticut District 2",
//   "Brian Babin	U.S. House Texas District 36",
//   "Kurt Schrader	U.S. House Oregon District 5",
//   "Linda Sánchez	U.S. House California District 38",
//   "Jim Baird	U.S. House Indiana District 4",
//   "John Joyce	U.S. House Pennsylvania District 13",
//   "Darren Soto	U.S. House Florida District 9",
//   "Alexander Mooney	U.S. House West Virginia District 2",
//   "Michael McCaul	U.S. House Texas District 10",
//   "Dutch Ruppersberger	U.S. House Maryland District 2",
//   "Mike Levin	U.S. House California District 49",
//   "Mike Garcia	U.S. House California District 25",
//   "Lisa Blunt Rochester	U.S. House Delaware At-large District",
//   "Tom Cole	U.S. House Oklahoma District 4",
//   "David Kustoff	U.S. House Tennessee District 8",
//   "Josh Gottheimer	U.S. House New Jersey District 5",
//   "Robert Aderholt	U.S. House Alabama District 4",
//   "Matt Gaetz	U.S. House Florida District 1",
//   "Tim Walberg	U.S. House Michigan District 7",
//   "Ralph Norman	U.S. House South Carolina District 5",
//   "Brenda Lawrence	U.S. House Michigan District 14",
//   "Tom Reed	U.S. House New York District 23",
//   "French Hill	U.S. House Arkansas District 2",
//   "Steve Womack	U.S. House Arkansas District 3",
//   "Michael Cloud	U.S. House Texas District 27",
//   "Jeff Van Drew	U.S. House New Jersey District 2"];
    var items = [];
    if(this.props.approvedDebators != null){
      items = Object.keys(this.props.approvedDebators).map((item)=> {
          return (
            {
            name: this.props.approvedDebators[item].firstName + " " + this.props.approvedDebators[item].lastName,
            email: this.props.approvedDebators[item].email,
            id: this.props.approvedDebators[item]._id,
          }
          )
        })
    }

    //var test = [{name: "string"}]

    const { value } = e.target;

    let data = [];
    if (value!= '' && value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      data = items.sort().filter((v) => { return (regex.test(v.name))});
    }
    this.setState(() => ({ data, text: value, collapse: true }));
  }

  clickedItem = (item) => {
  //  console.log(item);
    this.setState({text: item.name, collapse: false, resetNeeded: true})
    if(this.props.changePerson1 != null ){
      this.props.changePerson1(item)
    }
    if(this.props.changePerson2 !=null) {
      this.props.changePerson2(item)
    }
  }

  renderData = () => {
    const { data } = this.state;
  //  console.log(data)
    if(data==null || this.state.text === ''){
      return null;
    }
    else if (data.length === 0 || this.state.text === '' || !this.state.collapse) {
      return null;
    }
    return (
      <ul>
        {data.map((item) => <li className="dropDown" onClick={() => {this.clickedItem(item)}}>{item.name}</li>)}
      </ul>
    );
  }

  // handleSubmit = event => {
  //   alert(`${this.state.text}`)
  // }

  render() {

    if(this.props.textFromParent === '' && this.state.text!=null && this.state.resetNeeded){
      this.setState({text: '', resetNeeded:false})
    }
    return (
      <div class="publicfigurerequestBoxtext">
        <div class="searchrow">
        <img width="27px" height="30px" className="personImage" src={require("./profilesearch.png")} />
              <div class="formcss">

                    <input className="formcss"
                    value={this.state.text}
                    onChange={this.onTextChanged}
                    type="text"
                    name="name"
                    autocomplete="off"
                    required/>
                    <label for="name" class= "label-name">
                        <span class="content-name">Public Figure</span>
                    </label>

             </div>
      </div>

      <div style = {{marginTop: '20px'}}>
        {this.renderData()}
     </div>

    </div>
    );
  }
}

function mapStateToProps(state) {
  return { approvedDebators: state.approvedDebators.all };
}

export default withRouter(connect(mapStateToProps, { getApprovedDebators })(RequestButtons));
