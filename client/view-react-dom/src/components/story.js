import React from 'react';
import '../App.css';

class Story extends React.Component {
  state = {
    1: [<p className="story-text blue">Hey, can you hear me?
     Good. I finally got the multi-dimensional transmitter working. Listen closely, there is not much time. <br/><br/>
    My name is Dr. Bender, I am a super scientist specializing in time travel. One of my experiments accidentally froze time across the universe. <span className="yellow"> Now I'm stuck in time.</span> It's fine, I'm a super scientist, these things happen.<br/><br/>
    In order to fix my machine and restart time I need you to <span className="yellow">use the viewer</span> to collect items to rebuild my time machine. Thanks! <span className="yellow"> <br></br>-Dr Bender</span>
     </p>, "1", this.props.onClick, "Level 1"],
    2: [<p className="story-text blue">Alright! I'm glad this is working. I wasn't sure if I could freeze your time without making you explode! But I guess it all worked out.<br/><br/>
    I remember the next place I went on my bender. I'll send it to your viewer now.</p>, "2", this.props.onClick, "Level 2"],
    3: [<p className="story-text blue">Great I have all the items for my machine! Now I can restart time and try to get everything back to normal! But while I have you hear I want to talk to you about another experiment that I am working on....<br></br>
    <span className="yellow"> To Be Continued...</span></p>, "End", window.location.reload, "Game Over"]

  };

  render() {

    return (
      <div className="story-container">
        <div>
          <h1 className="title yellow">{ this.state[this.props.level][1] }</h1>
            { this.state[this.props.level][0] }
        </div>
        <div className="button yellow" onClick={ this.state[this.props.level][2] }>{ this.state[this.props.level][3] }</div>

      </div>
    );
  }
};

export default Story;
