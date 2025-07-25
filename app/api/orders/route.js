export async function GET() {
    const orders = [
        {
            "id": 1,
            "restaurant_id": 102,
            "order_amount": 996,
            "order_time": "2025-06-24T15:00:00"
          },
          {
            "id": 2,
            "restaurant_id": 104,
            "order_amount": 980,
            "order_time": "2025-06-25T18:45:00"
          },
          {
            "id": 3,
            "restaurant_id": 103,
            "order_amount": 986,
            "order_time": "2025-06-23T17:00:00"
          },
          {
            "id": 4,
            "restaurant_id": 102,
            "order_amount": 462,
            "order_time": "2025-06-27T17:30:00"
          },
          {
            "id": 5,
            "restaurant_id": 101,
            "order_amount": 702,
            "order_time": "2025-06-26T15:45:00"
          },
          {
            "id": 6,
            "restaurant_id": 104,
            "order_amount": 543,
            "order_time": "2025-06-25T16:15:00"
          },
          {
            "id": 7,
            "restaurant_id": 103,
            "order_amount": 467,
            "order_time": "2025-06-28T17:45:00"
          },
          {
            "id": 8,
            "restaurant_id": 101,
            "order_amount": 695,
            "order_time": "2025-06-26T11:30:00"
          },
          {
            "id": 9,
            "restaurant_id": 103,
            "order_amount": 613,
            "order_time": "2025-06-27T17:45:00"
          },
          {
            "id": 10,
            "restaurant_id": 103,
            "order_amount": 496,
            "order_time": "2025-06-24T20:15:00"
          },
          {
            "id": 11,
            "restaurant_id": 104,
            "order_amount": 392,
            "order_time": "2025-06-28T10:15:00"
          },
          {
            "id": 12,
            "restaurant_id": 104,
            "order_amount": 900,
            "order_time": "2025-06-23T18:15:00"
          },
          {
            "id": 13,
            "restaurant_id": 102,
            "order_amount": 891,
            "order_time": "2025-06-22T19:15:00"
          },
          {
            "id": 14,
            "restaurant_id": 101,
            "order_amount": 363,
            "order_time": "2025-06-27T11:45:00"
          },
          {
            "id": 15,
            "restaurant_id": 102,
            "order_amount": 462,
            "order_time": "2025-06-23T15:45:00"
          },
          {
            "id": 16,
            "restaurant_id": 102,
            "order_amount": 604,
            "order_time": "2025-06-25T22:30:00"
          },
          {
            "id": 17,
            "restaurant_id": 101,
            "order_amount": 440,
            "order_time": "2025-06-28T10:45:00"
          },
          {
            "id": 18,
            "restaurant_id": 101,
            "order_amount": 907,
            "order_time": "2025-06-26T19:45:00"
          },
          {
            "id": 19,
            "restaurant_id": 102,
            "order_amount": 277,
            "order_time": "2025-06-25T16:30:00"
          },
          {
            "id": 20,
            "restaurant_id": 103,
            "order_amount": 401,
            "order_time": "2025-06-25T10:15:00"
          },
          {
            "id": 21,
            "restaurant_id": 101,
            "order_amount": 493,
            "order_time": "2025-06-22T19:30:00"
          },
          {
            "id": 22,
            "restaurant_id": 103,
            "order_amount": 844,
            "order_time": "2025-06-22T10:45:00"
          },
          {
            "id": 23,
            "restaurant_id": 102,
            "order_amount": 812,
            "order_time": "2025-06-28T11:15:00"
          },
          {
            "id": 24,
            "restaurant_id": 101,
            "order_amount": 912,
            "order_time": "2025-06-27T14:15:00"
          },
          {
            "id": 25,
            "restaurant_id": 104,
            "order_amount": 919,
            "order_time": "2025-06-24T10:30:00"
          },
          {
            "id": 26,
            "restaurant_id": 102,
            "order_amount": 598,
            "order_time": "2025-06-23T13:00:00"
          },
          {
            "id": 27,
            "restaurant_id": 104,
            "order_amount": 627,
            "order_time": "2025-06-26T21:45:00"
          },
          {
            "id": 28,
            "restaurant_id": 104,
            "order_amount": 937,
            "order_time": "2025-06-26T20:45:00"
          },
          {
            "id": 29,
            "restaurant_id": 104,
            "order_amount": 688,
            "order_time": "2025-06-26T18:45:00"
          },
          {
            "id": 30,
            "restaurant_id": 101,
            "order_amount": 564,
            "order_time": "2025-06-28T14:00:00"
          },
          {
            "id": 31,
            "restaurant_id": 104,
            "order_amount": 397,
            "order_time": "2025-06-25T20:00:00"
          },
          {
            "id": 32,
            "restaurant_id": 103,
            "order_amount": 536,
            "order_time": "2025-06-24T17:45:00"
          },
          {
            "id": 33,
            "restaurant_id": 104,
            "order_amount": 495,
            "order_time": "2025-06-23T12:00:00"
          },
          {
            "id": 34,
            "restaurant_id": 103,
            "order_amount": 200,
            "order_time": "2025-06-27T10:15:00"
          },
          {
            "id": 35,
            "restaurant_id": 103,
            "order_amount": 244,
            "order_time": "2025-06-27T19:45:00"
          },
          {
            "id": 36,
            "restaurant_id": 101,
            "order_amount": 234,
            "order_time": "2025-06-25T15:30:00"
          },
          {
            "id": 37,
            "restaurant_id": 104,
            "order_amount": 671,
            "order_time": "2025-06-26T10:30:00"
          },
          {
            "id": 38,
            "restaurant_id": 102,
            "order_amount": 804,
            "order_time": "2025-06-27T15:30:00"
          },
          {
            "id": 39,
            "restaurant_id": 104,
            "order_amount": 549,
            "order_time": "2025-06-26T17:30:00"
          },
          {
            "id": 40,
            "restaurant_id": 103,
            "order_amount": 522,
            "order_time": "2025-06-28T20:30:00"
          },
          {
            "id": 41,
            "restaurant_id": 102,
            "order_amount": 203,
            "order_time": "2025-06-23T14:15:00"
          },
          {
            "id": 42,
            "restaurant_id": 102,
            "order_amount": 841,
            "order_time": "2025-06-26T11:15:00"
          },
          {
            "id": 43,
            "restaurant_id": 104,
            "order_amount": 407,
            "order_time": "2025-06-26T13:00:00"
          },
          {
            "id": 44,
            "restaurant_id": 102,
            "order_amount": 651,
            "order_time": "2025-06-22T19:15:00"
          },
          {
            "id": 45,
            "restaurant_id": 101,
            "order_amount": 546,
            "order_time": "2025-06-23T13:30:00"
          },
          {
            "id": 46,
            "restaurant_id": 103,
            "order_amount": 551,
            "order_time": "2025-06-22T20:15:00"
          },
          {
            "id": 47,
            "restaurant_id": 102,
            "order_amount": 720,
            "order_time": "2025-06-25T20:45:00"
          },
          {
            "id": 48,
            "restaurant_id": 103,
            "order_amount": 929,
            "order_time": "2025-06-24T10:15:00"
          },
          {
            "id": 49,
            "restaurant_id": 103,
            "order_amount": 966,
            "order_time": "2025-06-22T19:15:00"
          },
          {
            "id": 50,
            "restaurant_id": 102,
            "order_amount": 557,
            "order_time": "2025-06-27T14:15:00"
          },
          {
            "id": 51,
            "restaurant_id": 104,
            "order_amount": 963,
            "order_time": "2025-06-22T17:30:00"
          },
          {
            "id": 52,
            "restaurant_id": 103,
            "order_amount": 684,
            "order_time": "2025-06-25T12:30:00"
          },
          {
            "id": 53,
            "restaurant_id": 104,
            "order_amount": 762,
            "order_time": "2025-06-23T16:15:00"
          },
          {
            "id": 54,
            "restaurant_id": 103,
            "order_amount": 310,
            "order_time": "2025-06-26T10:15:00"
          },
          {
            "id": 55,
            "restaurant_id": 104,
            "order_amount": 764,
            "order_time": "2025-06-23T21:30:00"
          },
          {
            "id": 56,
            "restaurant_id": 101,
            "order_amount": 788,
            "order_time": "2025-06-25T21:00:00"
          },
          {
            "id": 57,
            "restaurant_id": 104,
            "order_amount": 946,
            "order_time": "2025-06-24T12:15:00"
          },
          {
            "id": 58,
            "restaurant_id": 103,
            "order_amount": 745,
            "order_time": "2025-06-24T15:45:00"
          },
          {
            "id": 59,
            "restaurant_id": 102,
            "order_amount": 299,
            "order_time": "2025-06-23T11:45:00"
          },
          {
            "id": 60,
            "restaurant_id": 103,
            "order_amount": 580,
            "order_time": "2025-06-27T11:30:00"
          },
          {
            "id": 61,
            "restaurant_id": 102,
            "order_amount": 750,
            "order_time": "2025-06-22T13:30:00"
          },
          {
            "id": 62,
            "restaurant_id": 102,
            "order_amount": 229,
            "order_time": "2025-06-24T21:15:00"
          },
          {
            "id": 63,
            "restaurant_id": 104,
            "order_amount": 265,
            "order_time": "2025-06-22T19:45:00"
          },
          {
            "id": 64,
            "restaurant_id": 101,
            "order_amount": 548,
            "order_time": "2025-06-22T10:00:00"
          },
          {
            "id": 65,
            "restaurant_id": 104,
            "order_amount": 623,
            "order_time": "2025-06-26T15:00:00"
          },
          {
            "id": 66,
            "restaurant_id": 102,
            "order_amount": 314,
            "order_time": "2025-06-25T17:00:00"
          },
          {
            "id": 67,
            "restaurant_id": 103,
            "order_amount": 348,
            "order_time": "2025-06-22T17:00:00"
          },
          {
            "id": 68,
            "restaurant_id": 104,
            "order_amount": 646,
            "order_time": "2025-06-24T19:30:00"
          },
          {
            "id": 69,
            "restaurant_id": 104,
            "order_amount": 901,
            "order_time": "2025-06-22T10:45:00"
          },
          {
            "id": 70,
            "restaurant_id": 102,
            "order_amount": 910,
            "order_time": "2025-06-23T19:00:00"
          },
          {
            "id": 71,
            "restaurant_id": 103,
            "order_amount": 653,
            "order_time": "2025-06-22T12:15:00"
          },
          {
            "id": 72,
            "restaurant_id": 104,
            "order_amount": 328,
            "order_time": "2025-06-23T16:00:00"
          },
          {
            "id": 73,
            "restaurant_id": 102,
            "order_amount": 963,
            "order_time": "2025-06-23T12:45:00"
          },
          {
            "id": 74,
            "restaurant_id": 102,
            "order_amount": 716,
            "order_time": "2025-06-28T12:15:00"
          },
          {
            "id": 75,
            "restaurant_id": 101,
            "order_amount": 316,
            "order_time": "2025-06-26T13:45:00"
          },
          {
            "id": 76,
            "restaurant_id": 101,
            "order_amount": 202,
            "order_time": "2025-06-26T14:15:00"
          },
          {
            "id": 77,
            "restaurant_id": 102,
            "order_amount": 717,
            "order_time": "2025-06-24T10:30:00"
          },
          {
            "id": 78,
            "restaurant_id": 104,
            "order_amount": 964,
            "order_time": "2025-06-23T16:30:00"
          },
          {
            "id": 79,
            "restaurant_id": 104,
            "order_amount": 248,
            "order_time": "2025-06-22T21:30:00"
          },
          {
            "id": 80,
            "restaurant_id": 103,
            "order_amount": 271,
            "order_time": "2025-06-26T21:15:00"
          },
          {
            "id": 81,
            "restaurant_id": 104,
            "order_amount": 707,
            "order_time": "2025-06-26T21:00:00"
          },
          {
            "id": 82,
            "restaurant_id": 103,
            "order_amount": 236,
            "order_time": "2025-06-26T20:00:00"
          },
          {
            "id": 83,
            "restaurant_id": 101,
            "order_amount": 961,
            "order_time": "2025-06-26T16:00:00"
          },
          {
            "id": 84,
            "restaurant_id": 104,
            "order_amount": 443,
            "order_time": "2025-06-28T15:00:00"
          },
          {
            "id": 85,
            "restaurant_id": 101,
            "order_amount": 609,
            "order_time": "2025-06-28T19:15:00"
          },
          {
            "id": 86,
            "restaurant_id": 102,
            "order_amount": 859,
            "order_time": "2025-06-26T14:45:00"
          },
          {
            "id": 87,
            "restaurant_id": 102,
            "order_amount": 266,
            "order_time": "2025-06-25T14:15:00"
          },
          {
            "id": 88,
            "restaurant_id": 101,
            "order_amount": 326,
            "order_time": "2025-06-22T20:00:00"
          },
          {
            "id": 89,
            "restaurant_id": 104,
            "order_amount": 257,
            "order_time": "2025-06-22T19:00:00"
          },
          {
            "id": 90,
            "restaurant_id": 101,
            "order_amount": 301,
            "order_time": "2025-06-27T12:15:00"
          },
          {
            "id": 91,
            "restaurant_id": 103,
            "order_amount": 201,
            "order_time": "2025-06-25T16:00:00"
          },
          {
            "id": 92,
            "restaurant_id": 102,
            "order_amount": 212,
            "order_time": "2025-06-27T14:30:00"
          },
          {
            "id": 93,
            "restaurant_id": 104,
            "order_amount": 368,
            "order_time": "2025-06-25T15:45:00"
          },
          {
            "id": 94,
            "restaurant_id": 102,
            "order_amount": 685,
            "order_time": "2025-06-22T16:30:00"
          },
          {
            "id": 95,
            "restaurant_id": 101,
            "order_amount": 695,
            "order_time": "2025-06-22T14:45:00"
          },
          {
            "id": 96,
            "restaurant_id": 102,
            "order_amount": 305,
            "order_time": "2025-06-24T19:00:00"
          },
          {
            "id": 97,
            "restaurant_id": 103,
            "order_amount": 744,
            "order_time": "2025-06-25T14:45:00"
          },
          {
            "id": 98,
            "restaurant_id": 102,
            "order_amount": 240,
            "order_time": "2025-06-26T21:00:00"
          },
          {
            "id": 99,
            "restaurant_id": 104,
            "order_amount": 578,
            "order_time": "2025-06-27T20:30:00"
          },
          {
            "id": 100,
            "restaurant_id": 102,
            "order_amount": 602,
            "order_time": "2025-06-27T14:15:00"
          },
          {
            "id": 101,
            "restaurant_id": 101,
            "order_amount": 308,
            "order_time": "2025-06-26T14:00:00"
          },
          {
            "id": 102,
            "restaurant_id": 102,
            "order_amount": 800,
            "order_time": "2025-06-23T15:45:00"
          },
          {
            "id": 103,
            "restaurant_id": 103,
            "order_amount": 709,
            "order_time": "2025-06-23T22:15:00"
          },
          {
            "id": 104,
            "restaurant_id": 102,
            "order_amount": 343,
            "order_time": "2025-06-24T18:00:00"
          },
          {
            "id": 105,
            "restaurant_id": 104,
            "order_amount": 855,
            "order_time": "2025-06-25T22:30:00"
          },
          {
            "id": 106,
            "restaurant_id": 103,
            "order_amount": 905,
            "order_time": "2025-06-26T15:15:00"
          },
          {
            "id": 107,
            "restaurant_id": 104,
            "order_amount": 953,
            "order_time": "2025-06-25T17:00:00"
          },
          {
            "id": 108,
            "restaurant_id": 102,
            "order_amount": 840,
            "order_time": "2025-06-24T10:30:00"
          },
          {
            "id": 109,
            "restaurant_id": 103,
            "order_amount": 451,
            "order_time": "2025-06-27T17:30:00"
          },
          {
            "id": 110,
            "restaurant_id": 104,
            "order_amount": 335,
            "order_time": "2025-06-27T21:15:00"
          },
          {
            "id": 111,
            "restaurant_id": 101,
            "order_amount": 463,
            "order_time": "2025-06-28T17:15:00"
          },
          {
            "id": 112,
            "restaurant_id": 101,
            "order_amount": 983,
            "order_time": "2025-06-22T18:15:00"
          },
          {
            "id": 113,
            "restaurant_id": 103,
            "order_amount": 422,
            "order_time": "2025-06-25T18:00:00"
          },
          {
            "id": 114,
            "restaurant_id": 104,
            "order_amount": 907,
            "order_time": "2025-06-24T12:15:00"
          },
          {
            "id": 115,
            "restaurant_id": 101,
            "order_amount": 478,
            "order_time": "2025-06-28T15:00:00"
          },
          {
            "id": 116,
            "restaurant_id": 102,
            "order_amount": 297,
            "order_time": "2025-06-28T15:00:00"
          },
          {
            "id": 117,
            "restaurant_id": 101,
            "order_amount": 522,
            "order_time": "2025-06-28T13:30:00"
          },
          {
            "id": 118,
            "restaurant_id": 101,
            "order_amount": 613,
            "order_time": "2025-06-28T18:45:00"
          },
          {
            "id": 119,
            "restaurant_id": 102,
            "order_amount": 908,
            "order_time": "2025-06-25T12:30:00"
          },
          {
            "id": 120,
            "restaurant_id": 102,
            "order_amount": 979,
            "order_time": "2025-06-22T13:15:00"
          },
          {
            "id": 121,
            "restaurant_id": 102,
            "order_amount": 869,
            "order_time": "2025-06-26T13:45:00"
          },
          {
            "id": 122,
            "restaurant_id": 102,
            "order_amount": 607,
            "order_time": "2025-06-27T18:00:00"
          },
          {
            "id": 123,
            "restaurant_id": 101,
            "order_amount": 240,
            "order_time": "2025-06-27T16:30:00"
          },
          {
            "id": 124,
            "restaurant_id": 103,
            "order_amount": 659,
            "order_time": "2025-06-25T21:45:00"
          },
          {
            "id": 125,
            "restaurant_id": 102,
            "order_amount": 815,
            "order_time": "2025-06-28T19:00:00"
          },
          {
            "id": 126,
            "restaurant_id": 103,
            "order_amount": 597,
            "order_time": "2025-06-27T16:15:00"
          },
          {
            "id": 127,
            "restaurant_id": 101,
            "order_amount": 974,
            "order_time": "2025-06-28T15:30:00"
          },
          {
            "id": 128,
            "restaurant_id": 104,
            "order_amount": 821,
            "order_time": "2025-06-26T14:45:00"
          },
          {
            "id": 129,
            "restaurant_id": 102,
            "order_amount": 382,
            "order_time": "2025-06-28T15:15:00"
          },
          {
            "id": 130,
            "restaurant_id": 104,
            "order_amount": 737,
            "order_time": "2025-06-28T14:30:00"
          },
          {
            "id": 131,
            "restaurant_id": 103,
            "order_amount": 811,
            "order_time": "2025-06-25T16:30:00"
          },
          {
            "id": 132,
            "restaurant_id": 104,
            "order_amount": 750,
            "order_time": "2025-06-25T19:15:00"
          },
          {
            "id": 133,
            "restaurant_id": 103,
            "order_amount": 912,
            "order_time": "2025-06-27T14:45:00"
          },
          {
            "id": 134,
            "restaurant_id": 102,
            "order_amount": 282,
            "order_time": "2025-06-24T11:15:00"
          },
          {
            "id": 135,
            "restaurant_id": 101,
            "order_amount": 753,
            "order_time": "2025-06-25T19:45:00"
          },
          {
            "id": 136,
            "restaurant_id": 103,
            "order_amount": 620,
            "order_time": "2025-06-25T19:45:00"
          },
          {
            "id": 137,
            "restaurant_id": 102,
            "order_amount": 662,
            "order_time": "2025-06-24T21:45:00"
          },
          {
            "id": 138,
            "restaurant_id": 103,
            "order_amount": 712,
            "order_time": "2025-06-25T21:45:00"
          },
          {
            "id": 139,
            "restaurant_id": 104,
            "order_amount": 743,
            "order_time": "2025-06-27T15:30:00"
          },
          {
            "id": 140,
            "restaurant_id": 101,
            "order_amount": 272,
            "order_time": "2025-06-22T18:00:00"
          },
          {
            "id": 141,
            "restaurant_id": 103,
            "order_amount": 705,
            "order_time": "2025-06-24T17:30:00"
          },
          {
            "id": 142,
            "restaurant_id": 104,
            "order_amount": 292,
            "order_time": "2025-06-26T22:15:00"
          },
          {
            "id": 143,
            "restaurant_id": 102,
            "order_amount": 677,
            "order_time": "2025-06-27T12:45:00"
          },
          {
            "id": 144,
            "restaurant_id": 103,
            "order_amount": 400,
            "order_time": "2025-06-26T21:15:00"
          },
          {
            "id": 145,
            "restaurant_id": 103,
            "order_amount": 215,
            "order_time": "2025-06-28T14:15:00"
          },
          {
            "id": 146,
            "restaurant_id": 102,
            "order_amount": 266,
            "order_time": "2025-06-26T12:00:00"
          },
          {
            "id": 147,
            "restaurant_id": 101,
            "order_amount": 970,
            "order_time": "2025-06-26T16:00:00"
          },
          {
            "id": 148,
            "restaurant_id": 101,
            "order_amount": 450,
            "order_time": "2025-06-26T21:45:00"
          },
          {
            "id": 149,
            "restaurant_id": 101,
            "order_amount": 354,
            "order_time": "2025-06-22T10:45:00"
          },
          {
            "id": 150,
            "restaurant_id": 101,
            "order_amount": 885,
            "order_time": "2025-06-27T19:15:00"
          },
          {
            "id": 151,
            "restaurant_id": 104,
            "order_amount": 552,
            "order_time": "2025-06-25T15:00:00"
          },
          {
            "id": 152,
            "restaurant_id": 101,
            "order_amount": 576,
            "order_time": "2025-06-27T10:00:00"
          },
          {
            "id": 153,
            "restaurant_id": 102,
            "order_amount": 217,
            "order_time": "2025-06-24T12:00:00"
          },
          {
            "id": 154,
            "restaurant_id": 102,
            "order_amount": 429,
            "order_time": "2025-06-22T18:00:00"
          },
          {
            "id": 155,
            "restaurant_id": 102,
            "order_amount": 661,
            "order_time": "2025-06-22T10:45:00"
          },
          {
            "id": 156,
            "restaurant_id": 102,
            "order_amount": 416,
            "order_time": "2025-06-22T10:30:00"
          },
          {
            "id": 157,
            "restaurant_id": 104,
            "order_amount": 558,
            "order_time": "2025-06-22T11:30:00"
          },
          {
            "id": 158,
            "restaurant_id": 104,
            "order_amount": 245,
            "order_time": "2025-06-22T22:45:00"
          },
          {
            "id": 159,
            "restaurant_id": 104,
            "order_amount": 855,
            "order_time": "2025-06-26T11:45:00"
          },
          {
            "id": 160,
            "restaurant_id": 103,
            "order_amount": 818,
            "order_time": "2025-06-25T13:15:00"
          },
          {
            "id": 161,
            "restaurant_id": 101,
            "order_amount": 448,
            "order_time": "2025-06-28T12:00:00"
          },
          {
            "id": 162,
            "restaurant_id": 101,
            "order_amount": 300,
            "order_time": "2025-06-28T19:30:00"
          },
          {
            "id": 163,
            "restaurant_id": 103,
            "order_amount": 374,
            "order_time": "2025-06-24T16:15:00"
          },
          {
            "id": 164,
            "restaurant_id": 101,
            "order_amount": 684,
            "order_time": "2025-06-24T18:45:00"
          },
          {
            "id": 165,
            "restaurant_id": 103,
            "order_amount": 509,
            "order_time": "2025-06-23T20:00:00"
          },
          {
            "id": 166,
            "restaurant_id": 102,
            "order_amount": 302,
            "order_time": "2025-06-22T13:00:00"
          },
          {
            "id": 167,
            "restaurant_id": 101,
            "order_amount": 590,
            "order_time": "2025-06-23T22:45:00"
          },
          {
            "id": 168,
            "restaurant_id": 101,
            "order_amount": 453,
            "order_time": "2025-06-22T15:45:00"
          },
          {
            "id": 169,
            "restaurant_id": 101,
            "order_amount": 837,
            "order_time": "2025-06-25T11:45:00"
          },
          {
            "id": 170,
            "restaurant_id": 103,
            "order_amount": 819,
            "order_time": "2025-06-25T14:30:00"
          },
          {
            "id": 171,
            "restaurant_id": 104,
            "order_amount": 935,
            "order_time": "2025-06-25T11:30:00"
          },
          {
            "id": 172,
            "restaurant_id": 102,
            "order_amount": 548,
            "order_time": "2025-06-22T19:15:00"
          },
          {
            "id": 173,
            "restaurant_id": 102,
            "order_amount": 626,
            "order_time": "2025-06-25T13:30:00"
          },
          {
            "id": 174,
            "restaurant_id": 103,
            "order_amount": 967,
            "order_time": "2025-06-22T22:30:00"
          },
          {
            "id": 175,
            "restaurant_id": 103,
            "order_amount": 713,
            "order_time": "2025-06-27T18:15:00"
          },
          {
            "id": 176,
            "restaurant_id": 104,
            "order_amount": 241,
            "order_time": "2025-06-28T21:45:00"
          },
          {
            "id": 177,
            "restaurant_id": 103,
            "order_amount": 234,
            "order_time": "2025-06-23T18:00:00"
          },
          {
            "id": 178,
            "restaurant_id": 102,
            "order_amount": 667,
            "order_time": "2025-06-22T20:30:00"
          },
          {
            "id": 179,
            "restaurant_id": 102,
            "order_amount": 437,
            "order_time": "2025-06-27T12:30:00"
          },
          {
            "id": 180,
            "restaurant_id": 104,
            "order_amount": 967,
            "order_time": "2025-06-25T15:00:00"
          },
          {
            "id": 181,
            "restaurant_id": 101,
            "order_amount": 565,
            "order_time": "2025-06-25T18:15:00"
          },
          {
            "id": 182,
            "restaurant_id": 102,
            "order_amount": 483,
            "order_time": "2025-06-23T12:15:00"
          },
          {
            "id": 183,
            "restaurant_id": 102,
            "order_amount": 936,
            "order_time": "2025-06-28T16:45:00"
          },
          {
            "id": 184,
            "restaurant_id": 103,
            "order_amount": 342,
            "order_time": "2025-06-24T10:45:00"
          },
          {
            "id": 185,
            "restaurant_id": 102,
            "order_amount": 621,
            "order_time": "2025-06-22T21:30:00"
          },
          {
            "id": 186,
            "restaurant_id": 101,
            "order_amount": 360,
            "order_time": "2025-06-28T17:30:00"
          },
          {
            "id": 187,
            "restaurant_id": 101,
            "order_amount": 203,
            "order_time": "2025-06-25T11:45:00"
          },
          {
            "id": 188,
            "restaurant_id": 103,
            "order_amount": 888,
            "order_time": "2025-06-23T20:45:00"
          },
          {
            "id": 189,
            "restaurant_id": 101,
            "order_amount": 624,
            "order_time": "2025-06-22T17:45:00"
          },
          {
            "id": 190,
            "restaurant_id": 103,
            "order_amount": 501,
            "order_time": "2025-06-28T18:15:00"
          },
          {
            "id": 191,
            "restaurant_id": 103,
            "order_amount": 466,
            "order_time": "2025-06-26T15:45:00"
          },
          {
            "id": 192,
            "restaurant_id": 102,
            "order_amount": 720,
            "order_time": "2025-06-23T21:00:00"
          },
          {
            "id": 193,
            "restaurant_id": 101,
            "order_amount": 382,
            "order_time": "2025-06-22T18:45:00"
          },
          {
            "id": 194,
            "restaurant_id": 101,
            "order_amount": 551,
            "order_time": "2025-06-26T22:15:00"
          },
          {
            "id": 195,
            "restaurant_id": 101,
            "order_amount": 347,
            "order_time": "2025-06-28T16:15:00"
          },
          {
            "id": 196,
            "restaurant_id": 103,
            "order_amount": 601,
            "order_time": "2025-06-23T12:30:00"
          },
          {
            "id": 197,
            "restaurant_id": 101,
            "order_amount": 255,
            "order_time": "2025-06-25T22:45:00"
          },
          {
            "id": 198,
            "restaurant_id": 102,
            "order_amount": 502,
            "order_time": "2025-06-23T18:15:00"
          },
          {
            "id": 199,
            "restaurant_id": 102,
            "order_amount": 752,
            "order_time": "2025-06-26T22:45:00"
          },
          {
            "id": 200,
            "restaurant_id": 103,
            "order_amount": 393,
            "order_time": "2025-06-22T11:30:00"
          }
    ];
  
    return Response.json(orders);
  }
  