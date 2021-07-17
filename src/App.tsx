import React from 'react';
import GlobalStyles from './assets/styles/globalStyle'
import * as S from './assets/styles/styles';
import img1 from './assets/images/image-1.png'
import img2 from './assets/images/image-2.png'
import img3 from './assets/images/image-3.png'
import img4 from './assets/images/image-4.png'
import { ReactComponent as Vector } from './assets/images/vector-1.svg'
import { ReactComponent as Abstract1 } from './assets/images/abstract-1.svg'
import { ReactComponent as Abstract2 } from './assets/images/abstract-2.svg'

function App() {
  return (
    <>
      <S.Main>
        <S.Header>
          <S.Container>
            <S.Brand>Titulo</S.Brand>
          </S.Container>

        </S.Header>
        <S.Container>

          <S.MainContent>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut quam felis.</h1>
            <Vector className="svg1" />
            <img className="main-img" src={img1} />
            <Abstract1 className="svg2" />
            <Abstract2 className="svg3" />
            <img className="second-img" src={img2} />
            <h2>Debonaire is natural product-based, hair design & boutique.</h2>
          </S.MainContent>
          <S.SecondContent>
            <img className="img1" src={img3} />
            <div>
              <h1>We’re focused.</h1>
              <h2>We provide an exceptional service by only focusing on hair designing. Our goal is to provide a different type of experience by using responsible products.</h2>
            </div>
            <img className="img2" src={img4} />
          </S.SecondContent>
        </S.Container>


        <S.ThirdContent>
          <S.Container>

            <h1>We’re focused.</h1>
            <h2>We provide an exceptional service by only focusing on hair designing. Our goal is to provide a different type of experience by using responsible products.</h2>
          </S.Container>
        </S.ThirdContent>



      </S.Main>
      <GlobalStyles />
    </>
  );
}

export default App;
