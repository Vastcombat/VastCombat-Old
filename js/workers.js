var vastWorker;
var vastWorkerInfo;

function startWorker() {
  if ( typeof(Worker) !== "undefined" ) {
    if ( typeof(vastWorker) == "undefined" ) {
      vastWorker = new Worker("/js/workers.js");
    }
    vastWorker.onmessage = function(event) {
      vastWorkerInfo = event.data;
    };
  } else {
    vastWorkerInfo = "noSupport";
  }
}

function stopWorker() { 
  vastWorker.terminate();
  vastWorker = undefined;
}