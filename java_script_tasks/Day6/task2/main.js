

// var id = document.getElementById("id");
// var nam = document.getElementById("name");
// var eamil = document.getElementById("email");


var user;
function addClient()
{
    var tablBody = document.getElementsByTagName("tbody")[0];
    var count =1;
    
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users/");
    xhr.send("");
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
            user = JSON.parse(xhr.response);
        console.log(user);
            for(var i in user){
            var row = document.createElement("tr");
        row.innerHTML= 
        `
            
            <td>${user[i].id}</td>    
            <td>${user[i].name}</td>    
            <td>${user[i].email}</td>    
            <td><span class='view' onclick='viewDetails(${user[i].id})'>View Details</span></td>    
            
        `
        tablBody.appendChild(row);
}
}
        }}
}

function viewDetails(userId)
{ 

    var xhr = new XMLHttpRequest();
    xhr.open("GET",`https://jsonplaceholder.typicode.com/users/${userId}`);
    xhr.send("");
    xhr.onreadystatechange = function(){
        var div =document.getElementsByTagName("div")[0];
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                user = JSON.parse(xhr.response);

        {
            div.innerHTML = 
            `
                
                    
                <p>Name: ${user.name}</p>    
                <p>Eamil: ${user.email}</p> 
                
                <p>User Name:${user.username}</p>   
                <p>Address:
                Street:${user.address.street}</p>   
                <p>Website: ${user.website}</p> 
                `
        }}

    
    
}
}}



