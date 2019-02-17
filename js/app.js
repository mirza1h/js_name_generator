document.querySelector("#generate-names").addEventListener("submit", loadNames);

function loadNames(e) {
  e.preventDefault();
  // Build the url
  const country = document.getElementById("country").value;
  const gender = document.getElementById("genre").value;
  const numberOfNames = document.getElementById("quantity").value;
  let url = 'https://uinames.com/api/?';
  if(country !== '') {
    url += `region=${country}&`;
  }
  if(gender !== '') {
    url += `gender=${gender}&`;
  }
  if(numberOfNames !== '') {
    url += `amount=${numberOfNames}`;
  }
  // Call to API

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(this.status == 200) {
      const response = JSON.parse(this.responseText);
      let html = `<ul id="names">`;
      response.forEach(function(person) {
        html+= `<li>${person.name}</li>`;
      });
      html += `</ul>`;
      document.getElementById("result").innerHTML = html;
    }
  }
  xhr.send();
}