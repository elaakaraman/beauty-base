const urunlerAlani = document.getElementById("urunler");

fetch("products.json")
  .then(response => response.json())
  .then(urunler => {

    urunler.forEach(urun => {

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

  });
