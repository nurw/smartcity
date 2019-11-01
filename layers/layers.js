var wms_layers = [];


        var lyr_smartcity_0 = new ol.layer.Tile({
            'title': 'smartcity',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CurahHujan_1 = new ol.format.GeoJSON();
var features_CurahHujan_1 = format_CurahHujan_1.readFeatures(json_CurahHujan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurahHujan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujan_1.addFeatures(features_CurahHujan_1);
var lyr_CurahHujan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurahHujan_1, 
                style: style_CurahHujan_1,
                interactive: true,
                title: '<img src="styles/legend/CurahHujan_1.png" /> Curah Hujan'
            });
var format_Guna_Lahan_2 = new ol.format.GeoJSON();
var features_Guna_Lahan_2 = format_Guna_Lahan_2.readFeatures(json_Guna_Lahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guna_Lahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guna_Lahan_2.addFeatures(features_Guna_Lahan_2);
var lyr_Guna_Lahan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guna_Lahan_2, 
                style: style_Guna_Lahan_2,
                interactive: true,
                title: '<img src="styles/legend/Guna_Lahan_2.png" /> Guna_Lahan'
            });
var format_JenisTanah_3 = new ol.format.GeoJSON();
var features_JenisTanah_3 = format_JenisTanah_3.readFeatures(json_JenisTanah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanah_3.addFeatures(features_JenisTanah_3);
var lyr_JenisTanah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanah_3, 
                style: style_JenisTanah_3,
                interactive: true,
                title: '<img src="styles/legend/JenisTanah_3.png" /> Jenis Tanah'
            });
var format_JenisTanah_4 = new ol.format.GeoJSON();
var features_JenisTanah_4 = format_JenisTanah_4.readFeatures(json_JenisTanah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanah_4.addFeatures(features_JenisTanah_4);
var lyr_JenisTanah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanah_4, 
                style: style_JenisTanah_4,
                interactive: true,
                title: '<img src="styles/legend/JenisTanah_4.png" /> Jenis Tanah'
            });
var format_Kelerengan_5 = new ol.format.GeoJSON();
var features_Kelerengan_5 = format_Kelerengan_5.readFeatures(json_Kelerengan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelerengan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelerengan_5.addFeatures(features_Kelerengan_5);
var lyr_Kelerengan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelerengan_5, 
                style: style_Kelerengan_5,
                interactive: true,
                title: '<img src="styles/legend/Kelerengan_5.png" /> Kelerengan'
            });
var format_Semarang_Atas_6 = new ol.format.GeoJSON();
var features_Semarang_Atas_6 = format_Semarang_Atas_6.readFeatures(json_Semarang_Atas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semarang_Atas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semarang_Atas_6.addFeatures(features_Semarang_Atas_6);
var lyr_Semarang_Atas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semarang_Atas_6, 
                style: style_Semarang_Atas_6,
                interactive: true,
                title: '<img src="styles/legend/Semarang_Atas_6.png" /> Semarang_Atas'
            });

lyr_smartcity_0.setVisible(true);lyr_CurahHujan_1.setVisible(true);lyr_Guna_Lahan_2.setVisible(true);lyr_JenisTanah_3.setVisible(true);lyr_JenisTanah_4.setVisible(true);lyr_Kelerengan_5.setVisible(true);lyr_Semarang_Atas_6.setVisible(true);
var layersList = [lyr_smartcity_0,lyr_CurahHujan_1,lyr_Guna_Lahan_2,lyr_JenisTanah_3,lyr_JenisTanah_4,lyr_Kelerengan_5,lyr_Semarang_Atas_6];
lyr_CurahHujan_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CURAH_': 'CURAH_', 'CURAH_ID': 'CURAH_ID', 'CRHHUJAN': 'CRHHUJAN', 'S_Hujan': 'S_Hujan', });
lyr_Guna_Lahan_2.set('fieldAliases', {'TGL': 'TGL', });
lyr_JenisTanah_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TANAH1_': 'TANAH1_', 'TANAH1_ID': 'TANAH1_ID', 'JNS_TANAH': 'JNS_TANAH', 'S_Tanah': 'S_Tanah', });
lyr_JenisTanah_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TANAH1_': 'TANAH1_', 'TANAH1_ID': 'TANAH1_ID', 'JNS_TANAH': 'JNS_TANAH', 'S_Tanah': 'S_Tanah', });
lyr_Kelerengan_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LOLE_': 'LOLE_', 'LOLE_ID': 'LOLE_ID', 'KETERANGAN': 'KETERANGAN', 'KELERENGAN': 'KELERENGAN', 'S_Lereng': 'S_Lereng', });
lyr_Semarang_Atas_6.set('fieldAliases', {'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'LUAS_TOTAL': 'LUAS_TOTAL', 'J_PDDK__JI': 'J_PDDK__JI', 'PADAT_BRUT': 'PADAT_BRUT', 'KET': 'KET', });
lyr_CurahHujan_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'CURAH_': '', 'CURAH_ID': '', 'CRHHUJAN': '', 'S_Hujan': '', });
lyr_Guna_Lahan_2.set('fieldImages', {'TGL': '', });
lyr_JenisTanah_3.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'TANAH1_': '', 'TANAH1_ID': '', 'JNS_TANAH': '', 'S_Tanah': '', });
lyr_JenisTanah_4.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'TANAH1_': '', 'TANAH1_ID': '', 'JNS_TANAH': '', 'S_Tanah': '', });
lyr_Kelerengan_5.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'LOLE_': '', 'LOLE_ID': '', 'KETERANGAN': '', 'KELERENGAN': '', 'S_Lereng': '', });
lyr_Semarang_Atas_6.set('fieldImages', {'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'LUAS_TOTAL': 'TextEdit', 'J_PDDK__JI': 'TextEdit', 'PADAT_BRUT': 'TextEdit', 'KET': 'TextEdit', });
lyr_CurahHujan_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CURAH_': 'no label', 'CURAH_ID': 'no label', 'CRHHUJAN': 'no label', 'S_Hujan': 'no label', });
lyr_Guna_Lahan_2.set('fieldLabels', {'TGL': 'no label', });
lyr_JenisTanah_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TANAH1_': 'no label', 'TANAH1_ID': 'no label', 'JNS_TANAH': 'no label', 'S_Tanah': 'no label', });
lyr_JenisTanah_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TANAH1_': 'no label', 'TANAH1_ID': 'no label', 'JNS_TANAH': 'no label', 'S_Tanah': 'no label', });
lyr_Kelerengan_5.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'LOLE_': 'no label', 'LOLE_ID': 'no label', 'KETERANGAN': 'no label', 'KELERENGAN': 'no label', 'S_Lereng': 'no label', });
lyr_Semarang_Atas_6.set('fieldLabels', {'KELURAHAN': 'no label', 'KECAMATAN': 'no label', 'LUAS_TOTAL': 'no label', 'J_PDDK__JI': 'no label', 'PADAT_BRUT': 'no label', 'KET': 'no label', });
lyr_Semarang_Atas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});