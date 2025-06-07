function twoSum(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement) && numMap.get(complement) !== i) {
      return [i, numMap.get(complement)!];
    }
  }

  return [-1, -1];
}
