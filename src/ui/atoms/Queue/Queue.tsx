import React from 'react';
import 'ui/atoms/Queue/Queue.scss';
type Image = {
    img:string;
}
export const Queue = (props:Image) => {
    return (
        <div className="queue_box">
            <div className="queue_image" style={{
          backgroundImage:
            `url(
            ${props.img}
            )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}><span>Queue</span></div>
        </div>
    )
}