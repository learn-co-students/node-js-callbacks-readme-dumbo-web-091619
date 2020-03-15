let successCallback = (data) => {
    // Display results on the page.
}

let fetchResults = (searchTerm) => {
    $.ajax({
        method: 'GET',
        url: 'http://www.googleapis.com/books/v1/volumes?q=' + searchTerm,
        success: successCallback,
    })
}

fetchResults('peanut butter sandwich')