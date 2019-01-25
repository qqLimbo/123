var app = new Vue({
  el: '#app',
  data: {
    Cars: [
    	{
    		mark: 'Выберите марку машины',
    		engine:[]
    	},
		{ 
			mark: 'Lamborghini',
			engine:[
				{
					name: 'e1',
					price: 90
				},
				{
					name: 'e2',
					price: 100
				}	
			],

		},
		{ 
			mark: 'Ferrari',
			engine:[
				{
					name: 'f1',
					price: 90
				},
				{
					name: 'f2',
					price: 100
				}	
			] 
		},
		{ 
			mark: 'Bugatti',
			engine:[
				{
					name: 'b1',
					price: 90
				},
				{
					name: 'b2',
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
  	chooseCar(){
  		this.selectedCar = document.getElementById('selectCar').selectedIndex;
  	},
  	chooseEngine(){
  		this.selectedEngine  = document.getElementById('selectEngine').selectedIndex;
  		let car = this.Cars[this.selectedCar];
  		let engine = car.engine[this.selectedEngine];
  		this.orderPrice = engine.price;
  	}
  }


})