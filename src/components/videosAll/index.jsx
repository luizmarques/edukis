import React from 'react'
import { Card, Row, Col, Divider } from 'antd';
import '../videosAll/style.css'


const { Meta } = Card;

function VideosAll(props) {
  const cards = Object.keys(props.videos).map( function (parentalGuideString, i) {
    return (
      //aqui entra o card de vídoes
      <li key= {i}>
        <Divider orientation="left">
          {parentalGuideString}
        </Divider>
        <ul className="card-container ul-list-none">
          {props.videos[parentalGuideString].map(video =>
            <li key={video.id} className="card">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={video.thumb_url} />}
            >
              <Meta title={video.title} description={video.description} />
            </Card>
          </li>)}
        </ul>
      </li>
    )
  })
  return (
    <div>
      <ul className="ul-list-none">
        {cards}
      </ul>
    </div>
  )
}

export { VideosAll  }