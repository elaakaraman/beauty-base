const urunler = [
    {
        ad: "Luxury Ruj",
        kategori: "Makyaj",
        fiyat: "499 TL",
        resim: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500"
    },
    {
        ad: "Glow Fondöten",
        kategori: "Makyaj",
        fiyat: "799 TL",
        resim: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
    },
    {
        ad: "Cilt Bakım Serumu",
        kategori: "Cilt Bakımı",
        fiyat: "650 TL",
        resim: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500"
    },
    {
        ad: "Premium Parfüm",
        kategori: "Parfüm",
        fiyat: "1200 TL",
        resim: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
    }
];


const container = document.getElementById("urunlerContainer");
const sayi = document.getElementById("urunSayisi");


function urunleriGoster(liste){

    container.innerHTML="";

    liste.forEach(urun=>{

        container.innerHTML += `

        <div class="urun-kart">

            <img src="${urun.resim}">

            <h3>${urun.ad}</h3>

            <p>${urun.kategori}</p>

            <strong>${urun.fiyat}</strong>

            <button onclick="detayAc('${urun.ad}')">
             Detay
            </button>

        </div>

        `;

    });


    sayi.innerHTML = liste.length + " ürün";

}


function kategoriFiltrele(kategori){

    const filtreli = urunler.filter(
        urun => urun.kategori === kategori
    );

    urunleriGoster(filtreli);

}


function tumUrunleriGoster(){

    urunleriGoster(urunler);

}


function urunAra(){

    let aranan = document.getElementById("aramaInput").value.toLowerCase();


    let sonuc = urunler.filter(
        urun =>
        urun.ad.toLowerCase().includes(aranan)
    );


    urunleriGoster(sonuc);

}


urunleriGoster(urunler);
function detayAc(ad){

    const urun = urunler.find(
        item => item.ad === ad
    );


    document.getElementById("detayIcerik").innerHTML = `

        <img src="${urun.resim}" width="300">

        <h2>${urun.ad}</h2>

        <p>
            Kategori: ${urun.kategori}
        </p>

        <h3>
            ${urun.fiyat}
        </h3>

        <p>
            BeautyBase özel koleksiyonundan seçilmiş premium ürün.
        </p>

    `;


    document.getElementById("detayModal").style.display="flex";

}



function detayKapat(){

    document.getElementById("detayModal").style.display="none";

}
