// alert("hi I am alert")  to check if the page is linked or not

function updateclock(){
    const timeElement = document.getElementById("time-element") ;
    const dateElement = document.getElementById("date-element") ;

    const now = new Date() ;


    const hrs = now.getHours() % 12 || 12 ;  // this becomes a condition so the true will get executed, and 0 is treated as false so 12
    const hours = hrs < 10 ? `0${hrs}` : `${hrs}`; 
    const mins = now.getMinutes().toString().padStart(2,"0") ; // this assures the string has atleast 2 value if not then it will fill it with "0"
    const seconds = now.getSeconds()
    const second = seconds<10 ? `0${seconds}`: `${seconds}`;
    const ampm = now.getHours() < 12 ? "AM" : "PM" ;

    timeElement.textContent = `${hours}:${mins}:${second}:${ampm}` ;

    const options = {
        weekday: 'long' ,
        month: 'long' ,
        year: 'numeric',
        day: 'numeric'
    }
    dateElement.textContent =  now.toLocaleDateString(undefined,options)

}
updateclock()

setInterval(updateclock, 1000)  
