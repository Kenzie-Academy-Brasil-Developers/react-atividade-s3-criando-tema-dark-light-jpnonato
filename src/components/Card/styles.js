import styled from "styled-components";


export const CardMain = styled.div`
    width: 125px;
    padding: 10px;
    height: 150px;
    background-color: ${(props) => props.theme === 'ligth'? 'antiquewhite' : 'black'};
    color: ${(props) => props.theme === 'ligth'? 'black' : 'white'};
    border: ${(props) => props.theme === 'ligth'? 'black solid' : 'white solid'};
    border-radius: 4px;
    margin: 5px 0px 5px 0px;

        h2{
            max-height: 30px ;
        }

    @media screen and (min-width: 650px){

        width: 200px;
        height: 250px;
        margin: 0 5px 0 5px;

          h2{
              max-height: 42px ;
           }
    }
`

export const MainDiv = styled.div`
    width: 100vw;
    background-color: ${(props) => props.theme === 'ligth'? '#b65408' : 'black'};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(8px + 2vmin);

`

export const Button = styled.button`
   padding: 12px;
   background-color: ${(props) => props.theme === 'ligth'? 'beige' : 'black'};
   color: ${(props) => props.theme === 'ligth'? 'black' : 'white'};
   border: ${(props) => props.theme === 'ligth'? 'none' : 'white solid '};
   border-radius: 4px;
   margin-bottom: 15px;
   box-shadow: black 0px 3px 1px 0px;
   cursor: pointer;


    :active{
    box-shadow: 0px 0px 0px 0px, inset rgb(36, 36, 36) 0px 1px 1px 1px;
    transform: translateY(3px);
    transition: 0.15s;
    }

`

export const Section = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 650px){    
        flex-direction: row;

    }
`