



var cars = {
    Toyota: {
        model1: {
            name: "RAV4 Plug-in Hybrid (formerly Prime) XSE",
            Model_Year: 2025,
            vahicleType: "Compact Crossover SUV / Plug-in Hybrid",
            Image: "images/TC1.avif",
            features: {
                Horsepower: "302 hp (combined system)",
                Engine: "2.5L 4-Cylinder Plug-in Hybrid",
                Fuel_Economy: "42 miles all-electric range / 38 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "SofTex®-trimmed seats with sporty stitching",
                Key_Feature2: "10.5-inch multimedia display",
                Key_Feature3: "Electronic On-Demand All-Wheel Drive (AWD)"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model2: {
            name: "Camry XLE Hybrid",
            Model_Year: 2025,
            vahicleType: "Midsize Sedan / Hybrid",
            Image: "images/tc2.avif",
            features: {
                Horsepower: "225-232 hp (net system, depending on FWD/AWD)",
                Engine: "2.5L 4-Cylinder Hybrid System (THS 5)",
                Fuel_Economy: "Up to 51 MPG (FWD) or 50 MPG (AWD) (est.)",
            },
            amenitie: {
                Key_Feature1: "Leather and microfiber-trimmed interior",
                Key_Feature2: "Heated and ventilated front seats",
                Key_Feature3: "Available JBL Premium Audio System (9 speakers)"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model3: {
            name: "Highlander Hybrid Limited",
            Model_Year: 2026,
            vahicleType: "Midsize 3-Row SUV / Hybrid",
            Image: "images/TC3.avif",
            features: {
                Horsepower: "243 hp",
                Engine: "2.5L 4-Cylinder with electric motors",
                Fuel_Economy: "35 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "14-inch touchscreen display",
                Key_Feature2: "Hands-free power liftgate",
                Key_Feature3: "Available all-wheel drive"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model4: {
            name: "Corolla Hatchback XSE",
            Model_Year: 2025,
            vahicleType: "Compact Hatchback / Gasoline",
            Image: "images/tc4.avif",
            features: {
                Horsepower: "169 hp",
                Engine: "2.0L 4-Cylinder",
                Fuel_Economy: "35 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "8-inch touchscreen display",
                Key_Feature2: "SofTex®-trimmed heated front seats",
                Key_Feature3: "Toyota Safety Sense 3.0 (TSS 3.0)"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model5: {
            name: "Tacoma TRD Pro",
            Model_Year: 2025,
            vahicleType: "Midsize Pickup Truck / Hybrid",
            Image: "images/TC5.avif",
            features: {
                Horsepower: "326 hp",
                Engine: "2.4L Turbo Max Hybrid (i-FORCE MAX)",
                Fuel_Economy: "N/A (Est. 23 MPG combined)",
            },
            amenitie: {
                Key_Feature1: "TRD Pro off-road suspension with Fox shocks",
                Key_Feature2: "Multi-Terrain Select (MTS)",
                Key_Feature3: "IsoDynamic performance front seats"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        }
    },
    Honda: {
        model1: {
            name: "Civic Sedan Sport Touring Hybrid",
            Model_Year: 2025,
            vahicleType: "Compact Sedan / Hybrid",
            Image: "images/HC1.avif",
            features: {
                Horsepower: "200 hp (combined system)",
                Engine: "2.0L 4-Cylinder Hybrid System",
                Fuel_Economy: "49 MPG (est.)",
            },
            amenitie: {
                Key_Feature1: "Bose Premium Sound System (12 speakers)",
                Key_Feature2: "Leather-trimmed seats, heated front seats",
                Key_Feature3: "Wireless phone charger"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model2: {
            name: "CR-V Hybrid Sport Touring",
            Model_Year: 2025,
            vahicleType: "Compact Crossover SUV / Hybrid",
            Image: "images/HC2.avif",
            features: {
                Horsepower: "204 hp",
                Engine: "2.0L 4-Cylinder Hybrid System",
                Fuel_Economy: "40 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "Real Time AWD™ (RT4WD®)",
                Key_Feature2: "Hands-Free Access Power Tailgate",
                Key_Feature3: "Bose Premium Audio System"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model3: {
            name: "Passport TrailSport",
            Model_Year: 2026,
            vahicleType: "Midsize SUV / Gasoline",
            Image: "images/HC3.jpg",
            features: {
                Horsepower: "280 hp",
                Engine: "3.5L V6 (i-VTEC)",
                Fuel_Economy: "21 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "i-VTM4® AWD System",
                Key_Feature2: "TrailWatch™ camera system",
                Key_Feature3: "Rugged exterior design with specific wheels"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model4: {
            name: "Odyssey Elite",
            Model_Year: 2026,
            vahicleType: "Minivan / Gasoline",
            Image: "images/HC4.avif",
            features: {
                Horsepower: "280 hp",
                Engine: "3.5L V6",
                Fuel_Economy: "22 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "CabinWatch® Rear Seat Monitor",
                Key_Feature2: "Advanced Rear Entertainment System",
                Key_Feature3: "Hands-Free Access Power Tailgate"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model5: {
            name: "Prelude",
            Model_Year: 2026,
            vahicleType: "Sports Coupe / Hybrid",
            Image: "images/HC5.avif",
            features: {
                Horsepower: "Approx. 200 hp (est.)",
                Engine: "2.0L 4-Cylinder Hybrid System",
                Fuel_Economy: "N/A", // EPA estimates pending
            },
            amenitie: {
                Key_Feature1: "Brembo™ four-piston front calipers",
                Key_Feature2: "Adaptive Dampers",
                Key_Feature3: "Honda S+ Shift system"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        }
    },
    Ford: {
        model1: {
            name: "F-150 Lariat PowerBoost Hybrid",
            Model_Year: 2025,
            vahicleType: "Full-Size Pickup Truck / Hybrid",
            Image: "images/FC1.avif",
            features: {
                Horsepower: "430 hp (total system)",
                Engine: "3.5L PowerBoost Full Hybrid V6",
                Fuel_Economy: "N/A", // EPA estimates pending
            },
            amenitie: {
                Key_Feature1: "Pro Power Onboard generator (7.2 kW capability)",
                Key_Feature2: "Available interior work surface",
                Key_Feature3: "12-inch SYNC 4 Touchscreen"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model2: {
            name: "Mustang Dark Horse",
            Model_Year: 2025,
            vahicleType: "Sports Coupe",
            Image: "images/FC2.avif",
            features: {
                Horsepower: "500 hp",
                Engine: "5.0L Ti-VCT V8 (Coyote)",
                Fuel_Economy: "17 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "MagnaRide Damping System",
                Key_Feature2: "Tremec 6-speed manual transmission",
                Key_Feature3: "Available Recaro Performance Seats"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model3: {
            name: "Explorer ST",
            Model_Year: 2026,
            vahicleType: "Midsize 3-Row SUV / Gasoline",
            Image: "images/FC3.avif",
            features: {
                Horsepower: "400 hp",
                Engine: "3.0L EcoBoost V6",
                Fuel_Economy: "20 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "Performance-tuned AWD",
                Key_Feature2: "13.2-inch center touchscreen",
                Key_Feature3: "Ford BlueCruise hands-free highway driving (available)"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model4: {
            name: "Escape Plug-In Hybrid",
            Model_Year: 2025,
            vahicleType: "Compact Crossover SUV / Plug-in Hybrid",
            Image: "images/FC4.avif",
            features: {
                Horsepower: "210 hp (combined system)",
                Engine: "2.5L 4-Cylinder Plug-in Hybrid",
                Fuel_Economy: "37 miles all-electric range (est.)",
            },
            amenitie: {
                Key_Feature1: "Co-Pilot360 Assist+ standard",
                Key_Feature2: "Panoramic Vista Roof (available)",
                Key_Feature3: "Level 1/Level 2 AC charging port"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model5: {
            name: "Bronco Wildtrak",
            Model_Year: 2025,
            vahicleType: "Midsize SUV / Gasoline",
            Image: "images/FC5.png",
            features: {
                Horsepower: "315 hp",
                Engine: "2.7L EcoBoost V6",
                Fuel_Economy: "19 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "Sasquatch Package standard",
                Key_Feature2: "HOSS 3.0 Suspension with FOX™ Internal Bypass Dampers",
                Key_Feature3: "Removable roof and doors"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        }
    },
    Tesla: {
        model1: {
            name: "Model Y Long Range AWD",
            Model_Year: 2025,
            vahicleType: "Midsize Crossover SUV / BEV",
            Image: "images/EC1.avif",
            features: {
                Horsepower: "Approx. 425 hp (est.)",
                Engine: "N/A (Dual Electric Motors)",
                Fuel_Economy: "320 miles combined range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "Autopilot standard safety suite",
                Key_Feature2: "15.4-inch center touchscreen display",
                Key_Feature3: "Access to the Tesla Supercharger Network"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model2: {
            name: "Model 3 Performance",
            Model_Year: 2025,
            vahicleType: "Midsize Sedan / BEV",
            Image: "images/EC2.avif",
            features: {
                Horsepower: "Approx. 510 hp (est.)",
                Engine: "N/A (Dual Electric Motors)",
                Fuel_Economy: "305 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "0-60 mph in 2.9 seconds",
                Key_Feature2: "Carbon fiber spoiler",
                Key_Feature3: "15.4-inch center touchscreen"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model3: {
            name: "Model S Plaid",
            Model_Year: 2025,
            vahicleType: "Full-Size Luxury Sedan / BEV",
            Image: "images/EC3.avif",
            features: {
                Horsepower: "1,020 hp",
                Engine: "N/A (Tri-Electric Motors)",
                Fuel_Economy: "359 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "0-60 mph in 1.99 seconds",
                Key_Feature2: "Carbon-sleeved rotor motors",
                Key_Feature3: "22-speaker audio system with Active Road Noise Reduction"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model4: {
            name: "Cybertruck All-Wheel Drive",
            Model_Year: 2025,
            vahicleType: "Full-Size Pickup Truck / BEV",
            Image: "images/EC4.png",
            features: {
                Horsepower: "600 hp (est.)",
                Engine: "N/A (Dual Electric Motors)",
                Fuel_Economy: "340 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "Ultra-Hard Stainless Steel Exoskeleton",
                Key_Feature2: "Steer-by-wire system",
                Key_Feature3: "121 cubic feet of lockable exterior storage"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model5: {
            name: "Model X Plaid",
            Model_Year: 2025,
            vahicleType: "Midsize Luxury SUV / BEV",
            Image: "images/EC5.avif",
            features: {
                Horsepower: "1,020 hp",
                Engine: "N/A (Tri-Electric Motors)",
                Fuel_Economy: "333 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "Falcon Wing doors",
                Key_Feature2: "HEPA air filtration system",
                Key_Feature3: "Zero to 60 mph in 2.5 seconds"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        }
    },
    BMW: {
        model1: {
            name: "i4 M50 xDrive",
            Model_Year: 2025,
            vahicleType: "Midsize Sedan (Gran Coupe) / BEV",
            Image: "images/BC1.webp",
            features: {
                Horsepower: "536 hp (in Sport Boost mode)",
                Engine: "N/A (Dual Electric Motors)",
                Fuel_Economy: "Up to 267 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "Adaptive M Suspension and M Sport Brakes",
                Key_Feature2: "BMW Curved Display (12.3-inch cluster, 14.9-inch screen)",
                Key_Feature3: "iDrive 8.5 Operating System"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model2: {
            name: "X5 xDrive40i",
            Model_Year: 2025,
            vahicleType: "Midsize Luxury SUV / Mild Hybrid",
            Image: "images/BC2.webp",
            features: {
                Horsepower: "375 hp",
                Engine: "3.0L Turbo Inline-6 Mild Hybrid",
                Fuel_Economy: "25 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "Standard xDrive All-Wheel Drive",
                Key_Feature2: "Panoramic Sky Lounge LED Roof (optional)",
                Key_Feature3: "Heated and ventilated front seats"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model3: {
            name: "330i Sedan",
            Model_Year: 2025,
            vahicleType: "Compact Luxury Sedan / Gasoline",
            Image: "images/BC3.jfif",
            features: {
                Horsepower: "255 hp",
                Engine: "2.0L Turbo Inline-4",
                Fuel_Economy: "29 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "SensaTec Upholstery",
                Key_Feature2: "Apple CarPlay and Android Auto compatibility",
                Key_Feature3: "Standard Moonroof"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model4: {
            name: "iX xDrive50",
            Model_Year: 2025,
            vahicleType: "Midsize Luxury SUV / BEV",
            Image: "images/BC4.avif",
            features: {
                Horsepower: "516 hp",
                Engine: "N/A (Dual Electric Motors)",
                Fuel_Economy: "307 miles range (EPA est.)",
            },
            amenitie: {
                Key_Feature1: "Shy Tech design philosophy",
                Key_Feature2: "Bowers & Wilkins Diamond Surround Sound System (available)",
                Key_Feature3: "Hexagonal steering wheel"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        },
        model5: {
            name: "M4 Competition xDrive Coupe",
            Model_Year: 2025,
            vahicleType: "Sports Coupe / Gasoline",
            Image: "images/BC5.webp",
            features: {
                Horsepower: "523 hp",
                Engine: "3.0L TwinPower Turbo Inline-6",
                Fuel_Economy: "19 MPG combined (est.)",
            },
            amenitie: {
                Key_Feature1: "M xDrive AWD system",
                Key_Feature2: "Carbon fiber roof",
                Key_Feature3: "Adaptive M Suspension"
            },
            getData: function () {
                return `
                <div class = "parentdata">
                <br>
                <div class = "datacont"> 
                <img src = "${this.Image}" width = "600px" height = "400px" >
                <div class = "datainfo">
                <h3 class = "displayhead">${this.name}</h3>
                <h2 class = "year">${this.Model_Year}</h2>
                <br>
                <h3 class = "feature">${this.features.Engine}</h3>
                <br>
                <h3 class = "feature">${this.features.Horsepower}</h3>
                <br>
                <h3 class = "feature">${this.amenitie.Key_Feature3}</h3>
                 <br>
                <h3 class = "feature">${this.amenitie.Key_Feature1}</h3>
                </div>
                </div>
                </div>
                `


            }
        }
    }
};



//--showing brands/companies 

var carBrand = document.getElementById("cars");
var carModel = document.getElementById("model")

for (key in cars) {
    carBrand.innerHTML += `
            <option>${key}</<option>
        `
}


var company;
var count = 0;
function showModel() {
    company = carBrand.value
    carModel.innerHTML = ""
    for (key in cars) {

        if (key === company) {
            for (key1 in cars[key]) {
                count++
                if (count === 1) {
                    carModel.innerHTML += `<option>Select Model<?option>`
                }
                carModel.innerHTML += `
                        
                        <option>${cars[key][key1].name}</option>
                    `


            }
            count = 0
        }
    }

}
var model;
function modelValue() {
    model = carModel.value
    console.log(model)
    for (key in cars) {
        if (key === company) {
            for (key1 in cars[key]) {
                if (cars[key][key1].name === model) {
                    model = key1
                    console.log(model)
                }
            }
        }
    }
}

var display = document.getElementById("show")
var all = document.getElementById("allshow")

function show() {
    all.innerHTML = ""
    if (model) {
        display.innerHTML = cars[company][model].getData()
    } else {
        for (key in cars[company]) {
            // console.log(cars[company][key].Image)
            all.innerHTML += `
                
                <img src = "${cars[company][key].Image}" width = "400px" height = "300px">
                
            `
        }
    }

}







