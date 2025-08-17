import styled from "styled-components";

const DivHead = styled.div`
  color: white;
  font-family: 'Poppins';
  font-size: 38px;


.divisoria{
  width: 100%;
  height: 50px;
  background-color: #1F1F1F;
  margin: 5% 0% 3% 0%;
  overflow: hidden;
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

.div_lingua{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
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

@media (max-width: 1024px) {
  .img_lingua{
    width: 18vw;
    height: 18vw;
  }

  .div_lingua{
    font-size: 3vw;
  }
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
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/html.png" alt="html" />
                </div>
                HTML
              </div>
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/css.png" alt="" />
                </div>
                CSS
              </div>  
              <div className="div_lingua"> 
                <div className="img_lingua">
                    <img src="images/js.png" alt="" />
                </div>
                JavaScript
              </div>
              <div className="div_lingua">            
                <div className="img_lingua">
                    <img src="images/py.png" alt="" />
                </div>
                Python
              </div>    
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/c.png" alt="" />
                </div>
                C
              </div>  
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/csharp.png" alt="" />
                </div>
                C#
              </div> 
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/sql.png" alt="" />
                </div>
                MySQL
              </div> 
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/react.png" alt="" />
                </div>
                React
              </div> 
              <div className="div_lingua">
                <div className="img_lingua">
                    <img src="images/Git.png" alt="" />
                </div>
                GitHub
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