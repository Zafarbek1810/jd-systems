import styled from "styled-components";

const ContactsWrapper=styled.div`
  padding: 50px 0;
  h3{
    font-family: 'Share Tech Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 56px;
    color: #1B221F;
    text-align: center;
  }
  
  .wrapper{
    display: flex;
    gap: 20px;
  }

  .forma {
    background-color: #fff;
    z-index: 1000;
    border-radius: 10px;
    padding: 50px 0;
  }

  .left{
    width: 50%;
    
    //////////////////////  Name input
    .name {
      width: 80%;
      margin: auto;
      display: flex;
      position: relative;
      margin-bottom: 30px;
      
      .icon{
        position: absolute;
        top: 15px;
        left: 10px;
      }
    }

    .name input {
      width: 100%;
      padding:10px 10px 10px 50px;
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.6);
      background: #FFFFFF;
      border: 1px solid #24414D;
      border-radius: 12px;
      
      &::placeholder{
        font-family: 'Share Tech Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 34px;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    
    ///////////////////////Phone input
    .phone {
      width: 80%;
      margin: auto;
      display: flex;
      position: relative;
      margin-bottom: 30px;

      .icon{
        position: absolute;
        top: 15px;
        left: 10px;
      }
    }

    .phone input {
      width: 100%;
      padding: 10px 10px 10px 50px;
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.6);
      background: #FFFFFF;
      border: 1px solid #24414D;
      border-radius: 12px;

      &::placeholder {
        font-family: 'Share Tech Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 34px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    
    /////////////////////////////Message input

    .message {
      width: 80%;
      margin: auto;
      display: flex;
      position: relative;
      margin-bottom: 30px;

      .icon{
        position: absolute;
        top: 15px;
        left: 10px;
      }
    }

    .message textarea {
      width: 100%;
      resize: vertical;
      min-height: 100px;
      padding: 10px 10px 10px 50px;
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.6);
      background: #FFFFFF;
      border: 1px solid #24414D;
      border-radius: 12px;

      &::placeholder {
        font-family: 'Share Tech Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 34px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    
    .btn{
      width: 70%;
      margin: auto;
      text-align: end;
    }

    .button {
      width: 150px;
      height: 50px;
      background: linear-gradient(90deg, rgba(255, 130, 175, 1) 0%, rgba(160, 17, 248, 1) 100%);
      border: none;
      clip-path: polygon(10% 0, 100% 0, 100% 20%, 100% 45%, 90% 100%, 20% 100%, 0 100%, 0% 55%);
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 28px;
      color: #FFFFFF;
      border-radius: 0;
    }

    .p {
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  
  .line{
    background: rgba(0, 0, 0, 0.2);
    height: auto;
    width: 10px;
    border-radius: 5px;
  }

  .right{
    width: 50%;
    .text p {
      font-family: 'Share Tech Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.6);
      margin-left: 30px;
    }
    
    .phones{
      display: flex;
      align-items: center;
    }

    .address{
      display: flex;
      align-items: center;
    }

    .mail{
      display: flex;
      align-items: center;
    }
    
    .map{
      iframe{
      border-radius: 24px;
      }
    }
  }


`

export{ContactsWrapper}