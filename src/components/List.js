import React, { Component } from 'react';
import Contacts from './Contacts';


class List extends Component {
  constructor(props) {
      super(props)
      this.state = {
        contacts: [],
      loading: true
  }
}

  componentDidMount(){
    fetch("https://openlibrary.org/people/LilyMcD/lists/OL194583L/seeds.json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  };

  render() {
    return (
      <div> 
        {this.state.contacts.map((contact) =><Contacts title={contact.title} />)}
      </div>
    );
    }
}

export default List;






















// export default class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         title: [],
//         cover: [],
//         loading: true
//     };
// }

// componentDidMount() {
//   fetch("http://openlibrary.org/search.json?q=")
//   .then(res => res.json())
//   .then(
//     (result) => {
//       this.setState({
//         loading: true,
//         title: result.title,
//         cover: result.cover
//       });
//     },
//     (error) => {
//       this.setState({
//         loading: true,
//         error
//       });
//     }
//   )
// }
//     render() {
//         return (
//           <div className="container"> 
           
//             <div className="bk1">
//             <h3 className="New">{this.state.title[0]}</h3>
//               <p>Cover: {this.state.cover[0]}</p>
//           </div>

//             <div className="bk2">
//               <h3 >{this.state.title[1]}</h3>
//               <p>Cover: {this.state.cover[1]}</p>
//             </div>

//             <div className="bk3">
//               <h3>{this.state.title[2]}</h3>
//               <p>Cover: {this.state.cover[2]}</p>
//             </div>

//             <div className="bk4">
//           <h3>{this.state.title[3]}</h3>
//               <p>Cover: {this.state.cover[3]}</p>
//         </div>

//             <div className="bk5">
//               <h3>{this.state.title[4]}</h3>
//               <p>Cover: {this.state.cover[4]}</p>
//             </div>

//           </div>
//         )}
