deliveryabi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_buyerAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "goods",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "discountIfLate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "locationFrequency",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "deliveryLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "deliveryTime",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"name": "LocationUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "goods",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "deliveryLocation",
				"type": "string"
			}
		],
		"name": "OrderAccepted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "goods",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "real_delivey_date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "courier",
				"type": "address"
			}
		],
		"name": "OrderDelivered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Refunded",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "RefundUndelivered",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "agreeToTerms",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyerAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "delivered",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLocationCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "entityCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "health",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "locations",
		"outputs": [
			{
				"internalType": "string",
				"name": "currentLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "order",
		"outputs": [
			{
				"internalType": "string",
				"name": "goods",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "discountIfLate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "locationFrequency",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "deliveryLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "deliveryTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "accepted",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "CurrentLocation",
				"type": "string"
			}
		],
		"name": "sendLocationUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]