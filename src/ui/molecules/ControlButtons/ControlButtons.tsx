import React from 'react';
import {RepeatButton} from 'ui/atoms/RepeatButton/RepeatButton';
import {ShuffleButton} from 'ui/atoms/ShuffleButton/ShuffleButton';
import {VolumeButton} from 'ui/atoms/VolumeButton/VolumeButton';
import {Queue} from 'ui/atoms/Queue/Queue';
import 'ui/molecules/ControlButtons/ControlButtons.scss';

export const ControlButtons = () => {
    const queue_img = 'https://akket.com/wp-content/uploads/2019/11/World-of-Warcraft-Shadowlands-Blizzard.jpg';
    const path_repeat = "M8.667 9.214H8V10.5L5.333 8.571V8.25c0-.178.149-.321.334-.321h3c1.104 0 2-.864 2-1.929 0-1.066-.896-1.929-2-1.929h-.334A.327.327 0 0 1 8 3.75v-.643c0-.178.148-.321.333-.321h.334C10.507 2.786 12 4.225 12 6s-1.493 3.214-3.333 3.214zM6.333 4.071h-3c-1.105 0-2 .863-2 1.929 0 1.065.895 1.929 2 1.929h.334c.183 0 .333.143.333.321v.643c0 .177-.15.321-.333.321h-.334C1.493 9.214 0 7.775 0 6s1.493-3.214 3.333-3.214H4V1.5l2.667 1.929v.321c0 .177-.15.321-.334.321z";
    const path_shuffle = "M9.333 9.214h-.666C6.826 9.214 5.333 7.775 5.333 6c0-1.066-.894-1.929-2-1.929H.683C.298 4.071 0 3.784 0 3.43c0-.356.298-.643.667-.729.137 0 2.65.01 2.666 0 1.841.086 3.334 1.525 3.334 3.3 0 1.065.896 1.929 2 1.929h3c.185 0 .333.143.333.321v.321L9.333 10.5V9.214zm-.666-5.143c-.367 0-.708.103-1.004.27a4.497 4.497 0 0 0-.672-1.104c.493-.28 1.062-.451 1.709-.537.013.03.51 0 .6 0V1.5L12 3.429v.321a.327.327 0 0 1-.333.321h-3zM3.333 7.93c.369 0 .709-.103 1.004-.27.168.404.4.767.672 1.104-.493.28-1.062.451-1.676.537-.018-.011-2.435 0-2.666 0C.298 9.214 0 8.927 0 8.571c0-.355.298-.642.667-.642h2.666z";
    return (
        <div className="control_bar">
            <div className="control_buttons">
                <div className="control_repeat_button">
                    <RepeatButton svg={path_repeat} />
                </div>
                <div className="control_shuffle_button">
                    <ShuffleButton svg={path_shuffle}/>
                </div>
                <div className="control_volume_button">
                    <VolumeButton/>
                </div>
            </div>
            <div className="next_queue">
                <Queue img={queue_img}/>
            </div>
        </div>
    )
}