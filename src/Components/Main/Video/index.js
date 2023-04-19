import './Video.css'

const Video = () =>{
  return(
    <div className="video">
      <iframe src="https://www.youtube.com/embed/l2UDgpLz20M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </div>
  )
}

export default Video