import styled from 'styled-components';


export const Escena = styled.p` 
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
    padding: 5px;
    font-size: 1.3em;
    color: blue;
    background-color: ${({ isWhite }) => isWhite ? 'salmon' : 'white'};
 

    display: block;
`;
// <p>{param}</p>

export const EscenaSel = styled(Escena)` 
    background-color: salmon;
` ;
                                              
                                    
export const Buttons = styled.button`
    margin-top: 40px;
    width: 49vw;
    height: 10vh;
    background-color: royalblue;
    color: white;
    font-size: 1.6em;
    flex-direction: column;
    text-align: center;


`;

export const MiDiv = styled.div`
            border: 2px solid black;
            min-height: 100vh;
            background-image: url(${({ img }) => img });
            background-repeat: no-repeat;
            background-attachment: cover;
            background-position: center;

            //background: url("./img/1.jpg") #00D no-repeat center;
            /* display: flex;
            flex-direction: row; */ 
`;