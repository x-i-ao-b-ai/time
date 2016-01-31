'use strict';

var httpdebug = {
  "log": function(c) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://10.64.3.145:9091/Log?c=' + c);
    request.send();
  }
}

module.exports = httpdebug;