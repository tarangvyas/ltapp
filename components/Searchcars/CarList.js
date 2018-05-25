import React, {Component} from 'react'
import classes from './Searchcars.css';
import {loadData} from './../../actions/searchcar';
import { connect } from 'react-redux';
import Link from 'next/link'
import {CAR_TYPE
} from './../../actions/types';

class CarList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    formatnumber(t)
    {
        return parseFloat(Math.round(t * 100) / 100).toFixed(2);
    }
    render() {
        let data = this.props.page_data;
        let rows=<div><div>{"No Record Found"}</div></div>;
        let pagingControls = '';
        let currentPage=1;
        let numPages = 0;
        let car_detail='';
        if(this.props.carlist){
            

            let perPage=parseInt(this.props.carlist.meta.per_page);
            currentPage=parseInt(this.props.carlist.meta.current_page);
            let total=parseInt(this.props.carlist.meta.total);
            let lastPage=parseInt(this.props.carlist.meta.last_page);
            if (perPage != null) {
                numPages = Math.ceil(total / perPage);
            }
            if(numPages > 1) {
              let pagesArray=[];
              if(currentPage==1){
                pagesArray.push(<li disabled key="first"  className="Previous"><a href="#">First</a></li>);
                pagesArray.push(<li disabled key="prev"><a previous href="#">Previous</a></li>);
              }else{
                pagesArray.push(<li key="first"><a href="javascript:void(0);" onClick={(e)=>this.props.paginate1(1)}>First</a></li>);
                pagesArray.push(<li key="prev"><a previous href="javascript:void(0);" onClick={(e)=>this.paginate1(currentPage-1)}>Previous</a></li>);
              }
              let j=0;
              for (let i = currentPage; i <= numPages; i++) {
                    if(j==5){ break; }
                    if (i != currentPage)
                        pagesArray.push(<li key={i}><a href="javascript:void(0);" onClick={(e)=>this.props.paginate1(i)}>{i}</a></li>);
                    else
                        pagesArray.push(<li active key={i}><a href="javascript:void(0);">{i}</a></li>);
               j++;         
              }
              
              if(currentPage==lastPage){
                pagesArray.push(<li disabled key="next"><a next href="#">Next</a></li>);
                pagesArray.push(<li disabled key="last"  className="next"><a href="#">Last</a></li>);
              }else{
                pagesArray.push(<li key="next"><a next href="javascript:void(0);" onClick={(e)=>this.paginate(currentPage+1)}>Next</a></li>);
                pagesArray.push(<li key="last"><a href="javascript:void(0);" onClick={(e)=>this.paginate(lastPage)}>Last</a></li>);
              }

              pagingControls=pagesArray;
            }
        }
        return (
                <div className="row">
                    <div className="col-sm-12">
                    {this.props.carlist!=null?this.props.carlist.data.map((item,i)=>{
                        //console.log(item.car_detail);
                        let car_detail=null;
                        let car_detail_data=null;
                        if(item.car_detail != null)
                        {
                           console.log(item.car_detail.data);     
                           car_detail=JSON.parse(item.car_detail);
                           car_detail_data=car_detail.data

                        }
                      return (
                        <div className="item-car-list  form-group-20">
                            <div className="car-list-img pull-left">
                                <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}>
                                    <a href="/"><img src="../../static/images/car-list-img-01.jpg" alt="" /> </a>
                                </Link>
                                <div className="expiresoffers">Expires in {item.exp_days} days - {item.offers != null ? item.offers.length:''} offers</div>
                            </div>
                            <div className="car-list-right">
                                <h3 className="font-b form-group">
                                    <Link href={{ pathname: 'car-detail', query: { id: item.car_id }}}><a  className="text-gray">{car_detail_data!=null?car_detail_data.make_name:' '} {car_detail_data!=null?car_detail_data.model_name:null} </a></Link>
                                 </h3>
                                <div className="miles-away-ico text-muted">
                                    {item.distance != null? parseFloat(Math.round(item.distance * 100) / 100).toFixed(2):null}
                                    &nbsp;Miles away</div>
                                <div className="form-group-20">{item.engine_size} - {CAR_TYPE[item.car_type]} <span className="seprator">|</span> <span className="font-m text-success text-uppercase looking-for">Looking for</span> £ {item.asking_price}</div>
                                <div className="form-group-20 miles-pad"><span>{item.car_year}</span> <span className="dot-ico">{item.mileage} Miles</span> <span className="dot-ico">{item.previous_owner} Previous Owner</span></div>
                                <div className="Add-watchlist"><a href="#" className="font-m">Add to watchlist</a></div>
                            </div>
                        </div>
                    );
                    }):'No Car Found'}
                    </div>
                    <style jsx>{`
                    .Showing-results {border: 1px solid #dfdfdf; padding: 8px; overflow: hidden; margin-top: 20px; margin-bottom: 40px;}
                    .Showing-results h3{font-size: 20px; margin: 9px 0 0 14px; display: inline-block;}
                    .sort-by span {display: inline-block; margin-right: 10px;}
                    .sort-by .form-drop {display: inline-block;}
                    .sort-by .form-control{min-width: 168px;}
                    .item-car-list {border: 1px solid #d8d8d8; padding: 20px; overflow: hidden;}
                    .item-car-list:nth-child(odd){background: #fff;}
                    .item-car-list:nth-child(even){background: #f1f1f1;}
                    .item-car-list .car-list-img {position: relative;}
                    .item-car-list  .expiresoffers {bottom: 10px; color: #fff; font-size: 13px; left: 0; position: absolute; right: 0; text-align: center; text-shadow: 0 3px 2px #000000;}
                    .item-car-list .car-list-right{padding-left: 200px; font-size: 15px;}
                    .form-group-20 {margin-bottom: 20px;}

                    .item-car-list .car-list-right h3 {border-bottom: 1px solid #d8d8d8; font-size: 20px; margin-top: 0; padding-bottom: 12px;}
                    .item-car-list .car-list-right h3 a {text-decoration: none;}
                    .miles-away-ico {background: url("../../static/images/miles-away-ico.png") no-repeat -5px 3px; float: right; margin-top: -52px; padding: 3px 4px 3px 26px; position: relative;}
                    .item-car-list .car-list-right .Add-watchlist {margin-top: 30px;}
                    .Add-watchlist a {background: url("../../static/images/Add-watchlist.png") no-repeat 1px 2px; color: #ffae00; padding: 4px 4px 4px 30px;}
                    .item-car-list .car-list-right .seprator {margin: 0 14px;}
                    .item-car-list .car-list-right .looking-for{margin-right: 15px;}
                    .dot-ico {background: url("../../static/images/dot-ico.png") no-repeat 0 8px; padding-left: 12px;}
                    .miles-pad span{margin-right: 15px;}

                    @media all and (max-width: 991px) {
                    .Showing-results {margin-bottom: 20px;}
                    }

                    @media all and (max-width: 767px) {
                    .item-car-list .car-list-img {max-width: 120px;}
                    .item-car-list .expiresoffers {font-size: 11px; line-height: 1.3;}
                    .item-car-list .car-list-right {padding-left: 138px;}
                    .item-car-list .car-list-right .Add-watchlist {margin-top: 20px;}
                    .form-group-20 {margin-bottom: 10px;}
                    .item-car-list .car-list-right h3 {font-size: 16px; padding-bottom: 10px;}
                    .Showing-results {margin-top: 36px;}
                    .filter-group .btn-yellow-dark, .price-group .btn-yellow-dark {font-size: 14px;}
                    }

                    @media all and (max-width: 639px) {
                    .Showing-results h3 {display: block; font-size: 18px; margin: 0px 0 15px; text-align: center;}
                    .pull-right.sort-by {float: none !important; text-align: center;}
                    .Showing-results {padding: 15px 8px;}
                    .item-car-list .car-list-right {font-size: 14px;}
                    .looking-for {font-size: 13px;}
                    }

                    @media all and (max-width: 567px) {
                    .item-car-list .car-list-img {margin-bottom: 20px; max-width: 100%; width: 100%;}
                    .item-car-list .car-list-right {clear: both; padding-left: 0;}
                    .item-car-list .car-list-img img{width: 100%;}
                    .item-car-list .car-list-right .seprator {margin: 0 5px;}
                    .miles-pad span {margin-right: 10px;}
                    }

                    @media all and (max-width: 479px) {
                    .miles-away-ico {float: none !important; margin-bottom: 15px; margin-top: 0;}
                    }
                `}</style> 
                </div>
        );
    }
}

function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  
  return {
    allcars:state.SearchCar,
    car_list:state.SearchCar.car_data,
  }

}
function mapDispatchToProps (dispatch) {
    console.log(2);
    return {
        loadDataHandler: (params,token) => dispatch(loadData(params,token)),
        //viewDataHandler: (page_name) => dispatch(Fetchcontent(page_name))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CarList);