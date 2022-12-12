// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
getAllPosts = async () => {
    response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {

        data.forEach((user) => 
        {
            let table = document.getElementById("table");
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            cell1.innerHTML = user.title;
        })
    }
    )
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
getAllUsers = async () => {
    response = await fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => {
        return response.json();
    })
    .then(data => {

    data.forEach((user) => 
    {
        let table = document.getElementById("table");
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerHTML = user.username;
    })

    }
    )
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.
getComments = async (postID) => {
    response = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(data => {

    data.forEach((user) => 
    {
        if (user.postId == postID)
        {
            let table = document.getElementById("table");
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            cell1.innerHTML = user.body;
        }
    })

    }
    )
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.
getUser = async (userID) => {
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {

    data.forEach((user) => 
    {
        if (user.id == userID)
        {
            let table = document.getElementById("table");
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            let cell8 = row.insertCell(7);
            let cell9 = row.insertCell(8);
            let cell10 = row.insertCell(9);
            let cell11 = row.insertCell(10);
            let cell12 = row.insertCell(11);
            let cell13 = row.insertCell(12);
            let cell14 = row.insertCell(13);
            
            cell1.innerHTML = user.name;
            cell2.innerHTML = user.username;
            cell3.innerHTML = user.email;
            cell4.innerHTML = user.address.street;
            cell5.innerHTML = user.address.suite;
            cell6.innerHTML = user.address.city;
            cell7.innerHTML = user.address.zipcode;
            cell8.innerHTML = user.address.geo.lat;
            cell9.innerHTML = user.address.geo.lng;
            cell10.innerHTML = user.phone;
            cell11.innerHTML = user.website;
            cell12.innerHTML = user.company.name;
            cell13.innerHTML = user.company.catchPhrase;
            cell14.innerHTML = user.company.bs;
        }
    })

    }
    )
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.    
getTodosForUser = async (userID) => {
    response = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        return response.json();
    })
    .then(data => {

    data.forEach((user) => 
    {
        if (user.id == userID)
        {
            data.forEach((user) =>
            {
                let table = document.getElementById("table");
                let row = table.insertRow();
                let cell1 = row.insertCell(0);
                cell1.innerHTML = user.title;
            })
        }
    })

    }
    )
}

