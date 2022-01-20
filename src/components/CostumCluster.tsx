import React, {PureComponent} from 'react';

export default class CostumCluster extends PureComponent<{ pointCount: number , pointsLng: number}> {

  render() {
    const pointCount = this.props.pointCount;
    const length = this.props.pointsLng;

    return (
      <div
        className="cluster-marker"
        style={{
          width: `${10 + (pointCount / length) * 20}px`,
          height: `${10 + (pointCount / length) * 20}px`
        }}
      >
        {pointCount}
    </div>
    );
  }
}