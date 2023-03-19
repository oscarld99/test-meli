import { SearchResponse } from "interfaces";

const searchMock: SearchResponse = {
    "author": {
        "name": "String",
        "lastname": "String"
    },
    "categories": [
        "String",
        "String",
        "String"
    ],
    "items": [
        {
            "id": "MLA1112431294",
            "title": "Samsung Galaxy A03s 64 Gb  Negro 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 50456,
                "decimals": 48
            },
            "picture": "http://http2.mlstatic.com/D_938148-MLA49545998805_042022-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA1373154982",
            "title": "Tcl 30 Se 256 Gb  Space Gray 6 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 56799,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_620277-MLA51777854599_092022-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA1329166828",
            "title": "Samsung Galaxy S23 Ultra 12gb 512gb Green",
            "price": {
                "currency": "ARS",
                "amount": 499999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_846004-MLA53452158229_012023-I.jpg",
            "condition": "new",
            "free_shipping": false
        },
        {
            "id": "MLA1362577585",
            "title": "Moto E32 64 Gb  Plata 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 54999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_727372-MLA51043609378_082022-I.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ]
}

export default searchMock