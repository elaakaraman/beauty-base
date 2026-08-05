const urunlerAlani = document.getElementById("urunler");
const aramaKutusu = document.getElementById("arama");

let tumUrunler = [];

fetch("products.json")
  .then(response => response.json())
  .then(veriler => {
    tumUrunler = veriler;
    urunleriGoster(tumUrunler);
  });

function urunleriGoster(liste) {

  urunlerAlani.innerHTML = "";

  liste.forEach(urun => {

    urunlerAlani.innerHTML += `
      <div class="urun-kart">
        <h2>${urun.urunAdi}</h2>

        <p><b>Marka:</b> ${urun.marka}</p>

        <p><b>Kategori:</b> ${urun.kategori}</p>

        <p><b>Fiyat:</b> ${urun.fiyat} TL</p>

        <p><b>Puan:</b> ⭐ ${urun.puan}</p>

        <p>${urun.aciklama}</p>
      </div>
    `;

  });

}

aramaKutusu.addEventListener("input", function () {

  const kelime = this.value.toLowerCase();

  const filtre = tumUrunler.filter(urun =>

    urun.urunAdi.toLowerCase().includes(kelime) ||

    urun.marka.toLowerCase().includes(kelime)

  );

  urunleriGoster(filtre);

});
