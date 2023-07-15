function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.'); // Throwing an error
    }
    const result = a / b;
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error.message); // Handling the error
  } finally {
    console.log('Finally block executed.'); // Executed regardless of whether an error occurred or not
  }
}

divide(10, 2); // Output: Result: 5, Finally block executed.
divide(10, 0); // Output: Error: Division by zero is not allowed., Finally block executed.
