pragma solidity ^0.5.0;

contract DeliveryWithLocations {

  /// The seller's address
  address public owner;

  /// The buyer's address part on this contract
  address public buyerAddr;


  struct Location {
    string currentLocation;
    uint timestamp;
  }

  /// The Order struct
  struct Order {
    string goods;
    uint quantity;
    uint price;
    uint discountIfLate; // if delivery late or bad location data price discounted by this much out of the price
    uint timestamp;
    uint locationFrequency;
    string deliveryLocation;
    uint deliveryTime;
    
    bool accepted;
  }

  /// The Invoice struct
  struct Invoice {
    uint orderno;
    uint number;

    bool init;
  }

  /// Single Order per contract
  Order public order;

  Location[] public locations;


  /// Event triggered when order is accepted
  event OrderAccepted(address buyer, string goods, uint quantity, string deliveryLocation);

  /// Event triggerd when the location of shipment is updated
  event LocationUpdated(string location);

  /// Event triggered when too slow to deliver and buyer doesnt wait
  event Refunded();

  /// Event triggered when the courie delives the order
  event OrderDelivered(address buyer, string goods, uint quantity, uint real_delivey_date, address courier);

  /// The smart contract's constructor
  constructor (address _buyerAddr, string memory goods, uint quantity, uint price, uint discountIfLate, uint locationFrequency, string memory deliveryLocation, uint deliveryTime) public payable {
    
    /// The seller is the contract's owner
    owner = msg.sender;
    
    order = Order(goods, quantity, price, discountIfLate, now, locationFrequency, deliveryLocation, deliveryTime, false);
    
    buyerAddr = _buyerAddr;
  }


  function agreeToTerms() payable public {
    
    /// Accept orders just from buyer
    require(msg.sender == buyerAddr);
    
    require(!order.accepted);
    
    require(order.price == msg.value);
    
    order.accepted = true;
    
    order.timestamp = now;

    /// Trigger the event
     emit OrderAccepted(msg.sender, order.goods, order.quantity, order.deliveryLocation);
  }


  function getLocationCount() public view returns(uint entityCount) {
    return locations.length;
  }

  /// The function update location data
  function sendLocationUpdate(string memory CurrentLocation) public {

    /// Validate order accepted
    require(order.accepted);

    /// Just the seller can send the invoice
    require(owner == msg.sender);
    
    Location memory newLocation;
    newLocation.currentLocation = CurrentLocation;
    newLocation.timestamp = now;
    locations.push(newLocation)-1;
    
    emit LocationUpdated(CurrentLocation);
  }

  function RefundUndelivered() payable public {

    /// Validate order accepted
    require(order.accepted);
    
    require(order.timestamp + order.deliveryTime < now);///late
    /// Just the seller can send the invoice
    require(buyerAddr == msg.sender);

    msg.sender.transfer(order.price);
    
    emit Refunded();
  }

  /// The function to mark an order as delivered
  function delivered() payable public {

    /// Validate the invoice number
    require(order.accepted);

    /// Just the shipper can call this function
    require(owner == msg.sender);
    
    if(locations.length >= order.locationFrequency && order.timestamp + order.deliveryTime < now ){
        /// Payout the Order to the seller on time
        msg.sender.transfer(order.price);
    }
    else{/// Payout the Order to the seller late or bad locations
        
        msg.sender.transfer(order.price - order.discountIfLate );
        address(uint160(buyerAddr)).transfer(order.price - (order.price - order.discountIfLate));
    }
      emit  OrderDelivered(buyerAddr, order.goods, order.quantity, now, owner);
  }

  function health() pure public returns (string memory) {
    return "running";
  }
}
