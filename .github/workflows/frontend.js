// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 13);

// Add a layer for campus buildings
var buildingsLayer = L.geoJSON(buildingsData).addTo(map);

// Add a search bar to find specific locations
var searchInput = document.getElementById('search-input');
var searchResultsList = document.getElementById('search-results');

searchInput.addEventListener('input', debounce(searchLocations, 200));

function searchLocations() {
  var query = searchInput.value.trim();
  if (query === '') {
    return;
  }
  var searchResults = [];
  for (var i = 0; i < locationsData.length; i++) {
    if (locationsData[i].name.toLowerCase().includes(query.toLowerCase())) {
      searchResults.push(locationsData[i]);
    }
  }
  displaySearchResults(searchResults);
}

function displaySearchResults(searchResults) {
  searchResultsList.innerHTML = '';
  for (var i = 0; i < searchResults.length; i++) {
    var searchResult = searchResults[i];
    var listItem = document.createElement('li');
    listItem.textContent = searchResult.name;
    listItem.addEventListener('click', function() {
      map.setView([searchResult.latitude, searchResult.longitude], 18);
    });
    searchResultsList.appendChild(listItem);
  }
}

function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
