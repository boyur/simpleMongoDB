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



var deleteItems = document.querySelectorAll('[data-flag="del"]');
console.log(deleteItems);

for (var i = 0; i < deleteItems.length; i++) {
  deleteItems[i].addEventListener('click', function () {
    data = this.dataset;
    console.log(data.id);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/delItem');

    var idDel = {
      id: data.id
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(idDel));

    location.href = '/';
    console.log('del data #' + data.id);

  });
}

// var deleteItems = document.getElementsByClassName('del');

// console.log(deleteItems);
//
// for (var i = 0; i < deleteItems.length; i++) {
//   deleteItems[i].addEventListener('click', function () {
//     var idx = Array.prototype.indexOf.call(deleteItems, this );
//     console.log(idx);
//   });
// }