import './App.css';
import IconWithName from './components/iconWithName';
import IconWithLang from './components/iconWithLang';
import { useState, useEffect } from "react";
import ReactModal from 'react-modal';
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {FaUser} from "react-icons/fa"
import {AiFillCode} from "react-icons/ai"
import {FaAward} from "react-icons/fa"
import WorkCard from './components/workCard';
import AwardFlame from './components/awardFlame';

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('')
  const onOpenDialog = (name: string) => {
    setSelectedItem(name)
  }

  return (
    <div>
    <div className='contents-bg'>
      <div className='contents'>
        <div className='contents-de'>
          <div className='title'>
            PortFolio
          </div>
            <IconWithName name="Home"/>
        </div>
      </div>
    </div>
    <div className='section'style={{marginTop:"100px"}}>
      <div>
    <FaUser style={{position:"relative", top:"15px",left:"10px"}}size={70} color={`black`}/> Profile
      </div>
      </div>
      <div className='profilebox'>
        <div style={{margin:"10px"}}>
        <img className='circleIcon' src={`${process.env.PUBLIC_URL}/profileIcon.jpg`} alt="Logo" />
        </div>
        <div style={{marginLeft:"50px"}}>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
    <div className='section' style={{marginTop:"100px"}}>
    <IoLogoHtml5 style={{position:"relative", top:"15px",left:"10px"}}size={70} color={`black`}/> Skills
    <div className='skillbox'>
    <div className='skills'>
    <button className="btn" onClick={() => onOpenDialog("modal1")}>
    <IconWithLang langName="HTML"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal1"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal2")}>
    <IconWithLang langName="CSS"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal2"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal3")}>
    <IconWithLang langName="JavaScript"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal3"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal4")}>
    <IconWithLang langName="TypeScript"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal4"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal5")}>
    <IconWithLang langName="React"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal5"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal6")}>
    <IconWithLang langName="Vue"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal6"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal7")}>
    <IconWithLang langName="jQuery"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal7"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal8")}>
    <IconWithLang langName="Python"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal8"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    <button className="btn" onClick={() => onOpenDialog("modal9")}>
    <IconWithLang langName="Java"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "modal9"}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={400}
        >
          <div className='skillcard'>
          <div className='skillpic'>
          <IconWithLang langName="HTML"/>
          </div>
          <div className='skillde'>
          <div className='skillfont'>経験年数</div>
          1年
          <div className='skillfont'>習熟度</div>
          <span className="star5_rating" data-rate="4"></span>
          <div className='skillfont'>備考</div>
          ドキュメントを参照すれば大抵のことは出来ます
          </div>
          </div>
    </ReactModal>
    </div>
    </div>
    </div>
    <div className='section' style={{marginTop:"100px"}}>
    <AiFillCode style={{position:"relative", top:"15px",left:"10px"}}size={70} color={`black`}/> Works
    </div>
    <div className='worksbox'>
      <div style={{margin:"10px"}}>
        <div>
        <button className='workbtn'>
        <WorkCard imgname='profileIcon.jpg'/>
        </button>
        </div>
        <div style={{textAlign:"center"}}>aaa</div>
      </div>
      <div style={{margin:"10px"}}>
        <button className='workbtn'>
        <WorkCard imgname='profileIcon.jpg'/>
        </button>
      </div>
    </div>
    <div className='section' style={{marginTop:"100px"}}>
    <FaAward style={{position:"relative", top:"15px",left:"10px"}}size={70} color={`black`}/> Award
    </div>
    <div className='awardbox'>
      <AwardFlame>
        aaaaaaa
      </AwardFlame>
    </div>
    </div>
  );
}

export default App;
