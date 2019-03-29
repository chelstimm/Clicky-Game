import React from "react";

class Images extends React.Component {

    render() {
        return (

        <div className = "images">
            <div className = "row">
            {
                this.props.imagesData.map((image) => {
                    return <div className="col-md-3" key={image.id}>
                        <img
                        src={image.img}
                        alt="states"
                        onClick={() => {
                            this.props.handleClick(image.id)
                        }}>
                        </img>
                    </div>
                })
            }
            </div>
        </div>

        );
    }
}

export default Images;