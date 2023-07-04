
document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault()
    // Get the input values
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;
  
    // Create an object with the values
    var data = {
      input1: input1Value,
      input2: input2Value
    };
  
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set the request URL and method
    xhr.open('POST', 'http://localhost:3000/sendData', true);
  
    // Set the request header if needed
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    // Convert the data object to JSON format
    var jsonData = JSON.stringify(data);
  
    // Set the callback function for when the request is complete
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Handle the server's response if needed
        console.log(xhr.responseText);
      } else {
        // Handle errors
        console.error('Request failed. Status: ' + xhr.status);
      }
    };
  
    // Send the request with the JSON data
    xhr.send(jsonData);
  });