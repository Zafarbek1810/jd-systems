import styled from "styled-components";

const RightNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-flow: row nowrap;
  

  ul {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }

  li {
    list-style: none;
    
    .link{
      text-decoration: none;
      font-family:"Share Tech Mono";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 28px;
      color: #1B221F;
      padding: 10px 15px;
      transition: 500ms;
      
      &:hover{
        background: #FFFFFF;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 10px 15px;
      }
    }
  }

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 350px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    justify-content: start;

    ul {
      display: flex;
      flex-direction: column;
      text-align: end;
    }

    li {
      color: #000 !important;

    }

  }
`;

export {RightNavWrapper};
