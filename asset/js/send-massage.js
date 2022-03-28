var sendMassage = () => {
  var name = document.querySelector("#name").value;
  var attandace = document.querySelector("#attandance").value;
  var wish = document.querySelector("#wish").value;

  var massage = `Halo Pratama Dan Vera ! %0ASelamat ya atas pernikahannya. Semoga ${wish}.Nsgomong-ngomong aku *_${attandace}_* ke acara mu  ._ %0A%0A Salam hangat %0A *_${name}_* "`;

  location.href = `https://api.whatsapp.com/send?phone=6281237500352&text=${massage}`;
};
