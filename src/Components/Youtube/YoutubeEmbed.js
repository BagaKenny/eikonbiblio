import React from 'react'
import PropsTypes from 'prop-types'

const YoutubeEmbed = ( { embedId }) => {
  return (
      <iframe 
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay"
        allowFullScreen
        title='Embeded youtube'
        frameBorder="0" 
      />
  );

  YoutubeEmbed.protoTypes = {
    embedId: PropsTypes.string.isRequired
  }
}

export default YoutubeEmbed
