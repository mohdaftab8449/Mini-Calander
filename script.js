let month=document.querySelector(".month");
let dayName=document.querySelector(".day-name");
let date=document.querySelector(".date");
let year=document.querySelector(".year");

let d=new Date();
month.innerHTML=d.toLocaleDateString("en",{month:"long"})
dayName.innerHTML=d.toLocaleDateString("en",{weekday:"long"})
date.innerHTML=d.getDate();
year.innerHTML=d.getFullYear();