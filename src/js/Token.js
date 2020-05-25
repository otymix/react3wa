import React from "react";

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      textInput: "",
    };
  }

  handleChange(event) {
    console.log("user typing ...");
    console.log(event.target.value);
    const denominations = [1, 5, 10, 20, 50, 100, 200];
    let input = event.target.value;
    let leReste = input;
    let resDenomintations = [];

    for (let index in denominations) {
      resDenomintations[index] = { type: denominations[index], number: 0 };
    }

    let i = denominations.length;
    console.log(resDenomintations);

    do {
      let quotient = Math.floor(leReste / Math.max(...denominations));
      let remainder = Math.max(...denominations) % input;
      denominations.pop();
      leReste = leReste - quotient * remainder;
      //   console.log(
      //     "quotient :",
      //     quotient,
      //     "remainder :",
      //     remainder,
      //     "denominations :",
      //     denominations
      //   );
      resDenomintations[i - 1].number = quotient;
      i--;
    } while (input > 0 && leReste > 0 && i !== 0);

    console.log("this: ", resDenomintations);
    let resultText = "Vous avez : ";
    resDenomintations.map((el) => {
      resultText = resultText + el.number + " x " + el.type + " , ";
    });

    console.log("OUTPUT :", resultText);
    // this.setState({
    //   output: "resultText",
    // });
  }
  render() {
    const generateToken = () => {
      console.log("Tokens generating ...");
    };

    return (
      <div className="Token">
        <label htmlFor="name">Put number of tokens here:</label>
        <input
          type="number"
          id="tokens"
          name="totalTokens"
          onChange={this.handleChange}
          required
        />
        <p>Token</p>
        <h1>{this.output}</h1>
        <button onClick={generateToken}> Generat Token</button>
      </div>
    );
  }
}

export default Token;
