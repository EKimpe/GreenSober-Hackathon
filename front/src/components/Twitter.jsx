import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Twitter extends Component {
  render() {
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="green_sober"
          options={{ height: 600, width: 300 }}
        />
      </div>
    );
  }
}

export default Twitter;
