import React from "react";
import ".//Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location,history}=this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        if(location.state){
        return <div className="detail_box">
            <div className="detail_title">{location.state.title}</div>
            <div className="detail_year">{location.state.year}</div>
            <div className="detail_genres">{location.state.genres}</div>
            <div className="detail_summary">{location.state.summary}</div>
            
            </div>
        }
        else{
        return null;
        }
    }
}

export default Detail;