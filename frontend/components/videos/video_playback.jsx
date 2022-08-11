import React from "react";

class VideoPlayback extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id)
    }

    render() {
        if (!this.props.video) {return null}
        console.log("this.props", this.props)
        return (
            <div>Hi
                <video
                    src="https://kirara.s3.us-west-1.amazonaws.com/mirai-video.mp4"
                    controls
                    width='500px'
                    height='500px'
                    type='video/mp4'
                    className='hidden'
                    id='myvideo'
                />
            </div>
        )
    }
}

export default VideoPlayback;