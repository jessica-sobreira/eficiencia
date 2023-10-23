import styled from "styled-components";

export const Main = styled.main`
main::after{
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80vw;
    background: linear-gradient(-233deg, #000 20%, rgba(0, 0, 0, 0) 65%) no-repeat;
}

main .student {
    display: none;
    height: 100vh;
}

main .student.selected{
    display: block;
}

main .student .image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export const Title = styled.h1`
    color: white;
    display: flex;
    margin-top: 13%;
    margin-left: 16%;
    font-size: 3em;
`

export const Text = styled.p`
    color: white;
    display: flex;
    margin-left: 4%;
    margin-top: 2%;
    font-size: 1.5em;
    flex-direction: column;
    margin-right: 45%;
    text-align: center;
    `
    export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    
  `;

  export const Buttons = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 10vw;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background-color: rgba(0, 0, 0, 0.3);

  ul {
    list-style: none;
}

  
  Buttons Button {
    border: none;
    background: #000000;
    cursor: pointer;
    border-radius: 50%;
}

Button img {
    border-radius: 50%;
    height: 2%;
    width: 7vw;


}


  `


