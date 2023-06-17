class Model {
  constructor() {}

  async calculateExpression(mathExpression) {
    let expression = mathExpression;
    expression = expression.replace(/^0+(?=\d)/, "");

    if (expression != null && expression !== "") {
      const url = `http://localhost:3000/evaluate?expression=${encodeURIComponent(
        expression
      )}`;

      try {
        const response = await axios.post(url);
        const result = response.data;
        console.log(response);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Error: You can't evaluate empty data");
    }
  }
}

export { Model };
