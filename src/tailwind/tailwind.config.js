module.exports = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1280px",
                        "2xl": "1536px"
                    },
                    "colors": {
                        "current": "currentColor",
                        "transparent": "transparent",
                        "black": "#000",
                        "white": "#fff",
                        "gray": {
                            "50": "#F8FAFC",
                            "100": "#F1F5F9",
                            "200": "#E2E8F0",
                            "300": "#CBD5E1",
                            "400": "#94A3B8",
                            "500": "#64748B",
                            "600": "#475569",
                            "700": "#334155",
                            "800": "#1E293B",
                            "900": "#0F172A"
                        },
                        "red": {
                            "50": "#FCFBF9",
                            "100": "#FAEFE4",
                            "200": "#F6D3C7",
                            "300": "#E9A89A",
                            "400": "#E17A6D",
                            "500": "#D0574A",
                            "600": "#B63D32",
                            "700": "#8F2D27",
                            "800": "#65201B",
                            "900": "#3F1410"
                        },
                        "orange": {
                            "50": "#FBFAF6",
                            "100": "#F9F0D1",
                            "200": "#F2DAA3",
                            "300": "#E0B36E",
                            "400": "#CB8742",
                            "500": "#B06625",
                            "600": "#924C18",
                            "700": "#703914",
                            "800": "#4D2710",
                            "900": "#31180B"
                        },
                        "yellow": {
                            "50": "#FDFBED",
                            "100": "#faf6d7",
                            "200": "#f5edaf",
                            "300": "#EFE281",
                            "400": "#E9D758",
                            "500": "#E5D138",
                            "600": "#b7a72d",
                            "700": "#897d22",
                            "800": "#5c5416",
                            "900": "#2e2a0b"
                        },
                        "green": {
                            "50": "#EFF5F4",
                            "100": "#D1EFF2",
                            "200": "#9CE6E1",
                            "300": "#62CBBF",
                            "400": "#28AD96",
                            "500": "#1C926F",
                            "600": "#197B57",
                            "700": "#185E45",
                            "800": "#124134",
                            "900": "#0D2827"
                        },
                        "teal": {
                            "50": "#F0FAFA",
                            "100": "#d2dede",
                            "200": "#a6bdbd",
                            "300": "#369696",
                            "400": "#297373",
                            "500": "#205A5A",
                            "600": "#1a4848",
                            "700": "#133636",
                            "800": "#0d2424",
                            "900": "#061212"
                        },
                        "blue": {
                            "50": "#EBF8FF",
                            "100": "#ceefff",
                            "200": "#9ddeff",
                            "300": "#70CFFF",
                            "400": "#45C1FF",
                            "500": "#0AADFF",
                            "600": "#088acc",
                            "700": "#066899",
                            "800": "#044566",
                            "900": "#022333"
                        },
                        "indigo": {
                            "50": "#F7F9FB",
                            "100": "#E3F0FC",
                            "200": "#C5DAFA",
                            "300": "#9CB6F2",
                            "400": "#778FE8",
                            "500": "#606AE0",
                            "600": "#4E4ED2",
                            "700": "#3C3AB1",
                            "800": "#2A2883",
                            "900": "#171952"
                        },
                        "purple": {
                            "50": "#F9FAFB",
                            "100": "#EFEFFA",
                            "200": "#DDD5F6",
                            "300": "#BFAFE9",
                            "400": "#A885D9",
                            "500": "#8F61CB",
                            "600": "#7645B5",
                            "700": "#593490",
                            "800": "#3D2465",
                            "900": "#23173C"
                        },
                        "pink": {
                            "50": "#FCFBFA",
                            "100": "#F9EFF1",
                            "200": "#F4D0E4",
                            "300": "#E6A5C7",
                            "400": "#DF76A5",
                            "500": "#CF5387",
                            "600": "#B63867",
                            "700": "#8E2A4C",
                            "800": "#651E32",
                            "900": "#3D131C"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "20": "5rem",
                        "24": "6rem",
                        "26": "6.5rem",
                        "28": "7rem",
                        "32": "8rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "backgroundColor": theme => ({
            ...theme('colors'),
            body: '#fff',
        }),
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "borderColor": theme => ({
            ...theme('colors'),
            DEFAULT: '#F1F5F9',
        }),
                    "borderRadius": {
                        "none": "0",
                        "sm": "0.125rem",
                        "DEFAULT": "0.375rem",
                        "md": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "3xl": "2rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0",
                        "2": "2px",
                        "3": "3px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "sm": "1px 1px 0px 1px rgba(19, 38, 70, 0.25)",
                        "DEFAULT": "2px 2px 0px 2px rgba(13, 40, 39, 0.25)",
                        "md": "3px 3px 0px 3px rgba(19, 38, 70, 0.25)",
                        "lg": "5px 5px 0px 5px rgba(19, 38, 70, 0.25)",
                        "xl": "7px 7px 0px 7px rgba(19, 38, 70, 0.25)",
                        "2xl": "9px 9px 0px 9px rgba(19, 38, 70, 0.25)",
                        "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                        "none": "none"
                    },
                    "container": [],
                    "cursor": {
                        "auto": "auto",
                        "DEFAULT": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "not-allowed": "not-allowed"
                    },
                    "fill": {
                        "current": "currentColor"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "body": "\"Manrope\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "heading": "\"Manrope\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "sans": "\"Manrope\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "serif": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
                        "mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
                    },
                    "fontSize": {
                        "xs": [
                            "0.75rem",
                            {
                                "lineHeight": "1rem"
                            }
                        ],
                        "sm": [
                            "0.875rem",
                            {
                                "lineHeight": "1.25rem"
                            }
                        ],
                        "base": [
                            "1rem",
                            {
                                "lineHeight": "1.875rem"
                            }
                        ],
                        "lg": [
                            "1.125rem",
                            {
                                "lineHeight": "1.875rem"
                            }
                        ],
                        "xl": [
                            "1.25rem",
                            {
                                "lineHeight": "2.25rem"
                            }
                        ],
                        "2xl": [
                            "1.5rem",
                            {
                                "lineHeight": "2rem"
                            }
                        ],
                        "3xl": [
                            "2.25rem",
                            {
                                "lineHeight": "1.125"
                            }
                        ],
                        "4xl": [
                            "3rem",
                            {
                                "lineHeight": "1.125"
                            }
                        ],
                        "5xl": [
                            "4rem",
                            {
                                "lineHeight": "1.125"
                            }
                        ],
                        "6xl": [
                            "4.5rem",
                            {
                                "lineHeight": "1"
                            }
                        ]
                    },
                    "fontWeight": {
                        "hairline": "100",
                        "thin": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800",
                        "black": "900"
                    },
                    "height": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
                    "inset": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            full: '100%',
            '-1\/2': '-50%',
            '-1\/3': '-33.333333%',
            '-2\/3': '-66.666667%',
            '-1\/4': '-25%',
            '-2\/4': '-50%',
            '-3\/4': '-75%',
            '-full': '-100%',
        }),
                    "letterSpacing": {
                        "tighter": "-0.02em",
                        "tight": "-1px",
                        "normal": "0em",
                        "wide": "0.03em",
                        "wider": "0.08em",
                        "widest": "0.1em"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.25",
                        "snug": "1.375",
                        "normal": "1.5",
                        "relaxed": "1.625",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "margin": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
                    "maxHeight": {
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "maxWidth": {
                        "none": "none",
                        "xs": "20rem",
                        "sm": "24rem",
                        "md": "28rem",
                        "lg": "32rem",
                        "xl": "36rem",
                        "2xl": "42rem",
                        "3xl": "48rem",
                        "4xl": "56rem",
                        "5xl": "64rem",
                        "6xl": "72rem",
                        "7xl": "80rem",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content",
                        "prose": "65ch"
                    },
                    "minHeight": {
                        "0": "0",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0",
                        "full": "100%"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "padding": theme => theme('spacing'),
                    "placeholderColor": theme => theme('colors'),
                    "stroke": {
                        "current": "currentColor"
                    },
                    "textColor": theme => ({
            ...theme('colors'),
            body: '#171952',
        }),
                    "width": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            '1\/5': '20%',
            '2\/5': '40%',
            '3\/5': '60%',
            '4\/5': '80%',
            '1\/6': '16.666667%',
            '2\/6': '33.333333%',
            '3\/6': '50%',
            '4\/6': '66.666667%',
            '5\/6': '83.333333%',
            '1\/12': '8.333333%',
            '2\/12': '16.666667%',
            '3\/12': '25%',
            '4\/12': '33.333333%',
            '5\/12': '41.666667%',
            '6\/12': '50%',
            '7\/12': '58.333333%',
            '8\/12': '66.666667%',
            '9\/12': '75%',
            '10\/12': '83.333333%',
            '11\/12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "theme": {
        "extend": []
    },
    "content": [
        ".\/src\/pug\/*.pug",
        ".\/src\/html\/*.html",
        ".\/src\/pages\/*.js",
        ".\/src\/components\/*\/*.js"
    ],
    "plugins": []
};