import "./sakura.css";
import { useEffect } from "react";

var petalPlayers = [];

export default function AnimatePetals() {
  useEffect(() => {
    var petals = document.querySelectorAll(".petal");

    if (!petals[0].animate) {
      var petalsContainer = document.getElementById("petals-container");
      petalsContainer.prepend(
        "Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?"
      );
      return false;
    }

    for (var i = 0, len = petals.length; i < len; ++i) {
      var petal = petals[i];
      petal.innerHTML =
        '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew"></div>';
      var scale = Math.random() * 0.8 + 0.2;

      var player = petal.animate(
        [
          {
            transform:
              "translate3d(" + (i / len) * 100 + "vw,0,0) scale(" + scale + ")",
            opacity: scale,
          },
          {
            transform:
              "translate3d(" +
              ((i / len) * 100 + 10) +
              "vw,150vh,0) scale(" +
              scale +
              ")",
            opacity: 1,
          },
        ],
        {
          duration: Math.random() * 90000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      );

      petalPlayers.push(player);
    }
  }, []);

  return (
    <div class="container" id="petals-container">
      {/* <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>*/}
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div> 
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
      <div class="petal"></div>
    </div>
  );
}
