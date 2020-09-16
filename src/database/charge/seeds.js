const stations =  {
    tableName: "station",
    values:[
    {
        "name": "Gare de Lyon",
        "geo_coords_lat": 48.844357,
        "geo_coords_lon": 2.374409,
        "city_id": 3
    },
    {
        "name": "Gare d Austerlitz",
        "geo_coords_lat": 48.841805,
        "geo_coords_lon": 2.365728,
        "city_id": 3
    },
    {
        "name": "Kaunas",
        "geo_coords_lat": 54.886544,
        "geo_coords_lon": 23.931523,
        "city_id": 2
    },
    {
        "name": "Amaliai",
        "geo_coords_lat": 54.895133,
        "geo_coords_lon": 24.009406,
        "city_id": 2
    },
    {
        "name": "Paneriai",
        "geo_coords_lat": 54.629718,
        "geo_coords_lon": 25.17851,
        "city_id": 1
    },
    {
        "name": "Vilnius",
        "geo_coords_lat": 54.670437,
        "geo_coords_lon": 25.284368,
        "city_id": 1
    },
    {
        "name": "Gare de Nice-Riquier",
        "geo_coords_lat": 43.70604,
        "geo_coords_lon": 7.290242,
        "city_id": 4
    },
    {
        "name": "Gare de Nice-Ville",
        "geo_coords_lat": 43.704478,
        "geo_coords_lon": 7.262163,
        "city_id": 4
    }
    ]
}

const cities = {
    tableName: "city",
    values: [
        {
            "geo_coords_lat": 54.670437,
            "geo_coords_lon": 25.284368,
            "country_id": 2
        },
        {
            "geo_coords_lat": 54.895133,
            "geo_coords_lon": 24.009406,
            "country_id": 2
        },
        {
            "geo_coords_lat": 48.844357,
            "geo_coords_lon": 2.374409,
            "country_id": 1
        },
        {
            "geo_coords_lat": 43.71079,
            "geo_coords_lon": 7.259281,
            "country_id": 1
        }
    ]
}

const countries = {

    tableName: "country",
    values: [
        {
            "geo_coords_lat": 48.844357,
            "geo_coords_lon": 2.374409
        },
        {
            "geo_coords_lat": 54.670437,
            "geo_coords_lon": 25.284368
        }
    ]
}

const city_info_lang = {
    tableName: "city_info_lang",
    values:[

        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "fr"
        },
        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "it"
        },
        {
            "city_id": 1,
            "city_name": "Vilna",
            "lang": "es"
        },
        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "en"
        },
        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "de"
        },
        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "nl"
        },
        {
            "city_id": 1,
            "city_name": "Vilnius",
            "lang": "pt"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "fr"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "it"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "es"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "en"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "de"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "nl"
        },
        {
            "city_id": 2,
            "city_name": "Kaunas",
            "lang": "pt"
        },
        {
            "city_id": 3,
            "city_name": "Paris",
            "lang": "fr"
        },
        {
            "city_id": 3,
            "city_name": "Parigi",
            "lang": "it"
        },
        {
            "city_id": 3,
            "city_name": "Par\u00eds",
            "lang": "es"
        },
        {
            "city_id": 3,
            "city_name": "Paris",
            "lang": "en"
        },
        {
            "city_id": 3,
            "city_name": "Paris",
            "lang": "de"
        },
        {
            "city_id": 3,
            "city_name": "Parijs",
            "lang": "nl"
        },
        {
            "city_id": 3,
            "city_name": "Paris",
            "lang": "pt"
        },
        {
            "city_id": 4,
            "city_name": "Nice",
            "lang": "fr"
        },
        {
            "city_id": 4,
            "city_name": "Nizza",
            "lang": "it"
        },
        {
            "city_id": 4,
            "city_name": "Niza",
            "lang": "es"
        },
        {
            "city_id": 4,
            "city_name": "Nice",
            "lang": "en"
        },
        {
            "city_id": 4,
            "city_name": "Nizza",
            "lang": "de"
        },
        {
            "city_id": 4,
            "city_name": "Nice",
            "lang": "nl"
        },
        {
            "city_id": 4,
            "city_name": "Nice",
            "lang": "pt"
        }
        ]
    }

    
    const country_info_lang = {
        tableName: "country_info_lang",
        values:[
        {
            "country_id": 1,
            "country_name": "France",
            "lang": "fr"
        },
        {
            "country_id": 1,
            "country_name": "Francia",
            "lang": "it"
        },
        {
            "country_id": 1,
            "country_name": "Francia",
            "lang": "es"
        },
        {
            "country_id": 1,
            "country_name": "France",
            "lang": "en"
        },
        {
            "country_id": 1,
            "country_name": "Frankreich",
            "lang": "de"
        },
        {
            "country_id": 1,
            "country_name": "Frankrijk",
            "lang": "nl"
        },
        {
            "country_id": 1,
            "country_name": "Fran\u00e7a",
            "lang": "pt"
        },
        {
            "country_id": 2,
            "country_name": "Lituanie",
            "lang": "fr"
        },
        {
            "country_id": 2,
            "country_name": "Lituania",
            "lang": "it"
        },
        {
            "country_id": 2,
            "country_name": "Lituania",
            "lang": "es"
        },
        {
            "country_id": 2,
            "country_name": "Lithuania",
            "lang": "en"
        },
        {
            "country_id": 2,
            "country_name": "Litauen",
            "lang": "de"
        },
        {
            "country_id": 2,
            "country_name": "Litouwen",
            "lang": "nl"
        },
        {
            "country_id": 2,
            "country_name": "Litu\u00e2nia",
            "lang": "pt"
        }
    ]
}
// the sort of the elements is important
module.exports = [
    countries,
    cities,
    stations,
    country_info_lang,
    city_info_lang   
]