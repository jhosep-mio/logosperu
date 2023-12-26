const particlesConfig ={
  "autoPlay": true,
  "background": {
    "color": {
      "value": ""
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": false,
    "zIndex": -5
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": "percent",
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": "percent",
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": "percent",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
 "particles": {
    "color": {
      "value": [
        "#1E00FF",
        "#FF0061",
        "#E1FF00",
        "#00FF9E"
      ]
    },
    "move": {
      "decay": 0.05,
      "direction": "top",
      "enable": true,
      "gravity": {
        "enable": true
      },
      "outModes": {
        "top": "none",
      },
      "speed": {
        "min": 50,
        "max": 100
      }
    },
    "number": {
      "value": 15
    },
    "opacity": {
      "value": 1
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "size": {
      "value": 3,
      "animation": {
        "enable": true,
        "startValue": "min",
        "count": 1,
        "speed": 5,
        "sync": true
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enlighten": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 5,
        "max": 15
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "min": -7,
        "max": 7
      }
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
      "options": {}
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60,
        "decay": 0,
        "sync": false
      },
      "direction": "random",
      "path": false
    },
    // "destroy": {
    //   "bounds": {},
    //   "mode": "none",
    //   "split": {
    //     "count": 1,
    //     "factor": {
    //       "random": {
    //         "enable": false,
    //         "minimumValue": 0
    //       },
    //       "value": 3
    //     },
    //     "rate": {
    //       "random": {
    //         "enable": false,
    //         "minimumValue": 0
    //       },
    //       "value": {
    //         "min": 4,
    //         "max": 9
    //       }
    //     },
    //     "sizeOffset": true,
    //     "particles": {}
    //   }
    // },
    "roll": {
      "darken": {
        "enable": true,
        "value": 30
      },
      "enable": true,
      "enlighten": {
        "enable": true,
        "value": 30
      },
      "mode": "vertical",
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 40,
        "decay": 0,
        "sync": false
      },
      "direction": "random",
      "enable": true
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "angle": {
          "min": -15,
          "max": 15
        },
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "emitters": {
    "autoPlay": true,
    "fill": true,
    "life": {
      "wait": false
    },
    "rate": {
      "quantity": 10,
      "delay": 0.1
    },
    "shape": "square",
    "startCount": 0,
    "size": {
      "mode": "percent",
      "height": 0,
      "width": 0
    },
    "particles": {},
    "position": {
      "x": 50,
      "y": 100
    }
  },
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  "zLayers": 100,
  "emitters": {
    "autoPlay": true,
    "fill": true,
    "life": {
      "wait": false
    },
    "rate": {
      "quantity": 10,
      "delay": 0.1
    },
    "shape": "square",
    "startCount": 0,
    "size": {
      "mode": "percent",
      "height": 0,
      "width": 0
    },
    "particles": {
      "links": {
        "enable": false
      },
      "shape": {
        "type": "circle"
      }
    },
    "position": {
      "x": 50,
      "y": 50
    }
  }
}

export default particlesConfig