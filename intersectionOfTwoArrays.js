let intersection = function(nums1, nums2) {
  let result = [], val;
  for(const num of nums1){
      if(nums2.includes(num) && !result.includes(num)){
          result.push(num)
      }
  }
  return result
};