# Isomorphic Workshop

Creando una aplicacion isomorfica realtime con MeteorJS y ReactJS

## Getting Started

Estas instrucciones le darán una copia del proyecto base para ejecutar en su máquina local con fines academicos para llevar a cabo este taller.

### Prerequisities

Para iniciar este taller debe tener instalado previamente en su computador [meteor](https://www.meteor.com/)

```
curl https://install.meteor.com/ | sh
```

### Installing

A step by step series of examples that tell you have to get a development env running

Stay what the step will be

```sh
npm install
```

And run app

```sh
meteor
```

End with an example of getting some data out of the system or using it for a little demo

## Workshop

Este guía pretende ser una ayuda para realizar el taller de forma autonoma.

1. ### Defining views with React components
  Para empezar, vamos a reemplazar el código de la aplicación de arranque por defecto.

  1.1. **Replace starter HTML code**

  En primer lugar, sustituir el contenido del archivo HTML inicial (client/main.html):

  ```html
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Isomorphic Slact || @MedellinJS</title>
    <link href="http://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" type="text/css">
  </head>

  <body>
    <div id="render-target"></div>
  </body>
  ```

  1.2. **Create starter JS**

  Ahora vamos a crear el archivo principal de nuestra aplicacion (**client/main.jsx**):

  ```javascript
  import React from 'react';
  import { Meteor } from 'meteor/meteor';
  import { render } from 'react-dom';

  import App from '../imports/ui/App.jsx';

  Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
  });
  ```
  1.3. **Create App component**

  Para este paso lo que vamos a realizar es crar el componente App donde renderizaremos nuestro codigo base (**imports/ui/App.jsx**):

  ```javascript
  import React, { Component } from 'react';

  // App component - represents the whole app
  export default class App extends Component {

    render() {
      return (
        <div id="app">
          <div className="header">
            <div className="team-menu"><img className="connection_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABmFBMVEUAAAD////////////////////////////////////2+/LR5bKw1Hmfy1KUxz2VyD2izVKz1nnS5rP////A3JuOw0qKwkCNxD+QxT6Sxj6Txz6SxUnC3Jv1+fGXx2GDvkCGwECIwUCLwj+PxD6PxT+JwUCFwECZyGD2+vGSxWF9vEGAvkGDv0CMwz+Wx2GPw2F4ukJ7u0J+vUGBvkGHwUB8u0KSxGG31pp0uEN3uUJ5u0KFv0CCv0B6u0K415p5uU1yt0N/vUF1uEN8u0zG3bFttURwtkR5ukLH3rGWxnlqtERutUR2uUOZx3l6uVZos0VvtkRxt0Nzt0N8ulVisUVlskVns0VzuENmskVfsEVps0VztlZer0VhsEVjsUVstER1t1aOwXhcrkZdr0VgsEaQwnm/2a9YrUZbrka/2rDz+PFhr09XrEZksE6pzplUq0ZVrEZarUaqzpl0tWJRq0dWrEZ1tmJztWJOqUdSq0dxtGJMqEdNqUdQqkdytWKmzJhXrFBKqEdZrU+716+GvXhjr1dIp0hkr1dYtVOVAAAAFHRSTlMAV8/v/wCH+x/n////////////9kvBHZAAAAG7SURBVHgBvdOxjtNAEIDhGe/MZO3sxVaiIJkiSNdQUPJOeQlqXoCCIg/EU9BQHRKg5CT7ErzrHTa+aBOqaxC/tdLK+2kbj+H/hoWhlCmQr0HeyYxyM8mvkWHKoAfBS6cBWEeYugAzf4QGp1SV8DvU/ZjBdN7iud6hdnOTdl+TuALyrUPEwfdu3nc1ipr9AwdIFZPysJylRDfa6cZL2rfgMd9QjO8R0Y+/u7sa4LHZz4wN/MXEyw1hbK1VZdV7PZ1OyufzktsxXADCW5EkXq06Paan02Uoo3kHmAEzJ8HBN6v5qlkqaxTmCdAzQK8Noi6rXwCrJyutepUMAARnXS++3cvm2xvftR0PzAyQAXtwdNChifvFHppBdR003IDCIg6JDOse4DX8WIdo1TwfpaUgqWC9c4eqqg5HF20QZdAMmDlasdHWkrKR03J0A4iIXRTrpba29laiY8YMyOyMKYkXroyROZZuwVTyztAFJPmZKBGq+FxFVBr5BHr7ubd3GICfAM+88qDHHYe/BmbbIAaGKU/Fz10emDxyHxBhgJTg+DGP3O3QbltMBkd92F2H9sWxB772wo9z2z8FfwDHWbdKLDfq1AAAAABJRU5ErkJggg=="/>  anonymous</div>
            <div className="channel-menu">
              <span className="channel-menu_name">
                <span className="channel-menu_prefix">#</span>
                general
              </span>
            </div>
          </div>
          <div className="main">
            <div className="listings">
            <div className="listings_channels">
              <h2 className="listings_header">Channels</h2>
              <ul className="channel_list">
                <li className="channel active">
                  <a className="channel_name">
                    <span className="unread">0</span>
                    <span><span className="prefix">#</span>general</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="listings_direct-messages"></div>
            </div>
            <div className="message-history">

                <div id="message-list">
                  <div className="time-divide">
                    <span className="date">

                    </span>
                  </div>
              <div className="message">
                <a href="https://twitter.com/MedellinJS/" target="_blank"><img src="https://twitter.com/MedellinJS/profile_image" className="message_profile-pic" /></a>
                        <a href="https://twitter.com/MedellinJS/" target="_blank" className="message_username">MedellinJS</a>
                <span className="message_timestamp">1:31 PM</span>
                <span className="message_content">Hi there! 😘</span>
              </div>

              <div className="message">
                <a href="https://twitter.com/MedellinJS/" target="_blank"><img src="https://twitter.com/MedellinJS/profile_image" className="message_profile-pic" /></a>
                        <a href="https://twitter.com/MedellinJS/" target="_blank" className="message_username">MedellinJS</a>
                <span className="message_timestamp">1:31 PM</span>
                <span className="message_content">Welcome to your chat app</span>
              </div>
                </div>
            </div>
          </div>
          <div className="footer">
            <div className="user-menu">
              <p className="disclaimer">This demo is not created by, affiliated with, or supported by Slack Technologies, Inc.</p>
            </div>
            <div className="input-box">
              <input type="text" className="input-box_text" />
            </div>
          </div>
        </div>
      );
    }
  }
  ```

2. ### Introducing States
  Nuestra aplicación puede pasar por distintas etapas según la función que esté realizando en ciertas partes del programa. Vamos ahora a introducir el concepto de estados.

  2.1. **Get initial state**

  En nuestro archivo principal vamos agregar el siguiente framento de codigo  (imports/ui/App.jsx):

  ```javascript
  export default class App extends Component {

    // Block code Insert
    constructor() {
      super();
      this.state = {
        name: "anonymous"
      };

      this.setName = this.setName.bind(this);
    }

    setName(){
      let myName = window.prompt("Please enter a name", "anonymous");
      this.setState({name: myName});
    }

    // End block code
  }
  ```

  2.2. **Events in html**

  Vamos a modificar el elemento `div.team-menu` (imports/ui/App.jsx):

  Antes
  ```html
  <div className="team-menu">
    <img className="connection_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABmFBMVEUAAAD////////////////////////////////////2+/LR5bKw1Hmfy1KUxz2VyD2izVKz1nnS5rP////A3JuOw0qKwkCNxD+QxT6Sxj6Txz6SxUnC3Jv1+fGXx2GDvkCGwECIwUCLwj+PxD6PxT+JwUCFwECZyGD2+vGSxWF9vEGAvkGDv0CMwz+Wx2GPw2F4ukJ7u0J+vUGBvkGHwUB8u0KSxGG31pp0uEN3uUJ5u0KFv0CCv0B6u0K415p5uU1yt0N/vUF1uEN8u0zG3bFttURwtkR5ukLH3rGWxnlqtERutUR2uUOZx3l6uVZos0VvtkRxt0Nzt0N8ulVisUVlskVns0VzuENmskVfsEVps0VztlZer0VhsEVjsUVstER1t1aOwXhcrkZdr0VgsEaQwnm/2a9YrUZbrka/2rDz+PFhr09XrEZksE6pzplUq0ZVrEZarUaqzpl0tWJRq0dWrEZ1tmJztWJOqUdSq0dxtGJMqEdNqUdQqkdytWKmzJhXrFBKqEdZrU+716+GvXhjr1dIp0hkr1dYtVOVAAAAFHRSTlMAV8/v/wCH+x/n////////////9kvBHZAAAAG7SURBVHgBvdOxjtNAEIDhGe/MZO3sxVaiIJkiSNdQUPJOeQlqXoCCIg/EU9BQHRKg5CT7ErzrHTa+aBOqaxC/tdLK+2kbj+H/hoWhlCmQr0HeyYxyM8mvkWHKoAfBS6cBWEeYugAzf4QGp1SV8DvU/ZjBdN7iud6hdnOTdl+TuALyrUPEwfdu3nc1ipr9AwdIFZPysJylRDfa6cZL2rfgMd9QjO8R0Y+/u7sa4LHZz4wN/MXEyw1hbK1VZdV7PZ1OyufzktsxXADCW5EkXq06Paan02Uoo3kHmAEzJ8HBN6v5qlkqaxTmCdAzQK8Noi6rXwCrJyutepUMAARnXS++3cvm2xvftR0PzAyQAXtwdNChifvFHppBdR003IDCIg6JDOse4DX8WIdo1TwfpaUgqWC9c4eqqg5HF20QZdAMmDlasdHWkrKR03J0A4iIXRTrpba29laiY8YMyOyMKYkXroyROZZuwVTyztAFJPmZKBGq+FxFVBr5BHr7ubd3GICfAM+88qDHHYe/BmbbIAaGKU/Fz10emDxyHxBhgJTg+DGP3O3QbltMBkd92F2H9sWxB772wo9z2z8FfwDHWbdKLDfq1AAAAABJRU5ErkJggg=="/>  
    anonymous
  </div>
  ```

  Depues

  ```html
  <div className="team-menu" onClick={this.setName} >
    <img className="connection_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABmFBMVEUAAAD////////////////////////////////////2+/LR5bKw1Hmfy1KUxz2VyD2izVKz1nnS5rP////A3JuOw0qKwkCNxD+QxT6Sxj6Txz6SxUnC3Jv1+fGXx2GDvkCGwECIwUCLwj+PxD6PxT+JwUCFwECZyGD2+vGSxWF9vEGAvkGDv0CMwz+Wx2GPw2F4ukJ7u0J+vUGBvkGHwUB8u0KSxGG31pp0uEN3uUJ5u0KFv0CCv0B6u0K415p5uU1yt0N/vUF1uEN8u0zG3bFttURwtkR5ukLH3rGWxnlqtERutUR2uUOZx3l6uVZos0VvtkRxt0Nzt0N8ulVisUVlskVns0VzuENmskVfsEVps0VztlZer0VhsEVjsUVstER1t1aOwXhcrkZdr0VgsEaQwnm/2a9YrUZbrka/2rDz+PFhr09XrEZksE6pzplUq0ZVrEZarUaqzpl0tWJRq0dWrEZ1tmJztWJOqUdSq0dxtGJMqEdNqUdQqkdytWKmzJhXrFBKqEdZrU+716+GvXhjr1dIp0hkr1dYtVOVAAAAFHRSTlMAV8/v/wCH+x/n////////////9kvBHZAAAAG7SURBVHgBvdOxjtNAEIDhGe/MZO3sxVaiIJkiSNdQUPJOeQlqXoCCIg/EU9BQHRKg5CT7ErzrHTa+aBOqaxC/tdLK+2kbj+H/hoWhlCmQr0HeyYxyM8mvkWHKoAfBS6cBWEeYugAzf4QGp1SV8DvU/ZjBdN7iud6hdnOTdl+TuALyrUPEwfdu3nc1ipr9AwdIFZPysJylRDfa6cZL2rfgMd9QjO8R0Y+/u7sa4LHZz4wN/MXEyw1hbK1VZdV7PZ1OyufzktsxXADCW5EkXq06Paan02Uoo3kHmAEzJ8HBN6v5qlkqaxTmCdAzQK8Noi6rXwCrJyutepUMAARnXS++3cvm2xvftR0PzAyQAXtwdNChifvFHppBdR003IDCIg6JDOse4DX8WIdo1TwfpaUgqWC9c4eqqg5HF20QZdAMmDlasdHWkrKR03J0A4iIXRTrpba29laiY8YMyOyMKYkXroyROZZuwVTyztAFJPmZKBGq+FxFVBr5BHr7ubd3GICfAM+88qDHHYe/BmbbIAaGKU/Fz10emDxyHxBhgJTg+DGP3O3QbltMBkd92F2H9sWxB772wo9z2z8FfwDHWbdKLDfq1AAAAABJRU5ErkJggg=="/>
    {this.state.name}
  </div>
  ```

## Built With

* [Meteor](https://www.meteor.com/) - Javascript Framework Realtime
* [MongoDB](https://www.mongodb.com/) -  Database NoSQL
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [Atom](https://atom.io/) - Editor Open Source

## Authors

* **Cristian Moreno** - *FullStack JavaScript Developer* - [Github](https://github.com/khriztianmoreno)

See also the list of [contributors](https://github.com/equitel/FrontEnd/contributors) who participated in this project.

## License

This project is licensed under Copy Right - see the [LICENSE.md](LICENSE.md) file for details
