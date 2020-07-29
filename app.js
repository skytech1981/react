class App extends React.Component {
  render() {

    return (
      <div>
        <Bo1 />
        <Bo2 />
        <Bo3 />
        <Bo4 />
            </div>
    );
  }
}

class Bo1 extends React.Component {
  render() {
    
    


        return (
          <div style={{backgroundColor:'lightgreen'}}className="box">
            <p style={{color:'black'}}> Fresh </p>
            </div>
      );
    }
  }
  



  class Bo2 extends React.Component {
    render() {
          return (
            <div style={{backgroundColor:'lightblue'}}className="box">
            <p style={{color:'black'}}> Calm </p>
            </div>
        );
      }
    }

    class Bo3 extends React.Component {
      render() {
            return (
              <div style={{backgroundColor:'lightpink'}}className="box">
            <p style={{color:'black'}}> Adventurous </p>
            </div>
          );
        }
      }

      class Bo4 extends React.Component {
        render() {
              return (
                <div style={{backgroundColor:'purple'}}className="box">
              <p style={{color:'black'}}> Happy </p>
              </div>
            );
          }
        }
















// class Box extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="box">
//           <div className="box2">
//             <p>hello</p>
//           </div>
//           <div className="box3">
//             <p>there</p>
//           </div>
//           <button type="button">click here</button>
//         </div>
//       </div>
//     );
//   }
// }


// class Starex5 extends React.Component {
//   render() {
//     return (
//       <div>
//         <div class="main">
//           <div class="fclass">
//             <h1 class="header">Services</h1>
//             <p class="para1">
//               Our vision is simple. we want to create website and application
//               with both high quality design and easy to access content
//             </p>
//           </div>
//           <div class="sclass">
//             <div class="comp1">
//               <div class="circle"></div>
//               <h2 class="header2">User Interface Design</h2>
//               <p class="para2">Wireframing</p>
//             </div>
//             <div class="comp2">
//               <div class="circle"></div>
//               <h2 class="header3">Concept and Ideas</h2>
//               <p class="para3">Digital Branding</p>
//             </div>
//             <div class="comp3">
//               <div class="circle"></div>
//               <h2 class="header3">Designing and branding</h2>
//               <p class="para4">Graphic Design</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

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
