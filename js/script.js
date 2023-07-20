//  man base section

const heading = `<h1> MANBASE SOLUTIONS</br> Overview</h1>`;
const para = `<p>Welcome to our Manbase Solutions portal, the central hub for all your human resources needs. Our Manbase website is designed to streamline and simplify various HR processes, providing employees and managers with easy access to essential tools and information. Whether you're an employee seeking assistance, a manager looking to support your team, or an HR professional seeking resources, our portal is here to help.</p>`;

const mblink = `<a href="https://snazzy-basbousa-28a3dd.netlify.app">Visit ManBase Solution</a>`;

// hotel section
const heading2 = `<h1> HOTEL HOPIA PALACE</br> Overview</h1>`;

const para2 = `<p>Discover an unparalleled hospitality experience at Hotel Hopia Palace. Nestled in the heart of asia, our Hotel Hopia Palace offers a harmonious blend of luxurious accommodations, exceptional amenities, and warm hospitality. Whether you're traveling for business or leisure, our aim is to create memorable moments that will make you feel at home while immersing you in the unique charm of our city.</p>`;

const hlink = `<a href="https://marvelous-cucurucho-b6f7df.netlify.app">Visit Hotel Hopia Palace</a>`;


// kodegoledger section
const heading3 = `<h1> KODELEDGER</br> Overview</h1>`;

const para3 = `<p>Welcome to "KodeGoledger," your go-to blog for all things related to manpower and human resources. Our mission is to provide valuable insights, expert advice, and practical tips to help individuals and businesses optimize their workforce and create thriving workplaces. Whether you're an HR professional, a manager, or an employee, our blog aims to empower you with the knowledge and tools you need to succeed.</p>`;

const kodelink = `<a href="https://extraordinary-baklava-ae6e2e.netlify.app">Visit KodeGoledger</a>`;

// newsgrid section
const heading4 = `<h1> NEWSGRID</br> Overview</h1>`;

const para4 = `<p>Welcome to NewsGrid, your one-stop destination for the latest and most comprehensive sports news coverage. We are dedicated to providing sports enthusiasts, athletes, and fans with real-time updates, expert analysis, and engaging content from the thrilling world of sports. Whether you're a die-hard fan of a specific team, a casual follower of multiple sports, or an athlete seeking inspiration, SportsBuzz has something for everyone.</p>`;

const newslink = `<a href="https://glistening-banoffee-0d5f13.netlify.app">Visit NewsGrid</a>`;


function manBase(){

  document.getElementById('heading1').innerHTML = `${heading}`;
  // document.getElementById('heading1').style.margin = "12px";
  document.getElementById('heading1').style.padding = "20px";

  document.getElementById('par').innerHTML = `${para}`;
  document.getElementById('par').style.margin = "22px";
  document.getElementById('par').padding = "22px";
  document.getElementById('par').style.fontSize = "22px";

  document.getElementById('btn').innerHTML = `${mblink}`;
  document.getElementById('btn').style.backgroundColor = 'tomato';
  document.getElementById('btn').style.color = "#ffff";
  document.getElementById('btn').style.margin = "22px";
  document.getElementById('btn').style.padding = "22px";
  document.getElementById('btn').style.width = "282px";
  document.getElementById('btn').style.textAlign = "center";
}

// hotel section


function hotel(){
  document.getElementById('heading1').innerHTML = `${heading2}`;
  // document.getElementById('heading1').style.margin = "12px";
  document.getElementById('heading1').style.padding = "20px";

  document.getElementById('par').innerHTML = `${para2}`;
  document.getElementById('par').style.margin = "22px";
  document.getElementById('par').padding = "22px";
  document.getElementById('par').style.fontSize = "22px";

  document.getElementById('btn').innerHTML = `${hlink}`;
  document.getElementById('btn').style.backgroundColor = 'tomato';
  document.getElementById('btn').style.color = "#ffff";
  document.getElementById('btn').style.margin = "22px";
  document.getElementById('btn').style.padding = "22px";
  document.getElementById('btn').style.width = "282px";
  document.getElementById('btn').style.textAlign = "center";
 
}

// kodeledger section 

function kodeledger(){
  document.getElementById('heading1').innerHTML = `${heading3}`;
  // document.getElementById('heading1').style.margin = "12px";
  document.getElementById('heading1').style.padding = "20px";

  document.getElementById('par').innerHTML = `${para3}`;
  document.getElementById('par').style.margin = "22px";
  document.getElementById('par').padding = "22px";
  document.getElementById('par').style.fontSize = "22px";

  document.getElementById('btn').innerHTML = `${kodelink}`;
  document.getElementById('btn').style.backgroundColor = 'tomato';
  document.getElementById('btn').style.color = "#ffff";
  document.getElementById('btn').style.margin = "22px";
  document.getElementById('btn').style.padding = "22px";
  document.getElementById('btn').style.width = "282px";
  document.getElementById('btn').style.textAlign = "center";
 
}

function news(){
  document.getElementById('heading1').innerHTML = `${heading4}`;
  // document.getElementById('heading1').style.margin = "12px";
  document.getElementById('heading1').style.padding = "20px";

  document.getElementById('par').innerHTML = `${para4}`;
  document.getElementById('par').style.margin = "22px";
  document.getElementById('par').padding = "22px";
  document.getElementById('par').style.fontSize = "22px";

  document.getElementById('btn').innerHTML = `${newslink}`;
  document.getElementById('btn').style.backgroundColor = 'tomato';
  document.getElementById('btn').style.color = "#ffff";
  document.getElementById('btn').style.margin = "22px";
  document.getElementById('btn').style.padding = "22px";
  document.getElementById('btn').style.width = "282px";
  document.getElementById('btn').style.textAlign = "center";
 
}