import { IResponseUsers } from "../domain/entities";
import { IUserRepository } from "../domain/ports/secondaries";

var jsonStringArrayOfTen = `
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Irma",
                "last": "Ribeiro"
            },
            "location": {
                "street": {
                    "number": 4561,
                    "name": "Avenida Brasil "
                },
                "city": "Mogi Guaçu",
                "state": "Mato Grosso",
                "country": "Brazil",
                "postcode": 50415,
                "coordinates": {
                    "latitude": "-69.5893",
                    "longitude": "138.2291"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "irma.ribeiro@example.com",
            "login": {
                "uuid": "7d1a7086-7cb7-4033-b332-f1121157f4d2",
                "username": "blackzebra186",
                "password": "cadillac",
                "salt": "WTCdln9n",
                "md5": "ed9e14c4807e92432874be4058e1f4b7",
                "sha1": "a6ccda0611c5f511238a13bce5e4263194e2c479",
                "sha256": "ad3b91c0fdcdbb97c181415cd60fb5a3228cda2ba9d5d74fa2d3aa7d07215789"
            },
            "dob": {
                "date": "1950-08-03T14:35:57.707Z",
                "age": 71
            },
            "registered": {
                "date": "2004-06-01T03:58:01.502Z",
                "age": 17
            },
            "phone": "(03) 4928-1621",
            "cell": "(73) 5530-7893",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/6.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Elma",
                "last": "Alves"
            },
            "location": {
                "street": {
                    "number": 5849,
                    "name": "Rua Paraíba "
                },
                "city": "Maricá",
                "state": "Sergipe",
                "country": "Brazil",
                "postcode": 50219,
                "coordinates": {
                    "latitude": "33.6811",
                    "longitude": "-74.9476"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "elma.alves@example.com",
            "login": {
                "uuid": "2b58840b-ef61-4a40-be97-8e70f48d40dc",
                "username": "orangegorilla485",
                "password": "sales",
                "salt": "a9pHYrb2",
                "md5": "d63d35af8907987b071088019121f30e",
                "sha1": "01c6ad60444dffdf3cc249bfa9014743af6dc4f3",
                "sha256": "b012f2cdaaa7da244c1da1076f385bb76a35fba2d0d22db6875d6f57b98e4a4c"
            },
            "dob": {
                "date": "1949-08-11T09:59:53.939Z",
                "age": 72
            },
            "registered": {
                "date": "2009-01-01T10:16:48.310Z",
                "age": 12
            },
            "phone": "(09) 3477-5999",
            "cell": "(09) 7538-4545",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/90.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "یاسمن",
                "last": "کامروا"
            },
            "location": {
                "street": {
                    "number": 4530,
                    "name": "پاتریس لومومبا"
                },
                "city": "ایلام",
                "state": "قزوین",
                "country": "Iran",
                "postcode": 80369,
                "coordinates": {
                    "latitude": "8.2281",
                    "longitude": "-29.8382"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "ysmn.khmrw@example.com",
            "login": {
                "uuid": "616e1f66-bc9f-4fe1-ac85-d6978a8ed367",
                "username": "bluepeacock678",
                "password": "aubrey",
                "salt": "VpDLvd8I",
                "md5": "14719e0f993ffeba44fa7e7d76ce4d75",
                "sha1": "91ca91025dfd6ce2b7e7175def6ecba578f5b122",
                "sha256": "d4cc8b6989cc2b591f111f0514409cdcda7f1732e676d1a8f7138563264a175b"
            },
            "dob": {
                "date": "1975-05-15T19:32:22.302Z",
                "age": 46
            },
            "registered": {
                "date": "2016-06-04T02:56:48.166Z",
                "age": 5
            },
            "phone": "017-27263569",
            "cell": "0982-640-8054",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/32.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Amy",
                "last": "Brown"
            },
            "location": {
                "street": {
                    "number": 2000,
                    "name": "The Drive"
                },
                "city": "Southampton",
                "state": "Dorset",
                "country": "United Kingdom",
                "postcode": "OE8Z 6LH",
                "coordinates": {
                    "latitude": "69.5333",
                    "longitude": "-120.9154"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "amy.brown@example.com",
            "login": {
                "uuid": "8cc37950-f813-4ba9-851c-4b3a499fd497",
                "username": "heavybear650",
                "password": "coleman",
                "salt": "0PuSVGwM",
                "md5": "5020f7e38bfd19f4ac988dab613fb17b",
                "sha1": "9e45badc685e8260245d38b816d20200614f8df5",
                "sha256": "4dd005e328b6c6125e397a4a862bac24c3b5c63a55d20a128cadc477ff023dc9"
            },
            "dob": {
                "date": "1965-04-09T04:59:25.740Z",
                "age": 56
            },
            "registered": {
                "date": "2007-07-30T21:54:13.550Z",
                "age": 14
            },
            "phone": "022 5565 1769",
            "cell": "0705-630-926",
            "id": {
                "name": "NINO",
                "value": "PM 39 24 75 E"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/40.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
            },
            "nat": "GB"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Marilu",
                "last": "Castro"
            },
            "location": {
                "street": {
                    "number": 5062,
                    "name": "Rua Duque de Caxias "
                },
                "city": "Codó",
                "state": "Paraná",
                "country": "Brazil",
                "postcode": 74887,
                "coordinates": {
                    "latitude": "-83.4770",
                    "longitude": "138.5632"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "marilu.castro@example.com",
            "login": {
                "uuid": "08799114-63dc-444f-a5bc-8593709646cf",
                "username": "heavycat659",
                "password": "davids",
                "salt": "auSImGnv",
                "md5": "f8d039e5d14a08d3e8b258d2ad64bb95",
                "sha1": "7f4dcdbf4e1cb4bf5141fb836b9dfc7f0453ed47",
                "sha256": "38b37ec76b38faf39efee02621846c67f7028608c863101b04137b581e4ff941"
            },
            "dob": {
                "date": "1962-01-30T08:07:01.081Z",
                "age": 59
            },
            "registered": {
                "date": "2008-03-29T03:12:38.102Z",
                "age": 13
            },
            "phone": "(17) 0245-0484",
            "cell": "(12) 8791-7038",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/86.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jaime",
                "last": "Ruiz"
            },
            "location": {
                "street": {
                    "number": 8890,
                    "name": "Ronda de Toledo"
                },
                "city": "Burgos",
                "state": "La Rioja",
                "country": "Spain",
                "postcode": 22045,
                "coordinates": {
                    "latitude": "-48.4141",
                    "longitude": "76.9540"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "jaime.ruiz@example.com",
            "login": {
                "uuid": "e6aa2149-9bae-49e7-84f8-4823908a4322",
                "username": "blackostrich936",
                "password": "susan1",
                "salt": "YhbzuylT",
                "md5": "a0dff292b4b260b9d6a287049e6a6311",
                "sha1": "996b1dcb6a0d6f0e393925db683c0ed0471be7c1",
                "sha256": "2040022eba8db7ee2b56b250649b16209411eac5747ded9d35fcafc7b1efbf2e"
            },
            "dob": {
                "date": "1960-01-20T06:21:12.212Z",
                "age": 61
            },
            "registered": {
                "date": "2013-03-10T23:40:57.282Z",
                "age": 8
            },
            "phone": "982-166-608",
            "cell": "657-417-397",
            "id": {
                "name": "DNI",
                "value": "29542329-R"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "علی",
                "last": "نجاتی"
            },
            "location": {
                "street": {
                    "number": 7303,
                    "name": "وحدت اسلامی"
                },
                "city": "کرمانشاه",
                "state": "خراسان رضوی",
                "country": "Iran",
                "postcode": 57927,
                "coordinates": {
                    "latitude": "-1.3182",
                    "longitude": "-127.5992"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "aaly.njty@example.com",
            "login": {
                "uuid": "c02c91f8-4241-4957-ba15-b3828bc04bfd",
                "username": "tinytiger493",
                "password": "valkyrie",
                "salt": "yXqws7Ys",
                "md5": "7054f7114a56b9a09c5581f87f1129cc",
                "sha1": "16541dc95b34b7522f610f9ea9fbcd2c5a56c115",
                "sha256": "efdb768504b142808b460a1e50f4b402b18ae104f798f803cdcd796aab55463f"
            },
            "dob": {
                "date": "1989-07-23T21:59:45.256Z",
                "age": 32
            },
            "registered": {
                "date": "2008-01-07T08:34:09.249Z",
                "age": 13
            },
            "phone": "064-06010072",
            "cell": "0906-082-7540",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/5.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Daniel",
                "last": "Garrido"
            },
            "location": {
                "street": {
                    "number": 6119,
                    "name": "Calle de La Democracia"
                },
                "city": "Valladolid",
                "state": "Asturias",
                "country": "Spain",
                "postcode": 81773,
                "coordinates": {
                    "latitude": "-46.0541",
                    "longitude": "-24.0903"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "daniel.garrido@example.com",
            "login": {
                "uuid": "f6527780-0c23-4c3d-af87-ad74a9493503",
                "username": "brownbutterfly268",
                "password": "turnip",
                "salt": "fRy3OOGH",
                "md5": "7a34ba3e47816f2fbe4c8189fcef551f",
                "sha1": "12c44403dc2a5ff28ae68bfaf70b915ed3c33693",
                "sha256": "49564e8be9313e6788bab25756dad3ff25c920f97cc4e390140b00edab2fedbc"
            },
            "dob": {
                "date": "1986-11-15T17:40:20.826Z",
                "age": 35
            },
            "registered": {
                "date": "2011-03-14T06:23:19.015Z",
                "age": 10
            },
            "phone": "985-655-674",
            "cell": "682-367-734",
            "id": {
                "name": "DNI",
                "value": "51427180-Z"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/38.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Nicoline",
                "last": "Rasmussen"
            },
            "location": {
                "street": {
                    "number": 7276,
                    "name": "Pile Alle"
                },
                "city": "Saltum",
                "state": "Nordjylland",
                "country": "Denmark",
                "postcode": 98988,
                "coordinates": {
                    "latitude": "15.0702",
                    "longitude": "0.2435"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "nicoline.rasmussen@example.com",
            "login": {
                "uuid": "a83b9ff0-9a50-4f49-8501-47b65d91ff5f",
                "username": "silverdog329",
                "password": "ministry",
                "salt": "xHfvPwdN",
                "md5": "93b46cc198e94708ba6191f6632d16a6",
                "sha1": "ef458ae5ba5c4303e231e86aaa7674404929f417",
                "sha256": "b8e4f6bdc3a6318030578138525cfb7d439c986deefa170ccdf085261ac80788"
            },
            "dob": {
                "date": "1953-10-04T16:40:36.079Z",
                "age": 68
            },
            "registered": {
                "date": "2010-06-26T04:54:34.828Z",
                "age": 11
            },
            "phone": "41204577",
            "cell": "86504226",
            "id": {
                "name": "CPR",
                "value": "041053-1758"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/48.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Kaya",
                "last": "Gudmestad"
            },
            "location": {
                "street": {
                    "number": 1164,
                    "name": "Torvbakkgata"
                },
                "city": "Miland",
                "state": "Bergen",
                "country": "Norway",
                "postcode": "1412",
                "coordinates": {
                    "latitude": "-61.0301",
                    "longitude": "135.3774"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "kaya.gudmestad@example.com",
            "login": {
                "uuid": "85b3ee82-ef96-44a6-b3da-ca75e46b921d",
                "username": "orangeladybug251",
                "password": "summer99",
                "salt": "ZvJ9fC6T",
                "md5": "a1113dc986aafb34d8da496d70f84f5b",
                "sha1": "25f08826441a5ebc9fa151eaa2c09b4e138a6308",
                "sha256": "0971b002bca924fca39884c9d46a453bd13edee0dad430e0ede4432fd510bbb3"
            },
            "dob": {
                "date": "1954-01-02T03:46:24.397Z",
                "age": 67
            },
            "registered": {
                "date": "2016-10-07T12:18:08.932Z",
                "age": 5
            },
            "phone": "53284742",
            "cell": "43776267",
            "id": {
                "name": "FN",
                "value": "02015446652"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
            },
            "nat": "NO"
        }
    ],
    "info": {
        "seed": "8df50370436f9fec",
        "results": 10,
        "page": 1,
        "version": "1.3"
    }
}
`

var responseData: IResponseUsers = JSON.parse(jsonStringArrayOfTen)

export default class MockUserRepository implements IUserRepository {
    page ?: number
    results?: number
    constructor(page: number =1 , results: number = 10) {
        this.page = page
        this.results = results
    }
    getUsers(): Promise<IResponseUsers> {
        return new Promise((resolve) => {
            resolve(responseData)
        })
    }
} 



