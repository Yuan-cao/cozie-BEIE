export default [{

    name: "Suite",
    displayName: "In suite(Y/N)",
    type: "icon",
    questionText: "Are you in suite now?",
    questionSecondText: "",
        answerDirectTo: {
        11: {
            next: "Thermal"
        },
        10: {
            next: "end"
        }
    },
    iconText: ["Yes", "No"],
    iconColors: ["fb-green","fb-orange"],
    iconImages: [
        "images/icons/yes.png",
        "images/icons/no.png",
    ]
}, {
       
    name: "Thermal",
    displayName: "Thermal",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "What's your current",
    questionSecondText: "temperature preference?",
    answerDirectTo: {
        9: {
            next: "RH"
        },
        11: {
            next: "RH"
        },
        10: {
            next: "RH"
        }
    },
    iconText: ["Cooler", "Warmer", "I'm Comfy"],
    iconColors: ["fb-cyan", "fb-orange", "fb-green"],
    iconImages: [
        "images/icons/prefer_cold.png",
        "images/icons/prefer_warmer.png",
        "images/icons/comfy.png",
    ],
}, {
    name: "RH",
    displayName: "Relative Humidity",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "What's your current ",
    questionSecondText: "humidity preference?",
    answerDirectTo: {
        9: {
            next: "IAQ"
        },
        11: {
            next: "IAQ"
        },
        10: {
            next: "IAQ"
        }
    },
    iconText: ["Drier", "More humid", "I'm Comfy"],
    iconColors: ["fb-cyan", "fb-orange", "fb-green"],
    iconImages: [
        "images/icons/air/air_less_air.png",
        "images/icons/more_humid.png",
        "images/icons/comfy.png",
    ],
}, {
    
    name: "IAQ",
    displayName: "IAQ",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "What's your current air",
    questionSecondText: "quality preference?",
    answerDirectTo: {
        11: {
            next: "noise"
        },
        10: {
            next: "noise"
        }
    },
    iconText: ["Less odour", "I'm Comfy"],
    iconColors: ["fb-orange", "fb-green"],
    iconImages: [
        "images/icons/freshair/air_fresh.png",
        "images/icons/comfy.png",
    ],
}, {

    name: "noise",
    displayName: "Noise",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "What's your current",
    questionSecondText: "sound preference?",
    answerDirectTo: {
        9: {
            next: "light"
        },
        11: {
            next: "light"
        },
        10: {
            next: "light"
        }
    },
    iconText: ["Quiter", "Louder", "I'm comfy"],
    iconColors: ["fb-orange", "fb-purple", "fb-green"],
    iconImages: [
        "images/icons/prefer_quieter.png",
        "images/icons/prefer_louder.png",
        "images/icons/neutral.png",
    ],
}, {
    
    name: "light",
    displayName: "Light",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "What's your current ",
    questionSecondText: "light preference?",
    answerDirectTo: {
        9: {
            next: "overall_comfort"
        },
        11: {
            next: "overall_comfort"
        },
        10: {
            next: "overall_comfort"
        }
    },
    iconText: ["Dimmer", "Brighter", "No Change"],
    iconColors: ["fb-blue", "fb-peach", "fb-green"],
    iconImages: [
        "images/icons/prefer_dimmer.png",
        "images/icons/prefer_brighter.png",
        "images/icons/neutral.png",
    ],
}, {

    name: "overall_comfort",
    displayName: "Overall comfort",
    type: "icon",
    requiresAnswer: [{ question: "Suite", value: 11 }],
    questionText: "Are you comfortable",
    questionSecondText: "overall?",
    answerDirectTo: {
        10: {
            next: "end"
        },
        11: {
            next: "end"
        }
    },

    iconText: ["Yes", "No"],
    iconColors: ["fb-green","fb-orange"],
    iconImages: [
        "images/icons/yes.png",
        "images/icons/no.png",
    ],
}, ];