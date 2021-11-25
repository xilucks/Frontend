import styled from "@emotion/styled";
import axios from "axios";

var NoticeModal = ({openModalNotice, closeModalNotice, writeNotice, userObject}) => {
    
 
    return(
        <div>
            <Modal>
                 <div className = "Box">
                     <div className = "Title">공지사항 추가</div>
                   
                     <textarea
                        placeholder = "공지사항을 입력하세요."
                     >
                       
                    </textarea>
                   
                     <div>
                        <input type = 'submit' value = "등록" onClick={closeModalNotice}/>
                     </div>
                 </div>
             </Modal>
        </div>
     );

}

export default NoticeModal
   
 
 
 const Modal = styled.div`
    

     justifyContent: center;
     alignItems: center;
     position: fixed;
     top: 188px;
     left: 128.86px;
     width: 100%;
     height: 50;
 
     font-family: Roboto;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 19px;
     letter-spacing: 0em;
     text-align: center;
 
     
     .Box{
       
         position: fixed;
         background: rgba(255,255,255,0.95);
         height: 213px;
         width: 320px;
         left: 20px;
         top: 247px;
         border-radius: 15px;
         z-index:1;
 
     }
     .bee{
         position: fixed;
         left:123px;
         top:188px;
         z-index:2;
         
     }
 
     .Title{
        margin-left:21px;
         margin-top:19.75px;
         margin-bottom:11.17px;

         font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color:#666666;

     }
     
     .Text{
         margin-left:auto;
         margin-right:auto;
         margin-bottom:30.69px;
        width: 170px;
        text-align:centere;


        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        

        color:#666666;

     }
     input{
        margin-top:15.86px;
        width:110px;
        height:37.72px;

        background-color: #FED15E;
        border: 0px solid #FED15E;
        color: #ffffff;

        height: 30.28125px;
        width: 110px;
        left: 53px;
        top: 433.6873779296875px;
        border-radius: 17px;
        

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

     }
     button{
        height: 30.28125px;
        width: 110px;
        left: 53px;
        top: 433.6873779296875px;
        border-radius: 17px;
        

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

        
     }

     textarea{


        
        background-color: #F5F5F5F5;
        width: 285px;
        height:90px;
        border: 0px solid #FED15E;
    }
     .Yes{
        margin-top:15.86px;
        width:110px;
        height:37.72px;

        background-color: #FED15E;
        border: 0px solid #FED15E;
        color: #ffffff;
    }

    .No{

        background-color: #C4C4C4;
        border: 0px solid #FED15E;
        color: #ffffff;

    }
 
 
 `