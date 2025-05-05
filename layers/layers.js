var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SpecialisedCentre_2 = new ol.format.GeoJSON();
var features_SpecialisedCentre_2 = format_SpecialisedCentre_2.readFeatures(json_SpecialisedCentre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialisedCentre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialisedCentre_2.addFeatures(features_SpecialisedCentre_2);
var lyr_SpecialisedCentre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialisedCentre_2, 
                style: style_SpecialisedCentre_2,
                popuplayertitle: 'Specialised Centre',
                interactive: false,
                title: '<img src="styles/legend/SpecialisedCentre_2.png" /> Specialised Centre'
            });
var format_Rural_3 = new ol.format.GeoJSON();
var features_Rural_3 = format_Rural_3.readFeatures(json_Rural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_3.addFeatures(features_Rural_3);
var lyr_Rural_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_3, 
                style: style_Rural_3,
                popuplayertitle: 'Rural',
                interactive: false,
                title: '<img src="styles/legend/Rural_3.png" /> Rural'
            });
var format_SpecialPurpose_4 = new ol.format.GeoJSON();
var features_SpecialPurpose_4 = format_SpecialPurpose_4.readFeatures(json_SpecialPurpose_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialPurpose_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialPurpose_4.addFeatures(features_SpecialPurpose_4);
var lyr_SpecialPurpose_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialPurpose_4, 
                style: style_SpecialPurpose_4,
                popuplayertitle: 'Special Purpose',
                interactive: false,
                title: '<img src="styles/legend/SpecialPurpose_4.png" /> Special Purpose'
            });
var format_RecreationandOpenSpace_5 = new ol.format.GeoJSON();
var features_RecreationandOpenSpace_5 = format_RecreationandOpenSpace_5.readFeatures(json_RecreationandOpenSpace_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecreationandOpenSpace_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationandOpenSpace_5.addFeatures(features_RecreationandOpenSpace_5);
var lyr_RecreationandOpenSpace_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationandOpenSpace_5, 
                style: style_RecreationandOpenSpace_5,
                popuplayertitle: 'Recreation and Open Space',
                interactive: false,
                title: '<img src="styles/legend/RecreationandOpenSpace_5.png" /> Recreation and Open Space'
            });
var format_MediumImpactIndustry_6 = new ol.format.GeoJSON();
var features_MediumImpactIndustry_6 = format_MediumImpactIndustry_6.readFeatures(json_MediumImpactIndustry_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediumImpactIndustry_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediumImpactIndustry_6.addFeatures(features_MediumImpactIndustry_6);
var lyr_MediumImpactIndustry_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediumImpactIndustry_6, 
                style: style_MediumImpactIndustry_6,
                popuplayertitle: 'Medium Impact Industry',
                interactive: false,
                title: '<img src="styles/legend/MediumImpactIndustry_6.png" /> Medium Impact Industry'
            });
var format_LowImpactIndustry_7 = new ol.format.GeoJSON();
var features_LowImpactIndustry_7 = format_LowImpactIndustry_7.readFeatures(json_LowImpactIndustry_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowImpactIndustry_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowImpactIndustry_7.addFeatures(features_LowImpactIndustry_7);
var lyr_LowImpactIndustry_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowImpactIndustry_7, 
                style: style_LowImpactIndustry_7,
                popuplayertitle: 'Low Impact Industry',
                interactive: false,
                title: '<img src="styles/legend/LowImpactIndustry_7.png" /> Low Impact Industry'
            });
var format_CommunityFacilities_8 = new ol.format.GeoJSON();
var features_CommunityFacilities_8 = format_CommunityFacilities_8.readFeatures(json_CommunityFacilities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityFacilities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityFacilities_8.addFeatures(features_CommunityFacilities_8);
var lyr_CommunityFacilities_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityFacilities_8, 
                style: style_CommunityFacilities_8,
                popuplayertitle: 'Community Facilities',
                interactive: false,
                title: '<img src="styles/legend/CommunityFacilities_8.png" /> Community Facilities'
            });
var format_EnvironmentalManagementandConservation_9 = new ol.format.GeoJSON();
var features_EnvironmentalManagementandConservation_9 = format_EnvironmentalManagementandConservation_9.readFeatures(json_EnvironmentalManagementandConservation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentalManagementandConservation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentalManagementandConservation_9.addFeatures(features_EnvironmentalManagementandConservation_9);
var lyr_EnvironmentalManagementandConservation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentalManagementandConservation_9, 
                style: style_EnvironmentalManagementandConservation_9,
                popuplayertitle: 'Environmental Management and Conservation',
                interactive: false,
                title: '<img src="styles/legend/EnvironmentalManagementandConservation_9.png" /> Environmental Management and Conservation'
            });
var format_Centre_10 = new ol.format.GeoJSON();
var features_Centre_10 = format_Centre_10.readFeatures(json_Centre_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centre_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centre_10.addFeatures(features_Centre_10);
var lyr_Centre_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centre_10, 
                style: style_Centre_10,
                popuplayertitle: 'Centre',
                interactive: false,
                title: '<img src="styles/legend/Centre_10.png" /> Centre'
            });
var format_EmergingCommunity_11 = new ol.format.GeoJSON();
var features_EmergingCommunity_11 = format_EmergingCommunity_11.readFeatures(json_EmergingCommunity_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmergingCommunity_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergingCommunity_11.addFeatures(features_EmergingCommunity_11);
var lyr_EmergingCommunity_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergingCommunity_11, 
                style: style_EmergingCommunity_11,
                popuplayertitle: 'Emerging Community',
                interactive: false,
                title: '<img src="styles/legend/EmergingCommunity_11.png" /> Emerging Community'
            });
var format_LowDensityResidential_12 = new ol.format.GeoJSON();
var features_LowDensityResidential_12 = format_LowDensityResidential_12.readFeatures(json_LowDensityResidential_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowDensityResidential_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowDensityResidential_12.addFeatures(features_LowDensityResidential_12);
var lyr_LowDensityResidential_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowDensityResidential_12, 
                style: style_LowDensityResidential_12,
                popuplayertitle: 'Low Density Residential',
                interactive: false,
                title: '<img src="styles/legend/LowDensityResidential_12.png" /> Low Density Residential'
            });
var format_LowMediumDensityResidential_13 = new ol.format.GeoJSON();
var features_LowMediumDensityResidential_13 = format_LowMediumDensityResidential_13.readFeatures(json_LowMediumDensityResidential_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowMediumDensityResidential_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowMediumDensityResidential_13.addFeatures(features_LowMediumDensityResidential_13);
var lyr_LowMediumDensityResidential_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowMediumDensityResidential_13, 
                style: style_LowMediumDensityResidential_13,
                popuplayertitle: 'Low-Medium Density Residential',
                interactive: false,
                title: '<img src="styles/legend/LowMediumDensityResidential_13.png" /> Low-Medium Density Residential'
            });
var format_PriorityDevelopmentArea_14 = new ol.format.GeoJSON();
var features_PriorityDevelopmentArea_14 = format_PriorityDevelopmentArea_14.readFeatures(json_PriorityDevelopmentArea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PriorityDevelopmentArea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityDevelopmentArea_14.addFeatures(features_PriorityDevelopmentArea_14);
var lyr_PriorityDevelopmentArea_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityDevelopmentArea_14, 
                style: style_PriorityDevelopmentArea_14,
                popuplayertitle: 'Priority Development Area',
                interactive: false,
                title: '<img src="styles/legend/PriorityDevelopmentArea_14.png" /> Priority Development Area'
            });
var format_MediumDensityResidential_15 = new ol.format.GeoJSON();
var features_MediumDensityResidential_15 = format_MediumDensityResidential_15.readFeatures(json_MediumDensityResidential_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediumDensityResidential_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediumDensityResidential_15.addFeatures(features_MediumDensityResidential_15);
var lyr_MediumDensityResidential_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediumDensityResidential_15, 
                style: style_MediumDensityResidential_15,
                popuplayertitle: 'Medium Density Residential',
                interactive: false,
                title: '<img src="styles/legend/MediumDensityResidential_15.png" /> Medium Density Residential'
            });
var format_MixedUse_16 = new ol.format.GeoJSON();
var features_MixedUse_16 = format_MixedUse_16.readFeatures(json_MixedUse_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MixedUse_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedUse_16.addFeatures(features_MixedUse_16);
var lyr_MixedUse_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MixedUse_16, 
                style: style_MixedUse_16,
                popuplayertitle: 'Mixed Use',
                interactive: false,
                title: '<img src="styles/legend/MixedUse_16.png" /> Mixed Use'
            });
var format_RuralResidential_17 = new ol.format.GeoJSON();
var features_RuralResidential_17 = format_RuralResidential_17.readFeatures(json_RuralResidential_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralResidential_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidential_17.addFeatures(features_RuralResidential_17);
var lyr_RuralResidential_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidential_17, 
                style: style_RuralResidential_17,
                popuplayertitle: 'Rural Residential',
                interactive: false,
                title: '<img src="styles/legend/RuralResidential_17.png" /> Rural Residential'
            });
var format_PriorityDevelopmentArea_18 = new ol.format.GeoJSON();
var features_PriorityDevelopmentArea_18 = format_PriorityDevelopmentArea_18.readFeatures(json_PriorityDevelopmentArea_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PriorityDevelopmentArea_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityDevelopmentArea_18.addFeatures(features_PriorityDevelopmentArea_18);
var lyr_PriorityDevelopmentArea_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityDevelopmentArea_18, 
                style: style_PriorityDevelopmentArea_18,
                popuplayertitle: 'Priority Development Area',
                interactive: false,
                title: '<img src="styles/legend/PriorityDevelopmentArea_18.png" /> Priority Development Area'
            });
var lyr_TeviotRoadJimboomba_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Teviot Road, Jimboomba<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TeviotRoadJimboomba_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [17023506.409400, -3230302.583400, 17030562.914600, -3226027.912000]
        })
    });
var lyr_GreaterFlagstoneendorsed_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Greater Flagstone endorsed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GreaterFlagstoneendorsed_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [17018015.184867, -3231040.517575, 17021772.936500, -3224201.216402]
        })
    });
var lyr_NorthMacleanLanduse_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'North Maclean Land use<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NorthMacleanLanduse_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [17031508.847855, -3220974.914834, 17034181.566748, -3218225.723299]
        })
    });
var lyr_Undullah_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Undullah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Undullah_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [17020988.213526, -3228527.791111, 17024440.389413, -3223295.826766]
        })
    });
var lyr_Yarrabilba_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Yarrabilba<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Yarrabilba_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [17042704.274490, -3230547.992180, 17049609.745894, -3222964.627641]
        })
    });
var format_Suburb_24 = new ol.format.GeoJSON();
var features_Suburb_24 = format_Suburb_24.readFeatures(json_Suburb_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_24.addFeatures(features_Suburb_24);
var lyr_Suburb_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_24, 
                style: style_Suburb_24,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_24.png" /> Suburb'
            });
var format_LoganLGA_25 = new ol.format.GeoJSON();
var features_LoganLGA_25 = format_LoganLGA_25.readFeatures(json_LoganLGA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoganLGA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoganLGA_25.addFeatures(features_LoganLGA_25);
var lyr_LoganLGA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoganLGA_25, 
                style: style_LoganLGA_25,
                popuplayertitle: 'Logan LGA',
                interactive: false,
                title: '<img src="styles/legend/LoganLGA_25.png" /> Logan LGA'
            });
var format_Unzoned_26 = new ol.format.GeoJSON();
var features_Unzoned_26 = format_Unzoned_26.readFeatures(json_Unzoned_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unzoned_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_26.addFeatures(features_Unzoned_26);
var lyr_Unzoned_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_26,
maxResolution:3.3605359382714357,
 minResolution:0.14002233076130982,

                style: style_Unzoned_26,
                popuplayertitle: 'Unzoned',
                interactive: true,
                title: '<img src="styles/legend/Unzoned_26.png" /> Unzoned'
            });
var format_Rezone_27 = new ol.format.GeoJSON();
var features_Rezone_27 = format_Rezone_27.readFeatures(json_Rezone_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rezone_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rezone_27.addFeatures(features_Rezone_27);
var lyr_Rezone_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rezone_27, 
                style: style_Rezone_27,
                popuplayertitle: 'Rezone',
                interactive: true,
                title: '<img src="styles/legend/Rezone_27.png" /> Rezone'
            });
var format_Zoned_28 = new ol.format.GeoJSON();
var features_Zoned_28 = format_Zoned_28.readFeatures(json_Zoned_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoned_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoned_28.addFeatures(features_Zoned_28);
var lyr_Zoned_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoned_28, 
                style: style_Zoned_28,
                popuplayertitle: 'Zoned',
                interactive: true,
                title: '<img src="styles/legend/Zoned_28.png" /> Zoned'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_24,lyr_LoganLGA_25,lyr_Unzoned_26,lyr_Rezone_27,lyr_Zoned_28,],
                                fold: 'open',
                                title: 'Administrative'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_TeviotRoadJimboomba_19,lyr_GreaterFlagstoneendorsed_20,lyr_NorthMacleanLanduse_21,lyr_Undullah_22,lyr_Yarrabilba_23,],
                                fold: 'close',
                                title: 'PSP'});
var group_PSPBoundary = new ol.layer.Group({
                                layers: [lyr_PriorityDevelopmentArea_18,],
                                fold: 'close',
                                title: 'PSP Boundary'});
var group_Zoned = new ol.layer.Group({
                                layers: [lyr_Centre_10,lyr_EmergingCommunity_11,lyr_LowDensityResidential_12,lyr_LowMediumDensityResidential_13,lyr_PriorityDevelopmentArea_14,lyr_MediumDensityResidential_15,lyr_MixedUse_16,lyr_RuralResidential_17,],
                                fold: 'close',
                                title: 'Zoned'});
var group_Unzoned = new ol.layer.Group({
                                layers: [lyr_SpecialisedCentre_2,lyr_Rural_3,lyr_SpecialPurpose_4,lyr_RecreationandOpenSpace_5,lyr_MediumImpactIndustry_6,lyr_LowImpactIndustry_7,lyr_CommunityFacilities_8,lyr_EnvironmentalManagementandConservation_9,],
                                fold: 'close',
                                title: 'Unzoned'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_SpecialisedCentre_2.setVisible(false);lyr_Rural_3.setVisible(false);lyr_SpecialPurpose_4.setVisible(false);lyr_RecreationandOpenSpace_5.setVisible(false);lyr_MediumImpactIndustry_6.setVisible(false);lyr_LowImpactIndustry_7.setVisible(false);lyr_CommunityFacilities_8.setVisible(false);lyr_EnvironmentalManagementandConservation_9.setVisible(false);lyr_Centre_10.setVisible(false);lyr_EmergingCommunity_11.setVisible(false);lyr_LowDensityResidential_12.setVisible(false);lyr_LowMediumDensityResidential_13.setVisible(false);lyr_PriorityDevelopmentArea_14.setVisible(false);lyr_MediumDensityResidential_15.setVisible(false);lyr_MixedUse_16.setVisible(false);lyr_RuralResidential_17.setVisible(false);lyr_PriorityDevelopmentArea_18.setVisible(true);lyr_TeviotRoadJimboomba_19.setVisible(true);lyr_GreaterFlagstoneendorsed_20.setVisible(true);lyr_NorthMacleanLanduse_21.setVisible(true);lyr_Undullah_22.setVisible(true);lyr_Yarrabilba_23.setVisible(true);lyr_Suburb_24.setVisible(true);lyr_LoganLGA_25.setVisible(true);lyr_Unzoned_26.setVisible(true);lyr_Rezone_27.setVisible(true);lyr_Zoned_28.setVisible(true);
var layersList = [group_BaseLayer,group_Unzoned,group_Zoned,group_PSPBoundary,group_PSP,group_Administrative];
lyr_SpecialisedCentre_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Rural_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SpecialPurpose_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RecreationandOpenSpace_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MediumImpactIndustry_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LowImpactIndustry_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CommunityFacilities_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EnvironmentalManagementandConservation_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Centre_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EmergingCommunity_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LowDensityResidential_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LowMediumDensityResidential_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PriorityDevelopmentArea_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MediumDensityResidential_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MixedUse_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RuralResidential_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Zone': 'Zone', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PriorityDevelopmentArea_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Priority_Development_Area': 'Priority_Development_Area', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Suburb_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Locality': 'Locality', 'Within_LCC': 'Within_LCC', 'Processed': 'Processed', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LoganLGA_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID_1', 'City_Name': 'City_Name', 'DCDB_Extracted': 'DCDB_Extracted', 'Processed': 'Processed', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Unzoned_26.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Zoning': 'Zoning', 'Precincts': 'Precincts', 'Gross HA': 'Gross HA', });
lyr_Rezone_27.set('fieldAliases', {'fid': 'fid', 'Formatted_Lot_Plan': 'Formatted_Lot_Plan', 'Address': 'Address', 'Zoning': 'Zoning', 'Precincts': 'Precincts', 'Gross HA': 'Gross HA', });
lyr_Zoned_28.set('fieldAliases', {'fid': 'fid', 'Formatted_Lot_Plan': 'Formatted_Lot_Plan', 'Address': 'Address', 'Zoning': 'Zoning', 'Precincts': 'Precincts', 'Gross HA': 'Gross HA', });
lyr_SpecialisedCentre_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Rural_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SpecialPurpose_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RecreationandOpenSpace_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MediumImpactIndustry_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_LowImpactIndustry_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_CommunityFacilities_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EnvironmentalManagementandConservation_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Centre_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EmergingCommunity_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_LowDensityResidential_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_LowMediumDensityResidential_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_PriorityDevelopmentArea_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MediumDensityResidential_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MixedUse_16.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RuralResidential_17.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Zone': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_PriorityDevelopmentArea_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Priority_Development_Area': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Suburb_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Locality': 'TextEdit', 'Within_LCC': 'TextEdit', 'Processed': 'DateTime', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LoganLGA_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'City_Name': 'TextEdit', 'DCDB_Extracted': 'DateTime', 'Processed': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Unzoned_26.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Precincts': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_Rezone_27.set('fieldImages', {'fid': 'TextEdit', 'Formatted_Lot_Plan': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Precincts': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_Zoned_28.set('fieldImages', {'fid': 'TextEdit', 'Formatted_Lot_Plan': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Precincts': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_SpecialisedCentre_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Rural_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SpecialPurpose_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RecreationandOpenSpace_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MediumImpactIndustry_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LowImpactIndustry_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CommunityFacilities_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EnvironmentalManagementandConservation_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Centre_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EmergingCommunity_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LowDensityResidential_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LowMediumDensityResidential_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PriorityDevelopmentArea_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MediumDensityResidential_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MixedUse_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RuralResidential_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Zone': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PriorityDevelopmentArea_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Priority_Development_Area': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Suburb_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Locality': 'hidden field', 'Within_LCC': 'hidden field', 'Processed': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_LoganLGA_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'City_Name': 'hidden field', 'DCDB_Extracted': 'hidden field', 'Processed': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Unzoned_26.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Precincts': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', });
lyr_Rezone_27.set('fieldLabels', {'fid': 'hidden field', 'Formatted_Lot_Plan': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Precincts': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', });
lyr_Zoned_28.set('fieldLabels', {'fid': 'hidden field', 'Formatted_Lot_Plan': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Precincts': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', });
lyr_Zoned_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});