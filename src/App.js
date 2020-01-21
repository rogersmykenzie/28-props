import React, { Component } from "react";
//components
import ProductPreview from "./components/ProductPreview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoes: [
        {
          image:
            "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/ec3edb39-20b5-4331-9bf9-42af6d4d5afe/air-max-270-react-eng-womens-shoe-RHh7gz.jpg",
          name: "Shoe 1",
          type: "Men's",
          price: 150
        },
        {
          image:
            "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b8d6a1a9-8f63-4dd4-8f03-c5b3dc830cc8/air-vapormax-360-mens-shoe-30Xj2m.jpg",
          name: "Shoe 2",
          type: "Men's",
          price: 250
        },
        {
          image:
            "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/ec3edb39-20b5-4331-9bf9-42af6d4d5afe/air-max-270-react-eng-womens-shoe-RHh7gz.jpg",
          name: "Shoe 3",
          type: "Women's",
          price: 99
        }
      ],
      showTitle: false
    };

    // this.setShowTitle = this.setShowTitle.bind(this);
  }

  setShowTitle = newShowTitle => {
    this.setState({ showTitle: newShowTitle });
  };

  render() {
    let mappedArr = this.state.shoes.map((element, index, arr) => {
      return (
        <ProductPreview
          key={index}
          setShowTitle={this.setShowTitle}
          productImage={element.image}
          productName={element.name}
          productType={element.type}
          price={element.price}
        />
      );
    });
    return (
      <div>
        <h1>{this.state.showTitle + ""}</h1>
        {mappedArr}
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ProductPreview
//           productType="Women's Shoe"
//           productName="The Pink Shoe"
//           productImage="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/ec3edb39-20b5-4331-9bf9-42af6d4d5afe/air-max-270-react-eng-womens-shoe-RHh7gz.jpg"
//         />
//         <ProductPreview
//           productType="Men's Shoe"
//           productName="The Black Shoe"
//           productImage="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b8d6a1a9-8f63-4dd4-8f03-c5b3dc830cc8/air-vapormax-360-mens-shoe-30Xj2m.jpg"
//         />
//         <ProductPreview
//           productType="Men's Shoe"
//           productName="The Other Shoe"
//           productImage="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-mens-shoe-x1NpJv.jpg"
//         />
//       </div>
//     );
//   }
// }
