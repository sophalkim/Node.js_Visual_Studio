var textHeader = $('#textHeader');
var socket = io();
var listData = $('#messages');
function showMessage() {
    textHeader.html("cool");
    var textValue = $('#m').val();
    // listData.append(textValue);
    socket.emit('chat message', textValue);
    listData.append('cool ');
}
socket.on('chat message', function (msg) {
    // listData.append(msg);
});