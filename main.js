const results = document.querySelector("#results");

async function asyncFetch(value) {
  console.log(value);
  const res = await fetch(`https://swapi.dev/api/${value ? value + "/" : ""}`);
  /*
  *  The global fetch() method starts the process of fetching a resource from the network, 
  *  returning a promise which is fulfilled once the response is available.
  *  The promise resolves to the Response object representing the response to your request. 
  *  The promise does not reject on HTTP errors — it only rejects on network errors. You must use 
  *  then handlers to check for HTTP errors.
  */
  const data = await res.json(); //convert the data that api gave me to json
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  // films
  if (value === "films") {
    data.results.forEach(item => {
      console.log(item);
      output += `
            <div class="card p-3 m-3" style="opacity:.8 ">
                <img src="./films/${item.title}.jpg" class="img-rounded mx-auto d-block"  width="304" height="500">
                <h4 class="card-title text-center">${item.title}</h4>
                <div class="card-content">
                    <strong>Producer:</strong> ${item.producer}
                    <br> 
                    <strong>Director:</strong> ${item.director}
                    <p>
                    <strong>Release Date:</strong> ${item.release_date}
                    <p>
                    <p class="text-center">${item.opening_crawl}</p>
                </div>
            </div>
        `;
      results.innerHTML = output;
    });
  }
  // people
  if (value === "people") {
    data.results.forEach(item => {
      console.log(item);
      output += ` 
            <div class="card p-3 m-3 " style="opacity:.8">
                <img src="./people/${item.name}.jpg" class="rounded-circle mx-auto d-block" alt="Cinque Terre" width="200" height="200">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <strong>Height:</strong> ${item.height}
                    <br> 
                    <strong>Birth Year:</strong>${item.birth_year}
                    <p>
                    <strong>Skin Color:</strong>: ${item.skin_color}
                </div>
            </div>
        `;
      results.innerHTML = output;
    });
  }
  // vehicles
  if (value === "vehicles") {
    var nameVehicle = " ";
    data.results.forEach(item => {
      console.log(item);
      if(item.name == "TIE/LN starfighter")
      {
        nameVehicle = "TIE-LN starfighter";
        output += `
            <div class="card p-3 m-3" style="opacity:.8">
                <img class="img-fluid mx-auto d-block" src="./vehicles/${nameVehicle}.jpg" alt="Chania" width="460" height="345">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underline">Capacity</span>: ${item.cargo_capacity}
                    <br>
                    <span style="text-decoration:underline">Model</span>: ${item.model}
                    <br>
                    <span style="text-decoration:underline">Manufacturer</span>: ${item.manufacturer}  
                    <br>
                    <span style="text-decoration:underline">Vehicle Class</span>: ${item.vehicle_class}
                    <br>
                </div>
            </div>
        `;
      results.innerHTML = output;
      }else
      {
        output += `
              <div class="card p-3 m-3" style="opacity:.8">
                  <img class="img-fluid mx-auto d-block" src="./vehicles/${item.name}.jpg" alt="Chania" width="460" height="345">
                  <h4 class="card-title text-center">${item.name}</h4>
                  <div class="card-content">
                      <span style="text-decoration:underline">Capacity</span>: ${item.cargo_capacity}
                      <br>
                      <span style="text-decoration:underline">Model</span>: ${item.model}
                      <br>
                      <span style="text-decoration:underline">Manufacturer</span>: ${item.manufacturer}
                      <br>
                      <span style="text-decoration:underline">Vehicle Class</span>: ${item.vehicle_class}
                      <br>
                  </div>
              </div>
          `;
        results.innerHTML = output;
      }
    });
  }
  // Planets
  if (value === "planets") {
    data.results.forEach(item => {
      console.log(item);
      
      output += /*This is a template litterals to insert HTML*/ `
            <div class="card p-3 m-3" style="opacity:.8">
                <img src="./planets/${item.name}.jpg" class="rounded-circle mx-auto d-block" alt="Cinque Terre" width="200" height="200">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underline">Diameter</span>: ${item.diameter}
                    <br>
                    <span style="text-decoration:underline">Climate</span>: ${item.climate}
                    <br>
                    <span style="text-decoration:underline">Population</span>: ${item.population}
                    <br>
                    <span style="text-decoration:underline">Terrain</span>: ${item.terrain}
                    <br>
                </div>
            </div>
        `;
      results.innerHTML = output;
    });
  }
  //species
  if (value === "species") {
    data.results.forEach(item => {
      console.log(item);
      output += `
            <div class="card p-3 m-3" style="opacity:.8">
                <img src="./species/${item.name}.jpg" class="img-rounded mx-auto d-block"  width="154" height="200">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <strong>Classification:</strong> ${item.classification}
                    <br> 
                    <strong>Average_height:</strong>${item.average_height}
                    <br>
                    <strong>Skin Colors:</strong>: ${item.skin_colors}
                    <br>
                    <strong>Language:</strong>: ${item.language}
                </div>
            </div>
        `;
      results.innerHTML = output;
    });
  }
  //starships
  if (value === "starships") {
    data.results.forEach(item => {
      console.log(item);
      output += `
            <div class="card p-3 m-3" style="opacity:.8">
                <img src="./starships/${item.name}.jpg" class="img-rounded mx-auto d-block"  width="304" height="200">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <strong>Passengers:</strong> ${item.passengers}
                    <br> 
                    <strong>Length:</strong> ${item.length}
                    <br> 
                    <strong>Manufacturer:</strong> ${item.manufacturer}
                    <br> 
                    <strong>Model:</strong> ${item.model}
                </div>
            </div>
        `;
      results.innerHTML = output;
    });
  }
}

document.querySelector("#buttons").addEventListener("click",
 e => 
 {
   /*
   * asyncFetch: Makes a function return a Promise
   * trim(): Remove whitespace from both sides of a string
   * toLowerCase(): Convert the string to lowercase letters
   */
  asyncFetch(e.target.textContent.trim().toLowerCase());
 }
);