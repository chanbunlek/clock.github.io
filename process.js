let ss;
let mm;
let hh;

function time() {
    var date = new Date();
    var d = "AM";
    ss = "rotate(" + ( 90 + ( 6 * date.getSeconds() ) ) + "deg)";
    document.getElementById( "pointer-s" ).style.transform = ss;

    mm = "rotate(" + ( 90 + ( date.getSeconds() * 0.1 ) + ( date.getMinutes() * 6 ) ) + "deg)";
    document.getElementById( "pointer-m" ).style.transform = mm;

    hh = "rotate(" + ( 90 + ( date.getMinutes() * 0.5 ) + ( date.getHours() * 30 ) ) + "deg)";
    document.getElementById( "pointer-h" ).style.transform = hh;

    if( date.getHours() > 9 ) 
    {
        if( date.getHours() > 21 ) document.getElementById( "sub-led" ).innerHTML = (date.getHours() - 12) + " : ";
        else if( date.getHours() > 12 && date.getHours() < 22 ) document.getElementById( "sub-led" ).innerHTML = "0" + (date.getHours() - 12) + " : ";
        else document.getElementById( "sub-led" ).innerHTML = date.getHours() + " : ";
    }
    else document.getElementById( "sub-led" ).innerHTML = "0" + date.getHours() + " : ";

    if( date.getMinutes() > 9 ) document.getElementById( "sub-led" ).innerHTML += date.getMinutes() + " : ";
    else document.getElementById( "sub-led" ).innerHTML += "0" + date.getMinutes() + " : ";

    if( date.getSeconds() > 9 ) document.getElementById( "sub-led" ).innerHTML += date.getSeconds();
    else document.getElementById( "sub-led" ).innerHTML += "0" + date.getSeconds();

    if( date.getHours() >= 12 && date.getHours() < 24 ) d = "PM";
    document.getElementById( "sub-led-1" ).innerHTML = d;
}

setInterval( time, 10 );