const flags = [
  {
    mid: 201,
    code: "AL",
    label: "Albania",
  },
  {
    mid: 202,
    code: "AD",
    label: "Andorra",
  },
  {
    mid: 203,
    code: "AT",
    label: "Austria",
  },
  {
    mid: 204,
    code: "PT",
    label: "Portugal",
  },
  {
    mid: 205,
    code: "BE",
    label: "Belgium",
  },
  {
    mid: 206,
    code: "BY",
    label: "Belarus",
  },
  {
    mid: 207,
    code: "BG",
    label: "Bulgaria",
  },
  {
    mid: 208,
    code: "VA",
    label: "Vatican",
  },
  {
    mid: 209,
    code: "CY",
    label: "Cyprus",
  },
  {
    mid: 210,
    code: "CY",
    label: "Cyprus",
  },
  {
    mid: 211,
    code: "DE",
    label: "Germany",
  },
  {
    mid: 212,
    code: "CY",
    label: "Cyprus",
  },
  {
    mid: 213,
    code: "GE",
    label: "Georgia",
  },
  {
    mid: 214,
    code: "MD",
    label: "Moldova",
  },
  {
    mid: 215,
    code: "MT",
    label: "Malta",
  },
  {
    mid: 216,
    code: "AM",
    label: "Armenia",
  },
  {
    mid: 218,
    code: "DE",
    label: "Germany",
  },
  {
    mid: 219,
    code: "DK",
    label: "Denmark",
  },
  {
    mid: 220,
    code: "DK",
    label: "Denmark",
  },
  {
    mid: 224,
    code: "ES",
    label: "Spain",
  },
  {
    mid: 225,
    code: "ES",
    label: "Spain",
  },
  {
    mid: 226,
    code: "FR",
    label: "France",
  },
  {
    mid: 227,
    code: "FR",
    label: "France",
  },
  {
    mid: 228,
    code: "FR",
    label: "France",
  },
  {
    mid: 229,
    code: "MT",
    label: "Malta",
  },
  {
    mid: 230,
    code: "FI",
    label: "Finland",
  },
  {
    mid: 231,
    code: "FO",
    label: "Faroe Is",
  },
  {
    mid: 232,
    code: "GB",
    label: "United Kingdom",
  },
  {
    mid: 233,
    code: "GB",
    label: "United Kingdom",
  },
  {
    mid: 234,
    code: "GB",
    label: "United Kingdom",
  },
  {
    mid: 235,
    code: "GB",
    label: "United Kingdom",
  },
  {
    mid: 236,
    code: "GI",
    label: "Gibraltar",
  },
  {
    mid: 237,
    code: "GR",
    label: "Greece",
  },
  {
    mid: 238,
    code: "HR",
    label: "Croatia",
  },
  {
    mid: 239,
    code: "GR",
    label: "Greece",
  },
  {
    mid: 240,
    code: "GR",
    label: "Greece",
  },
  {
    mid: 241,
    code: "GR",
    label: "Greece",
  },
  {
    mid: 242,
    code: "MA",
    label: "Morocco",
  },
  {
    mid: 243,
    code: "HU",
    label: "Hungary",
  },
  {
    mid: 244,
    code: "NL",
    label: "Netherlands",
  },
  {
    mid: 245,
    code: "NL",
    label: "Netherlands",
  },
  {
    mid: 246,
    code: "NL",
    label: "Netherlands",
  },
  {
    mid: 247,
    code: "IT",
    label: "Italy",
  },
  {
    mid: 248,
    code: "MT",
    label: "Malta",
  },
  {
    mid: 249,
    code: "MT",
    label: "Malta",
  },
  {
    mid: 250,
    code: "IE",
    label: "Ireland",
  },
  {
    mid: 251,
    code: "IS",
    label: "Iceland",
  },
  {
    mid: 252,
    code: "LI",
    label: "Liechtenstein",
  },
  {
    mid: 253,
    code: "LU",
    label: "Luxembourg",
  },
  {
    mid: 254,
    code: "MC",
    label: "Monaco",
  },
  {
    mid: 255,
    code: "PT",
    label: "Portugal",
  },
  {
    mid: 256,
    code: "MT",
    label: "Malta",
  },
  {
    mid: 257,
    code: "NO",
    label: "Norway",
  },
  {
    mid: 258,
    code: "NO",
    label: "Norway",
  },
  {
    mid: 259,
    code: "NO",
    label: "Norway",
  },
  {
    mid: 261,
    code: "PL",
    label: "Poland",
  },
  {
    mid: 262,
    code: "ME",
    label: "Montenegro",
  },
  {
    mid: 263,
    code: "PL",
    label: "Portugal",
  },
  {
    mid: 264,
    code: "RO",
    label: "Romania",
  },
  {
    mid: 265,
    code: "SE",
    label: "Sweden",
  },
  {
    mid: 266,
    code: "SE",
    label: "Sweden",
  },
  {
    mid: 267,
    code: "SK",
    label: "Slovakia",
  },
  {
    mid: 268,
    code: "SM",
    label: "San Marino",
  },
  {
    mid: 269,
    code: "CH",
    label: "Switzerland",
  },
  {
    mid: 270,
    code: "CZ",
    label: "Czech Republic",
  },
  {
    mid: 271,
    code: "TR",
    label: "Turkey",
  },
  {
    mid: 272,
    code: "UA",
    label: "Ukraine",
  },
  {
    mid: 273,
    code: "RU",
    label: "Russia",
  },
  {
    mid: 274,
    code: "MK",
    label: "FYR Macedonia",
  },
  {
    mid: 275,
    code: "LV",
    label: "Latvia",
  },
  {
    mid: 276,
    code: "EE",
    label: "Estonia",
  },
  {
    mid: 277,
    code: "LT",
    label: "Lithuania",
  },
  {
    mid: 278,
    code: "SI",
    label: "Slovenia",
  },
  {
    mid: 279,
    code: "RS",
    label: "Serbia",
  },
  {
    mid: 301,
    code: "AI",
    label: "Anguilla",
  },
  {
    mid: 303,
    code: "US",
    label: "USA",
  },
  {
    mid: 304,
    code: "AG",
    label: "Antigua Barbuda",
  },
  {
    mid: 305,
    code: "AG",
    label: "Antigua Barbuda",
  },
  {
    mid: 306,
    code: "CW",
    label: "Curacao",
  },
  {
    mid: 307,
    code: "AW",
    label: "Aruba",
  },
  {
    mid: 308,
    code: "BS",
    label: "Bahamas",
  },
  {
    mid: 309,
    code: "BS",
    label: "Bahamas",
  },
  {
    mid: 310,
    code: "BM",
    label: "Bermuda",
  },
  {
    mid: 311,
    code: "BS",
    label: "Bahamas",
  },
  {
    mid: 312,
    code: "BZ",
    label: "Belize",
  },
  {
    mid: 314,
    code: "BB",
    label: "Barbados",
  },
  {
    mid: 316,
    code: "CA",
    label: "Canada",
  },
  {
    mid: 319,
    code: "KY",
    label: "Cayman Is",
  },
  {
    mid: 321,
    code: "CR",
    label: "Costa Rica",
  },
  {
    mid: 323,
    code: "CU",
    label: "Cuba",
  },
  {
    mid: 325,
    code: "DM",
    label: "Dominica",
  },
  {
    mid: 327,
    code: "DO",
    label: "Dominican Rep",
  },
  {
    mid: 329,
    code: "GP",
    label: "Guadeloupe",
  },
  {
    mid: 330,
    code: "GD",
    label: "Grenada",
  },
  {
    mid: 331,
    code: "GL",
    label: "Greenland",
  },
  {
    mid: 332,
    code: "GT",
    label: "Guatemala",
  },
  {
    mid: 334,
    code: "HN",
    label: "Honduras",
  },
  {
    mid: 336,
    code: "HT",
    label: "Haiti",
  },
  {
    mid: 338,
    code: "US",
    label: "USA",
  },
  {
    mid: 339,
    code: "JM",
    label: "Jamaica",
  },
  {
    mid: 341,
    code: "KN",
    label: "St Kitts Nevis",
  },
  {
    mid: 343,
    code: "LC",
    label: "St Lucia",
  },
  {
    mid: 345,
    code: "MX",
    label: "Mexico",
  },
  {
    mid: 347,
    code: "MQ",
    label: "Martinique",
  },
  {
    mid: 348,
    code: "MS",
    label: "Montserrat",
  },
  {
    mid: 350,
    code: "NI",
    label: "Nicaragua",
  },
  {
    mid: 351,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 352,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 353,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 354,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 355,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 356,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 357,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 358,
    code: "PR",
    label: "Puerto Rico",
  },
  {
    mid: 359,
    code: "SV",
    label: "El Salvador",
  },
  {
    mid: 361,
    code: "PM",
    label: "St Pierre Miquelon",
  },
  {
    mid: 362,
    code: "TT",
    label: "Trinidad Tobago",
  },
  {
    mid: 364,
    code: "TC",
    label: "Turks Caicos Is",
  },
  {
    mid: 366,
    code: "US",
    label: "USA",
  },
  {
    mid: 367,
    code: "US",
    label: "USA",
  },
  {
    mid: 368,
    code: "US",
    label: "USA",
  },
  {
    mid: 369,
    code: "US",
    label: "USA",
  },
  {
    mid: 370,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 371,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 372,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 373,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 374,
    code: "PA",
    label: "Panama",
  },
  {
    mid: 375,
    code: "VC",
    label: "St Vincent Grenadines",
  },
  {
    mid: 376,
    code: "VC",
    label: "St Vincent Grenadines",
  },
  {
    mid: 377,
    code: "VC",
    label: "St Vincent Grenadines",
  },
  {
    mid: 378,
    code: "VG",
    label: "British Virgin Is",
  },
  {
    mid: 379,
    code: "VI",
    label: "US Virgin Is",
  },
  {
    mid: 401,
    code: "AF",
    label: "Afghanistan",
  },
  {
    mid: 403,
    code: "SA",
    label: "Saudi Arabia",
  },
  {
    mid: 405,
    code: "BD",
    label: "Bangladesh",
  },
  {
    mid: 408,
    code: "BH",
    label: "Bahrain",
  },
  {
    mid: 410,
    code: "BT",
    label: "Bhutan",
  },
  {
    mid: 412,
    code: "CN",
    label: "China",
  },
  {
    mid: 413,
    code: "CN",
    label: "China",
  },
  {
    mid: 414,
    code: "CN",
    label: "China",
  },
  {
    mid: 416,
    code: "TW",
    label: "Taiwan",
  },
  {
    mid: 417,
    code: "LK",
    label: "Sri Lanka",
  },
  {
    mid: 419,
    code: "IN",
    label: "India",
  },
  {
    mid: 422,
    code: "IR",
    label: "Iran",
  },
  {
    mid: 423,
    code: "AZ",
    label: "Azerbaijan",
  },
  {
    mid: 425,
    code: "IQ",
    label: "Iraq",
  },
  {
    mid: 428,
    code: "IL",
    label: "Israel",
  },
  {
    mid: 431,
    code: "JP",
    label: "Japan",
  },
  {
    mid: 432,
    code: "JP",
    label: "Japan",
  },
  {
    mid: 434,
    code: "TM",
    label: "Turkmenistan",
  },
  {
    mid: 436,
    code: "KZ",
    label: "Kazakhstan",
  },
  {
    mid: 437,
    code: "UZ",
    label: "Uzbekistan",
  },
  {
    mid: 438,
    code: "JO",
    label: "Jordan",
  },
  {
    mid: 440,
    code: "KR",
    label: "Korea",
  },
  {
    mid: 441,
    code: "KR",
    label: "Korea",
  },
  {
    mid: 443,
    code: "PS",
    label: "Palestine",
  },
  {
    mid: 445,
    code: "KP",
    label: "DPR Korea",
  },
  {
    mid: 447,
    code: "KW",
    label: "Kuwait",
  },
  {
    mid: 450,
    code: "LB",
    label: "Lebanon",
  },
  {
    mid: 451,
    code: "KG",
    label: "Kyrgyz Republic",
  },
  {
    mid: 453,
    code: "MO",
    label: "Macao",
  },
  {
    mid: 455,
    code: "MV",
    label: "Maldives",
  },
  {
    mid: 457,
    code: "MN",
    label: "Mongolia",
  },
  {
    mid: 459,
    code: "NP",
    label: "Nepal",
  },
  {
    mid: 461,
    code: "OM",
    label: "Oman",
  },
  {
    mid: 463,
    code: "PK",
    label: "Pakistan",
  },
  {
    mid: 466,
    code: "QA",
    label: "Qatar",
  },
  {
    mid: 468,
    code: "SY",
    label: "Syria",
  },
  {
    mid: 470,
    code: "AE",
    label: "UAE",
  },
  {
    mid: 471,
    code: "AE",
    label: "UAE",
  },
  {
    mid: 472,
    code: "TJ",
    label: "Tajikistan",
  },
  {
    mid: 473,
    code: "YE",
    label: "Yemen",
  },
  {
    mid: 475,
    code: "YE",
    label: "Yemen",
  },
  {
    mid: 477,
    code: "HK",
    label: "Hong Kong",
  },
  {
    mid: 478,
    code: "BA",
    label: "Bosnia and Herzegovina",
  },
  {
    mid: 501,
    code: "AQ",
    label: "Antarctica",
  },
  {
    mid: 503,
    code: "AU",
    label: "Australia",
  },
  {
    mid: 506,
    code: "MM",
    label: "Myanmar",
  },
  {
    mid: 508,
    code: "BN",
    label: "Brunei",
  },
  {
    mid: 510,
    code: "FM",
    label: "Micronesia",
  },
  {
    mid: 511,
    code: "PW",
    label: "Palau",
  },
  {
    mid: 512,
    code: "NZ",
    label: "New Zealand",
  },
  {
    mid: 514,
    code: "KH",
    label: "Cambodia",
  },
  {
    mid: 515,
    code: "KH",
    label: "Cambodia",
  },
  {
    mid: 516,
    code: "CX",
    label: "Christmas Is",
  },
  {
    mid: 518,
    code: "CK",
    label: "Cook Is",
  },
  {
    mid: 520,
    code: "FJ",
    label: "Fiji",
  },
  {
    mid: 523,
    code: "CC",
    label: "Cocos Is",
  },
  {
    mid: 525,
    code: "ID",
    label: "Indonesia",
  },
  {
    mid: 529,
    code: "KI",
    label: "Kiribati",
  },
  {
    mid: 531,
    code: "LA",
    label: "Laos",
  },
  {
    mid: 533,
    code: "MY",
    label: "Malaysia",
  },
  {
    mid: 536,
    code: "MP",
    label: "N Mariana Is",
  },
  {
    mid: 538,
    code: "MH",
    label: "Marshall Is",
  },
  {
    mid: 540,
    code: "NC",
    label: "New Caledonia",
  },
  {
    mid: 542,
    code: "NU",
    label: "Niue",
  },
  {
    mid: 544,
    code: "NR",
    label: "Nauru",
  },
  {
    mid: 546,
    code: "PF",
    label: "French Polynesia",
  },
  {
    mid: 548,
    code: "PH",
    label: "Philippines",
  },
  {
    mid: 553,
    code: "PG",
    label: "Papua New Guinea",
  },
  {
    mid: 555,
    code: "PN",
    label: "Pitcairn Is",
  },
  {
    mid: 557,
    code: "SB",
    label: "Solomon Is",
  },
  {
    mid: 559,
    code: "AS",
    label: "American Samoa",
  },
  {
    mid: 561,
    code: "WS",
    label: "Samoa",
  },
  {
    mid: 563,
    code: "SG",
    label: "Singapore",
  },
  {
    mid: 564,
    code: "SG",
    label: "Singapore",
  },
  {
    mid: 565,
    code: "SG",
    label: "Singapore",
  },
  {
    mid: 566,
    code: "SG",
    label: "Singapore",
  },
  {
    mid: 567,
    code: "TH",
    label: "Thailand",
  },
  {
    mid: 570,
    code: "TO",
    label: "Tonga",
  },
  {
    mid: 572,
    code: "TV",
    label: "Tuvalu",
  },
  {
    mid: 574,
    code: "VN",
    label: "Vietnam",
  },
  {
    mid: 576,
    code: "VU",
    label: "Vanuatu",
  },
  {
    mid: 577,
    code: "VU",
    label: "Vanuatu",
  },
  {
    mid: 578,
    code: "WF",
    label: "Wallis Futuna Is",
  },
  {
    mid: 601,
    code: "ZA",
    label: "South Africa",
  },
  {
    mid: 603,
    code: "AO",
    label: "Angola",
  },
  {
    mid: 605,
    code: "DZ",
    label: "Algeria",
  },
  {
    mid: 607,
    code: "TF",
    label: "St Paul Amsterdam Is",
  },
  {
    mid: 608,
    code: "IO",
    label: "Ascension Is",
  },
  {
    mid: 609,
    code: "BI",
    label: "Burundi",
  },
  {
    mid: 610,
    code: "BJ",
    label: "Benin",
  },
  {
    mid: 611,
    code: "BW",
    label: "Botswana",
  },
  {
    mid: 612,
    code: "CF",
    label: "Cen Afr Rep",
  },
  {
    mid: 613,
    code: "CM",
    label: "Cameroon",
  },
  {
    mid: 615,
    code: "CG",
    label: "Congo",
  },
  {
    mid: 616,
    code: "KM",
    label: "Comoros",
  },
  {
    mid: 617,
    code: "CV",
    label: "Cape Verde",
  },
  {
    mid: 618,
    code: "AQ",
    label: "Antarctica",
  },
  {
    mid: 619,
    code: "CI",
    label: "Ivory Coast",
  },
  {
    mid: 620,
    code: "KM",
    label: "Comoros",
  },
  {
    mid: 621,
    code: "DJ",
    label: "Djibouti",
  },
  {
    mid: 622,
    code: "EG",
    label: "Egypt",
  },
  {
    mid: 624,
    code: "ET",
    label: "Ethiopia",
  },
  {
    mid: 625,
    code: "ER",
    label: "Eritrea",
  },
  {
    mid: 626,
    code: "GA",
    label: "Gabon",
  },
  {
    mid: 627,
    code: "GH",
    label: "Ghana",
  },
  {
    mid: 629,
    code: "GM",
    label: "Gambia",
  },
  {
    mid: 630,
    code: "GW",
    label: "Guinea-Bissau",
  },
  {
    mid: 631,
    code: "GQ",
    label: "Equ. Guinea",
  },
  {
    mid: 632,
    code: "GN",
    label: "Guinea",
  },
  {
    mid: 633,
    code: "BF",
    label: "Burkina Faso",
  },
  {
    mid: 634,
    code: "KE",
    label: "Kenya",
  },
  {
    mid: 635,
    code: "AQ",
    label: "Antarctica",
  },
  {
    mid: 636,
    code: "LR",
    label: "Liberia",
  },
  {
    mid: 637,
    code: "LR",
    label: "Liberia",
  },
  {
    mid: 642,
    code: "LY",
    label: "Libya",
  },
  {
    mid: 644,
    code: "LS",
    label: "Lesotho",
  },
  {
    mid: 645,
    code: "MU",
    label: "Mauritius",
  },
  {
    mid: 647,
    code: "MG",
    label: "Madagascar",
  },
  {
    mid: 649,
    code: "ML",
    label: "Mali",
  },
  {
    mid: 650,
    code: "MZ",
    label: "Mozambique",
  },
  {
    mid: 654,
    code: "MR",
    label: "Mauritania",
  },
  {
    mid: 655,
    code: "MW",
    label: "Malawi",
  },
  {
    mid: 656,
    code: "NE",
    label: "Niger",
  },
  {
    mid: 657,
    code: "NG",
    label: "Nigeria",
  },
  {
    mid: 659,
    code: "NA",
    label: "Namibia",
  },
  {
    mid: 660,
    code: "RE",
    label: "Reunion",
  },
  {
    mid: 661,
    code: "RW",
    label: "Rwanda",
  },
  {
    mid: 662,
    code: "SD",
    label: "Sudan",
  },
  {
    mid: 663,
    code: "SN",
    label: "Senegal",
  },
  {
    mid: 664,
    code: "SC",
    label: "Seychelles",
  },
  {
    mid: 665,
    code: "SH",
    label: "St Helena",
  },
  {
    mid: 666,
    code: "SO",
    label: "Somalia",
  },
  {
    mid: 667,
    code: "SL",
    label: "Sierra Leone",
  },
  {
    mid: 668,
    code: "ST",
    label: "Sao Tome Principe",
  },
  {
    mid: 669,
    code: "SZ",
    label: "Swaziland",
  },
  {
    mid: 670,
    code: "TD",
    label: "Chad",
  },
  {
    mid: 671,
    code: "TG",
    label: "Togo",
  },
  {
    mid: 672,
    code: "TN",
    label: "Tunisia",
  },
  {
    mid: 674,
    code: "TZ",
    label: "Tanzania",
  },
  {
    mid: 675,
    code: "UG",
    label: "Uganda",
  },
  {
    mid: 676,
    code: "CD",
    label: "DR Congo",
  },
  {
    mid: 677,
    code: "TZ",
    label: "Tanzania",
  },
  {
    mid: 678,
    code: "ZM",
    label: "Zambia",
  },
  {
    mid: 679,
    code: "ZW",
    label: "Zimbabwe",
  },
  {
    mid: 701,
    code: "AR",
    label: "Argentina",
  },
  {
    mid: 710,
    code: "BR",
    label: "Brazil",
  },
  {
    mid: 720,
    code: "BO",
    label: "Bolivia",
  },
  {
    mid: 725,
    code: "CL",
    label: "Chile",
  },
  {
    mid: 730,
    code: "CO",
    label: "Colombia",
  },
  {
    mid: 735,
    code: "EC",
    label: "Ecuador",
  },
  {
    mid: 740,
    code: "UK",
    label: "UK",
  },
  {
    mid: 745,
    code: "GF",
    label: "Guiana",
  },
  {
    mid: 750,
    code: "GY",
    label: "Guyana",
  },
  {
    mid: 755,
    code: "PY",
    label: "Paraguay",
  },
  {
    mid: 760,
    code: "PE",
    label: "Peru",
  },
  {
    mid: 765,
    code: "SR",
    label: "Suriname",
  },
  {
    mid: 770,
    code: "UY",
    label: "Uruguay",
  },
  {
    mid: 775,
    code: "VE",
    label: "Venezuela",
  },
];

const getFlag = (mid: number) => {
  return flags.find((flag) => flag?.mid === mid)?.code;
};

const getLabel = (mid: number) => {
  return flags.find((flag) => flag?.mid === mid)?.label;
};

export { getFlag, getLabel, flags };
