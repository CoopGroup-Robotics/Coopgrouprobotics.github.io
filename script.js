function loading(tf) {

if(tf == true) {
  document.getElementById("loading-text").innerHTML = 'Loading...';
  document.getElementById("content").style.display = 'none';
} else if (tf == false) {
    document.getElementById("loading-text").innerHTML = 'Loading Complete';
    $('#loading').fadeOut();
    $('#content').fadeIn();    
  }
}
loading(true);
setTimeout( function() {
loading(false);
}, 1500);

$(document).ready(function(){ //detect adblock
    if($("#wrapfabtest").height() > 0) {
        alert('No AdBlock :)');
        
    } else {
        
        window.location = "www.coopgrouprobotics.github.io/Ab.html";
        
    }
});