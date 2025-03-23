function showSuggestions() {
    var input = document.getElementById("searchInput").value;
    var dropdown = document.getElementById("dropdown");

    if (input.length > 0) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdown");
    var searchContainer = document.querySelector(".search-container");

    if (!searchContainer.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
function redirectToResult() {
    var selectedPlace = document.getElementById("destination").value;
    if (selectedPlace) {
        window.location.href = "search_result.html"; // Redirects to searchresult.html
    } else {
        alert("Please select a destination.");
    }
}