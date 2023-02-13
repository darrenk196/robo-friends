import React from 'react'

class Card extends React.Component {
    randomTextGenerator() {
        // return a string of random text
        let arr = [];
        for (let i = 0; i < 20; i++) {
            let randomChar = String.fromCharCode(
              Math.floor(Math.random() * 26) + 97
            );
            arr.push(randomChar);
          }
          // array of characters to a string
          const randomText = arr.join("");
          return "https://robohash.org/" + randomText + "?set=set3";

    }
    render() {
        const {name, email } = this.props;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={this.randomTextGenerator()} alt='Robotsss'></img>
                <div>
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                </div>
            </div>
        )
    }
}

export default Card
