import React, {Component} from 'react'
import classes from './Cms.css';
import {Fetchcontent} from './../../actions/cms';
import { connect } from 'react-redux';
import Link from 'next/link'

class cms extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
      let page_name=this.props.page;
      this.props.viewDataHandler(page_name);
    }
    converthtml(desc) {
     return {__html: desc};
    }
    render() {
        let data = this.props.page_data;

        return (
            <div className={classes.Aboutus}>
                <div className="container">
                    <div className={classes['cms-page']}>
                        <h1 className={['font-l','text-uppercase','text-gray','form-group',classes.abouttittle].join(' ')} ><span className="text-success-dark font-b"> {data!=null?data.page_title:''} </span>  </h1>
                        <div className="row">
                            <div dangerouslySetInnerHTML={this.converthtml(data!=null?data.description:'')} />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  return {
    page_data:state.Cms.page_data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        viewDataHandler: (page_name) => dispatch(Fetchcontent(page_name))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cms);