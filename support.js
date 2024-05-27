$( function() {
    $("#date").datepicker();


    var departments = [
        "Arapça Mütercim ve Tercümanlık",
        "Beslenme ve Diyetetik",
        "Bilgi ve Belge Yönetimi",
        "Bilgisayar Mühendisliği(İngilizce)",
        "Çocuk Gelişimi",
        "Dil ve Konuşma Terapisi",
        "Diş Hekimliği",
        "Elektrik-Elektronik Mühendisliği (İngilizce)",
        "Endüstri Mühendisliği (İngilizce)",
        "Enerji Sistemleri Mühendisliği (İngilizce)",
        "Felsefe",
        "Finans ve Bankacılık",
        "Finans ve Bankacılık (İngilizce)",
        "Fizyoterapi ve Rehabilitasyon",
        "Görsel İletişim Tasarımı",
        "Havacılık ve Uzay Mühendisliği (İngilizce)",
        "Hemşirelik",
        "Hukuk",
        "İktisat (İngilizce)",
        "İngilizce Mütercim ve Tercümanlık",
        "İnşaat Mühendisliği (İngilizce)",
        "İslami İlimler",
        "İslami İlimler (M.T.O.K.)",
        "İşletme (İngilizce)",
        "Makine Mühendisliği (İngilizce)",
        "Maliye (İngilizce)",
        "Matematik (İngilizce)",
        "Metalurji ve Malzeme Mühendisliği (İngilizce)",
        "Mimarlık (İngilizce)",
        "Odyoloji",
        "Psikoloji (İngilizce)",
        "Sağlık Yönetimi",
        "Siyaset Bilimi ve Kamu Yönetimi (İngilizce)",
        "Sosyal Hizmet",
        "Sosyoloji",
        "Tarih",
        "Tıp",
        "Tıp (İngilizce)",
        "Türk Dili ve Edebiyatı",
        "Uluslararası İlişkiler (İngilizce)",
        "Uluslararası Ticaret ve İşletmecilik (İngilizce)",
        "Uluslararası Ticaret ve Lojistik", 
        "Yazılım Mühendisliği (İngilizce)",
        "Yönetim Bilişim Sistemleri (İngilizce)"
    ];


    $("#department").autocomplete({
        source: departments,
        minLength: 0, 
        select: function(event, ui) {
            $("#department").val(ui.item.value); 
            return false;
        }
    }).focus(function() {
        $(this).autocomplete("search", "");
    });
});
    
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Confirm": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
    });

