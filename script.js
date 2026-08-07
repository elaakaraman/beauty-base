const urunler = [
    {
        id: 1,
        marka: "BeautyBase",
        ad: "Velvet Skin Foundation",
        kategori: "Makyaj",
        fiyat: 1299,
        puan: 4.8,
        etiket: "ÇOK SATAN",
        resim: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85",
        aciklama: "Ciltte doğal ve pürüzsüz bir görünüm sağlayan fondöten."
    },
    {
        id: 2,
        marka: "BeautyBase",
        ad: "Soft Glow Blush",
        kategori: "Makyaj",
        fiyat: 749,
        puan: 4.7,
        etiket: "YENİ",
        resim: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=800&q=85",
        aciklama: "Yüze doğal ve canlı bir renk kazandıran allık."
    },
    {
        id: 3,
        marka: "BeautyBase",
        ad: "Luminous Highlighter",
        kategori: "Makyaj",
        fiyat: 899,
        puan: 4.9,
        etiket: "ÇOK SATAN",
        resim: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=85",
        aciklama: "Cilde aydınlık ve ışıltılı görünüm veren highlighter."
    },
    {
        id: 4,
        marka: "BeautyBase",
        ad: "Midnight Mascara",
        kategori: "Makyaj",
        fiyat: 599,
        puan: 4.6,
        etiket: "YENİ",
        resim: "https://images.unsplash.com/photo-1631730486572-226d1d8d262a?auto=format&fit=crop&w=800&q=85",
        aciklama: "Kirpiklere belirginlik kazandıran maskara."
    },
    {
        id: 5,
        marka: "BeautyBase",
        ad: "Rose Nude Lipstick",
        kategori: "Makyaj",
        fiyat: 649,
        puan: 4.8,
        etiket: "",
        resim: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
        aciklama: "Günlük kullanıma uygun nude tonlu ruj."
    },
    {
        id: 6,
        marka: "BeautyBase",
        ad: "Luxury Eyeshadow Palette",
        kategori: "Makyaj",
        fiyat: 1499,
        puan: 4.9,
        etiket: "EXCLUSIVE",
        resim: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85",
        aciklama: "Zengin renk seçeneklerine sahip far paleti."
    },
    {
        id: 7,
        marka: "BeautyBase",
        ad: "Silk Concealer",
        kategori: "Makyaj",
        fiyat: 799,
        puan: 4.7,
        etiket: "",
        resim: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=85",
        aciklama: "Cilt kusurlarını kapatmaya yardımcı olan kapatıcı."
    },
    {
        id: 8,
        marka: "BeautyBase",
        ad: "Hydra Glow Serum",
        kategori: "Cilt Bakımı",
        fiyat: 1099,
        puan: 4.8,
        etiket: "YENİ",
        resim: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
        aciklama: "Cildin nemli ve canlı görünmesine yardımcı olan serum."
    },
    {
        id: 9,
        marka: "BeautyBase",
        ad: "Pure Skin Cleanser",
        kategori: "Cilt Bakımı",
        fiyat: 699,
        puan: 4.6,
        etiket: "",
        resim: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",
        aciklama: "Günlük kullanıma uygun yüz temizleme ürünü."
    },
    {
        id: 10,
        marka: "BeautyBase",
        ad: "Silk Moisture Cream",
        kategori: "Cilt Bakımı",
        fiyat: 949,
        puan: 4.8,
        etiket: "ÇOK SATAN",
        resim: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85",
        aciklama: "Nemlendirici bakım kremi."
    },
    {
        id: 11,
        marka: "BeautyBase",
        ad: "Golden Hour Eau de Parfum",
        kategori: "Parfüm",
        fiyat: 2199,
        puan: 4.9,
        etiket: "EXCLUSIVE",
        resim: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=85",
        aciklama: "Zarif ve modern notalara sahip premium parfüm."
    },
    {
        id: 12,
        marka: "BeautyBase",
        ad: "Noir Intense",
        kategori: "Parfüm",
        fiyat: 2499,
        puan: 4.8,
        etiket: "ÇOK SATAN",
        resim: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85",
        aciklama: "Yoğun karaktere sahip parfüm."
    },
    {
        id: 13,
        marka: "BeautyBase",
        ad: "Crystal Lip Oil",
        kategori: "Makyaj",
        fiyat: 699,
        puan: 4.7,
        etiket: "YENİ",
        resim: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85",
        aciklama: "Dudaklara parlak görünüm kazandıran lip oil."
    },
    {
        id: 14,
        marka: "BeautyBase",
        ad: "Perfect Finish Powder",
        kategori: "Makyaj",
        fiyat: 849,
        puan: 4.6,
        etiket: "",
        resim: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85",
        aciklama: "Makyaj için transparan pudra."
    },
    {
        id: 15,
        marka: "BeautyBase",
        ad: "Radiance Face Mist",
        kategori: "Cilt Bakımı",
        fiyat: 799,
        puan: 4.7,
        etiket: "YENİ",
        resim: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=85",
        aciklama: "Cilde ferah görünüm kazandıran yüz spreyi."
    }
];


/* ÜRÜNLERİ GÖSTER */

function urunleriGoster(liste) {

    const container = document.getElementById("urunlerContainer");
    const sayac = document.getElementById("urunSayisi");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (sayac) {
        sayac.textContent = liste.length + " ürün";
    }

    if (liste.length === 0) {

        container.innerHTML = `
            <div class="urun-yok">
                <h3>Ürün bulunamadı.</h3>
                <p>Farklı bir ürün veya kategori deneyin.</p>
            </div>
        `;

        return;
    }

    liste.forEach(function(urun) {

        const kart = document.createElement("article");

        kart.className = "urun-karti";

        kart.innerHTML = `
            
            <div class="urun-gorsel-alani">

                ${
                    urun.etiket
                    ? `<span class="urun-etiket">${urun.etiket}</span>`
                    : ""
                }

                <img
                    src="${urun.resim}"
                    alt="${urun.ad}"
                >

            </div>

            <div class="urun-bilgi">

                <div class="urun-marka">
                    ${urun.marka}
                </div>

                <h3>
                    ${urun.ad}
                </h3>

                <div class="urun-puan">
                    <span>★★★★★</span>
                    <b>${urun.puan}</b>
                </div>

                <div class="fiyat">
                    ₺${urun.fiyat.toLocaleString("tr-TR")}
                </div>

                <button
                    class="detay-btn"
                    onclick="detayAc(${urun.id})"
                >
                    DETAYI GÖR
                </button>

            </div>
        `;

        container.appendChild(kart);

    });
}


/* KATEGORİ */

function kategoriFiltrele(kategori) {

    const sonuc = urunler.filter(function(urun) {

        return urun.kategori === kategori;

    });

    urunleriGoster(sonuc);

    const urunlerAlani = document.getElementById("urunler");

    if (urunlerAlani) {

        urunlerAlani.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* TÜM ÜRÜNLER */

function tumUrunleriGoster() {

    urunleriGoster(urunler);

    const urunlerAlani = document.getElementById("urunler");

    if (urunlerAlani) {

        urunlerAlani.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ARAMA */

function urunAra() {

    const input = document.getElementById("aramaInput");

    if (!input) {
        return;
    }

    const aranan = input.value
        .toLowerCase()
        .trim();

    if (aranan === "") {

        urunleriGoster(urunler);

        return;
    }

    const sonuc = urunler.filter(function(urun) {

        return (
            urun.ad.toLowerCase().includes(aranan) ||
            urun.marka.toLowerCase().includes(aranan) ||
            urun.kategori.toLowerCase().includes(aranan)
        );

    });

    urunleriGoster(sonuc);

    const urunlerAlani = document.getElementById("urunler");

    if (urunlerAlani) {

        urunlerAlani.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ÜRÜN DETAYI */

function detayAc(id) {

    const urun = urunler.find(function(item) {

        return item.id === id;

    });

    if (!urun) {
        return;
    }

    const modal = document.getElementById("detayModal");
    const icerik = document.getElementById("detayIcerik");

    if (!modal || !icerik) {
        return;
    }

    icerik.innerHTML = `
        
        <img
            src="${urun.resim}"
            alt="${urun.ad}"
            style="
                width:250px;
                height:300px;
                object-fit:cover;
                display:block;
                margin:0 auto 25px;
            "
        >

        <p style="color:#888;">
            ${urun.marka}
        </p>

        <h2 style="margin:8px 0 15px;">
            ${urun.ad}
        </h2>

        <p style="margin-bottom:15px;">
            ★★★★★ ${urun.puan}
        </p>

        <h3 style="margin-bottom:15px;">
            ₺${urun.fiyat.toLocaleString("tr-TR")}
        </h3>

        <p style="color:#666; line-height:1.7;">
            ${urun.aciklama}
        </p>
    `;

    modal.style.display = "flex";
}


/* DETAY KAPAT */

function detayKapat() {

    const modal = document.getElementById("detayModal");

    if (modal) {
        modal.style.display = "none";
    }
}


/* SAYFA AÇILDIĞINDA */

document.addEventListener("DOMContentLoaded", function() {

    urunleriGoster(urunler);

    const aramaInput = document.getElementById("aramaInput");

    if (aramaInput) {

        aramaInput.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {

                urunAra();

            }

        });

    }

});
