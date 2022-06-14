const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce
(function(total, batches)
{
  return batches + total
  }
) 

/*
function totalBatteries(batteryBatches) {
    let total = 'number';
    
    for (const product of batteryBatches) {
      total += batteryBatches.sum;
    };
  
    return total;
  }
  
  console.log(totalBatteries(batteryBatches)); */