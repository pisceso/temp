var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [21.036822009781506, 105.78120277404483],
                    [21.036463409946144, 105.78972850562265]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [21.036822009781506, 105.78120277404483],
                    [21.036463409946144, 105.78972850562265]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                   [21.036822009781506, 105.78120277404483],
                    [21.036463409946144, 105.78972850562265]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [21.036822009781506, 105.78120277404483]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 74
        }
    ]
};

var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [21.036873238258956, 105.78127595629013],
                    [21.036309724038183, 105.78954555000941]
                ],[
                    [21.03036708068826, 105.78804531398065],
                    [21.030586717114858, 105.7862510712592],
                    [21.033016423485495, 105.78023594607012]
                ]
            ],[
                [
                    [21.03466365950676, 105.78047125659099],
                    [21.036866153276314, 105.78113746110137]
                ]
            ]
        ]
    }
};

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [21.036822009781506, 105.78120277404483]
    }
};
