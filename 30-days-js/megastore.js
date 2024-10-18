// std disc weight any 6% dic 
// seasonal disc weight any 12 % disc
// weight disc w <= 10 6% disc
// weight disc w > 10 = 18% disc


const DiscountType = {
    Standard: "Standard",
    Seasonal: "Seasonal",
    Weight: "Weight"
  };
  
  function getDiscountedPrice(cartWeight, totalPrice, discountType) {
    let discount = 0
    if(discountType === DiscountType.Standard){
        discount = 0.06
    }
    else if(discountType === DiscountType.Seasonal){
        discount = 0.12
    }
    else if(discountType === DiscountType.Weight){
        discount = cartWeight >10 ? 0.18 : 0.06
    }
    return (totalPrice - (totalPrice * discount))
  }
  
  // console.log(getDiscountedPrice(12, 100, DiscountType.Weight)); //82
  console.log(getDiscountedPrice(12, 100, DiscountType.Standard));