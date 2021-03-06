// JavaScript Document
/*
	Created by: @CesareoAguirre. 
	Hope it works. Please let me know your proyect and implementations. 
	Database updates will be wellcome
*/
var world_location_code_names=[{
        "CN|China": "China",
        "KR|South Korea": "Korea",
        "JP|Japan": "Japan",
        "MY|Malaysia": "Malasia",
        "AU|Australia": "Australia",
        "SG|Singapore": "Singapur",
        "PH|Philippines": "Filipinas",
        "VN|Vietnam": "Viet Nam",
        "BN|Brunei Darussalam": "Brun\u00e9i",
        "KH|Cambodia": "Cambodia",
        "NZ|New Zealand": "Nueva Zelanda",
        "MN|Mongolia": "Mongolia",
        "TH|Thailand": "Thailand",
        "ID|Indonesia": "Indonesia",
        "IN|India": "India",
        "LK|Sri Lanka": "Sri Lanka",
        "MV|Maldives": "Maldivas",
        "BD|Bangladesh": "Banglad\u00e9s",
        "BT|Bhutan": "But\u00e1n",
        "NP|Nepal": "Nepal",
        "US|United States": "USA",
        "CA|Canada": "Canada",
        "BR|Brazil": "Brazil",
        "CL|Chile": "Chile",
        "PE|Peru": "Per\u00fa",
        "MX|Mexico": "M\u00e9xico",
        "PA|Panama": "Panam\u00e1",
        "AR|Argentina": "Argentina",
        "EC|Ecuador": "Ecuador",
        "CR|Costa Rica": "Costa Rica",
        "CO|Columbia": "Colombia",
        "VE|Venezuela": "Venezuela (Bolivarian Republic of)",
        "DO|Dominican Republic": "Rep\u00fablica Dominicana",
        "JM|Jamaica": "Jamaica",
        "BO|Bolivia": "Bolivia (Plurinational State of)",
        "PY|Paraguay": "Paraguay",
        "HN|Honduras": "Honduras",
        "GT|Guatemala": "Guatemala",
        "UY|Uruguay": "Uruguay",
        "CU|Cuba": "Cuba",
        "TT|Trinidad and Tobago": "Trinidad and Tobago",
        "GY|Guyana": "Guyana",
        "LC|Guyana": "Saint Lucia",
        "AG|Antigua_and_Barbuda": "Antigua and Barbuda",
        "BS|Bahamas": "Bahamas",
        "VC|Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines",
        "SR|Suriname": "Suriname",
        "IT|Italy": "Italia",
        "ES|Spain": "Espa\u00f1a",
        "FR|France": "Francia",
        "DE|Germany": "Germany",
        "CH|Switzerland": "Suiza",
        "GB|United Kingdom": "UK",
        "NL|The Netherlands": "Holanda",
        "BE|Belgium": "B\u00e9lgica",
        "AT|Austria": "Austria",
        "NO|Norway": "Noruega",
        "SE|Sweden": "Suecia",
        "DK|Denmark": "Dinamarca",
        "PT|Portugal": "Portugal",
        "CZ|Czech Republic": "Rep\u00fablica Checa",
        "GR|Greece": "Grecia",
        "FI|Finland": "Finlandia",
        "IL|Israel": "Israel",
        "IE|Ireland": "Irlanda",
        "SI|Slovenia": "Eslovenia",
        "PL|Poland": "Polonia",
        "EE|Estonia": "Estonia",
        "IS|Iceland": "Islandia",
        "RO|Romania": "Rumania",
        "LU|Luxembourg": "Luxemburgo",
        "SM|San Marino": "San Marino",
        "SK|Slovakia": "Eslovaquia",
        "RU|Russian Federation": "",
        "RS|Serbia": "Serbia",
        "BG|Bulgaria": "Bulgaria",
        "HR|Croatia": "Croacia",
        "LV|Latvia": "Letonia",
        "AL|Albania": "Albania",
        "AM|Armenia": "Armenia",
        "HU|Hungary": "Hungr\u00eda",
        "TR|Turkey": "Turkey",
        "MT|Malta": "Malta",
        "BY|Belarus": "Bielorrusia",
        "GE|Georgia": "Georgia",
        "CY|Cyprus": "Chipre",
        "KZ|Kazakhstan": "Kazakhstan",
        "MK|Macedonia": "Macedonia",
        "MD|Republic of Moldova": "Moldavia",
        "LT|Lithuania": "Lituania",
        "AZ|Azerbaijan": "Azerbaiy\u00e1n",
        "BA|Bosnia and Herzegovina": "Bosnia y Herzegovina",
        "AD|Andorra": "Andorra",
        "UZ|Uzbekistan": "Uzbekistan",
        "MC|Monaco": "M\u00f3naco",
        "LI|Liechtenstein": "Liechtenstein",
        "ME|Montenegro": "Montenegro",
        "VA|Holy See": "Vaticano",
        "UA|Ukraine": "Ucrania",
        "FO|Faroe Islands": "Islas Feroe",
        "JE|Jersey": "Jersey",
        "GI|Gibraltar": "Gibraltar",
        "GG|Guernsey": "Guernsey",
        "PF|French Polynesia": "French Polynesia",
        "GU|Guam": "Guam",
        "RE|R\u00e9union": "R\u00e9union",
        "YT|Mayotte": "Mayotte",
        "PS|Palestine": "Palestina",
        "IR|Iran": "Ir\u00e1n",
        "BH|Bahrain": "Bar\u00e9in",
        "QA|Qatar": "Catar",
        "PK|Pakistan": "Pakist\u00e1n",
        "SA|Saudi Arabia": "Arabia Saudita",
        "EG|Egypt": "Egipto",
        "IQ|Iraq": "Irak",
        "KW|Kuwait": "Kuwait",
        "LB|Lebanon": "L\u00edbano",
        "AE|United Arab Emirates": "Emiratos \u00c1rabes",
        "MA|Morocco": "Marruecos",
        "JO|Jordan": "Jordania",
        "OM|Oman": "Om\u00e1n",
        "TN|Tunisia": "T\u00fanez",
        "AF|Afghanistan": "Afganist\u00e1n",
        "ZA|South Africa": "Sud\u00e1frica",
        "DZ|Algeria": "Argelia",
        "SN|Senegal": "Senegal",
        "BF|Burkina Faso": "Burkina Faso",
        "RW|Rwanda": "Rwanda",
        "CI|Cote d\u2019Ivoire": "Cote d\u2019Ivoire",
        "GH|Ghana": "Ghana",
        "CM|Cameroon": "Camer\u00fan",
        "ET|Ethiopia": "Ethiopia",
        "SC|Seychelles": "Seychelles",
        "CD|Democratic Republic\nof the Congo": "Rep\u00fablica Democr\u00e1tica del Congo",
        "KE|Kenya": "Kenya",
        "NA|Namibia": "Namibia",
        "NG|Nigeria": "Nigeria",
        "BJ|Benin": "Benin",
        "CF|Central African Republic": "Central African Republic",
        "CD|Congo": "Congo",
        "GQ|Equatorial Guinea": "Equatorial Guinea",
        "SZ|Eswatini": "Eswatini",
        "GA|Gabon": "Gabon",
        "GN|Guinea": "Guinea",
        "LR|Liberia": "Liberia",
        "MR|Mauritania": "Mauritania",
        "TG|Togo": "Togo",
        "TZ|United Republic of Tanzania": "United Republic of Tanzania",
        "DP|Diamond Princess": "Crucero"
    }];
var china_location_code_names=[
	{
        "\u6e56\u5317|Hubei": "Hubei",
        "\u5e7f\u4e1c|Guangdong": "Guangdong",
        "\u6cb3\u5357|Henan": "Henan",
        "\u6d59\u6c5f|Zhejiang": "Zhejiang",
        "\u6e56\u5357|Hunan": "Hunan",
        "\u5b89\u5fbd|Anhui": "Anhui",
        "\u6c5f\u897f|Jiangxi": "Jiangxi",
        "\u5c71\u4e1c|Shandong": "Shandong",
        "\u6c5f\u82cf|Jiangsu": "Jiangsu",
        "\u91cd\u5e86|Chongqing": "Chongqing",
        "\u56db\u5ddd|Sichuan": "Sichuan",
        "\u9ed1\u9f99\u6c5f|Heilongjiang": "Heilongjiang",
        "\u5317\u4eac|Beijing": "Beijing",
        "\u4e0a\u6d77|Shanghai": "Shanghai",
        "\u6cb3\u5317|Hebei": "Hebei",
        "\u798f\u5efa|Fujian": "Fujian",
        "\u5e7f\u897f|Guangxi": "Guangxi",
        "\u9655\u897f|Shaanxi": "Shaanxi",
        "\u4e91\u5357|Yunnan": "Yunnan",
        "\u6d77\u5357|Hainan": "Hainan",
        "\u8d35\u5dde|Guizhou": "Guizhou",
        "\u5929\u6d25|Tianjin": "Tianjin",
        "\u5c71\u897f|Shanxi": "Shanxi",
        "\u8fbd\u5b81|Liaoning": "Liaoning",
        "\u7518\u8083|Gansu": "Gansu",
        "\u9999\u6e2f|Hong Kong": "Hong Kong",
        "\u5409\u6797|Jilin": "Jilin",
        "\u65b0\u7586|Xinjiang": "Xinjiang",
        "\u5b81\u590f|Ningxia": "Ningxia",
        "\u5185\u8499\u53e4|Inner Mongolia": "Mongolia",
        "TP|Taipei": "Taipei",
        "\u9752\u6d77|Qinghai": "Qinghai",
        "\u6fb3\u95e8|Macau": "Macao",
        "XI|Xizang": "Xizang",
        "\u897f\u85cf|Tibet": "T\u00edbet",
        "\u53f0\u6e7e|Taiwan": "Taiwan"
    }
			];	