var wms_layers = [];

var format_LOT_0 = new ol.format.GeoJSON();
var features_LOT_0 = format_LOT_0.readFeatures(json_LOT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT_0.addFeatures(features_LOT_0);
var lyr_LOT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT_0, 
                style: style_LOT_0,
                popuplayertitle: "LOT",
                interactive: true,
                title: '<img src="styles/legend/LOT_0.png" /> LOT'
            });

lyr_LOT_0.setVisible(true);
var layersList = [lyr_LOT_0];
lyr_LOT_0.set('fieldAliases', {'LUAS': 'LUAS', 'NO_LOT': 'NO_LOT', 'tsp — hakmilik_Daerah': 'tsp — hakmilik_Daerah', 'tsp — hakmilik_NO PA': 'tsp — hakmilik_NO PA', 'tsp — pemilik_PEMILIK': 'tsp — pemilik_PEMILIK', });
lyr_LOT_0.set('fieldImages', {'LUAS': 'TextEdit', 'NO_LOT': 'TextEdit', 'tsp — hakmilik_Daerah': 'TextEdit', 'tsp — hakmilik_NO PA': 'TextEdit', 'tsp — pemilik_PEMILIK': 'TextEdit', });
lyr_LOT_0.set('fieldLabels', {'LUAS': 'no label', 'NO_LOT': 'no label', 'tsp — hakmilik_Daerah': 'no label', 'tsp — hakmilik_NO PA': 'no label', 'tsp — pemilik_PEMILIK': 'no label', });
lyr_LOT_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});