send.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', '/addItem');

  var data = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value
  };
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    location.href = '/';
    console.log('send data');
  }
});