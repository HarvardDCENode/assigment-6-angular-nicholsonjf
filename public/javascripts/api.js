// wrap in IIFE to control scope
(async function(){

    const baseURL = ''; //  for development, it's http://localhost:4000
 
    async function testAPIs(){ 
     // List trips.
     const list = await callAPI('GET', '/api/trips', null, null);
     console.log('\n\n***************************\nlist trips:');
     console.log(list);
     // Data for new trip.
     let data = {
      "name": "British Virgin Islands",
      "description": "Graduation trip with friends",
      "startDate": "2023-05-23",
      "endDate": "2023-05-30"
    }
    // Create trip.
    var trip = await callAPI('POST', '/api/trips', null, data);
    console.log('\n\n***************************\ncreate trip:');
    console.log(trip);
    // Find trip.
    trip = await callAPI('GET','/api/trips/'+trip._id, null, null);
    console.log('\n\n***************************\nfind trip:');
    console.log(trip);
    // Update trip.
    trip.tripId = trip._id;
    trip.description += ' appended by the AJAX API ';
    trip = await callAPI('POST','/api/trips/', null, trip);
    console.log('\n\n***************************\nupdate trip:');
    console.log(trip);
    // Find the updated trip.
    trip = await callAPI('GET','/api/trips/'+trip._id, null, null);
    console.log('\n\n***************************\nfind trip (should contain updated description field):');
    console.log(trip);
    // Delete trip.
    trip = await callAPI('DELETE', '/api/trips/'+trip._id, null, null);
    console.log('\n\n***************************\ndelete trip response:');
    console.log(trip);
    // List trips to show trip was deleted.
    const listAgain = await callAPI('GET', '/api/trips', null, null);
    console.log('\n\n***************************\nlist trips again to show trip was deleted:');
    console.log(listAgain);
  }
 
   async function callAPI(method, uri, params, body){
     jsonMimeType = {
       'Content-type':'application/json'
     }
     try{
       /*  Set up our fetch.
        *   'body' to be included only when method is POST
        *   If 'PUT', we need to be sure the mimetype is set to json
        *      (so bodyparser.json() will deal with it) and the body
        *      will need to be stringified.
        *   '...' syntax is the ES6 spread operator.
        *      It assigns new properties to an object, and in this case
        *      lets us use a conditional to create, or not create, a property
        *      on the object. (an empty 'body' property will cause an error
        *      on a GET request!)
        */
       var options = {
        method: method
       };
       if ( method=='POST' ) {
        options.body = JSON.stringify(body);
        options.headers = jsonMimeType;
       }
       var response = await fetch(baseURL + uri, options);
       // response.json() parses the textual JSON data to a JSON object. 
       // Returns a Promise that resolves with the value of the JSON object 
       //  which you can pick up as the argument passed to the .then()
       return response.json(); 
     }catch(err){
       console.error(err);
       return "{'status':'error'}";
     }
   }
 
   // Calls our test function when we click the button
   //  afer validating that there's a file selected.
   document.querySelector('#testme').addEventListener("click", ()=>{
      testAPIs();
   });
 })();
 