
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
              // Initialize API key, session, and token...
         
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function showWebcam(){
    /*
      var apiKey = "45150012";
      var sessionId = "2_MX40NTE1MDAxMn5-MTQyMzU2MDQwNzI2MH5ucWRiMVVNRHVwWHBTRnlXUllIVUdNMHR-fg";
      var token = "T1==cGFydG5lcl9pZD00NTE1MDAxMiZzaWc9YjA5ZjBmNmUxZTVhODJiY2VhYmZmMmNmNDQ3NzQ2ZWJiNGViZTZmZTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5URTFNREF4TW41LU1UUXlNelUyTURRd056STJNSDV1Y1dSaU1WVk5SSFZ3V0hCVFJubFhVbGxJVlVkTk1IUi1mZyZjcmVhdGVfdGltZT0xNDIzNTYwNDU5Jm5vbmNlPTAuNjM0MjE5Nzg1MjI5MDQyMiZleHBpcmVfdGltZT0xNDI2MTUyMzcy";


      // Replace with your API key (see https://dashboard.tokbox.com/projects)
      // and a valid session ID (see http://tokbox.com/opentok/tutorials/create-session/):
      var session = OT.initSession(apiKey, sessionId);
      session.on("streamCreated", function (event) {
        session.subscribe(event.stream);
      });
      // Replace with a valid token.
      // See http://tokbox.com/opentok/tutorials/create-token/
      session.connect(token, function (error) {
         publisher = OT.initPublisher();
         session.publish(publisher);
      });
      */
     // Think of a session as a room, and a token as the key to get in to the room
      // Sessions and tokens are generated on your server and passed down to the client
      var apiKey = "45150012";
      var sessionId = "2_MX40NTE1MDAxMn5-MTQyMzU2MDQwNzI2MH5ucWRiMVVNRHVwWHBTRnlXUllIVUdNMHR-fg";
      var token = "T1==cGFydG5lcl9pZD00NTE1MDAxMiZzaWc9YjA5ZjBmNmUxZTVhODJiY2VhYmZmMmNmNDQ3NzQ2ZWJiNGViZTZmZTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5URTFNREF4TW41LU1UUXlNelUyTURRd056STJNSDV1Y1dSaU1WVk5SSFZ3V0hCVFJubFhVbGxJVlVkTk1IUi1mZyZjcmVhdGVfdGltZT0xNDIzNTYwNDU5Jm5vbmNlPTAuNjM0MjE5Nzg1MjI5MDQyMiZleHBpcmVfdGltZT0xNDI2MTUyMzcy";

      // Initialize session, set up event listeners, and connect
      var session = OT.initSession(apiKey, sessionId);
       session.connect(token, function(error) {
        // var publisher = OT.initPublisher("myPublisherDiv",{width:400, height:300});
        var publisher = OT.initPublisher("myPublisherDiv");
        session.publish(publisher);
      });
      
      session.on("streamCreated", function(event) {
        session.subscribe(event.stream);
      });

};

