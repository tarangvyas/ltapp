import React, {Component} from 'react'
import { connect } from 'react-redux';
import Link from 'next/link'
import {FUEL_TYPE,CAR_TYPE,ROOT_URL
} from './../../actions/types';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import {MakeOffer} from './../../actions/cardetail';
import moment from 'moment'
import Makeofferform from './Makeofferform';


class Cardetailgallery extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
      let l = document.getElementsByClassName("close");
        //console.log(l);
    }
    resetSlider(e){
      for (var i = 0; i < this.props.cardata.carimages.length; i++) {

        var element=document.getElementById('bigimg_'+i);
        element.classList.remove("active");
        if(i==e){ element.classList.add("active");}
      }
    }
    updatelist() 
    {
      let total_amount=parseFloat(document.getElementById('offer_amount').value)+parseFloat(document.getElementById('lotus_fee').value);
      document.getElementById('total_offer_amount').innerHTML=total_amount;
    }
    submitoffer=(postData)=> {
      this.props.makeOfferHandler(postData,this.props.token);
    }
    bided=()=>{
      alert('Already offered on this Car.');
    }
    closeModal() {
      let close=document.getElementsByClassName("close")[0];
      close.click();
    }
    render() {

      let data='';
      let car_detail='';
      let carimagelength=0;
      let max_offer_amount=0;
      let first_image='';
      let display_button=true;
      if(this.props.cardata != null)
      {
        data=this.props.cardata;
        car_detail=JSON.parse(data.car_detail);
        carimagelength=data.carimages.length;
        
        data.offers.map((item,i)=>{
          if(max_offer_amount < item.offer_amount)
              max_offer_amount=item.offer_amount;
          
          if(this.props.user.id==item.user_id)
          {
            display_button=false;
          }     
        });
      }
      
      let thumbs1='';
      if(data.carimages!=null && carimagelength > 0){

        var indents = [];
        for (var i = 0; i < 4; i++) {
          let img_src=ROOT_URL+'/../../storage/app/'+data.carimages[i].file_name;
          let id='carousel-selector-'+i;
          indents.push(<div className="items">
            <a className="thumbnail" id={id}><img alt="" src={img_src} /></a>
          </div>);
        }

        
      }
     
      const { handleSubmit } = this.props
      if(this.props.offer_popup===false){
        this.closeModal();
      }
     return (
      <div>
        
      <div className="col-lg-5 col-md-6 col-sm-12">
      
          <div className="gallery-col">
              <div id="slider" className="car-gallery">
               
                <div id="carousel-bounding-box">
                  <div className="carousel slide" id="myCarousel">
                  
                    <div className="carousel-inner gallery">

                      {data.carimages!=null?data.carimages.map((item,i)=>{
                          let img_src1=ROOT_URL+'/../../storage/app/'+item.file_name;
                          let img_id='bigimg_'+i;
                          {i==0? first_image=img_src1:''}
                        return(
                          <div className={i==0?'item active':'item'} data-slide-number={i} id={img_id}>
                              <a className="thumbnail fancybox" rel="ligthbox" href={img_src1}>
                                <img className="img-responsive" alt="" src={img_src1} />
                              </a>
                            </div>
                        );
                      }):''}
                    </div>
                  </div>
                </div>
              </div>
              <div  id="slider-thumbs" className="gallery-thumbs">
                <div className="carousel slide media-carousel" id="media">
                  <div className="carousel-inner">
                      <div className="item active">
                          {data.carimages!=null?data.carimages.map((item,i)=>{
                              let img_src=ROOT_URL+'/../../storage/app/'+item.file_name;
                              let id='carousel-selector-'+i;
                              return i < 4 ?
                                    <div className="items">
                                      <a className="thumbnail" id={id}><img alt="" src={img_src} onClick={() => this.resetSlider(i)} /></a>
                                    </div>
                              : '';
                          }):''}
                      </div>
                      {carimagelength > 5 ?
                      <div className="item">
                          {data.carimages!=null?data.carimages.map((item,i)=>{
                              let img_src=ROOT_URL+'/../../storage/app/'+item.file_name;
                              let id='carousel-selector-'+i;
                              return (i >= 4 && i < 8) ?
                                    <div className="items">
                                      <a className="thumbnail" id={id}><img alt="" src={img_src} onClick={() => this.resetSlider(i)} /></a>
                                    </div>
                              : '';
                          }):''}
                      </div>
                      :''}
                      {carimagelength > 8 ?
                      <div className="item">
                          {data.carimages!=null?data.carimages.map((item,i)=>{
                              let img_src=ROOT_URL+'/../../storage/app/'+item.file_name;
                              let id='carousel-selector-'+i;
                              return (i >= 8 && i < 12) ?
                                    <div className="items">
                                      <a className="thumbnail" id={id}><img alt="" src={img_src} onClick={() => this.resetSlider(i)} /></a>
                                    </div>
                              : '';
                          }):''}
                      </div>  
                       :''}

                      {carimagelength > 12 ? 
                      <div className="item">
                          {data.carimages!=null?data.carimages.map((item,i)=>{
                              let img_src=ROOT_URL+'/../../storage/app/'+item.file_name;
                              let id='carousel-selector-'+i;
                              return (i >= 12 && i < 16) ?
                                    <div className="items">
                                      <a className="thumbnail" id={id}><img alt="" src={img_src} onClick={() => this.resetSlider(i)} /></a>
                                    </div>
                              : '';
                          }):''}
                      </div> 
                      :''}                              
                </div>
                <a data-slide="prev" href="#media" className="left carousel-control">‹</a>
                <a data-slide="next" href="#media" className="right carousel-control">›</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6 col-sm-12 detail-gallery-right">
                  <h3 className="font-l text-uppercase text-gray form-group"><span className="text-success-dark font-b">{car_detail!=''?car_detail.data.make_name:''}</span> {car_detail!=''?car_detail.data.model_name:''} {data!=''?data.car_year:''}
                  
                  </h3>
                  <div className="expiresdays-icon font-m text-success-dark">Expires in {data.exp_date !=  null ?moment(moment.unix(data.exp_date).format("YYYY-MM-DD")).from(moment(moment().format("YYYY-MM-DD"))):''}</div>
                  <div className="detail-list row">
                      <div className="col-sm-5 col-xs-6">V12 4dr Touchtronic Auto <strong className="anupat pull-right font-b">:</strong></div>
                      <div className="col-sm-7 col-xs-6"><span className="font-m">{data!=''?data.mileage:''}</span> Miles</div>
                  </div>
                  <div className="detail-list row">
                      <div className="col-sm-5 col-xs-6">Viewing car <strong className="anupat pull-right font-b">:</strong></div>
                      <div className="col-sm-7 col-xs-6"><span className="font-m">{data!=''?data.reg_no:''}</span></div>
                  </div>
                  <div className="detail-list row">
                      <div className="col-sm-5 col-xs-6">Seller looking for <strong className="anupat pull-right font-b">:</strong></div>
                      <div className="col-sm-7 col-xs-6"><span className="font-m">£{data!=''?data.asking_price:''}</span></div>
                  </div>
                  <div className="detail-list row">
                      <div className="col-sm-5 col-xs-6">Best dealer offer <strong className="anupat pull-right font-b">:</strong></div>
                      <div className="col-sm-7 col-xs-6"><span className="font-m">£ {max_offer_amount} </span> <span className="text-yellow-dark font-m">(collected) </span></div>
                  
                  </div>
                  <div className="clearfix make-an-offer-btn">
                   {display_button==true?
                    <a href="#" className="btn font-m btn-yellow btn-lg form-group" data-toggle="modal" data-target="#myModal">Make An Offers</a>
                    :
                    <a href="#" className="btn font-m btn-yellow btn-lg form-group" onClick={this.bided}>Make An Offers</a>}
                  </div> 
              </div>
      <style jsx>{`

                  .gallery-col {max-width: 458px; margin: 0 auto;}
                  .car-gallery .thumbnail {border: 0 none; border-radius: 0; padding: 0; margin-bottom: 0;}
                  .car-gallery .gallery {border: 3px solid #dad9d9; margin-bottom: 20px;}
                  #slider-thumbs{padding: 0 35px;}
                  #slider-thumbs .thumbnail {border: 2px solid #e6e5e5; border-radius: 0; margin-bottom: 0; padding: 0;}
                  .gallery-thumbs .items {float: left; margin: 0 5px; width: 86px; cursor: pointer;}
                  .gallery-thumbs .carousel-control.left, .gallery-thumbs .carousel-control.right {background: #146227 url("../../static/images/home-arrow.png") no-repeat; box-shadow: none; font-size: 0; height: 38px; margin-top: -19px; opacity: 1; width: 30px; top: 50%;}
                  .gallery-thumbs .carousel-control.left{left: -35px; background-position: 1px 6px;}
                  .gallery-thumbs .carousel-control.right{right: -35px; background-position: -45px 6px;}
                  .make-an-offer-btn {margin-top: 28px;}

                  .detail-gallery-right h3{margin-top: 0; border-bottom: 1px solid #d8d8d8; padding-bottom: 10px;}
                  .detail-services {margin-top: 32px;}
                  .detail-services ul{margin: 0; padding: 0; list-style: none;}
                  .detail-services li {background: #edeaea; border-radius: 5px; color: #181818; float: left; font-family: "DINOT-Medium"; font-size: 13px; margin-right: 1%; min-height: 132px; line-height: 1.2; padding: 13px 5px 10px; position: relative; text-align: center; text-transform: uppercase; width: 19.2%;}
                  .detail-services li:last-child{margin-right: 0;}
                  .detail-services li:hover{background-color: #146227; color: #fff;}
                  .detail-services li::before {background: url("../../static/images/detail-services-icon.png") no-repeat; transition: all 0.3s ease 0s; content: ""; display: block; height: 63px; margin: 0 auto 6px; width: 70px;}
                  .detail-services li.petrol-ico::before{background-position: 7px -4px;}
                  .detail-services li.petrol-ico:hover::before{background-position: 7px -154px;}
                  .detail-services li.automatic-ico::before{background-position: -137px -4px;}
                  .detail-services li.automatic-ico:hover::before{background-position: -137px -153px;}
                  .detail-services li.registered-ico::before{background-position: -284px -4px;}
                  .detail-services li.registered-ico:hover::before{background-position: -284px -153px;}
                  .detail-services li.mot-valid-ico::before{background-position: -430px -4px;}
                  .detail-services li.mot-valid-ico:hover::before{background-position: -430px -153px;}
                  .detail-services li.full-service-ico::before{background-position: -574px -4px;}
                  .detail-services li.full-service-ico:hover::before{background-position: -574px -153px;}
                  .expiresdays-icon {background: url("../../static/images/expiresdays-icon.png") no-repeat 0 -2px; float: right; margin-top: -44px; padding: 3px 4px 3px 40px; position: relative;}
                  .detail-list {color: #3f3f3f; font-size: 18px; margin-bottom: 17px;}
                  .detail-list .anupat{font-weight: normal;}
                  .fancybox-overlay .fancybox-skin{;padding: 8px !important; border-radius: 0px;}

                  @media all and (max-width: 1199px) {
                  .detail-gallery-right h3 {font-size: 20px;}
                  .expiresdays-icon {float: none; font-size: 13px; margin-bottom: 8px; margin-top: 0; position: relative; right: 0;}
                  .gallery-thumbs .carousel-control.left, .gallery-thumbs .carousel-control.right {height: 30px; margin-top: -15px; width: 24px; background-size: 46px auto;}
                  .gallery-thumbs .carousel-control.left {background-position: 3px 7px;}
                  .gallery-thumbs .carousel-control.right {background-position: -25px 7px;}
                  .detail-services li::before {background-size: 400px auto; height: 40px; width: 40px;}

                  .detail-services li.petrol-ico::before {background-position: 3px -2px;}
                  .detail-services li.petrol-ico:hover::before{background-position: 3px -96px;}
                  .detail-services li.automatic-ico::before {background-position: -89px -2px;}
                  .detail-services li.automatic-ico:hover::before{background-position: -89px -96px;}
                  .detail-services li.registered-ico::before {background-position: -181px -2px;}
                  .detail-services li.registered-ico:hover::before{background-position: -181px -97px;}
                  .detail-services li.mot-valid-ico::before {background-position: -272px -2px;}
                  .detail-services li.mot-valid-ico:hover::before{background-position: -272px -97px;}
                  .detail-services li.full-service-ico::before {background-position: -363px -2px;}
                  .detail-services li.full-service-ico:hover::before{background-position: -363px -96px;}

                  .detail-services li {font-size: 12px; margin-bottom: 1%; min-height: 100px; padding: 10px; width: 30%;}
                  .detail-services {margin-top: 20px;}
                  .make-an-offer-btn {margin-top: 15px;}
                  .detail-list {font-size: 15px; margin-bottom: 10px;}
                  .detail-gallery-right h3 {margin-bottom: 8px; padding-bottom: 8px;}
                  .make-an-offer-btn a {font-size: 14px;}
                  }
                  @media all and (max-width: 991px) {
                  .gallery-col {margin: 0 auto 34px;}
                  .detail-services li {margin-bottom: 0; margin-right: 0.6%; width: 19.4%;}
                  }

                  @media all and (max-width: 767px) {
                  .detail-services li {min-height: 114px;}
                  }
                  @media all and (max-width: 567px) {
                  .detail-services{text-align: center;}
                  .detail-services li {display: inline-block; float: none; margin-bottom: 4px; margin-right: 0; min-height: 110px; vertical-align: top; width: 32.6%;}
                  .gallery-thumbs .items {margin: 0 1%; width: 23%;}
                  }

                  @media all and (max-width: 440px) {
                  .detail-services li {width: 49.4%;}
                  }   
      `}</style> 
            
            <div id="myModal" className="modal fade pupup" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header form-group">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title modal-title text-success-dark font-b text-uppercase">Let's get the wheels in motion</h4>
                      </div>
                      <div className="modal-body">
                          <Makeofferform submitHandler={this.submitoffer}  closeModalHandler={this.closeModal}/>
                      </div>
                   </div>
                </div>        
           </div>
      </div>
        );
    }
}
function mapStateToProps(state) {
  /*State.REDUDER.vars*/
  //console.log(state.Cardetail,'cargellary');
  return {
    cardata:state.Cardetail.car_data,
    offer_popup:state.Cardetail.offer_popup,
  }

}
function mapDispatchToProps (dispatch) {
  return {
    makeOfferHandler: (params,token) => dispatch(MakeOffer(params,token))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cardetailgallery);