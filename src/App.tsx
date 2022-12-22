import './App.scss';
import {useState} from "react";
import {AiFillCrown, AiFillCode} from 'react-icons/ai';
import {FaUser, FaAward} from "react-icons/fa";
import {GiCardboardBoxClosed} from 'react-icons/gi';
import {IoIosMail} from 'react-icons/io';
import AwardFlame from './components/awardFlame';
import PageScroll from './components/pageScroll';
import IconWithLang from './components/iconWithLang';
import MailFlame from './components/mailFlame';
import PageLink from './components/pageLink';
import SkillCard from './components/skillCard';
import SkillModal from './components/skillModal';
import WorkCard from './components/workCard';
import WorkDetail from './components/workDetail';
import WorkModal from './components/workModal';

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('')
  const onOpenDialog = (name: string) => {
    setSelectedItem(name);
  }

  return (
    <div>
      <div className='contents_background'>
        <div className='contents'>
          <div className='contents_detail'>
            <div className='title'>
              Yodai Tanaka's Portfolio
            </div>
            <div>
              <PageScroll refs="Profile"/>
              <PageScroll refs="Skills"/>
              <PageScroll refs="Works"/>
              <PageScroll refs="Award"/>
              <PageScroll refs="Contact"/>
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
        <div className='profile_box'>
          <div style={{margin:"10px"}}>
            <img className='circle_icon' src={`${process.env.PUBLIC_URL}/profileIcon.jpg`} alt="Icon" />
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
        <div className='skill_box'>
          <div className='headline'><span>プログラミング言語</span></div>
          <div className='skills'>
            <button className="skill_button" onClick={() => onOpenDialog("HTML")}>
              <IconWithLang langName="HTML"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="HTML" setSelectedItem={setSelectedItem} >
              <SkillCard langName="HTML" years="1年" star="4" remark="ドキュメントを参照すれば大抵のことは出来ます"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("CSS")}>
              <IconWithLang langName="CSS"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="CSS" setSelectedItem={setSelectedItem} >
              <SkillCard langName="CSS" years="1年" star="4" remark="ドキュメントを参照すれば大抵のことは出来ます"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("JavaScript")}>
              <IconWithLang langName="JavaScript"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="JavaScript" setSelectedItem={setSelectedItem} >
              <SkillCard langName="JavaScript" years="1年" star="4" remark="インターンでの開発や卒業研究の際に使用しました"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("TypeScript")}>
              <IconWithLang langName="TypeScript"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="TypeScript" setSelectedItem={setSelectedItem} >
              <SkillCard langName="TypeScript" years="半年" star="4" remark="インターンでの開発の際に使用しました。このサイトでも使用しています"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("Java")}>
              <IconWithLang langName="Java"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="Java" setSelectedItem={setSelectedItem} >
              <SkillCard langName="Java" years="2年" star="2" remark="大学の授業にてチャットシステムの開発を行いました"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("PHP")}>
              <IconWithLang langName="PHP"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="PHP" setSelectedItem={setSelectedItem} >
              <SkillCard langName="PHP" years="1年" star="2" remark="大学の授業にてショッピングサイトの開発を行いました"/>
            </SkillModal>

            <button className="skill_button" onClick={() => onOpenDialog("Python")}>
              <IconWithLang langName="Python"/>
            </button>
            <SkillModal selectedItem={selectedItem} lang="Python" setSelectedItem={setSelectedItem} >
              <SkillCard langName="Python" years="5年" star="4.5" remark="卒業研究やKaggleにてデータ分析・機械学習を行っていました。AtCoder等の競技プログラミングでも使用しています"/>
            </SkillModal>
            </div>
            <div className='headline'><span>フレームワーク</span></div>
            <div className='skills'>
              <button className="skill_button" onClick={() => onOpenDialog("React")}>
              <IconWithLang langName="React"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="React" setSelectedItem={setSelectedItem} >
                <SkillCard langName="React" years="半年" star="3" remark="インターンでの開発の際に使用しました。このサイトでもReactを使用しています"/>
              </SkillModal>

              <button className="skill_button" onClick={() => onOpenDialog("Vue")}>
              <IconWithLang langName="Vue"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="Vue" setSelectedItem={setSelectedItem} >
                <SkillCard langName="Vue" years="半年" star="3" remark="インターンでの開発の際に使用しました"/>
              </SkillModal>

              <button className="skill_button" onClick={() => onOpenDialog("jQuery")}>
                <IconWithLang langName="jQuery"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="jQuery" setSelectedItem={setSelectedItem} >
                <SkillCard langName="jQuery" years="半年" star="3" remark="インターンでの開発の際に使用しました"/>
              </SkillModal>

              <button className="skill_button" onClick={() => onOpenDialog("Flask")}>
                <IconWithLang langName="Flask"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="Flask" setSelectedItem={setSelectedItem} >
                <SkillCard langName="Flask" years="2か月" star="3" remark="大学の授業にてレコメンドサービスの開発を行いました"/>
              </SkillModal>

              <button className="skill_button" onClick={() => onOpenDialog("FastAPI")}>
                <IconWithLang langName="FastAPI"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="FastAPI" setSelectedItem={setSelectedItem} >
                <SkillCard langName="FastAPI" years="2か月" star="3" remark="趣味でレコメンドサービスの開発を行いました"/>
              </SkillModal>
            </div>
            <div className='headline'><span>開発支援ツール</span></div>
            <div className='skills'>
              <button className="skill_button" onClick={() => onOpenDialog("Git")}>
                <IconWithLang langName="Git"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="Git" setSelectedItem={setSelectedItem} >
                <SkillCard langName="Git" years="2年" star="3.5" remark="基本的なことはできます"/>
              </SkillModal>
            </div>
            <div className='headline'><span>クラウドプラットフォーム</span></div>
            <div className='skills'>
              <button className="skill_button" onClick={() => onOpenDialog("Firebase")}>
                <IconWithLang langName="Firebase"/>
              </button>
              <SkillModal selectedItem={selectedItem} lang="Firebase" setSelectedItem={setSelectedItem} >
                <SkillCard langName="Firebase" years="一か月" star="2.5" remark="インターンの開発にて使用しました"/>
              </SkillModal>
            </div>
        </div>
      </div>
      <div id="Works" className='section' style={{marginTop:"100px"}}>
        <GiCardboardBoxClosed style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>WORKS
      </div>
      <div className='works_box'>
        <div style={{margin:"10px"}}>
          <div>
            <button className='work_button' onClick={() => onOpenDialog("portfolio")}>
              <WorkCard imageName='portfoliopage.png'/>
            </button>
            <WorkModal selectedItem={selectedItem} work="portfolio" setSelectedItem={setSelectedItem} title="ポートフォリオサイト">
              <WorkDetail link={`${process.env.PUBLIC_URL}/portfoliopage.png`} siteUrl="1年" githubUrl='https://github.com/re-nan6/MyPortfolio' remark="ドキュメントを参照すれば大抵のことは出来ます" skills={["TypeScript","React","Git"]}/>
            </WorkModal>
          </div>
          <div style={{textAlign:"center"}}>ポートフォリオ</div>
        </div>
        <div style={{margin:"10px"}}>
          <button className='work_button'>
            <WorkCard imageName='comingsoon.jpeg'/>
          </button>
        </div>
      </div>
      <div id="Award" className='section' style={{marginTop:"100px"}}>
        <FaAward style={{position:"relative", top:"15px",right:"10px"}}size={70} color={`black`}/>AWARD
      </div>
      <div className='award_box'>
        <AwardFlame>
          <div className='award_page'>
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
        <div className='footer_box'>
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
