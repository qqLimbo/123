var app = new Vue({
    el: '#app',
    data: {
        Cars: [{
                mark: 'Выберите марку машины',
                engine: []
            },
            {
                mark: 'Lamborghini',
                engine: [{
                        name: 'Lamborghini L535',
                        price: 90
                    },
                    {
                        name: 'Lamborghini L539 6.5L V12',
                        price: 100
                    }
                ],

            },
            {
                mark: 'Ferrari',
                engine: [{
                        name: 'Выбирите двигатель',
                        name: 'Ferrari F154 V8',
                        price: 90
                    },
                    {
                        name: 'F140 GA V12 6.5 ',
                        price: 100
                    }
                ]
            },
            {
                mark: 'Bugatti',
                engine: [{
                        name: 'Bugatti EB110 SS',
                        price: 90
                    },
                    {
                        name: 'Bugatti Veyron',
                        price: 100
                    }
                ]
            }
        ],
        selectedCar: 0,
        selectedEngine: 0,
        orderPrice: 0

    },
    methods: {
        chooseCar() {
            this.selectedCar = document.getElementById('selectCar').selectedIndex;
        },
        chooseEngine() {
            this.selectedEngine = document.getElementById('selectEngine').selectedIndex;
            let car = this.Cars[this.selectedCar];
            let engine = car.engine[this.selectedEngine];
            this.orderPrice = engine.price;
        }
    }


})