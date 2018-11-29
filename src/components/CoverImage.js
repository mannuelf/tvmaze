import React from 'react'

class CoverImage extends React.Component {
  render() {
    const data = this.props
    console.log(data);
    return(
      <figure className="ui-cover-img">
        <img
          src={data}
          alt=""
          width="100%"
          />
      </figure>
    )
  }
}

export default CoverImage;
