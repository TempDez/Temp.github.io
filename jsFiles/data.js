async function fetchMyData() {
    return  fetch('https://my-json-server.typicode.com/TempDez/Temp.github.io/db', 
    {method: "GET",  headers: {"content-type": "application/json"}})
    .then(result => result.json())
    .then(data => {return data;})
}

async function postOrder(Order) {
    return fetch('https://my-json-server.typicode.com/TempDez/Temp.github.io/posts', {
	method: "POST",
	body: JSON.stringify(Order),
	headers: {
		'Content-type': 'application/json'
	}
    }).then(result => result.json())
    .then(data => {return data;})
    .catch(function (error) {
	    alert('Помилка Сервера '+ error);
    });
}
export {fetchMyData,postOrder};
