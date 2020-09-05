let map;

function initMap() {
  const loc = { lat: 30.714274, lng: 30.940158 };
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 30.714274, lng: 30.940158 },
    zoom: 8
  });
  const marker = new google.maps.Marker({position:localStorage,map:map});
}

// Smooth Scrolling
$('#navbar a, .btn').on('click',function(event) {
  if(this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
});