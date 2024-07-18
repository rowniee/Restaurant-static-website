document.addEventListener( 
    'DOMContentLoaded', function(){

        const reservationForm = document.querySelector('reservations form');
        reservationForm.addEventListener('submit', function(event){
            event.preventDefault();

            const date = document.querySelector('#date').value;
            const time = document.querySelector('#time').value;
            const guests = document.querySelector('#guests').value;

            if (!date || !time || !guests) {
                alert('Please fill in all the fields');
                return;
            }
            const confirmationMessage = `Reservation confirmed for ${guests} guests on ${date} at ${time}`;
            alert(confirmationMessage);
            reservationForm.reset();
        });

        const navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(
            link => {
                link.addEventListener('click',function(event){
                    event.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                });
            });
    })
