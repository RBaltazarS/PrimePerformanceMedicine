import { 
  calculateCooperTest, 
  calculateOneRM, 
  calculateBodyFat,
  validateCooperTest,
  validateOneRM,
  validateBodyFat
} from './calculations';

// Test data sets
const cooperTestCases = [
  {
    input: { distance: 2400, age: 25, gender: 'male' as const },
    expectedVO2Max: 42.4,
    expectedCategory: 'Bom'
  },
  {
    input: { distance: 2800, age: 30, gender: 'female' as const },
    expectedVO2Max: 51.2,
    expectedCategory: 'Excelente'
  },
  {
    input: { distance: 1800, age: 40, gender: 'male' as const },
    expectedVO2Max: 28.9,
    expectedCategory: 'Abaixo da Média'
  }
];

const oneRMTestCases = [
  {
    input: { weight: 80, repetitions: 8, exercise: 'bench-press', experience: 'intermediate' as const },
    expectedMin: 95,
    expectedMax: 105
  },
  {
    input: { weight: 100, repetitions: 5, exercise: 'squat', experience: 'advanced' as const },
    expectedMin: 110,
    expectedMax: 120
  },
  {
    input: { weight: 60, repetitions: 12, exercise: 'deadlift', experience: 'beginner' as const },
    expectedMin: 80,
    expectedMax: 90
  }
];

const bodyFatTestCases = [
  {
    input: { 
      method: 'navy' as const, 
      height: 175, 
      weight: 70, 
      waist: 85, 
      neck: 38, 
      age: 30, 
      gender: 'male' as const 
    },
    expectedMin: 10,
    expectedMax: 20
  },
  {
    input: { 
      method: 'bmi' as const, 
      height: 165, 
      weight: 60, 
      age: 25, 
      gender: 'female' as const 
    },
    expectedMin: 15,
    expectedMax: 25
  }
];

// Test functions
export function testCooperCalculations(): { passed: number; failed: number; results: any[] } {
  let passed = 0;
  let failed = 0;
  const results: any[] = [];

  console.log('🧪 Testing Cooper Test Calculations...');

  cooperTestCases.forEach((testCase, index) => {
    try {
      const result = calculateCooperTest(testCase.input);
      const isVO2MaxCorrect = Math.abs(result.value - testCase.expectedVO2Max) < 2;
      
      if (isVO2MaxCorrect) {
        passed++;
        console.log(`✅ Test ${index + 1}: PASSED - VO2 Max: ${result.value}`);
      } else {
        failed++;
        console.log(`❌ Test ${index + 1}: FAILED - Expected: ${testCase.expectedVO2Max}, Got: ${result.value}`);
      }

      results.push({
        test: `Cooper Test ${index + 1}`,
        input: testCase.input,
        result: result,
        passed: isVO2MaxCorrect
      });

    } catch (error) {
      failed++;
      console.log(`❌ Test ${index + 1}: ERROR - ${error}`);
      results.push({
        test: `Cooper Test ${index + 1}`,
        input: testCase.input,
        error: error,
        passed: false
      });
    }
  });

  return { passed, failed, results };
}

export function testOneRMCalculations(): { passed: number; failed: number; results: any[] } {
  let passed = 0;
  let failed = 0;
  const results: any[] = [];

  console.log('🧪 Testing 1RM Calculations...');

  oneRMTestCases.forEach((testCase, index) => {
    try {
      const result = calculateOneRM(testCase.input);
      const isInRange = result.value >= testCase.expectedMin && result.value <= testCase.expectedMax;
      
      if (isInRange) {
        passed++;
        console.log(`✅ Test ${index + 1}: PASSED - 1RM: ${result.value}kg`);
      } else {
        failed++;
        console.log(`❌ Test ${index + 1}: FAILED - Expected: ${testCase.expectedMin}-${testCase.expectedMax}, Got: ${result.value}`);
      }

      results.push({
        test: `1RM Test ${index + 1}`,
        input: testCase.input,
        result: result,
        passed: isInRange
      });

    } catch (error) {
      failed++;
      console.log(`❌ Test ${index + 1}: ERROR - ${error}`);
      results.push({
        test: `1RM Test ${index + 1}`,
        input: testCase.input,
        error: error,
        passed: false
      });
    }
  });

  return { passed, failed, results };
}

export function testBodyFatCalculations(): { passed: number; failed: number; results: any[] } {
  let passed = 0;
  let failed = 0;
  const results: any[] = [];

  console.log('🧪 Testing Body Fat Calculations...');

  bodyFatTestCases.forEach((testCase, index) => {
    try {
      const result = calculateBodyFat(testCase.input);
      const isInRange = result.value >= testCase.expectedMin && result.value <= testCase.expectedMax;
      
      if (isInRange) {
        passed++;
        console.log(`✅ Test ${index + 1}: PASSED - Body Fat: ${result.value}%`);
      } else {
        failed++;
        console.log(`❌ Test ${index + 1}: FAILED - Expected: ${testCase.expectedMin}-${testCase.expectedMax}%, Got: ${result.value}%`);
      }

      results.push({
        test: `Body Fat Test ${index + 1}`,
        input: testCase.input,
        result: result,
        passed: isInRange
      });

    } catch (error) {
      failed++;
      console.log(`❌ Test ${index + 1}: ERROR - ${error}`);
      results.push({
        test: `Body Fat Test ${index + 1}`,
        input: testCase.input,
        error: error,
        passed: false
      });
    }
  });

  return { passed, failed, results };
}

export function testValidationFunctions(): { passed: number; failed: number; results: any[] } {
  let passed = 0;
  let failed = 0;
  const results: any[] = [];

  console.log('🧪 Testing Validation Functions...');

  // Test Cooper validation
  const validCooper = validateCooperTest({ distance: 2400, age: 25, gender: 'male' });
  const invalidCooper = validateCooperTest({ distance: 100, age: 25, gender: 'male' });

  if (validCooper.isValid && !invalidCooper.isValid) {
    passed++;
    console.log('✅ Cooper validation: PASSED');
  } else {
    failed++;
    console.log('❌ Cooper validation: FAILED');
  }

  // Test 1RM validation
  const validOneRM = validateOneRM({ weight: 80, repetitions: 8, exercise: 'bench-press', experience: 'intermediate' });
  const invalidOneRM = validateOneRM({ weight: 0, repetitions: 8, exercise: 'bench-press', experience: 'intermediate' });

  if (validOneRM.isValid && !invalidOneRM.isValid) {
    passed++;
    console.log('✅ 1RM validation: PASSED');
  } else {
    failed++;
    console.log('❌ 1RM validation: FAILED');
  }

  // Test Body Fat validation
  const validBodyFat = validateBodyFat({ method: 'navy', height: 175, weight: 70, waist: 85, neck: 38, age: 30, gender: 'male' });
  const invalidBodyFat = validateBodyFat({ method: 'navy', height: 50, weight: 70, waist: 85, neck: 38, age: 30, gender: 'male' });

  if (validBodyFat.isValid && !invalidBodyFat.isValid) {
    passed++;
    console.log('✅ Body Fat validation: PASSED');
  } else {
    failed++;
    console.log('❌ Body Fat validation: FAILED');
  }

  results.push(
    { test: 'Cooper Validation', passed: validCooper.isValid && !invalidCooper.isValid },
    { test: '1RM Validation', passed: validOneRM.isValid && !invalidOneRM.isValid },
    { test: 'Body Fat Validation', passed: validBodyFat.isValid && !invalidBodyFat.isValid }
  );

  return { passed, failed, results };
}

export function runAllTests(): void {
  console.log('🚀 Starting Performance Medicine Calculator Tests\n');

  const cooperResults = testCooperCalculations();
  const oneRMResults = testOneRMCalculations();
  const bodyFatResults = testBodyFatCalculations();
  const validationResults = testValidationFunctions();

  const totalPassed = cooperResults.passed + oneRMResults.passed + bodyFatResults.passed + validationResults.passed;
  const totalFailed = cooperResults.failed + oneRMResults.failed + bodyFatResults.failed + validationResults.failed;
  const totalTests = totalPassed + totalFailed;

  console.log('\n📊 Test Summary:');
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${totalPassed} ✅`);
  console.log(`Failed: ${totalFailed} ❌`);
  console.log(`Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`);

  if (totalFailed === 0) {
    console.log('\n🎉 All tests passed! The calculators are working correctly.');
  } else {
    console.log('\n⚠️ Some tests failed. Please review the implementation.');
  }
}