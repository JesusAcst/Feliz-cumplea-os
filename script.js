document.addEventListener("DOMContentLoaded", () => {
  // Obtener los elementos de la interfaz
  const intro = document.getElementById("intro");
  const cardSection = document.getElementById("card-section");
  const collage = document.getElementById("collage");

  const startBtn = document.getElementById("start-btn");
  const backToIntroBtns = document.querySelectorAll("#back-to-intro");
  const nextToCollageBtn = document.getElementById("next-to-collage");
  const backToCardBtn = document.getElementById("back-to-card");

  // Obtener el elemento de audio
  const birthdayMusic = document.getElementById("birthday-music");

      // Forzar la reproducción del audio al cargar la página
      if (birthdayMusic) {
        birthdayMusic.play().catch((error) => {
          console.warn("El navegador bloqueó la reproducción automática del audio:", error);
        });
      }

  // Verificar si los elementos fueron encontrados correctamente
  if (!intro || !cardSection || !collage || !startBtn || !nextToCollageBtn || !backToCardBtn) {
      console.error("Uno o más elementos no se han encontrado correctamente. Revisa los IDs en tu HTML.");
      return;
  }
  

  // Mostrar la tarjeta (cambiar de pantalla desde la intro)
  startBtn.addEventListener("click", () => {
      intro.classList.add("d-none"); // Ocultar la pantalla de inicio
      cardSection.classList.remove("d-none"); // Mostrar la tarjeta
  });

  // Mostrar el collage (cambiar de pantalla desde la tarjeta)
  nextToCollageBtn.addEventListener("click", () => {
    console.log("Botón 'Siguiente' presionado");
    cardSection.classList.add("d-none"); // Ocultar la tarjeta
    collage.classList.remove("d-none"); // Mostrar el collage
});


  // Regresar a la tarjeta (de collage a tarjeta)
  backToCardBtn.addEventListener("click", () => {
      collage.classList.add("d-none"); // Ocultar el collage
      cardSection.classList.remove("d-none"); // Mostrar la tarjeta
  });

  // Regresar al inicio (de tarjeta o collage a la intro)
  backToIntroBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
          cardSection.classList.add("d-none"); // Ocultar la tarjeta
          collage.classList.add("d-none"); // Ocultar el collage
          intro.classList.remove("d-none"); // Mostrar la pantalla de inicio
      });
  });
});
