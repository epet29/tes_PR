var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_ADMINISTRASI_KOTA_BANJAR_1 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_KOTA_BANJAR_1 = format_BATAS_ADMINISTRASI_KOTA_BANJAR_1.readFeatures(json_BATAS_ADMINISTRASI_KOTA_BANJAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_KOTA_BANJAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_KOTA_BANJAR_1.addFeatures(features_BATAS_ADMINISTRASI_KOTA_BANJAR_1);
var lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_ADMINISTRASI_KOTA_BANJAR_1, 
                style: style_BATAS_ADMINISTRASI_KOTA_BANJAR_1,
                popuplayertitle: "BATAS_ADMINISTRASI_KOTA_BANJAR",
                interactive: true,
    title: 'BATAS_ADMINISTRASI_KOTA_BANJAR<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_0.png" /> Balokang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_1.png" /> Banjar<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_2.png" /> Batulawang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_3.png" /> Binangun<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_4.png" /> Bojongkantong<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_5.png" /> Cibeureum<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_6.png" /> Hegarsari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_7.png" /> Jajawar<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_8.png" /> Karangpanimbal<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_9.png" /> Karyamukti<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_10.png" /> Kujangsari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_11.png" /> Langensari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_12.png" /> Mekarharja<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_13.png" /> Mekarsari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_14.png" /> Muktisari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_15.png" /> Mulyasari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_16.png" /> Neglasari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_17.png" /> Pataruman<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_18.png" /> Purwaharja<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_19.png" /> Raharja<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_20.png" /> Rejasari<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_21.png" /> Sinartanjung<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_22.png" /> Situbatu<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_23.png" /> Sukamukti<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_KOTA_BANJAR_1_24.png" /> Waringinsari<br />'
        });
var format_NIAGA_PT_25K_2 = new ol.format.GeoJSON();
var features_NIAGA_PT_25K_2 = format_NIAGA_PT_25K_2.readFeatures(json_NIAGA_PT_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAGA_PT_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAGA_PT_25K_2.addFeatures(features_NIAGA_PT_25K_2);
var lyr_NIAGA_PT_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAGA_PT_25K_2, 
                style: style_NIAGA_PT_25K_2,
                popuplayertitle: "NIAGA_PT_25K",
                interactive: true,
    title: 'NIAGA_PT_25K<br />\
    <img src="styles/legend/NIAGA_PT_25K_2_0.png" /> Pusat Bisnis dan Perdagangan Lainnya<br />\
    <img src="styles/legend/NIAGA_PT_25K_2_1.png" /> <br />'
        });
var format_TokoModerTest_3 = new ol.format.GeoJSON();
var features_TokoModerTest_3 = format_TokoModerTest_3.readFeatures(json_TokoModerTest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TokoModerTest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokoModerTest_3.addFeatures(features_TokoModerTest_3);
var lyr_TokoModerTest_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TokoModerTest_3, 
                style: style_TokoModerTest_3,
                popuplayertitle: "Toko Moder Test",
                interactive: true,
                title: '<img src="styles/legend/TokoModerTest_3.png" /> Toko Moder Test'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1.setVisible(true);lyr_NIAGA_PT_25K_2.setVisible(true);lyr_TokoModerTest_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1,lyr_NIAGA_PT_25K_2,lyr_TokoModerTest_3];
lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Luas_Ha': 'Luas_Ha', 'Kep_Pend': 'Kep_Pend', 'Pend_Dat': 'Pend_Dat', });
lyr_NIAGA_PT_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_TokoModerTest_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Kep_Pend': 'TextEdit', 'Pend_Dat': 'TextEdit', });
lyr_NIAGA_PT_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_TokoModerTest_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BATAS_ADMINISTRASI_KOTA_BANJAR_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Luas_Ha': 'no label', 'Kep_Pend': 'no label', 'Pend_Dat': 'no label', });
lyr_NIAGA_PT_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_TokoModerTest_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TokoModerTest_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});