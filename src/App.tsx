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
import {AiFillCrown} from 'react-icons/ai'
import PageLink from './components/pageLink';
import {IoIosMail} from 'react-icons/io'
import MailFlame from './components/mailFlame';
import {GiCardboardBoxClosed} from 'react-icons/gi'

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
            Yodai Tanaka's Portfolio
          </div>
          <div>
          <IconWithName refs="Profile"/>
          <IconWithName refs="Skills"/>
          <IconWithName refs="Works"/>
          <IconWithName refs="Award"/>
          <IconWithName refs="Contact"/>
          </div>
        </div>
      </div>
    </div>
    <div id="Profile" className='section'style={{marginTop:"100px"}}>
      <div>
      <FaUser style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>PROFILE
      </div>
      </div>
      <div>
      <div className='profilebox'>
        <div style={{margin:"10px"}}>
        <img className='circleIcon' src={`${process.env.PUBLIC_URL}/profileIcon.jpg`} alt="Logo" />
        </div>
        <div style={{marginLeft:"50px"}}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td style={{width:"100px"}}>
                    <b>氏名</b>
                  </td>
                  <td style={{height:"50px"}}>田中耀大(たなかようだい)</td>
                </tr>
                <tr>
                  <td>
                    <b>大学</b>
                  </td>
                  <td><PageLink link="https://www.tus.ac.jp/academics/faculty/sciencetechnology/industrial_administration/">東京理科大学 理工学研究科 経営工学専攻 修士1年</PageLink></td>
                </tr>
                <tr>
                  <td>
                    <b>所属研究室</b>
                  </td>
                  <td>
                  <PageLink link="https://www.tus.ac.jp/academics/teacher/p/index.php?23D1">西山研究室</PageLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kaggle</b>
                  </td>
                  <td>
                    <PageLink link="https://www.kaggle.com/yodaitanaka">re_nan|Competitions Contributor</PageLink>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                  &#129351;0 &#129352;0 &#129353;1
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>AtCoder</b>
                  </td>
                  <td>
                  <PageLink link="https://atcoder.jp/users/re_nan">re_nan</PageLink>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>&#x1f7e4;茶色コーダー(もうすぐ&#x1f7e2;緑いけそう...!)</td>
                </tr>
                <tr>
                  <td style={{height:"50px"}}><b>GitHub</b></td>
                  <td><PageLink link="https://github.com/re-nan6">re-nan6</PageLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    <div id="Skills" className='section' style={{marginTop:"100px"}}>
    <AiFillCode style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>SKILLS
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
    <button className="btn" onClick={() => onOpenDialog("php")}>
    <IconWithLang langName="PHP"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "php"}
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
    <button className="btn" onClick={() => onOpenDialog("git")}>
    <IconWithLang langName="Git"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "git"}
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
    <button className="btn" onClick={() => onOpenDialog("firebase")}>
    <IconWithLang langName="Firebase"/>
    </button>
    <ReactModal
        isOpen={selectedItem === "firebase"}
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
    <div id="Works" className='section' style={{marginTop:"100px"}}>
    <GiCardboardBoxClosed style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>WORKS
    </div>
    <div className='worksbox'>
      <div style={{margin:"10px"}}>
        <div>
        <button className='workbtn' onClick={() => onOpenDialog("portfolio")}>
        <WorkCard imgname='portfoliopage.png'/>
        </button>
        <ReactModal
          isOpen={selectedItem === "portfolio"}
          onRequestClose={() => setSelectedItem('')}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before"
          }}
          className={{
            base: "content-work-base",
            afterOpen: "content-work-after",
            beforeClose: "content-work-before"
          }}
          closeTimeoutMS={400}
          >
            <div className='skillcard'>
            <div className='workpic'>
            <img src={`${process.env.PUBLIC_URL}/portfoliopage.png`} alt="Logo" className="workimg"/>
            </div>
            <div className='workde'>
            <div className='skillfont'>開発日</div>
            1年
            <div className='skillfont'>使用言語</div>
            <span className="star5_rating" data-rate="4"></span>
            <div className='skillfont'>備考</div>
            ドキュメントを参照すれば大抵のことは出来ます
            </div>
            </div>
        </ReactModal>
        </div>
        <div style={{textAlign:"center"}}>ポートフォリオ</div>
      </div>
      <div style={{margin:"10px"}}>
        <button className='workbtn'>
        <WorkCard imgname='comingsoon.jpeg'/>
        </button>
      </div>
    </div>
    <div id="Award" className='section' style={{marginTop:"100px"}}>
    <FaAward style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>AWARD
    </div>
    <div className='awardbox'>
      <AwardFlame>
        <div className='awardpage'>
          <div style={{width:"100px",textAlign:"center"}}>
            <AiFillCrown size={70} color={`black`}/>
          </div>
          <div>
            <div style={{fontSize:"20px",fontWeight:"600",marginTop:"10px"}}>
            第10回スポーツデータ解析コンペティション ポスター部門奨励賞
            </div>
            <div style={{marginTop:"10px"}}>
              受賞2021年1月
            </div>
            <div style={{marginTop:"10px"}}>
            <div>
            サッカーの選手情報(テーブルデータ)に対して統計的手法または機械学習手法を用いることによって幅広く有力な知見の抽出に取り組むコンペに参加しました。
            </div>
            <div>
            「LightGBMを用いた各プレー場面におけるシュート予測とその要因分析」というテーマで取り組み、ポスター部門で奨励賞を獲得しました。
            </div>
            </div>
            <div style={{height:"30px"}}>
            <PageLink link="https://estat.sci.kagoshima-u.ac.jp/sports/compe10.htm">第 10 回スポーツデータ解析コンペティション</PageLink>
            </div>
            <div style={{height:"30px"}}>
            <PageLink link="https://sports.ywebsys.net/news/archives/0014/">コンペ結果</PageLink>
            </div>
          </div>
        </div>
      </AwardFlame>
    </div>
    <div id="Contact" className='section' style={{marginTop:"100px"}}>
    <IoIosMail style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>CONTACT
    </div>
    <div style={{textAlign:"center"}}>
      <MailFlame>
      <div style={{textAlign:"center",fontSize:"30px"}}>
      iadhoy2000[at]gmail.com
      </div>
      </MailFlame>
      <div style={{marginBottom:"50px"}}>
      ※スパム避けにアットマークを[at]としています。
      </div>
    </div>
    <div className='footer'>
      <div className='footerbox'>
        <div>
      <div>
        Yodai Tanaka's Portfolio
      </div>
      <div>
      Last updated Oct 7, 2022
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
