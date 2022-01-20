import React, {PureComponent} from 'react';

type info = {
    cluster: boolean, 
    oeuvreId: number, 
    name: string, 
    street: string,
    desc: string
}

export default class OeuvreMap extends PureComponent<{info: info}> {

  render() {
    const info = this.props.info;

    return (

        <div className="OeuvreMap">
            <label className='title'>{info.name}</label>
            <p className='desc'>{info.street}</p>
            <p className='desc'>{info.desc}</p>
        </div>
    );
  }
}