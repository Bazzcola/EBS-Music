import React from 'react';
import {VolumeBar} from 'ui/atoms/VolumeBar/VolumeBar';
export default {
  title: 'Atoms/VolumeBar',
  component: VolumeBar
};

type active = {
  active:boolean;
}

export const VolumeBar1 = (props:active) => {
    return <VolumeBar active={props.active} />
}