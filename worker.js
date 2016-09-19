var ports = [];

onconnect = function(e) {
  var port = e.ports[0];
  ports.push(port);
  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

}
