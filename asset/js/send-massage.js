var sendMassage = () => {
  var name = document.querySelector("#name").value;
  var attandace = document.querySelector('input[name="attandance"]:checked').value;;
  var wish = document.querySelector("#wish").value;


  var massage = `Halo Partama Dan Pera ! %0ASelamat ya atas pernikahannya. Semoga ${wish}.Ngomong-ngomong aku *_${attandace}_* ke acara mu  %0A%0A Salam hangat %0A *_${name}_*`;
  location.href = `https://api.whatsapp.com/send?phone=6281933049323&text=${massage}`;
};;
