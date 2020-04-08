import React, { Component } from 'react'
import "./Design.css";
import first from './Images/first.jpg';
import second from './Images/second.jpg';
import third from './Images/third.jpg';
import "./custom.css";

export default class Design extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       forename1:"",
       forename2:"",
       surname1:"",
       surname2:"",
       title1:"",
       title2:"",
       otherName1:"",
       otherName2:"",
       dob1:"",
       dob2:"",
       nationality1:"",
       nationality2:"",
       pps1:"",
       pps2:"",
       children1:"",
       children2:"",
       childAge1:"",
       childAge2:"",
       rente1:"",
       rente2:"",
       address11:"",
       address12:"",
       address21:"",
       address22:"",
       address31:"",
       address33:"",
       county1:"",
       county2:"",
       country1:"",
       country2:"",
       time1:"",
       years1:"",
       time2:"",
       years2:"",
       coAddress11:"",
       coAddress12:"",
       coAdress21:"",
       coAdress22:"",
       coAddress31:"",
       coAddress32:"",
       coCounty1:"",
       coCounty2:"",
       coCountry1:"",
       coCountry2:"",
       coTime1:"",
       coTime2:"",
       coYears1:"",
       coYears2:"",
       Paddress11:"",
       Paddress12:"",
       Paddress21:"",
       Paddress22:"",
       Paddress31:"",
       Paddress32:"",
       Pcounty1:"",
       Pcounty2:"",
       Pcountry1:"",
       Pcountry2:"",
       PTime1:"",
       PTime2:"",
       Pyear1:"",
       Pyear2:"",
       homeT1:"",
       homeT2:"",
       workT1:"",
       workT2:"",
       mobile1:"",
       mobile2:"",
       email1:"",
       email2:"",
       check : false,
       radio:""
    }
  }
  radioHandler = (e,index) => {
    this.setState({
      radio : e.target.value
    })
    console.log(this.state.radio);
  }
  handleClick = e => {
   this.setState({
     check:!this.state.check
   })
    console.log(this.state.check);
  }
  changeHandler = e => {
  this.setState({
    [e.target.name] : e.target.value
  })
  
  }


  render() {
    var dispForm;
    this.state.check? dispForm = (
      <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: 20, width: 595, height: 841, borderStyle: 'outset', overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 0, top: 0}}>
        <img src={first} width={595} height={841} />
        </div>
      <div style={{position: 'absolute', left: '28.35px', top: '5.35px'}} className="cls_009"><span className="cls_009">Section A - Personal Details</span></div>
      <div style={{position: 'absolute', left: '73.18px', top: '68.84px'}} className="cls_012"><span className="cls_012">APPLICANT ONE</span></div>
      <div style={{position: 'absolute', left: '350.04px', top: '68.84px'}} className="cls_012"><span className="cls_012">APPLICANT TWO</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '98.46px'}} className="cls_007"><span className="cls_007">Guarantor</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '115.47px'}} className="cls_007"><span className="cls_007">Forenames</span><span className="dispVal">{this.state.forename1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '115.47px'}} className="cls_007"><span className="cls_007">Forenames</span><span className="dispVal">{this.state.forename2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '132.48px'}} className="cls_007"><span className="cls_007">Surname</span><span className="dispVal">{this.state.surname1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '132.48px'}} className="cls_007"><span className="cls_007">Surname</span><span className="dispVal">{this.state.surname2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '149.49px'}} className="cls_007"><span className="cls_007">Other/Previous Names</span><span className="dispVal">{this.state.otherName1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '149.49px'}} className="cls_007"><span className="cls_007">Other/Previous Names</span><span className="dispVal">{this.state.otherName2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '166.50px'}} className="cls_007"><span className="cls_007">Title</span><span className="dispVal">{this.state.title1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '166.50px'}} className="cls_007"><span className="cls_007">Title</span><span className="dispVal">{this.state.title2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '183.50px'}} className="cls_007"><span className="cls_007">Date of Birth (dd/mm/yyyy)</span><span className="dispVal">{this.state.dob1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '183.50px'}} className="cls_007"><span className="cls_007">Date of Birth (dd/mm/yyyy)</span><span className="dispVal">{this.state.dob2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '200.51px'}} className="cls_007"><span className="cls_007">Nationality</span><span className="dispVal">{this.state.nationality1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '200.51px'}} className="cls_007"><span className="cls_007">Nationality</span><span className="dispVal">{this.state.nationality2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '217.52px'}} className="cls_007"><span className="cls_007">PPS Number</span><span className="dispVal">{this.state.pps1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '217.52px'}} className="cls_007"><span className="cls_007">PPS Number</span><span className="dispVal">{this.state.pps2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '234.53px'}} className="cls_007"><span className="cls_007">Marital Status</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '234.53px'}} className="cls_007"><span className="cls_007">Marital Status</span></div>
      <div style={{position: 'absolute', left: '96.43px', top: '243.73px'}} className="cls_013"><span className="cls_013">MARRIED</span></div>
      <div style={{position: 'absolute', left: '115.65px', top: '243.73px'}} className="cls_013"><span className="cls_013">REMARRIED</span></div>
      <div style={{position: 'absolute', left: '140.19px', top: '243.73px'}} className="cls_013"><span className="cls_013">SINGLE</span></div>
      <div style={{position: 'absolute', left: '156.56px', top: '243.73px'}} className="cls_013"><span className="cls_013">SEPARATED/DIVORCED</span></div>
      <div style={{position: 'absolute', left: '202.45px', top: '243.73px'}} className="cls_013"><span className="cls_013">WIDOW/ER</span></div>
      <div style={{position: 'absolute', left: '227.27px', top: '243.73px'}} className="cls_013"><span className="cls_013">CO HABITANT</span></div>
      <div style={{position: 'absolute', left: '257.95px', top: '243.73px'}} className="cls_013"><span className="cls_013">OTHER</span></div>
      <div style={{position: 'absolute', left: '362.83px', top: '243.59px'}} className="cls_013"><span className="cls_013">MARRIED</span></div>
      <div style={{position: 'absolute', left: '382.06px', top: '243.59px'}} className="cls_013"><span className="cls_013">REMARRIED</span></div>
      <div style={{position: 'absolute', left: '406.60px', top: '243.59px'}} className="cls_013"><span className="cls_013">SINGLE</span></div>
      <div style={{position: 'absolute', left: '422.97px', top: '243.59px'}} className="cls_013"><span className="cls_013">SEPARATED/DIVORCED</span></div>
      <div style={{position: 'absolute', left: '470.01px', top: '243.59px'}} className="cls_013"><span className="cls_013">WIDOW/ER</span></div>
      <div style={{position: 'absolute', left: '494.83px', top: '243.59px'}} className="cls_013"><span className="cls_013">CO HABITANT</span></div>
      <div style={{position: 'absolute', left: '525.51px', top: '243.59px'}} className="cls_013"><span className="cls_013">OTHER</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '251.53px'}} className="cls_007"><span className="cls_007">No. of Children</span><span className="dispVal">{this.state.children1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '251.53px'}} className="cls_007"><span className="cls_007">No. of Children</span><span className="dispVal">{this.state.children2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '268.54px'}} className="cls_007"><span className="cls_007">Children’s Ages</span><span className="dispVal">{this.state.childAge1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '268.54px'}} className="cls_007"><span className="cls_007">Children’s Ages</span><span className="dispVal">{this.state.childAge2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '297.56px'}} className="cls_006"><span className="cls_006">CURRENT ADDRESS</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '297.56px'}} className="cls_006"><span className="cls_006">CURRENT ADDRESS</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '319.57px'}} className="cls_007"><span className="cls_007">Are you:</span></div>
      <div style={{position: 'absolute', left: '69.55px', top: '325.89px'}} className="cls_013"><span className="cls_013">OWNER</span></div>
      <div style={{position: 'absolute', left: '91.85px', top: '325.89px'}} className="cls_013"><span className="cls_013">TENANT</span></div>
      <div style={{position: 'absolute', left: '115.44px', top: '325.89px'}} className="cls_013"><span className="cls_013">WITH PARENTS/RELATIVES  OR FRIENDS</span></div>
      <div style={{position: 'absolute', left: '198.66px', top: '319.57px'}} className="cls_007"><span className="cls_007">Rente</span><span className="dispVal">{this.state.rente1}</span></div>
      <div style={{position: 'absolute', left: '267.13px', top: '319.57px'}} className="cls_007"><span className="cls_007">pm</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '319.57px'}} className="cls_007"><span className="cls_007">Are You:</span></div>
      <div style={{position: 'absolute', left: '338.13px', top: '327.21px'}} className="cls_013"><span className="cls_013">OWNER</span></div>
      <div style={{position: 'absolute', left: '360.43px', top: '327.21px'}} className="cls_013"><span className="cls_013">TENANT</span></div>
      <div style={{position: 'absolute', left: '384.02px', top: '327.21px'}} className="cls_013"><span className="cls_013">WITH PARENTS/RELATIVES  OR FRIENDS</span></div>
      <div style={{position: 'absolute', left: '480.51px', top: '319.57px'}} className="cls_007"><span className="cls_007">Rente</span><span className="dispVal">{this.state.rente2}</span></div>
      <div style={{position: 'absolute', left: '549.26px', top: '319.57px'}} className="cls_007"><span className="cls_007">pm</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '336.57px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.address11}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '336.57px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.address12}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '353.58px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.address21}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '353.58px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.address22}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '370.59px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.address31}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '370.59px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.address33}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '387.60px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.county1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '387.60px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.county2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '404.61px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.country1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '404.61px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.country2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '421.61px'}} className="cls_007"><span className="cls_007">Time at address</span><span className="dispVal">{this.state.time1}</span></div>
      <div style={{position: 'absolute', left: '128.40px', top: '421.61px'}} className="cls_007"><span className="cls_007">years</span><span className="dispVal">{this.state.years1}</span></div>
      <div style={{position: 'absolute', left: '187.22px', top: '421.61px'}} className="cls_007"><span className="cls_007">months</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '421.61px'}} className="cls_007"><span className="cls_007">Time at address</span><span className="dispVal">{this.state.time2}</span></div>
      <div style={{position: 'absolute', left: '409.21px', top: '421.61px'}} className="cls_007"><span className="cls_007">years</span><span className="dispVal">{this.state.years2}</span></div>
      <div style={{position: 'absolute', left: '462.27px', top: '421.61px'}} className="cls_007"><span className="cls_007">months</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '454.63px'}} className="cls_006"><span className="cls_006">CORRESPONDENCE ADDRESS</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '454.63px'}} className="cls_006"><span className="cls_006">CORRESPONDENCE ADDRESS</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '472.64px'}} className="cls_007"><span className="cls_007">Same as above</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '472.64px'}} className="cls_007"><span className="cls_007">Same as above</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '489.64px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.coAddress11}</span> </div>
      <div style={{position: 'absolute', left: '297.64px', top: '489.64px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.coAddress12}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '506.65px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.coAdress22}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '506.65px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.coAdress22}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '523.66px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.coAddress31}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '523.66px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.coAddress32}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '540.67px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.coCounty2}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '540.67px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.coCounty2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '557.68px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.coCountry1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '557.68px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.coCountry2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '586.69px'}} className="cls_006"><span className="cls_006">PREVIOUS ADDRESS </span><span className="cls_014">(if less than 3 years at existing address)</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '586.69px'}} className="cls_006"><span className="cls_006">PREVIOUS ADDRESS </span><span className="cls_014">(if less than 3 years at existing address)</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '608.70px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.Paddress11}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '608.70px'}} className="cls_007"><span className="cls_007">Address Line 1</span><span className="dispVal">{this.state.Paddress12}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '625.71px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.Paddress21}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '625.71px'}} className="cls_007"><span className="cls_007">Address Line 2</span><span className="dispVal">{this.state.Paddress22}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '642.72px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.Paddress31}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '642.72px'}} className="cls_007"><span className="cls_007">Address Line 3</span><span className="dispVal">{this.state.Paddress32}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '659.72px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.Pcounty1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '659.72px'}} className="cls_007"><span className="cls_007">County</span><span className="dispVal">{this.state.Pcounty2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '676.73px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.Pcountry2}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '676.73px'}} className="cls_007"><span className="cls_007">Country</span><span className="dispVal">{this.state.Pcountry2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '693.74px'}} className="cls_007"><span className="cls_007">Time at address</span><span className="dispVal">{this.state.PTime1}</span></div>
      <div style={{position: 'absolute', left: '134.16px', top: '693.74px'}} className="cls_007"><span className="cls_007">years</span><span className="dispVal">{this.state.Pyear1}</span></div>
      <div style={{position: 'absolute', left: '187.22px', top: '693.74px'}} className="cls_007"><span className="cls_007">months</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '693.74px'}} className="cls_007"><span className="cls_007">Time at address</span><span className="dispVal">{this.state.PTime2}</span></div>
      <div style={{position: 'absolute', left: '412.09px', top: '693.74px'}} className="cls_007"><span className="cls_007">years</span><span className="dispVal">{this.state.Pyear2}</span></div>
      <div style={{position: 'absolute', left: '470.91px', top: '693.74px'}} className="cls_007"><span className="cls_007">months</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '708.75px'}} className="cls_015"><span className="cls_015">Address description as per IIB HL form required for DOE House Price Survey</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '721.76px'}} className="cls_006"><span className="cls_006">CONTACT DETAILS</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '721.76px'}} className="cls_006"><span className="cls_006">CONTACT DETAILS</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '744.76px'}} className="cls_007"><span className="cls_007">Home Telephone Number</span><span className="dispVal">{this.state.homeT1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '744.76px'}} className="cls_007"><span className="cls_007">Home Telephone Number</span><span className="dispVal">{this.state.homeT2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '761.77px'}} className="cls_007"><span className="cls_007">Work Telephone Number</span><span className="dispVal">{this.state.workT1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '761.77px'}} className="cls_007"><span className="cls_007">Work Telephone Number</span><span className="dispVal">{this.state.workT2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '778.78px'}} className="cls_007"><span className="cls_007">Mobile Telephone Number</span><span className="dispVal">{this.state.mobile1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '778.78px'}} className="cls_007"><span className="cls_007">Mobile Telephone Number</span><span className="dispVal">{this.state.mobile2}</span></div>
      <div style={{position: 'absolute', left: '28.35px', top: '795.79px'}} className="cls_007"><span className="cls_007">E-mail</span><span className="dispVal">{this.state.email1}</span></div>
      <div style={{position: 'absolute', left: '297.64px', top: '795.79px'}} className="cls_007"><span className="cls_007">E-mail</span><span className="dispVal">{this.state.email2}</span></div>
      <div style={{position: 'absolute', left: '294.76px', top: '818.80px'}} className="cls_016"><span className="cls_016">2</span></div>
    </div>
    ):dispForm="";
        
    
    return (
            <div>
              {dispForm}
                <div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: 20, width: 595, height: 841, borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: 0, top: 0}}>
      <img src={first} width={595} height={841} />
      </div>  
    <div style={{position: 'absolute', left: '28.35px', top: '5.35px'}} className="cls_009"><span className="cls_009">Section A - Personal Details</span></div>
    <div style={{position: 'absolute', left: '73.18px', top: '68.84px'}} className="cls_012"><span className="cls_012">APPLICANT ONE</span></div>
    <div style={{position: 'absolute', left: '350.04px', top: '68.84px'}} className="cls_012"><span className="cls_012">APPLICANT TWO</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '98.46px'}} className="cls_007"><span className="cls_007">Guarantor</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '115.47px'}} className="cls_007"><span className="cls_007">Forenames</span><input onChange={this.changeHandler} name="forename1" className="customForm" maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '115.47px'}} className="cls_007"><span className="cls_007">Forenames</span><input onChange={this.changeHandler} name="forename2" className="customForm" maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '132.48px'}} className="cls_007"><span className="cls_007">Surname</span><input onChange={this.changeHandler} name="surname1" className="customForm" maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '132.48px'}} className="cls_007"><span className="cls_007">Surname</span><input onChange={this.changeHandler} name="surname2" className="customForm" maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '149.49px'}} className="cls_007"><span className="cls_007">Other/Previous Names</span><input onChange={this.changeHandler} name="otherName1" className="customForm" maxLength="10" ></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '149.49px'}} className="cls_007"><span className="cls_007">Other/Previous Names</span><input onChange={this.changeHandler} name="otherName2" className="customForm"  maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '166.50px'}} className="cls_007"><span className="cls_007">Title</span><input onChange={this.changeHandler} name="title1" className="customForm"  maxLength="3"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '166.50px'}} className="cls_007"><span className="cls_007">Title</span><input onChange={this.changeHandler} name="title2" className="customForm"  maxLength="3"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '183.50px'}} className="cls_007"><span className="cls_007">Date of Birth (dd/mm/yyyy)</span><input onChange={this.changeHandler} name="dob1" className="customForm" maxLength="8"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '183.50px'}} className="cls_007"><span className="cls_007">Date of Birth (dd/mm/yyyy)</span><input onChange={this.changeHandler} name="dob2" className="customForm"  maxLength="8"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '200.51px'}} className="cls_007"><span className="cls_007">Nationality</span><input onChange={this.changeHandler} name="nationality1" className="customForm"  maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '200.51px'}} className="cls_007"><span className="cls_007">Nationality</span><input onChange={this.changeHandler} name="nationality2" className="customForm"  maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '217.52px'}} className="cls_007"><span className="cls_007">PPS Number</span><input onChange={this.changeHandler} name="pps1" className="customForm"  maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '217.52px'}} className="cls_007"><span className="cls_007">PPS Number</span><input onChange={this.changeHandler} name="pps2" className="customForm"  maxLength="14"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '234.53px'}} className="cls_007"><span className="cls_007">Marital Status</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '234.53px'}} className="cls_007"><span className="cls_007">Marital Status</span></div>
    <div style={{position: 'absolute', left: '96.43px', top: '243.73px'}} className="cls_013"><span className="cls_013">MARRIED</span></div>
    <div style={{position: 'absolute', left: '115.65px', top: '243.73px'}} className="cls_013"><span className="cls_013">REMARRIED</span></div>
    <div style={{position: 'absolute', left: '140.19px', top: '243.73px'}} className="cls_013"><span className="cls_013">SINGLE</span></div>
    <div style={{position: 'absolute', left: '156.56px', top: '243.73px'}} className="cls_013"><span className="cls_013">SEPARATED/DIVORCED</span></div>
    <div style={{position: 'absolute', left: '202.45px', top: '243.73px'}} className="cls_013"><span className="cls_013">WIDOW/ER</span></div>
    <div style={{position: 'absolute', left: '227.27px', top: '243.73px'}} className="cls_013"><span className="cls_013">CO HABITANT</span></div>
    <div style={{position: 'absolute', left: '257.95px', top: '243.73px'}} className="cls_013"><span className="cls_013">OTHER</span></div>
    <div style={{position: 'absolute', left: '362.83px', top: '243.59px'}} className="cls_013"><span className="cls_013">MARRIED</span></div>
    <div style={{position: 'absolute', left: '382.06px', top: '243.59px'}} className="cls_013"><span className="cls_013">REMARRIED</span></div>
    <div style={{position: 'absolute', left: '406.60px', top: '243.59px'}} className="cls_013"><span className="cls_013">SINGLE</span></div>
    <div style={{position: 'absolute', left: '422.97px', top: '243.59px'}} className="cls_013"><span className="cls_013">SEPARATED/DIVORCED</span></div>
    <div style={{position: 'absolute', left: '470.01px', top: '243.59px'}} className="cls_013"><span className="cls_013">WIDOW/ER</span></div>
    <div style={{position: 'absolute', left: '494.83px', top: '243.59px'}} className="cls_013"><span className="cls_013">CO HABITANT</span></div>
    <div style={{position: 'absolute', left: '525.51px', top: '243.59px'}} className="cls_013"><span className="cls_013">OTHER</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '251.53px'}} className="cls_007"><span className="cls_007">No. of Children</span><input onChange={this.changeHandler} name="children1" className="customForm"  maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '251.53px'}} className="cls_007"><span className="cls_007">No. of Children</span><input onChange={this.changeHandler} name="children2" className="customForm"  maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '268.54px'}} className="cls_007"><span className="cls_007">Children’s Ages</span><input onChange={this.changeHandler} name="childAge1" className="customForm"  maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '268.54px'}} className="cls_007"><span className="cls_007">Children’s Ages</span><input onChange={this.changeHandler} name="childAge2" className="customForm"  maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '297.56px'}} className="cls_006"><span className="cls_006">CURRENT ADDRESS</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '297.56px'}} className="cls_006"><span className="cls_006">CURRENT ADDRESS</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '319.57px'}} className="cls_007"><span className="cls_007">Are you:</span></div>
    <div style={{position: 'absolute', left: '69.55px', top: '325.89px'}} className="cls_013"><span className="cls_013">OWNER</span></div>
    <div style={{position: 'absolute', left: '91.85px', top: '325.89px'}} className="cls_013"><span className="cls_013">TENANT</span></div>
    <div style={{position: 'absolute', left: '115.44px', top: '325.89px'}} className="cls_013"><span className="cls_013">WITH PARENTS/RELATIVES  OR FRIENDS</span></div>
    <div style={{position: 'absolute', left: '198.66px', top: '319.57px'}} className="cls_007"><span className="cls_007">Rente</span><input onChange={this.changeHandler} name="rente1" className="customForm" maxLength="3"></input></div>
    <div style={{position: 'absolute', left: '267.13px', top: '319.57px'}} className="cls_007"><span className="cls_007">pm</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '319.57px'}} className="cls_007"><span className="cls_007">Are You:</span></div>
    <div style={{position: 'absolute', left: '338.13px', top: '327.21px'}} className="cls_013"><span className="cls_013">OWNER</span></div>
    <div style={{position: 'absolute', left: '360.43px', top: '327.21px'}} className="cls_013"><span className="cls_013">TENANT</span></div>
    <div style={{position: 'absolute', left: '384.02px', top: '327.21px'}} className="cls_013"><span className="cls_013">WITH PARENTS/RELATIVES  OR FRIENDS</span></div>
    <div style={{position: 'absolute', left: '480.51px', top: '319.57px'}} className="cls_007"><span className="cls_007">Rente</span></div>
    <div style={{position: 'absolute', left: '549.26px', top: '319.57px'}} className="cls_007"><span className="cls_007">pm</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '336.57px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="address11" className="customForm" maxLength="13"></input> </div>
    <div style={{position: 'absolute', left: '297.64px', top: '336.57px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="address12" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '353.58px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="address21" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '353.58px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="address22" className="customForm " maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '370.59px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="address31" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '370.59px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="address32" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '387.60px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="county1" className="customForm" maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '387.60px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="county2" className="customForm" maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '404.61px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="country1" className="customForm" maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '404.61px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="country2" className="customForm" maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '421.61px'}} className="cls_007"><span className="cls_007">Time at address</span><input onChange={this.changeHandler} name="time1" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '128.40px', top: '421.61px'}} className="cls_007"><span className="cls_007">years</span><input onChange={this.changeHandler} name="years1" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '187.22px', top: '421.61px'}} className="cls_007"><span className="cls_007">months</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '421.61px'}} className="cls_007"><span className="cls_007">Time at address</span><input onChange={this.changeHandler} name="time2" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '409.21px', top: '421.61px'}} className="cls_007"><span className="cls_007">years</span><input onChange={this.changeHandler} name="years2" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '462.27px', top: '421.61px'}} className="cls_007"><span className="cls_007">months</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '454.63px'}} className="cls_006"><span className="cls_006">CORRESPONDENCE ADDRESS</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '454.63px'}} className="cls_006"><span className="cls_006">CORRESPONDENCE ADDRESS</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '472.64px'}} className="cls_007"><span className="cls_007">Same as above</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '472.64px'}} className="cls_007"><span className="cls_007">Same as above</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '489.64px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="coAddress11" className="customForm" maxLength="13"></input> </div>
    <div style={{position: 'absolute', left: '297.64px', top: '489.64px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="coAddress12" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '506.65px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="coAddress21" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '506.65px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="coAddress22" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '523.66px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="coAddress31" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '523.66px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="coAddress32" className="customForm" maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '540.67px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="cCounty1" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '540.67px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="cCounty2" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '557.68px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="coCountry1" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '557.68px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="coCountry2" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '586.69px'}} className="cls_006"><span className="cls_006">PREVIOUS ADDRESS </span><span className="cls_014">(if less than 3 years at existing address)</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '586.69px'}} className="cls_006"><span className="cls_006">PREVIOUS ADDRESS </span><span className="cls_014">(if less than 3 years at existing address)</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '608.70px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="Paddress11" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '608.70px'}} className="cls_007"><span className="cls_007">Address Line 1</span><input onChange={this.changeHandler} name="Paddress12" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '625.71px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="Paddress21" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '625.71px'}} className="cls_007"><span className="cls_007">Address Line 2</span><input onChange={this.changeHandler} name="Paddress22" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '642.72px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="Paddress31" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '642.72px'}} className="cls_007"><span className="cls_007">Address Line 3</span><input onChange={this.changeHandler} name="Paddress32" className="customForm"maxLength="13"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '659.72px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="Pcounty1" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '659.72px'}} className="cls_007"><span className="cls_007">County</span><input onChange={this.changeHandler} name="Pcounty2" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '676.73px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="Pcountry1" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '676.73px'}} className="cls_007"><span className="cls_007">Country</span><input onChange={this.changeHandler} name="Pcountry2" className="customForm"maxLength="15"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '693.74px'}} className="cls_007"><span className="cls_007">Time at address</span><input onChange={this.changeHandler} name="PTime1" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '134.16px', top: '693.74px'}} className="cls_007"><span className="cls_007">years</span><input onChange={this.changeHandler} name="Pyear1" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '187.22px', top: '693.74px'}} className="cls_007"><span className="cls_007">months</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '693.74px'}} className="cls_007"><span className="cls_007">Time at address</span><input onChange={this.changeHandler} name="PTime2" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '412.09px', top: '693.74px'}} className="cls_007"><span className="cls_007">years</span><input onChange={this.changeHandler} name="Pyear2" className="customForm" maxLength="2"></input></div>
    <div style={{position: 'absolute', left: '470.91px', top: '693.74px'}} className="cls_007"><span className="cls_007">months</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '708.75px'}} className="cls_015"><span className="cls_015">Address description as per IIB HL form required for DOE House Price Survey</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '721.76px'}} className="cls_006"><span className="cls_006">CONTACT DETAILS</span></div>
    <div style={{position: 'absolute', left: '297.64px', top: '721.76px'}} className="cls_006"><span className="cls_006">CONTACT DETAILS</span></div>
    <div style={{position: 'absolute', left: '28.35px', top: '744.76px'}} className="cls_007"><span className="cls_007">Home Telephone Number</span><input onChange={this.changeHandler} name="homeT1" className="customForm" maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '744.76px'}} className="cls_007"><span className="cls_007">Home Telephone Number</span><input onChange={this.changeHandler} name="homeT2" className="customForm"maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '761.77px'}} className="cls_007"><span className="cls_007">Work Telephone Number</span><input onChange={this.changeHandler} name="workT1" className="customForm"maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '761.77px'}} className="cls_007"><span className="cls_007">Work Telephone Number</span><input onChange={this.changeHandler} name="workT2" className="customForm"maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '778.78px'}} className="cls_007"><span className="cls_007">Mobile Telephone Number</span><input onChange={this.changeHandler} name="mobile1" className="customForm"maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '778.78px'}} className="cls_007"><span className="cls_007">Mobile Telephone Number</span><input onChange={this.changeHandler} name="mobile2" className="customForm"maxLength="10"></input></div>
    <div style={{position: 'absolute', left: '28.35px', top: '795.79px'}} className="cls_007"><span className="cls_007">E-mail</span><input onChange={this.changeHandler} name="email1" className="customForm"maxLength="16"></input></div>
    <div style={{position: 'absolute', left: '297.64px', top: '795.79px'}} className="cls_007"><span className="cls_007">E-mail</span><input onChange={this.changeHandler} name="email2" className="customForm" maxLength="16"></input></div>
    <div style={{position: 'absolute', left: '294.76px', top: '818.80px'}} className="cls_016"><span className="cls_016">2</span></div>
  </div>
  <button onClick={this.handleClick}>view Form</button>

  
</div>
{dispForm}
            
            </div>
        )
    }
}
