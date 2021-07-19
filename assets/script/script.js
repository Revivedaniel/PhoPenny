//google map directions button
var directionsButtonEl = document.querySelector("#directionsButton");
//call now button
var callNowButtonEl = document.querySelector("#callNow");

//google map directions button evenlistener
directionsButtonEl.addEventListener("click", function(){
    window.open("https://www.google.com/maps/dir//pho+lily/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80dd2bd6fb3480b1:0x5c57ee957f7e473c?sa=X&ved=2ahUKEwiive_95u_xAhUxHzQIHRBWBQsQ9RcwD3oECFgQBQ", '_blank').focus();
});

//call now button even listener
callNowButtonEl.addEventListener("click", function(){
    window.open("tel:123-456-7890")
})