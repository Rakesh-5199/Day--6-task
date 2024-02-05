class UberPriceCalculator {
    constructor(baseFare, perKilometerRate, perMinuteRate, bookingFee) {
      this.baseFare = baseFare;
      this.perKilometerRate = perKilometerRate;
      this.perMinuteRate = perMinuteRate;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInKilometers, durationInMinutes) {
      const distanceCost = this.perKilometerRate * distanceInKilometers;
      const durationCost = this.perMinuteRate * durationInMinutes;
      const totalPrice = this.baseFare + distanceCost + durationCost + this.bookingFee;
  
      return totalPrice;
    }
  
    displayPrice(distanceInKilometers, durationInMinutes) {
      const totalPrice = this.calculatePrice(distanceInKilometers, durationInMinutes);
      console.log(`Uber Price: ₹${totalPrice.toFixed(2)}`);
    }
  }
  

  const uberCalculator = new UberPriceCalculator(50, 10, 2, 20);
  uberCalculator.displayPrice(10, 15);
  