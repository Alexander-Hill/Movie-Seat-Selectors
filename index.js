let count = document.getElementById('count');
let total = document.getElementById('total');
let container = document.querySelector('.container');
let movieSelect = document.getElementById('movie');
let seats = document.querySelectorAll('.row .seat:not(occupied)');




let ticketPrice = +movieSelect.value;


movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    

}


console.log(ticketPrice)

container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});




