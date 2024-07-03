document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Here, you would typically send this data to your server
    alert(`Booking successfully submitted for ${name} to ${destination} staying at ${hotel} from ${checkin} to ${checkout}.`);
});
