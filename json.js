// Datos de destinos cargados dinámicamente desde un JSON simulado
export let destinations = [{
        "name": "Plaza Murillo",
        "lat": -16.4964541,
        "lon": -68.1335052,
        "image": [
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Noon%2C_Plaza_Murillo%2C_La_Paz%2C_Bolivia_%2814689720998%29.jpg",
            "https://antipode-bolivia.com/Que-Voir/place-murillo--v1-1200-800.jpeg"
        ],
        "description": "Centro histórico de La Paz",
        "descri": "La Plaza Murillo es la plaza central de la ciudad de La Paz y el espacio abierto más conectado con la vida política de Bolivia. Entre los edificios destacados de la plaza se encuentran el Palacio Presidencial, el Congreso Nacional de Bolivia y la Catedral de La Paz."
    },
    {
        "name": "Parque de las Culturas",
        "lat": -16.5031,
        "lon": -68.1325,
        "image": [
            "https://www.oopp.gob.bo/wp-content/uploads/2021/06/4444-1-1024x768.jpg",
            "https://ahoraelpueblo.bo/images/noticias/Sociedad/2024/04/ParqueCulturas0924.jpg"
        ],
        "description": "Espacio cultural en La Paz",
        "descri": "El Parque de las Culturas es un espacio público multifuncional en La Paz que celebra la diversidad cultural y artística. Ofrece áreas verdes, escenarios para eventos culturales y espacios de recreación para toda la familia."
    },
    {
        "name": "Valle de la Luna",
        "lat": -16.5728,
        "lon": -68.1108,
        "image": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d4/23/87/paesaggio-lunare.jpg?w=900&h=500&s=1",
            "https://anabolivia.org/wp-content/uploads/2021/09/VL-6-1024x703.jpg"
        ],
        "description": "Paisaje natural único en La Paz",
        "descri": "El Valle de la Luna es un lugar natural situado en las afueras de La Paz, conocido por sus formaciones geológicas únicas que asemejan un paisaje lunar. Este destino es ideal para los amantes de la naturaleza y ofrece senderos para explorar y disfrutar de vistas impresionantes."
    },
    {
        "name": "Valle de las Ánimas",
        "lat": -16.5983,
        "lon": -68.0917,
        "image": [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/25/b1/d9.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/52/91/23/photo1jpg.jpg?w=1200&h=-1&s=1"
        ],
        "description": "Formaciones geológicas impresionantes en La Paz",
        "descri": "El Valle de las Ánimas es un impresionante lugar natural cerca de La Paz, caracterizado por gigantescas formaciones rocosas que parecen columnas apuntando al cielo. Este valle es perfecto para realizar caminatas y disfrutar de paisajes que parecen sacados de otro mundo."
    },
    {
        "name": "Parque Pura Pura",
        "lat": -16.4857053,
        "lon": -68.1550536,
        "image": [
            "https://lapaz.bo/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-20-at-16.11.49-3AFK3Y.jpeg",
            "https://www.urgente.bo/sites/default/files/19ade61a-f49d-462a-88db-b37607a215b4.jpg"
        ],
        "description": "Pulmón verde en la ciudad de La Paz",
        "descri": "El Parque Pura Pura es un extenso espacio verde en La Paz que ofrece un refugio natural en medio de la ciudad. Con áreas de bosque, senderos para caminatas y espacios recreativos, es un lugar ideal para conectar con la naturaleza y disfrutar de actividades al aire libre."
    },
    {
        "name": "Sopocachi",
        "lat": -16.5076,
        "lon": -68.1278,
        "image": [
            "https://cdn.21online.lat/bolivia/cache/awsTest1/rc/GNkPkDS4/uploads/65/propiedades/63563/674a0b1451139.jpg",
            "https://cdn.21online.lat/bolivia/cache/awsTest1/rc/qPnMKNqh/uploads/65/propiedades/51835/666c8ea453735.jpg"
        ],
        "description": "Barrio cultural y bohemio en La Paz",
        "descri": "Sopocachi es uno de los barrios más emblemáticos de La Paz, conocido por su ambiente bohemio y cultural. Ofrece una gran variedad de cafés, bares, galerías de arte y espacios culturales, además de ser un punto de encuentro para artistas y jóvenes creativos."
    },
    {
        "name": "Plaza Mayor de San Francisco",
        "lat": -16.4952,
        "lon": -68.1330,
        "image": [
            "https://thumbs.dreamstime.com/z/iglesia-de-san-francisco-basilica-en-plaza-mayor-fransico-el-centro-la-paz-bolivia-sudamerica-147381174.jpg",
            "https://thumbs.dreamstime.com/z/iglesia-de-san-francisco-basilica-en-plaza-mayor-fransico-el-centro-la-paz-bolivia-sudamerica-147381115.jpg"
        ],
        "description": "Plaza histórica y cultural en La Paz",
        "descri": "La Plaza Mayor de San Francisco es uno de los espacios más importantes de La Paz, ubicado frente a la histórica Basílica de San Francisco. Es un lugar de encuentro cultural y social, rodeado de mercados, cafés y una vibrante actividad urbana."
    },
    {
        "name": "El Alto",
        "lat": -16.5000,
        "lon": -68.2000,
        "image": [
            "https://farm5.staticflickr.com/4478/26168675689_7541e00625_c.jpg",
            "https://c8.alamy.com/comp/BBB30Y/el-alto-market-la-paz-bolivia-BBB30Y.jpg"
        ],
        "description": "Ciudad vecina de La Paz en las alturas",
        "descri": "El Alto es una ciudad ubicada en las alturas del altiplano boliviano, conocida por sus vistas panorámicas de La Paz y los Andes. Es un centro de actividad cultural y económica, famoso por su mercado, su arquitectura única y la Feria 16 de Julio, una de las más grandes de Sudamérica."
    },
    {
        "name": "Universidad Mayor de San Andrés (UMSA)",
        "lat": -16.5007,
        "lon": -68.1234,
        "image": [
            "https://www.la-razon.com/wp-content/uploads/2023/02/03/17/umsa.jpg",
            "https://lavozdetarija.com/wp-content/uploads/2021/11/UMSA-1068x710.jpg"
        ],
        "description": "La principal universidad pública de Bolivia",
        "descri": "La Universidad Mayor de San Andrés (UMSA) es la institución de educación superior más importante de Bolivia, ubicada en La Paz. Fundada en 1830, es reconocida por su excelencia académica, su aporte a la investigación y su papel fundamental en la formación de profesionales en diversas áreas."
    },
    {
        "name": "Estadio Hernando Siles",
        "lat": -16.4993,
        "lon": -68.1193,
        "image": [
            "https://www.lostiempos.com/sites/default/files/media_imagen/2020/6/7/hernando-siles.jpg",
            "https://assets.goal.com/images/v3/bltb11d6efc62bac222/d40173a62a03120b67947e3816685d2ee0a6a5f2.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        ],
        "description": "El estadio más emblemático de Bolivia",
        "descri": "El Estadio Hernando Siles, ubicado en La Paz, es el estadio de fútbol más importante de Bolivia y uno de los más altos del mundo, a 3,600 metros sobre el nivel del mar. Es sede de partidos de la selección boliviana y de clubes locales como Bolívar y The Strongest."
    },
    {
        "name": "Isla del Sol",
        "lat": -16.01728,
        "lon": -69.17884,
        "image": [
            "https://th.bing.com/th/id/R.24f9505aa91810d087c603cac3e55200?rik=ELZOp3sT5mDgAQ&pid=ImgRaw&r=0  ",
            "https://th.bing.com/th/id/R.d4adb16eeafdb0d85721aff12a725830?rik=ODNUVi%2bEFoORpQ&pid=ImgRaw&r=0 ",
            "https://th.bing.com/th/id/R.49f6bcc3cb8b83aee5194679ff127920?rik=eq8lAhI7eSSJqA&pid=ImgRaw&r=0 "
        ],
        "description": "La isla del Sol o isla Titicaca",
        "descri": "La isla del Sol o isla Titicaca es una isla boliviana situada en el lago Titicaca, dentro del municipio de Copacabana en la provincia de Manco Kapac del departamento de La Paz. Tiene una longitud de 9,6 km por 4,6 km de ancho y una superficie de 14,3 km², lo que la convierte en la isla más grande del lago."
    },

    {
        "name": "Illimani",
        "lat": -16.63249,
        "lon": -67.79077,
        "image": [
            " https://th.bing.com/th/id/OIP.A5ZC_enj4N5JXGxAvig83gHaEK?rs=1&pid=ImgDetMain ",
            " https://th.bing.com/th/id/R.27c161df2d0a7083d63084f9127e969b?rik=uVzuSBktO8BWsw&pid=ImgRaw&r=0  ",
            " https://th.bing.com/th/id/OIP.tTquFczsHRsRBLQGMoVEcwHaFj?rs=1&pid=ImgDetMain "
        ],

        "description": "Centro histórico de La Paz",
        "descri": "El Illimani es una montaña nevada de los Andes de Bolivia, ubicada cerca de la ciudad de La Paz. Con 6.460 metros sobre el nivel del mar, es la de mayor altura de la Cordillera Real y la segunda de Bolivia (detrás del nevado Sajama, que pertenece a la Cordillera Occidental). Administrativemente se encuentra ubicada entre los municipios de Palca e Irupana, en las provincias de Murillo y Sud Yungas respectivamente, dentro del departamento de La Paz."
    },
    {
        "name": "Mercado de las Brujas",
        "lat": -16.5004,
        "lon": -68.1327,
        "image": [
            "https://s.ruta0.net/cache/img680/18823.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/05-Mercado_de_las_Brujas_%28La_Paz%29-3.jpg/800px-05-Mercado_de_las_Brujas_%28La_Paz%29-3.jpg?20201214143448"
        ],

        "description": "El Mercado de las Brujas",
        "descri": "Es un mercado callejero ubicado en La Paz, Bolivia. Se encuentra en la calle Linares, en el centro de la ciudad, en las cercanías de la Basílica de San Francisco. Entre las principales mercancías vendidas en el Mercado de las Brujas, dirigida por los brujos locales conocidos como yatiris, se incluyen pociones, ranas secas, plantas medicinales como retama y armadillos utilizados en los rituales de Los Andes."    
    },
    {
        "name": "Isla de la Luna",
        "lat": -16.03977075114571,
        "lon": -69.072075001253,
        "image": [
            "https://blog.quehoteles.com/wp-content/uploads/2023/03/Isla-de-la-Luna.jpg",
            "https://www.civitatis.com/f/bolivia/la-paz/excursion-lago-titicaca-isla-luna-589x392.jpg"
        ],
        "description": "Isla Koati",
        "descri": "La isla de la Luna, también llamada isla Koati, es una isla de Bolivia que se encuentra en el lago Titicaca, junto a la isla del Sol, en la región del Altiplano. Es una isla pequeña y cuenta con una superficie de 105 hectáreas. Presenta una orografía escarpada por los vientos y además por ser una isla altiplánica. Administrativamente se encuentra en el municipio de Copacabana de la provincia de Manco Kapac en el departamento de La Paz."
    },
    {
        "name": "Lago Titicaca",
        "lat": -16.168156342768505,
        "lon": -69.09202189075172,
        "image": [
            "https://media.traveler.es/photos/63a6f462777730b397020ac4/master/pass/GettyImages-523528056.jpg",
            "https://www.perurail.com/wp-content/uploads/2022/08/Lago-Titicaca.jpg"
        ],
        "description": "Lago Titicaca",
        "descri": "El Titicaca (en aimara y en quechua sureño, ortografía contemporánea: Titiqaqa) es el lago navegable más alto del mundo, ubicado en los Andes centrales, dentro de la meseta del Collao, a una altitud media de 3812 m s. n. m. entre los territorios de Bolivia y Perú."
    },

    {
        "name": "Copacabana",
        "lat": -16.168032264163227,
        "lon": -69.088210838732,
        "image": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Copacabana%2C_Bolivia_at_sunset.jpg/640px-Copacabana%2C_Bolivia_at_sunset.jpg",
            "https://www.onebagofdreams.com/wp-content/uploads/2023/05/DSC02179-1536x1024.webp"
        ],
        "description": "Copacabana",
        "descri": "Copacabana es una ciudad turística y municipio de Bolivia, ubicada en la región del Altiplano andino, en la costa oeste de la península de Copacabana, a orillas del lago Titicaca. Es la capital de la provincia de Manco Kapac, ubicada en el departamento de La Paz y está ubicada a 155 km de la ciudad de La Paz. La ciudad es un centro de peregrinación importante en el país, al hallarse en la misma la imagen de la Virgen de Copacabana, la advocación mariana más extendida en Bolivia."
    },
    {
        "name": "Sorata",
        "lat": -15.769580707472588,
        "lon": -68.64734178652229,
        "image": [
            "https://unifranz.edu.bo/wp-content/uploads/2023/08/c-sorata-416096-F45D.png",
            "https://360.sorata.bo/img/inicio-dos-editado.jpg"
        ],
        "description": "Sorata",
        "descri": "Sorata es una localidad de Bolivia, capital de la provincia de Larecaja a 150 km de la ciudad de La Paz. Según el último censo oficial realizado por el Instituto Nacional de Estadística de Bolivia (INE) en 2012, el municipio cuenta con una población de 23.512 habitantes y está situado a una altitud promedio de 3.800 metros sobre el nivel del mar."
    },

    {
        "name": "Muela del Diablo",
        "lat": -16.5623293,
        "lon": -68.0571654,
        "image": [
            "https://www.ibolivia.org/wp-content/uploads/2019/04/muela-del-diablo-bolivia-768x394.jpg",
            "https://www.civitatis.com/f/bolivia/la-paz/trekking-muela-diablo-589x392.jpg"
        ],
        "description": "Muela del Diablo",
        "descri": "La Muela del Diablo, conocido localmente como Auki Kollo,es una formación rocosa ubicada en el municipio de Mecapaca cerca de la Zona Sur de la ciudad de La Paz, Bolivia, a 3825 metros de altura. Se encuentra cerca de la comunidad de Chiaraque, además de las zonas de Pedregal, Auquisamaña y Los Pinos. La Muela del Diablo es un atractivo turístico visible desde La Paz y El Alto."
    },

    {
        "name": " Mirador killi killi",
        "lat": -16.494349259300392,
        "lon": -68.12747852214935,
        "image": [
            "https://th.bing.com/th/id/OIP.pR8GJjV1tNilpmB99ldwBgHaE8?rs=1&pid=ImgDetMain",
            "https://www.lapazlife.com/wp-content/uploads/2014/08/mirador-killi-killi-la-paz-bolivia1.jpg"
        ],
        "description": "Mirador killi killi",
        "descri": "El Mirador de Killi Killi es un parque mirador ubicado al noroeste de la ciudad de La Paz, Bolivia. El nombre proviene del nombre local del halcón falco sparverius, ave rapaz que habita la zona"
    },

    {
        "name": "Bioparque Municipal Vesty Pakos",
        "lat": -16.572200110907158,
        "lon": -68.08309610679731,
        "image": [
            "https://th.bing.com/th/id/OIP.cyfFVBq--douYmbmfLWgLwHaE7?rs=1&pid=ImgDetMain",
            "https://www.laregion.bo/wp-content/uploads/2020/11/VESTY-PAKOS.jpeg"
        ],
        "description": "Bioparque Municipal Vesty Pakos ",
        "descri": "El Bioparque Municipal Vesty Pakos, también conocido por su antigua denominación Zoológico Municipal de La Paz es un centro de custodia de fauna silvestre inserto en el Parque nacional Mallasa, al sureste de la ciudad de La Paz, en Bolivia. Es administrado por el Gobierno Municipal de La Paz y es el primer centro de custodia de Bolivia en ser parte de la Asociación Latinoamericana de Parques, Zoológicos y Acuarios (ALPZA)."
    },
    {
        "name": "Palacio de Gobierno",
        "lat": -16.496176,
        "lon": -68.133635,
        "image": [
            "https://www.urgente.bo/sites/default/files/Palacio.Quemado_0.JPG",
            "https://www.laregion.bo/wp-content/uploads/2015/10/PALACIO-DE-GOBIERNO.jpg"
        ],
        "description": "El Palacio de Gobierno o Palacio Quemado",
        "descri": "El Palacio Quemado (oficialmente Palacio de Gobierno), llamado así tras sufrir un incendio en 1875,1​ es el Palacio Presidencial de mayor importancia en la historia de Bolivia, posteriormente reemplazado por la Casa Grande del Pueblo. Fue sede principal del Poder Ejecutivo boliviano y despacho del presidente de Bolivia en tres periodos no consecutivos, 1853-1875, 1899-2018 y 2019-2020."    
    },
    {
        "name": "Mercado de las Brujas",
        "lat": -16.496151,
        "lon": -68.139135,
        "image": [
            "https://s.ruta0.net/cache/img680/18823.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/05-Mercado_de_las_Brujas_%28La_Paz%29-3.jpg/800px-05-Mercado_de_las_Brujas_%28La_Paz%29-3.jpg?20201214143448"
        ],

        "description": "Mercado místico en La Paz",
        "descri": "Ubicado en la Calle Linares, el Mercado de las Brujas es famoso por ofrecer artículos esotéricos, amuletos, hierbas medicinales y fetos de llama usados en rituales para la Pachamama. También se pueden consultar con los yatiris, chamanes tradicionales que realizan rituales de adivinación y bendición, siendo un lugar único para explorar la cultura y las tradiciones andinas."
    },
    {
        "name": "Museo Nacional de Etnografía y Folklore",
        "lat": -16.494396,
        "lon": -68.135068,
        "image": [
            "https://www.laregion.bo/wp-content/uploads/2015/10/MUSEO-DE-ETNOGRAFIA.jpg",
            "http://heuristicaestudio.com/wp-content/uploads/2021/11/toma-interior-museos-ciudad-vaticano_181624-12883.jpg"
        ],

        "description": "Museo de la diversidad cultural boliviana",
        "descri": "El MUSEF es un espacio emblemático dedicado a preservar y exhibir la diversidad cultural de Bolivia. Inaugurado en 1962, alberga colecciones de textiles, cerámica, máscaras, y otros objetos que celebran las tradiciones y la riqueza artística del país. Está ubicado en el Palacio de los Marqueses de Villaverde, declarado Monumento Nacional."
    },
    {
        "name": "Calle Sagárnaga",
        "lat": -16.497368,
        "lon": -68.138337,
        "image": [
            "https://www.ibolivia.org/wp-content/uploads/2019/04/calle-sagarnaga-bolivia.jpg",
            "https://www.laregion.bo/wp-content/uploads/2015/10/calle-sagarnaga.jpg"
        ],

        "description": "Centro artesanal y cultural de La Paz",
        "descri": "La Calle Sagárnaga es una de las vías más emblemáticas de La Paz. Conocida por su arquitectura colorida y sus tiendas de artesanías, ofrece productos tradicionales como textiles, joyería de plata y objetos místicos. Es el lugar ideal para comprar recuerdos y sumergirse en la cultura boliviana, combinando historia, comercio y tradición."
    },
    {
        "name": "Mirador Laycacota",
        "lat": -16.501786,
        "lon": -68.125277,
        "image": [
            "https://www.ibolivia.org/wp-content/uploads/2019/07/parque-mirador-laikakota.jpg",
            "https://for91days.com/photos/Bolivia/Laikakota/La-Paz-Sightseeing.jpg"
        ],

        "description": "Vista panorámica de La Paz",
        "descri": "El Mirador Laycacota ofrece una impresionante vista de 360° de La Paz desde una colina central. Es conocido por su parque familiar con juegos infantiles y áreas de picnic. Desde este punto, se pueden observar el Illimani nevado y el casco urbano de la ciudad, brindando un lugar perfecto para tomar fotografías panorámicas y disfrutar de un ambiente relajado."
    },
    {
        "name": "Calle Jaén",
        "lat": -16.492378,
        "lon": -68.135916,
        "image": [
            "https://img.freepik.com/fotos-premium/calle-jaen-calle-angosta-artistica-grupos-impresionantes-edificios-coloniales-paz-bolivia_76000-10337.jpg?w=740",
            "https://www.infodiez.com/wp-content/uploads/2020/02/Calle-Jaen_infodiez.jpg"
        ],

        "description": "Calle histórica y cultural de La Paz",
        "descri": "La Calle Jaén es una de las más emblemáticas de La Paz, conocida por su arquitectura colonial perfectamente conservada. Alberga numerosos museos, como el Museo de Metales Preciosos Precolombinos y el Museo de Instrumentos Musicales. Además, está impregnada de leyendas y supersticiones locales, como la de la viuda espectral que vaga por las noches. Es un destino ideal para disfrutar de una atmósfera bohemia y explorar la historia paceña."
    },
    {
        "name": "Tiwuanaku",
        "lat": -16.555602,
        "lon": -68.673965,
        "image": [
            "https://www.ngenespanol.com/wp-content/uploads/2024/03/Tiahuanaco-la-cultura-madre-sudamerica-que-florecio-en-el-lago-Titikaka-770x481.jpg",
            "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2016/12/22125257/Tiwanacu-Kalasasaya-compressor.png"
        ],

        "description": "Antiguo centro ceremonial prehispánico",
        "descri": "Tihuanacu, conocido también como Tiwanaku, es un importante sitio arqueológico precolombino en el Altiplano boliviano. Destaca por monumentos como la Puerta del Sol, Puma Punku y templos semisubterráneos, símbolos de la avanzada ingeniería y cultura tiahuanacota."
    },
    {
        "name": "Coroico",
        "lat": -16.193853,
        "lon": -67.728767,
        "image": [
            "https://www.laregion.bo/wp-content/uploads/2015/10/coroico2.jpg",
            "https://www.boliviaturismo.com.bo/img/coroico-bolivia.jpg"
        ],
        "description": "Ciudad de los Yungas",
        "descri": "Coroico es un destino turístico popular en los Yungas de Bolivia. Con un clima cálido y paisajes verdes, ofrece actividades como senderismo, ciclismo en la Carretera de la Muerte y visitas a plantaciones de café y coca."
    },
    {
        "name": "Chacaltaya",
        "lat": -16.347031,
        "lon": -68.127842,
        "image": [
            "https://s.ruta0.net/cache/img680/18814.jpg",
            "https://boliviaesturismo.com/wp-content/uploads/2018/10/44211370_2020176091606529_629399939373334528_n.jpg"
        ],
        "description": "Antigua estación de esquí en los Andes",
        "descri": "Chacaltaya, una montaña en la Cordillera Real, fue el hogar de la estación de esquí más alta del mundo. Aunque el glaciar ha desaparecido, es un lugar popular para trekking y disfrutar de vistas de La Paz y el Altiplano."
    },
    {
        "name": "Huayna Potosí",
        "lat": -16.261409,
        "lon": -68.151916,
        "image": [
            "https://www.lugaresdenieve.com/sites/default/files/styles/imagen-detalle-estacion/public/estaciones/huayna-potosi.jpg?itok=mhiOf-5I",
            "https://www.lapazlife.com/wp-content/uploads/2014/10/Mt.-Huayna-Potosi-2.jpg"
        ],
        "description": "Montaña icónica cerca de La Paz",
        "descri": "El Huayna Potosí, con una altura de 6088 metros, es una de las montañas más accesibles para escaladores principiantes con experiencia en Bolivia. Ofrece vistas espectaculares y glaciares deslumbrantes."
    }
];