# emulated-weather-sensor-api
A server to store data in database from emulated-weather-sensors sent over websockets

Make sure that you have <a href="https://github.com/kaustubhghadge/emulated-weather-sensor"> emulated-weather-sensor</a> up and running.

<h2>Pre-requisites</h2>
Make sure you've MongoDB installed and setup


<h2>Installation</h2>
Clone the repository
<ul>
  <li> Run <code>cd emulated-weather-sensor-api</code></li>
  <li> Run <code> npm install </code></li>
  <li> Run <code> npm start </code></li>
</ul>


<h3>Notes</h3>
<ul>
  <li> Changes for port can be made in <code>env.js</code> file.</li> 
  <li>Currently serving on port - 8080,  at <code>/weather</code> endpoint.</li>
</ul>
