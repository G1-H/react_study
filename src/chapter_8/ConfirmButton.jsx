import React, { useState } from "react";

// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };

//     // this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   //   handleConfirm() {
//   //     this.setState((prevState) => ({
//   //       isConfirmed: !prevState.isConfirmed,
//   //     }));
//   //   }
//   /**
//    * ArrowFunction 으로 (바인드 안해줘도 댐)
//    */
//   handleConfirm = () => {
//     this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
//   };

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

const ConfirmButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    // setIsConfirmed(!isConfirmed)
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
};

export default ConfirmButton;
