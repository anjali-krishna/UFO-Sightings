// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTime = document.querySelector("#datetime");
var $city = document.querySelector("#city");
var $state = document.querySelector("#state");
var $country = document.querySelector("#country");
var $shape = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset")

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click",handleResetButtonClick);

// Set filteredData to dataSet initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      // Get get the current address object and its fields
      var data = filteredData[i];
      var fields = Object.keys(data);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the data object, create a new cell at set its inner text to be the current value at the current data's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }

function handleSearchButtonClick(event) {
    event.preventDefault();
    // Format the user's search by removing leading and trailing whitespace
    var filterDate = $dateTime.value.trim();
    if (filterDate != ""){
        // Set filteredData to an array of all datas whose "date" matches the filter
        filteredData = filteredData.filter(function(data) {
            var dataDate = data.datetime;
            return dataDate === filterDate;
        });
    };
    
    // Format the user's search by removing leading and trailing whitespace
    var filterCity = $city.value.trim().toLowerCase();
    if (filterCity != ""){
        // Set filteredData to an array of all addresses whose "city" matches the filter
        filteredData = filteredData.filter(function(data) {
        var dataCity = data.city.toLowerCase();
        return dataCity === filterCity;
        });
    };
    
    // Format the user's search by removing leading and trailing whitespace
    var filterState = $state.value.trim().toLowerCase();
    if (filterState != ""){
        // Set filteredData to an array of all addresses whose "state" matches the filter
        filteredData = filteredData.filter(function(data) {
        var dataState = data.state.toLowerCase();
        return dataState === filterState;
        });
    };

    // Format the user's search by removing leading and trailing whitespace
    var filterCountry = $country.value.trim().toLowerCase();
    if (filterCountry != ""){
        // Set filteredData to an array of all datas whose "country" matches the filter
        filteredData = filteredData.filter(function(data) {
        var dataCountry = data.country.toLowerCase();
        return dataCountry === filterCountry;
        });
    };

    // Format the user's search by removing leading and trailing whitespace
    var filterShape = $shape.value.trim().toLowerCase();
    if (filterShape != ""){
        // Set filteredData to an array of all datas whose "shape" matches the filter
        filteredData = filteredData.filter(function(data) {
        var dataShape = data.shape.toLowerCase();
        return dataShape === filterShape;
        });
    };
    renderTable(); 
}

function handleResetButtonClick(){
    window.location.reload()
}

// Render the table for the first time on page load
renderTable();
function CountRows() {
    var totalRowCount = 0;
    var rowCount = 0;
    var table = document.getElementById("customers");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
        totalRowCount++;
        if (rows[i].getElementsByTagName("td").length > 0) {
            rowCount++;
        }
    }
    var message = "Total Row Count: " + totalRowCount;
    message += "\nRow Count: " + rowCount;
    // alert(message);
}
CountRows();


