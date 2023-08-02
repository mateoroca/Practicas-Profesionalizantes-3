class calculatorDefaultModel {
  constructor() {}

  calculateExpression(mathExpression) {
    return Promise.resolve(eval(mathExpression));
  }
}

export { calculatorDefaultModel };
