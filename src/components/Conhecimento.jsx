import styled from "styled-components";

const DivHead = styled.div`
  color: white;
  font-family: 'Poppins';
  font-size: 38px;


.divisoria{
  width: 120%;
  height: 100px;
  background-color: #1F1F1F;
  margin: 5% 0% 3% 0%;
}

.title{
  margin-left: 5%;
}

.linguagens {
  display: flex;
  flex-wrap: wrap;   
  gap: 20px;         
  margin-top: 10%;
  justify-content: center; 
}

.img_lingua {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: #111111 solid 2px;
  box-shadow: 
    0 4px 8px rgba(41, 41, 41, 0.4),   
    0 0 15px rgba(151, 151, 151, 0.05), 
    0 0 40px rgba(255, 255, 255, 0.1);  
  background: linear-gradient(170deg, rgba(26, 26, 26, 0.623) 0%, rgb(31, 31, 31) 100%);
  width: 170px;
  height: 170px;
}

img {
  height: 75%;
  width: auto;
}
`;



export function Conhecimento() {
  return (
    <>
      <DivHead>
      <div className="divisoria">
        <br />
      </div>
        <div className="title-conhecimento">
            <h1 className="title">Conhecimento técnico:</h1>
            <div className="linguagens">
                <div className="img_lingua">
                    <img src="images/html.png" alt="html" />
                </div>
                <div className="img_lingua">
                    <img src="images/css.png" alt="" />
                </div>    
                <div className="img_lingua">
                    <img src="images/js.png" alt="" />
                </div>            
                <div className="img_lingua">
                    <img src="images/py.png" alt="" />
                </div>     
                <div className="img_lingua">
                    <img src="images/c.png" alt="" />
                </div> 
                <div className="img_lingua">
                    <img src="images/csharp.png" alt="" />
                </div> 
                <div className="img_lingua">
                    <img src="images/sql.png" alt="" />
                </div> 
                <div className="img_lingua">
                    <img src="images/react.png" alt="" />
                </div> 
                <div className="img_lingua">
                    <img src="images/Git.png" alt="" />
                </div> 
            </div>
        </div>
          <div className="divisoria">
            <br />
          </div>
      </DivHead>
    </>
  );
}