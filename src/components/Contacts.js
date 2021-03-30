import React from 'react';



// componentDidMount() {
//     fetch("https://openlibrary.org/people/LilyMcD/lists/OL194583L/seeds.json")
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ contacts: data })
//     })
//     .catch(console.log)
//   };
  const Contacts = ( props) => {
    return (
      <div>
        <center><h1>Recommended List</h1></center>
              <h5 className="card">{props.title}</h5>
              {/* <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p class="card-text">{contact.company.catchPhrase}</p> */}
            </div>
    )
  };

  export default Contacts