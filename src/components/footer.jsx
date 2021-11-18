import React from 'react'
import "./footer.css"
import edufu from "../assests/edufu.in.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div className="footerhead">
            <div className="footer" >
                <div className="footerLeft">
                    <img 
                        src={edufu}
                        alt="edufu"
                        className="footerimg"
                    />
                    <div className="footerText" >
                        Edufu stands for education and future. We aim to provide mutual benefits to the students,
                        institutions, companies, and job seekers. Edufu doesn't exist for its own sake, 
                        but for yours.
                    </div>
                    <div className="footerIcon" >
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                    </div>

                </div>

                <div className="footerRight">
                    <div className="footerrightleft">
                        <div style={{color: '#757575',fontsize: "18px",lineheight: "22px",fontWeight:'bold'}} >
                            SERVICES
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}} >
                            Students
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                            Institute
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                            Company
                        </div>
                    </div>
                    <div className="footerrightmid">
                        <div style={{color: '#757575',fontsize: "18px",lineheight: "22px",fontWeight:'bold'}} >
                            DOCUMENTATION
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}} >
                            Terms & conditions
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                            Privacy Policy
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                            Disclamer
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                            Refund Policy
                        </div>
                    </div>
                    <div className="footerrightright">
                        <div style={{color: '#757575',fontsize: "18px",lineheight: "22px",fontWeight:'bold'}} >
                            CONTACT US
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}} >
                        Edufu Technologies Pvt. Ltd.Terms & conditions
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                        www.Edufu.in
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                        Admin@Edufu.in
                        </div>
                        <div style={{color: '#757575',fontsize: "16px"}}>
                        25, 1st main road, KB nagar,<br/> Bengaluru, karnataka 560026
                        </div>
                    </div>
                </div>            
            </div>
            <hr/>
        </div>
    )
}
