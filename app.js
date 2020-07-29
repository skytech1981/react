class App extends React.Component {
  render() {
    return (
      <div>
        <Box />
      
       
      </div>
    );
  }
}

// Exercise 1 React Class render
class App2 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>first</li> 
          <li>second</li>
          <li>third</li>
          <li>fourth</li>
        </ul>
      </div>
    );
  }
}

// class Box extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="box"></div>
//         <input type="checkbox" />
//       </div>
//     );
//   }
// }

// class GetFactorial extends React.Component {
//   render() {
//     let a = <input id="num" type="num" />;
//     let b = a * 1 + a * 2 + a * 3 + a * 4 + a * 5;

//     return (
//       <div>
//         <p>press a number : {a} </p>
//         <p>the Factorial result is : {b}</p>
//       </div>
//     );
//   }
// }

// // //countdown from max
// // class Countdown extends React.Component {
// //    render() {
// //   constructor()
// //     super();
// //     this.max = 12;
// //     let count = " ";

// //     return (
// //       <div>
// //         <p>this is count to 12 : {this.max} </p>
// //       </div>
// //     );
// //   }
// // }

class Box extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="box2">
            <p>hello</p>
          </div>
          <div className="box3">
            <p>there</p>
          </div>
          <button type="button">click here</button>
        </div>
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Starex5/>
//        </div>
//     );
//   }
// }

class Starex5 extends React.Component {
  render() {
    return (
      <div>
        <div class="main">
          <div class="fclass">
            <h1 class="header">Services</h1>
            <p class="para1">
              Our vision is simple. we want to create website and application
              with both high quality design and easy to access content
            </p>
          </div>
          <div class="sclass">
            <div class="comp1">
              <div class="circle"></div>
              <h2 class="header2">User Interface Design</h2>
              <p class="para2">Wireframing</p>
            </div>
            <div class="comp2">
              <div class="circle"></div>
              <h2 class="header3">Concept and Ideas</h2>
              <p class="para3">Digital Branding</p>
            </div>
            <div class="comp3">
              <div class="circle"></div>
              <h2 class="header3">Designing and branding</h2>
              <p class="para4">Graphic Design</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Starex5/>
//        </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
