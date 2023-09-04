let a = document.getElementById("box");
let q = new Date();
let h = q.getHours();
let m = q.getMinutes();
let s = q.getSeconds();

let d1 = q.getDate();
let d2 = q.getDay();
let d3 = q.getFullYear();
let d4 = q.getMonth();
console.log(h,m,s);



setInterval(function(){
    s++;
    if (s==60) {
        m++;
        s=0;//yaha tak sab mast
        if (m==60) {
            h++
            m=0;
        }
    }
    document.getElementById("box1").innerHTML= h+" : "+m+" : "+s;
    
    if (h>=12){
        document.getElementById("PM").innerHTML = "PM"
    }
    else{
        document.getElementById("AM").innerHTML = "AM"
    }

    document.getElementById("today-year").innerHTML = d3
    
    let todaysmonth = document.getElementById("today-month").innerHTML = d4
    if (todaysmonth==0) {
        document.getElementById("today-month").innerHTML = "January"
    }
    else if (todaysmonth==1) {
        document.getElementById("today-month").innerHTML = "February"
    }
    else if (todaysmonth==2) {
        document.getElementById("today-month").innerHTML = "March"
    }
    else if (todaysmonth==3) {
        document.getElementById("today-month").innerHTML = "April"
    }
    else if (todaysmonth==4) {
        document.getElementById("today-month").innerHTML = "May"
    }
    else if (todaysmonth==5) {
        document.getElementById("today-month").innerHTML = "June"
    }
    else if (todaysmonth==6) {
        document.getElementById("today-month").innerHTML = "July"
    }
    else if (todaysmonth==7) {
        document.getElementById("today-month").innerHTML = "August"
    }
    else if (todaysmonth==8) {
        document.getElementById("today-month").innerHTML = "September"
    }
    else if (todaysmonth==9) {
        document.getElementById("today-month").innerHTML = "October"
    }
    else if (todaysmonth==10) {
        document.getElementById("today-month").innerHTML = "November"
    }
    else if (todaysmonth==11) {
        document.getElementById("today-month").innerHTML = "December"
    }

    document.getElementById("today-date").innerHTML = d1;

    let todaysday = document.getElementById("today-day").innerHTML = d2;
    if (todaysday==1) {
        document.getElementById("today-day").innerHTML = "Monday"
    }

    else if (todaysday==2) {
        document.getElementById("today-day").innerHTML = "Tuesday"
    }

    else if (todaysday==3) {
        document.getElementById("today-day").innerHTML = "Wednesday"
    }

    else if (todaysday==4) {
        document.getElementById("today-day").innerHTML = "Thursday"
    }

    else if (todaysday==5) {
        document.getElementById("today-day").innerHTML = "Friday"
    }

    else if (todaysday==6) {
        document.getElementById("today-day").innerHTML = "Saturday"
    }

    else if (todaysday==7) {
        document.getElementById("today-day").innerHTML = "Sunday"
    }
},1000)