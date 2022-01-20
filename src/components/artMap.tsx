import React, {PureComponent} from 'react';

type info = {
    cluster: boolean, 
    oeuvreId: number, 
    name: string, 
    artist: string,
}

export default class ArtMap extends PureComponent<{info: info}> {

  render() {
    const info = this.props.info;

    return (

        <div className="OeuvreMap">
            <label className='title'>Oeuvre : {info.name}</label>
            <p className='street'>Artiste : {info.artist}</p>
        </div>
    );
  }
}