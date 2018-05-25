import React, {Component} from 'react'
import {Fetchcontent} from './../../actions/cardetail';
import { connect } from 'react-redux';
import Link from 'next/link'

import Cardetailgallery from './Cardetailgallery';
import Cardetails from './Cardetails';

class Cardetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let id=this.props.id;
        this.props.viewDataHandler(id,this.props.token);
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Cardetailgallery user={this.props.user}/>
                </div>
                <Cardetails />
                 <style jsx>{`
                    
                    }
                `}</style> 
                </div>
        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  //console.log('component111',state.Cardetail);
  return {
    cardata:state.Cardetail,
    car_detail:state.Cardetail.car_data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        viewDataHandler: (id,token) => dispatch(Fetchcontent(id,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cardetail);