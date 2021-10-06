import React from "react";
import ReactDOM from "react-dom";

class CurancyBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.CurancyName.toUpperCase()}</p>
        <input
          type="text"
          value={this.props.CurancyValue}
          onChange={(event) => {
            this.props.changeCurency(
              event.target.value,
              this.props.CurancyName
            );
          }}
        />
      </>
    );
  }
}

export default CurancyBox;