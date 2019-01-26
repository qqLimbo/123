var app = new Vue({
    el: '#app',
    data: {
        Cars: [
            {
                mark: 'Lamborghini Murciélago',
                engine: [{
                        name: 'Lamborghini L535',
                        price: 90
                    },
                    {
                        name: 'Lamborghini L539 6.5L V12',
                        price: 100
                    }
                ],
                tires: [{
                        name: 'L-driftTires',
                        price: 50
                },
                {
                        name: 'L-Tires',
                        price: 40
                }
                ]
            },
            {
                mark: '2009 Ferrari 599 GTB Fiorano.',
                engine: [{
                        name: 'Выбирите двигатель',
                        name: 'Ferrari F154 V8',
                        price: 90
                    },
                    {
                        name: 'F140 GA V12 6.5 ',
                        price: 100
                    }
                ],
                tires: [{
                        name: 'F-driftTires',
                        price: 50
                },
                {
                        name: 'F-Tires',
                        price: 40
                }
                ]
            },
            {
                mark: 'Bugatti Veyron.',
                engine: [{
                        name: 'Bugatti EB110 SS',
                        price: 90
                    },
                    {
                        name: 'Bugatti Veyron',
                        price: 100
                    }
                ],
                tires: [{
                        name: 'B-driftTires',
                        price: 50
                },
                {
                        name: 'B-Tires',
                        price: 40
                }
                ]
            }
        ],
        selectedCar: null,
        selectedEngine: null,
        selectedTires: null,
        orderPrice: 0

    },
    methods: {
        chooseCar() {
            if (event.target.selectedIndex > 0){
                this.selectedCar = this.Cars[event.target.selectedIndex-1];
            }else{
                this.selectedCar = null; 
            }
            this.selectedTires = null;
            this.selectedEngine = null;
            this.calcPrice();
            console.log(this.orderPrice) ;
        },
        chooseEngine() {
            if (event.target.selectedIndex > 0){
                this.selectedEngine = this.selectedCar.engine[event.target.selectedIndex-1];
            }else{
                this.selectedEngine = null; 
            }
            this.calcPrice();
        },
        chooseTires(){
            if (event.target.selectedIndex > 0){
                this.selectedTires = this.selectedCar.tires[event.target.selectedIndex-1];
            }else{
                this.selectedTires = null; 
            }
            this.calcPrice();
        },
        calcPrice(){
            this.orderPrice = (this.selectedEngine !== null ? this.selectedEngine.price : 0) + (this.selectedTires !== null ? this.selectedTires.price : 0);
        }
    }


})