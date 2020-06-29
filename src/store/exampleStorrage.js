export const CATEGORIES = [
    {
        id: 1,
        name: "Category1",
        active: false,
        tasks:[
            {
                id: 45,
                isOpen:true,
                title: "Travel to the Sea ",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 78,
                isOpen:false,
                title: "I know React, maybe",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
        ],
        sub: [
            {
                id: 65,
                parentID: 1,
                name: "subCategory1",
                active: false,
                tasks:[],
                sub: [
                    {
                        id:10,
                        parentID: 1,
                        name: "subsubCategory1y",
                        active: false,
                        tasks:[{
                            id: 5,
                            title: "Buy beer",
                            text: "hello hello hello  " +
                                "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                                "hellohellohellohellohellohello hellohellohello hello hello ",

                        },
                            {
                                id: 6,
                                title: "I know React, maybe",
                                text: "hello hello hello  " +
                                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                                    "hellohellohellohellohellohello hellohellohello hello hello ",

                            },],
                    },
                ]
            },
            {
                id: 35,
                parentID: 1,
                name: "subCategory1",
                active: false,
                tasks:[],
            },
        ],
    },
    {
        id: 2,
        name: "Category2",
        active: false,
        tasks:[],
        sub: [
            {
                id: 88,
                parentID: 2,
                name: "Category2",
                active: false,
                tasks:[],
                sub: []
            },
            {
                id: 667,
                parentID: 2,
                name: "second Sub",
                active: false,
                tasks:[],
            },
        ],
    },
    {
        id: 3,
        name: "Category3",
        active: false,
        tasks:[{
            id: 7,
            isOpen:true,
            title: " i know kung-fu",
            text: "hello hello hello  " +
                "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                "hellohellohellohellohellohello hellohellohello hello hello ",

        },
            {
                id: 8,
                isOpen:false,
                title: "Buy Porshe",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 9,
                isOpen:true,
                title: "Hello my name is Boris",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello ",

            },],
        sub: [],
    },
    {
        id: 4,
        name: "Category3",
        active: false,
        tasks:[
            {
                id: 3,
                isOpen:false,
                title: "Dinner",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 4,
                isOpen:true,
                title: "Yeah boy",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 10,isOpen:true,
                title: "I know React, maybe",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 11,
                isOpen:true,
                title: "Azazaza",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 12,
                isOpen:false,
                title: "Play football",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            }
        ],
        sub: [],
    },
    {
        id: 5,
        name: "Category1",
        active: false,
        tasks:[
            {
                id: 1,
                isOpen:false,
                title: "Travel to the Sea ",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
            {
                id: 2,
                isOpen:false,
                title: "I know React, maybe",
                text: "hello hello hello  " +
                    "hellohellohello hellohellohellohellohellohellohellohello hellohellohello hellohellohello" +
                    "hellohellohellohellohellohello hellohellohello hello hello ",

            },
        ],
        sub: [
            {
                id: 133,
                parentID: 5,
                name: "subCategory1",
                active: false,
                tasks:[],
                sub: [
                    {
                        id: 143,
                        parentID: 1,
                        name: "subsubCategory1y",
                        active: false,
                        tasks:[],
                    },
                ]
            },
            {
                id: 23123,
                parentID: 5,
                name: "subCategory1",
                active: false,
                tasks:[],
            },
        ],
    },
];
