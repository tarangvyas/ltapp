import React, {Component} from 'react'
import classes from './Searchcars.css';
import {loadData} from './../../actions/searchcar';
import { connect } from 'react-redux';
import Link from 'next/link'
import Carlist from './CarList';


class SearchcarList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        //console.log(3);
        this.loadGridData(this.props.allcars,this.props.token);
    }
    converthtml(desc) {
     return {__html: desc};
    }
    SortColumn = (e)=>
    {
      let name=document.getElementById('sortorder').value;  
      console.log(sortorder);
      let newState=this.props.allcars;
      newState.sortBy=name;
      
      newState.order='desc';
      this.loadGridData(newState,this.props.token);
      e.preventDefault();
    }
    updatelist =()=> 
    {
      this.loadGridData(this.props.allcars,this.props.token);
    }
    loadGridData(makeData,token){
      let urlParams='';
      
                if(makeData.sortBy !=null){
                  urlParams=urlParams+'?orderBy='+makeData.sortBy+'&sort='+makeData.order;
                }
                let hasFilter="N";
                let filters=makeData.filter.map((item,i)=>{
                    if(item.q!='') {
                      hasFilter="Y";
                      if(i==0)
                         return item.field+'='+item.q;
                      else
                        return '&'+item.field+'='+item.q;
                    }
                });
                if(hasFilter=="Y"){
                  if(urlParams==""){
                      urlParams="?"+filters.join('');
                  }else{
                    urlParams=urlParams+"&"+filters.join('');
                  }
                }
                if(urlParams==""){
                  urlParams="?page="+makeData.page;
                }else{
                   urlParams=urlParams+"&page="+makeData.page;
                }


                let make=document.getElementById('make_id');
                let model=document.getElementById('model_id');
                let make_id=document.getElementById('make_id').value;
                let model_id=document.getElementById('model_id').value;
                let min_price=document.getElementById('min_price').value;
                let max_price=document.getElementById('max_price').value;
                let min_mileage=document.getElementById('min_mileage').value;
                let max_mileage=document.getElementById('max_mileage').value;
                let min_year=document.getElementById('min_year').value;
                let max_year=document.getElementById('max_year').value;
                var checkboxes = document.getElementsByName('fuel[]');
                var fvals = "";
                for (var i=0, n=checkboxes.length;i<n;i++) 
                {
                    if (checkboxes[i].checked) 
                    {
                        fvals += ","+checkboxes[i].value;
                    }
                }
                if (fvals) fvals = fvals.substring(1);


                var car_check = document.getElementsByName('car_type[]');
                var cvals = "";
                for (var i=0, n=car_check.length;i<n;i++) 
                {
                    if (car_check[i].checked) 
                    {
                        cvals += ","+car_check[i].value;
                    }
                }
                if (cvals) cvals = cvals.substring(1);

                urlParams=urlParams+"&make_id="+make_id+"&model_id="+model_id+"&min_price="+min_price+"&max_price="+max_price+"&min_mileage="+min_mileage+"&max_mileage="+max_mileage;
                urlParams=urlParams+"&min_year="+min_year+"&max_year="+max_year+"&fuel="+fvals+"&car_type="+cvals;
               // alert(urlParams);
                this.props.loadDataHandler(urlParams,token);  

                var make_name = make.options[make.selectedIndex].text;
                var model_name = model.options[model.selectedIndex].text;
                let tag_name='';
                if(make_id != '')
                  tag_name="<a  href='#'>"+make_name+"</a>"
                if(model_id != '')
                  tag_name+="<a  href='#'>"+model_name+"</a>"
                
                if(tag_name != '')
                document.getElementById("tag_block").innerHTML = tag_name;

                //console.log(urlParams);
    }
    converthtml(desc) {
     return {__html: desc};
    }
    paginate(page) {
      let newState=this.props.allcars;
      newState.page=page;
      this.loadGridData(newState);
    }
    render() {
        let data = this.props.page_data;
        let rows=<div><div>{"No Record Found"}</div></div>;
        let pagingControls = '';
        let currentPage=1;
        let numPages = 0;
        let total = '';
        let pfrom = '';
        let pto = '';
        if(this.props.car_list){
            rows=this.props.car_list.data.map((item,i)=>{
                return (
                        <div className="item-car-list form-group-20">
                            <div className="car-list-img pull-left">
                                <img src="../../static/images/car-list-img-01.jpg" alt="" />
                                <div className="expiresoffers">Expires in {item.exp_days} days - {item.offers != null ? item.offers.length:''} offers</div>
                            </div>
                            <div className="car-list-right">
                                <h3 className="font-b form-group"><a href="http://111.93.221.218/CUS/Lotus/HTML/car-details.php" className="text-gray">{item.make != null ? item.make.make_name:''} {item.model != null ? item.model.model_name:''}</a></h3>
                                <div className="miles-away-ico text-muted">88.7 Miles away</div>
                                <div className="form-group-20">{item.engine_size} - {item.car_type} <span className="seprator">|</span> <span className="font-m text-success text-uppercase looking-for">Looking for</span> £ {item.asking_price}</div>
                                <div className="form-group-20 miles-pad"><span>{item.car_year}</span> <span className="dot-ico">{item.mileage} Miles</span> <span className="dot-ico">{item.previous_owner} Previous Owner</span></div>
                                <div className="Add-watchlist"><a href="#" className="font-m">Add to watchlist</a></div>
                            </div>
                        </div>
                    );
            });

            let perPage=parseInt(this.props.car_list.meta.per_page);
            currentPage=parseInt(this.props.car_list.meta.current_page);
            total=parseInt(this.props.car_list.meta.total);
            pfrom=parseInt(this.props.car_list.meta.from);
            pto=parseInt(this.props.car_list.meta.to);
            
            let lastPage=parseInt(this.props.car_list.meta.last_page);
            if (perPage != null) {
                numPages = Math.ceil(total / perPage);
            }
            if(numPages > 1) {
              let pagesArray=[];
              if(currentPage==1){
                pagesArray.push(<li disabled key="first"  className="Previous"><a href="#">First</a></li>);
                pagesArray.push(<li disabled key="prev"><a previous href="#">Previous</a></li>);
              }else{
                pagesArray.push(<li key="first"><a href="javascript:void(0);" onClick={(e)=>this.paginate(1)}>First</a></li>);
                pagesArray.push(<li key="prev"><a previous href="javascript:void(0);" onClick={(e)=>this.paginate(currentPage-1)}>Previous</a></li>);
              }
              let j=0;
              for (let i = currentPage; i <= numPages; i++) {
                    if(j==5){ break; }
                    if (i != currentPage)
                        pagesArray.push(<li key={i}><a href="javascript:void(0);" onClick={(e)=>this.paginate(i)}>{i}</a></li>);
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
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="Showing-results">
                    <h3 className="font-l text-uppercase text-gray"><span className="font-b">Showing {pfrom} - <span className="number-green text-success">{pto} of {total != null ? total: ''}</span></span> results</h3>
                    <div className="pull-right sort-by">
                        <span className="text-success font-b text-uppercase">Sort by</span>
                        <div className="form-drop">
                            <select className="form-control" id="sortorder" name="sortorder" onChange={(e)=>this.SortColumn(e)}>
                                <option value="i_date">Recently Added</option>
                                <option value="asking_price">Price High to Low</option>
                                <option value="reg_no">Registration Date</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Carlist carlist={this.props.car_list} paginate1="this.paginate()" />
                            <div className="text-center">
                                <ul className="pagination mar-b">
                                    {pagingControls}
                                </ul>
                            </div>                       
                    </div>
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

                    .pagination {border-radius: 0;}
                    .pagination > li:first-child > a, .pagination > li:first-child > span {border-bottom-left-radius: 0; border-top-left-radius: 0; margin-left: 0;}
                    .pagination > li:last-child > a, .pagination > li:last-child > span {border-bottom-right-radius: 0; border-top-right-radius: 0;}
                    .pagination > li a {border: medium none; color: #868686; font-size: 16px;}
                    .pagination > .active > a, 
                    .pagination > .active > span, 
                    .pagination > .active > a:hover, 
                    .pagination > .active > span:hover, 
                    .pagination > .active > a:focus, 
                    .pagination > .active > span:focus {background-color: #38954f; color: #fff; padding: 6px 10px;}

                    .pagination li.Previous a, .pagination li.next a {background: #38954f url("../../static/images/pagesnation-ico.png") no-repeat; font-size: 0; height: 35px; margin: 0 4px; width: 50px;}
                    .pagination li.Previous a{background-position: 14px 11px;}
                    .pagination li.next a{background-position: -92px 11px;}

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
  //console.log('component',state.SearchCar);
  return {
    allcars:state.SearchCar,
    car_list:state.SearchCar.car_data,
  }

}
function mapDispatchToProps (dispatch) {
    return {
        loadDataHandler: (params,token) => dispatch(loadData(params,token)),
        //viewDataHandler: (page_name) => dispatch(Fetchcontent(page_name))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchcarList);