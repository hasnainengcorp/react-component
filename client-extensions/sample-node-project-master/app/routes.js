module.exports = function(app) {

    app.get('/',function(req,res){ // İSTEMCİNİN '/' İSTEĞİNE KARŞILIK VEREN KOD BLOĞU
        res.status(200).send("hello from node"); // INDEX VİEW DOSYASI RENDER EDİLDİ
    });


    app.get('/test',function(req,res){ // İSTEMCİNİN '/' İSTEĞİNE KARŞILIK VEREN KOD BLOĞU
        res.status(200).send("node application working fine"); // INDEX VİEW DOSYASI RENDER EDİLDİ
    });
}