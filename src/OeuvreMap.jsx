import React, {PureComponent} from 'react';

export default class OeuvreMap extends PureComponent {

  render() {
    const {info} = this.props;

    return (

        <div className='OeuvreMap'>
            <h2>{info.name}</h2>
            <p>{info.description}</p>
        </div>
    );
  }
}