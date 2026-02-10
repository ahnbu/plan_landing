import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  BatteryWarning, 
  Zap, 
  Heart, 
  CheckCircle2, 
  Quote, 
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-slate-900">
            PLANNING<span className="text-orange-600">.DEFENSE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-orange-600 transition-colors">왜 힘든가</a>
            <a href="#solution" className="hover:text-orange-600 transition-colors">솔루션</a>
            <a href="#curriculum" className="hover:text-orange-600 transition-colors">커리큘럼</a>
            <a href="#proof" className="hover:text-orange-600 transition-colors">수강후기</a>
          </div>
          <div className="hidden md:block">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors duration-300">
              수강 신청하기
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a href="#problem" onClick={() => setIsMobileMenuOpen(false)}>왜 힘든가</a>
              <a href="#solution" onClick={() => setIsMobileMenuOpen(false)}>솔루션</a>
              <a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)}>커리큘럼</a>
              <a href="#proof" onClick={() => setIsMobileMenuOpen(false)}>수강후기</a>
              <button className="bg-slate-900 text-white py-4 rounded-xl mt-4">수강 신청하기</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10 opacity-60" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-bold tracking-wide"
          >
            AI 시대, 기획자의 생존 전략
          </motion.div>
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-8"
          >
            가장 희소한 자산은<br className="md:hidden" /> 스킬이 아니라<br />
            <span className="relative inline-block text-orange-600">
              '의욕'입니다
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            남들보다 스킬이 부족해서가 아닙니다. 마음의 엔진이 꺼졌기 때문입니다.<br className="hidden md:block" />
            1초 만에 기획서가 나오는 시대, 끝까지 나를 지키며 일하는<br className="hidden md:block" /> 
            <span className="font-bold text-slate-900">'기획의 방어막'</span>을 설계해 드립니다.
          </motion.p>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              나를 지키는 기획 시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="text-orange-500">★ 4.8</span> 수강생 리얼 후기
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce"
        >
          <ChevronDown />
        </motion.div>
      </section>

      {/* Pain Point Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 배워도 배워도 제자리일까요?</h2>
            <p className="text-slate-500">당신의 노력이 부족해서가 아닙니다.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BatteryWarning className="w-10 h-10 text-red-500" />,
                title: "상사의 짜증과 무례함",
                desc: "한마디에 하루 종일 멘탈이 흔들려 업무에 집중할 수 없습니다."
              },
              {
                icon: <Shield className="w-10 h-10 text-slate-400" />,
                title: "끝없는 자책과 검열",
                desc: "열심히 하고도 '이게 맞나?' 스스로를 의심하며 에너지를 낭비합니다."
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-500" />,
                title: "퇴근 후 방전",
                desc: "집에 가면 손가락 하나 까딱할 힘이 남아있지 않습니다."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                당신은 의욕이 없는 게 아닙니다.<br />
                잠시 <span className="text-orange-400">소진</span>되었을 뿐입니다.
              </h3>
              <p className="text-slate-300">
                물이 새는 독(잘못된 프로세스)에 노력이라는 물을 붓고 있었기 때문입니다.<br />
                이제 그 구멍부터 막아야 합니다.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <div className="text-orange-600 font-bold mb-2 tracking-wide">THE SOLUTION</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Skill이 아니라<br />
                <span className="text-slate-400 line-through decoration-2 decoration-orange-500 mr-2">Structure</span>
                <span className="text-slate-900">Structure</span>를 바꿉니다
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                대부분의 기획 강의는 '더하기(+)'를 가르칩니다. 하지만 저는 '빼기(-)'부터 시작합니다.
                내면의 독소를 제거해야 비로소 노하우가 들어올 자리가 생깁니다.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Remove (제거)", desc: "감정을 갉아먹는 방해물부터 걷어냅니다." },
                  { title: "Restore (복원)", desc: "억지 열정이 아닌, 자연스러운 호기심을 깨웁니다." },
                  { title: "Create (생산)", desc: "나를 보호하는 프로세스로 압도적 성과를 냅니다." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-16 h-16 transform rotate-12" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-slate-800">10년 전, 저도 도망쳤습니다.</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    커리어의 정점, 남들이 부러워할 때 저는 사표를 던졌습니다. 
                    능력이 없어서가 아니었습니다. <strong>의욕이 고갈되었기 때문입니다.</strong>
                  </p>
                  <p>
                    "이 일을 계속할 수 있을까?" 고민했습니다.
                    하지만 이제는 압니다. 기획은 나를 소모하는 일이 아니라,
                    나를 지키며 행복하게 일할 수 있는 도구가 되어야 한다는 것을요.
                  </p>
                  <p>
                    후배들은 저처럼 번아웃에 시달리지 않길 바라는 마음으로,
                    이 커리큘럼을 짰습니다.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    {/* Placeholder for Instructor Image */}
                    <div className="w-full h-full bg-slate-300 flex items-center justify-center text-xs text-slate-500">IMG</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">안병욱 강사</div>
                    <div className="text-sm text-slate-500">기획자 / 비즈니스 컨설턴트</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="proof" className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-orange-400 font-bold mb-4">
              <Star className="w-4 h-4 fill-current" />
              REAL DATA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              숫자가 증명합니다<br />
              <span className="text-orange-500">평점 4.8 / 5.0</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              3개월 장기 과정 중, 가장 뜨거웠던 반응.<br />
              기술만 가르쳤다면 불가능했을 숫자입니다. '마음'을 움직였기에 가능한 결과입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Chat Bubble 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FEE500] text-slate-900 p-6 rounded-2xl rounded-tr-none shadow-lg relative ml-4 md:ml-0"
            >
              <div className="absolute -top-3 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-[#FEE500] border-r-[10px] border-r-transparent transform rotate-12"></div>
              <p className="font-medium text-sm text-slate-700 mb-2">수강생 윤선님</p>
              <p className="leading-relaxed font-bold">
                "단순 지식이나 노하우를 넘어서 매력을 함께 공유할 수 있어서 좋았습니다. 위로도 받고 뭔가 더 해볼 만하겠다는 생각이 들었어요!"
              </p>
            </motion.div>

            {/* Chat Bubble 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-slate-900 p-6 rounded-2xl rounded-tl-none shadow-lg relative mr-4 md:mr-0"
            >
               <div className="absolute -top-3 left-0 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent transform -rotate-12"></div>
              <p className="font-medium text-sm text-slate-500 mb-2">수강생 미영님</p>
              <p className="leading-relaxed">
                <span className="bg-orange-100 px-1">"강사님 강의를 듣고 새로운 목표와 꿈이 생겼다고 합니다~"</span><br />
                강사님처럼 기업 컨설팅하는 기획자가 되고 싶고, 앞으로 열심히 그 목표로 달려가고 싶다고 진로 방향성을 잡았더라고요.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">커리큘럼</h2>
            <p className="text-slate-600">마음 관리부터 실전 아웃풋까지, 빈틈없는 3단계 설계</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "MODULE 01",
                title: "방해물 제거와 마인드셋",
                items: [
                  "상사의 공격을 방어하는 커뮤니케이션 필터링",
                  "자책을 멈추고 객관화하는 기획자의 멘탈 모델링",
                  "내 감정을 소모하지 않고 일하는 '감정의 외주화' 기법"
                ]
              },
              {
                step: "MODULE 02",
                title: "감정을 아끼는 기획 프로세스",
                items: [
                  "맨땅에 헤딩하지 않는 '밑그림' 설계법",
                  "AI를 비서로 부리며 야근을 없애는 도구 활용법",
                  "노력의 낭비를 막는 '중간 점검' 프로세스 구축"
                ]
              },
              {
                step: "MODULE 03",
                title: "설득을 넘어 매혹하는 아웃풋",
                items: [
                  "상대가 거절할 수 없는 논리 구조화 (Logic Flow)",
                  "나의 가치를 증명하는 최종 산출물 제작",
                  "지속 가능한 기획자로 살아남는 커리어 로드맵"
                ]
              }
            ].map((module, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group border border-slate-200 rounded-2xl p-8 hover:border-orange-200 hover:shadow-lg transition-all bg-slate-50 hover:bg-white"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm tracking-wider bg-orange-50 px-3 py-1 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {module.step}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{module.title}</h3>
                    <ul className="space-y-3">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5 group-hover:text-orange-500 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            회사를 위해 배우지 마세요.<br />
            <span className="text-orange-500">당신을 위해</span> 배우세요.
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            기획은 회사의 문제를 해결하는 도구이기 이전에,<br />
            당신이 주도적으로, 행복하게 일하기 위한 무기여야 합니다.<br /><br />
            <span className="text-white font-bold">노하우는 제가 채워드립니다. 당신은 '하고 싶은 마음'만 가지고 오세요.</span>
          </p>
          <button className="bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1">
            나를 지키는 기획, 지금 시작하기
          </button>
          <p className="mt-6 text-sm text-slate-500">
            * 3개월 과정 중 가장 만족도가 높았던 커리큘럼을 압축했습니다.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-4 text-center text-sm border-t border-slate-900">
        <p className="mb-2">© 2026 PLANNING.DEFENSE All rights reserved.</p>
        <p>본 강의는 기획자의 지속 가능한 성장을 응원합니다.</p>
      </footer>
    </div>
  );
};

export default LandingPage;