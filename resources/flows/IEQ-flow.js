export default [
/*{
    name: "suite",
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
},  */
{
    name: "thermal",
    displayName: "Thermal",
    type: "icon",
    questionText: "Preferred temperature?",
    questionSecondText: "",
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
    iconText: ["Cooler", "Warmer", "I'm comfy"],
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
    questionText: "Preferred humidity?",
    questionSecondText: "",
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
    iconText: ["Drier", "More humid", "I'm comfy"],
    iconColors: ["fb-orange", "fb-cyan", "fb-green"],
    iconImages: [
        "images/icons/air/air_less_air.png",
        "images/icons/more_humid.png",
        "images/icons/comfy.png",
    ],
}, {
    
    name: "IAQ",
    displayName: "IAQ",
    type: "icon",
    questionText: "Preferred air quality?",
    questionSecondText: "",
    answerDirectTo: {
        11: {
            next: "noise"
        },
        10: {
            next: "noise"
        }
    },
    iconText: ["Less odour", "I'm comfy"],
    iconColors: ["fb-orange", "fb-green"],
    iconImages: [
        "images/icons/air/air_less_air.png",
        "images/icons/comfy.png",
    ],
}, {

    name: "noise",
    displayName: "Noise",
    type: "icon",
    questionText: "Preferred sound level?",
    questionSecondText: "",
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
    iconText: ["Quieter", "Louder", "I'm comfy"],
    iconColors: ["fb-purple", "fb-orange", "fb-green"],
    iconImages: [
        "images/icons/prefer_quieter.png",
        "images/icons/prefer_louder.png",
        "images/icons/comfy.png",
    ],
}, {
    
    name: "light",
    displayName: "Light",
    type: "icon",
    questionText: "Preferred light level? ",
    questionSecondText: "",
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
    iconText: ["Dimmer", "Brighter", "I'm comfy"],
    iconColors: ["fb-blue", "fb-peach", "fb-green"],
    iconImages: [
        "images/icons/prefer_dimmer.png",
        "images/icons/prefer_brighter.png",
        "images/icons/comfy.png",
    ],
}, {

    name: "overall_comfort",
    displayName: "Overall comfort",
    type: "icon",
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