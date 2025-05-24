window.onload = function () {
    generateSeats();
};

// movies scroll


    const movieContainer = document.getElementById("movieContainer");
    const scrollLeftBtn = document.getElementById("scrollLeft");
    const scrollRightBtn = document.getElementById("scrollRight");

    const scroll = 1000;

    scrollRightBtn.onclick = function () {
        movieContainer.scrollLeft += scroll;
    }

    scrollLeftBtn.onclick = function () {
        movieContainer.scrollLeft -= scroll;
    }


function openMovieDetails(title, image, details) {
    let url = "movie-details.html?title=" + title + "&image=" + image + "&details=" + details;
    window.location.href = url;
}

function seatselection() {
    document.getElementById("movieName").innerText = document.getElementById("movie-name").innerText;
    let modal = new bootstrap.Modal(document.getElementById("seatSelectionModal"));
    modal.show();
    document.getElementById("dateContainer").innerHTML = "";
    generateDates();
}

function generateSeats() {
    let seatContainer = document.getElementById("seatContainer");
    seatContainer.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        let seat = document.createElement("div");
        seat.classList.add("seat");
        seat.innerText = i;
        seat.style.backgroundColor = "green"; // initial color

        seat.onclick = function () {
            seatsel(seat);
        };

        seatContainer.appendChild(seat);
    }
}



function generateDates() {
    let dateContainer = document.getElementById("dateContainer");
    let selectedDate = document.getElementById("selectedDate");
    let today = new Date();
    
    dateContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(today.getDate() + i);

        let day = date.toLocaleString('en-US', { weekday: 'short' });
        let month = date.toLocaleString('en-US', { month: 'short' });
        let dayNum = date.getDate();
        let year = date.getFullYear();

        let dateBox = document.createElement("div");
        dateBox.classList.add("date-box");
        dateBox.innerHTML = `<strong>${day}</strong><br>${month} ${dayNum}`;

        dateBox.onclick = function () {
            document.querySelectorAll(".date-box").forEach(box => box.classList.remove("active"));
            this.classList.add("active");
            selectedDate.innerText = `${dayNum}/${date.getMonth() + 1}/${year}`;
        };

        dateContainer.appendChild(dateBox);
    }
}


function selectShowtime(time) {
    document.getElementById("selectedShowtime").innerText = time;
    generateSeats();
}

function seatsel(seat) {
    seat.classList.toggle("selected");
     if (seat.style.backgroundColor === "green") {
        seat.style.backgroundColor = "red"; 
    } else {
        seat.style.backgroundColor = "green"; 
    }
    updateSeatCount();
}

function updateSeatCount() {
    let selectedSeats = document.querySelectorAll(".seat.selected").length;
    document.getElementById("selected-seats").innerText = selectedSeats;
    document.getElementById("total-price").innerText = selectedSeats * 200;
}



  function confirmBooking() {
  
    const title = document.getElementById("movieName").innerText || document.getElementById("movie-name").innerText;
  
    const date = document.getElementById("selectedDate").innerText;
    const time = document.getElementById("selectedShowtime").innerText;
   
    const seats = document.getElementById("selected-seats").innerText;
    const price = document.getElementById("total-price").innerText;

  
    const url = `success.html?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&seats=${encodeURIComponent(seats)}&price=${encodeURIComponent(price)}`;

    window.location.href = url;
  }


  // movie image confirm booking
const movieImage = "path_or_url_to_movie_image.jpg";  
window.location.href = `success.html?image=${encodeURIComponent(movieImage)}`;

