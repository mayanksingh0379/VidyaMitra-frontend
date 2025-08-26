import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const examData = [
  {
    key: 'clat',
    name: 'CLAT - Law',
    icon: '⚖️',
    resources: [
      { type: 'course', label: 'Paid Course', url: 'https://www.googleadservices.com/pagead/aclk?sa=L&pf=1&ai=DChsSEwiSk5SZgqmPAxXyHIMDHaEULQgYACICCAEQARoCc2Y&co=1&ase=2&gclid=EAIaIQobChMIkpOUmYKpjwMV8hyDAx2hFC0IEAAYASAAEgLX3fD_BwE&ohost=www.google.com&cid=CAASJORoYLK_ZIffpLWIEi4uLh1zfp77iSG4yIYt3mSkM-xZ7qhWqw&category=acrcp_v1_40&sig=AOD64_01m77JZ3bZDbClb1cw6uja_HDYzg&q&nis=4&adurl=https://lp.pw.live/PW-CLAT?utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dpwg1-rg-clat-india-google-website-leads-sem-cpl-na-online-na-zenith-18-may-2024%26utm_term%3Dkeyword-generic-phrase-18-may-2024%26utm_content%3Dclat-text-na-clat-na-ad1-18-may-2024%26gad_source%3D1%26gad_campaignid%3D21307593502%26gbraid%3D0AAAAACV__W53arRIc6zoXxkM5dN7pgdfi%26gclid%3DEAIaIQobChMIkpOUmYKpjwMV8hyDAx2hFC0IEAAYASAAEgLX3fD_BwE&ved=2ahUKEwi8wI-ZgqmPAxU-Q2cHHcxVIXAQ0Qx6BAgZEAE' },
      { type: 'video', label: 'YouTube Resource', url: 'https://www.youtube.com/watch?v=D0PvwXa8ckg&pp=ygUSY2xhdCBleGFtIGRldGFpbHMg' },
      { type: 'book', label: 'CLAT Exam Guide', url: 'https://www.amazon.in/CLAT-Exam-Guide-LearnX/dp/B07Z3M6143/ref=sr_1_1?crid=1VMQ5AI6V6FGX&dib=eyJ2IjoiMSJ9.nMQau2UeJ_51cENx0Li22NTwu4A5GpXRKxxduwtD1Hm4Vk4hDCEC7SBjnC-97i7yydMjEoAHvAsI9TwdtnLr4bpmt5lbgUOx9qDHcTaNtXYH3R-Gyxhwzsy4kBGL5tbF-Lm4rfcSrAdJr5QDDElJ1v3HoV63fKmQ2I2fRcoF5lp5t2e_gtbP7g6VLU8YyDXnqZGxvCmL4zTqQBfwzTu8fDiE9k7WpMd4jlp_ZLiA2oI.q343TsLzgprVwPDFZsoPXGQYnXGyu9NHt6mgo4W8ygg&dib_tag=se&keywords=clat+books+for+preparation+2026&qid=1756230044&sprefix=clat+books+%2Caps%2C569&sr=8-1' },
      { type: 'book', label: 'PYQ', url: 'https://www.amazon.in/Oswaal-Year-wise-Previous-2021-2025-Admission/dp/9367474938/ref=sr_1_2?crid=1VMQ5AI6V6FGX&dib=eyJ2IjoiMSJ9.nMQau2UeJ_51cENx0Li22NTwu4A5GpXRKxxduwtD1Hm4Vk4hDCEC7SBjnC-97i7yydMjEoAHvAsI9TwdtnLr4bpmt5lbgUOx9qDHcTaNtXYH3R-Gyxhwzsy4kBGL5tbF-Lm4rfcSrAdJr5QDDElJ1v3HoV63fKmQ2I2fRcoF5lp5t2e_gtbP7g6VLU8YyDXnqZGxvCmL4zTqQBfwzTu8fDiE9k7WpMd4jlp_ZLiA2oI.q343TsLzgprVwPDFZsoPXGQYnXGyu9NHt6mgo4W8ygg&dib_tag=se&keywords=clat+books+for+preparation+2026&qid=1756230044&sprefix=clat+books+%2Caps%2C569&sr=8-2' }
    ]
  },
  {
    key: 'jee',
    name: 'IIT JEE',
    icon: '🧮',
    resources: [
    { type: 'video', label: 'PW Free Videos', url: 'https://www.youtube.com/@PhysicsWallah' },
    { type: 'course', label: 'PW Paid Batch', url: 'https://www.pw.live/iit-jee' },
    { type: 'book', label: 'Books - Maths', url: 'https://www.amazon.in/Cengage-Mathematics-Combo-JEE-Advanced/dp/9366603718/ref=sr_1_3?crid=2CM81IPPV1P5L&dib=eyJ2IjoiMSJ9.bUB9FqNyZwLNzgUcSL6E4HCxd3B0-ZUs6yE0KURKzF2-eXJpWXjxPONdxXRCWnowXL0eueseLDKf_IvLo01eZZxmV1-MOTbOaeCQx3EgEhf9zhUwYV2mr0pkrm4IHNkh_qPpUAQxmz2lcRM32udpxdXzOyn4UU5JotFFPdnFWNTpJ5bdDN09vHvdStJQVLLut-q40F93G-aPm3YCUKJuQzKnd09M2DVSeB4NDOHJLcU.1pNhtBGm47YwjmP1o3-pScTFMvJcqbVxcsnN4cFWnCQ&dib_tag=se&keywords=cengage+maths+jee&nsdOptOutParam=true&qid=1756218373&sprefix=Cengage+%2Caps%2C283&sr=8-3' },
    { type: 'book', label: 'Books - Physics', url: 'https://www.amazon.in/Cengage-Physics-Combo-Advanced-Electromagnetic/dp/9366601472/ref=sr_1_3?crid=2LMLAH57THPM1&dib=eyJ2IjoiMSJ9.CuJRp5ClHElda8CZa3c2Ybg1sOzLvgYyTlEa35N3jhj6RN6OIpWDC9I_wxNu0C7m584xZU8UyeogLnX7MBBjX7DjvFe9GHMGzq2WPrYZx6jhAKPy3cRX4UCJclT6kg56LUyBflVkGuRpA9SYz0-mvWddERRxB1aD5tBRy4xBLLX_eRWHu2bnvCtpvMge34bt9Iry0DBifLlaNUdDK8uFzFAfhgn0SF9DiwjUuqitbIM.77B5JUdptiIPCyUyiEzjB99CHb78MXBGckJosT1W2QA&dib_tag=se&keywords=cengage+physics+jee&nsdOptOutParam=true&qid=1756218487&sprefix=cengage+physics+jee%2Caps%2C282&sr=8-3' },
    { type: 'book', label: 'Books - Chemistry', url: 'https://www.amazon.in/Cengage-Chemistry-Combo-JEE-Advanced/dp/9366602746/ref=sr_1_1?crid=14S5EQZI9BHPW&dib=eyJ2IjoiMSJ9.2hWhTiMDP0vdtoqhDXw7EUV0wQs2BjqxM38eLAUt0GBlvOecBiQKbJR9OiER8l6bTE0OFwDqGaOV-b0T5SAAJX4sHPOoNGxUkDhdPsSpwqs3M8ABXDr6Yh53QpbsvznA-KThidop1BnSaW-zble-d0oKPq0-U1mn6g-pIAGHAQIlPahVEUW3PqeVWsSHimiQcVkdi7LWUAMqXmO83LtqsgWUpDye5xXL5zLd6tkFYcU.KrFt4K_M7LFl9gtJt9jcriTd9pVvLaiv7CvaHJqQAsk&dib_tag=se&keywords=cengage+chemistry+jee&nsdOptOutParam=true&qid=1756218526&sprefix=cengage+chemistry+jee%2Caps%2C264&sr=8-1' },
    { type: 'book', label: 'Books - PYQs', url: 'https://www.amazon.in/Disha-Combo-Books-Errorless-Advanced/dp/9362254336/ref=sr_1_3?crid=3W02NPD018SCC&dib=eyJ2IjoiMSJ9.RDuOLY3upEccJqjk0-MHQz8r98L-3qquk0ZQbDypM-rwlbiNXE86W7__CXTRFePqbo8I31kKYGzzx9vLJ6HNGsLDyq0kwFwjf_x6k1K46PlJ0EAs9LBf7hMBgDp1tEqYn614R6dRaZdcxoCYCZrO1BC7JuQuiOsvQUPWq6rQ7jNzdW1bbT6vl4zIfMNwwwJw0BW_3idg7nwHpcvgg4VUiZbR7jL-Fg66SejJj3Dn20M.aBQSd9s6ihne6BhMCI0Ls3AVMS5nsOgIIXUpkeUG3_8&dib_tag=se&keywords=iit+jee+pyq&qid=1756218576&sprefix=iit+jee+pyq%2Caps%2C273&sr=8-3' },
      
    ]
  },
  {
    key: 'neet',
    name: 'NEET',
    icon: '🩺',
    resources: [
      { type: 'video', label: 'PW Free Videos', url: 'https://www.youtube.com/@PhysicsWallah' },
    { type: 'course', label: 'PW Paid Batch', url: 'https://www.pw.live/neet' },
    { type: 'book', label: 'Books - Maths', url: 'https://www.amazon.in/Arihant-Objective-Physics-Practice-Exercise/dp/936840254X/ref=sr_1_3?crid=C72S38LI5YAU&dib=eyJ2IjoiMSJ9.NtK10V5_e0MA4ejr_xS_LumJq4y7OaqJFD9kJeVprYEPT6legg6VEvfUVX2Ba0HJrzf2DDNFcC2LqnMd7o5p_TgL13XGcGjWliy9hBRWfeCqcFSCpAxX7eK5WnzbkYyFow1SsIzF2DL4VaCMnOhKCskN1YXLNKLESWrNgec4ILblJOa_nzsKf5Mn2cJ0VlV5CuEdG1_Dn7RNEOpOZRBzRm2ILUhGHQxNasibxVEd-oY.4zzWaFhcwmv9knXvSh3-jGgfR3d4x8vBUN7Qey_1os4&dib_tag=se&keywords=neet+physics&qid=1756218729&sprefix=neet+physics+%2Caps%2C363&sr=8-3' },
    { type: 'book', label: 'Books - Physics', url: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMTM1MjA4NDgwNTU5MzMwOjE3NTYyMTg3ODY6c3BfYXRmOjMwMDQ5Mzg5NTEzMjAzMjo6MDo6&url=%2FObjective-Chemistry-Achievers-Exercises-Preparation%2Fdp%2F936840688X%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3A8N7NHJYOMV5%26dib%3DeyJ2IjoiMSJ9.aQp5EtMDwElxOR_Gfii_WWeFEVc_tgyyqHGiHWjfnLjJmQWp-GD6-baSfURu5t2QHFPQxovyhx6PHbLGkxqkJ2EvOgCrxG7B2y8sO6TbPxEk5daLf4yPJci7UvAt3puaW_-zW3hU3hMXMuyGcX_AwB_3yEfshLn_IC1UA8c1I3o2tC_4M96qWcP8prvjuMdgJaem-jemAhmfyboDsp636OmyxQKZ-KSigdnoA_IyX1E.sCE_Mkd2d6Ww7ysTUQxXHcUMoIxXd6pfX1EAhRfggWk%26dib_tag%3Dse%26keywords%3Dneet%2Bchemistry%26qid%3D1756218786%26sprefix%3Dneet%2Bchemistry%252Caps%252C283%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=VAzdQmQ18P&sp_cr=ZAZ' },
    { type: 'book', label: 'Books - Chemistry', url: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMzAwMzEwODk0NTc1NzY1OjE3NTYyMTg4MjE6c3BfYXRmOjMwMDU5NTMxNTEyMTEzMjo6MDo6&url=%2FObjective-NCERT-FINGERTIPS-Biology-2025-2026%2Fdp%2F9369574700%2Fref%3Dsr_1_1_sspa%3Fcrid%3DOLRKZJVT047R%26dib%3DeyJ2IjoiMSJ9.NMxTuYgNPnMqZh9669W-zI4qPRRMvcoeZL0BUrNPsMa9zpkuj1162ZzK0SOlXpEI216icGilfer9Dkp0qoRapAm4ihqu9ee7JUAGA0OQm2hNxyg5YPLUV_SazEoGQkXxcgwa8T3xWKLoLNUWkza7D7mou9yt17hbWdpakM7nBQqdecuSRINVU-79ClLlDerPJ8uZ7t03wl-10X_U0AknltDjsVcsjsWVTZmZPXCA0tg.wH5eiwjqfGN3oDDZelykHXMVjSNIevbOSd6p1Q2Huls%26dib_tag%3Dse%26keywords%3Dmtg%2Bbiology%26nsdOptOutParam%3Dtrue%26qid%3D1756218821%26sprefix%3Dmtg%2Bbiology%252Caps%252C267%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=86Ss9Bkc8p&sp_cr=ZAZ' },
    { type: 'book', label: 'Books - PYQs', url: 'https://www.amazon.in/Previous-Question-Physics-Chemistry-Biology/dp/9368976104/ref=sr_1_3?crid=2X5K9KIA8SY6&dib=eyJ2IjoiMSJ9.h84scBsFw9sWpHu7gpxQJmoSgj7VrgSZpcidyPjcGG6ZUW8ehvnerxeKePu4KHFfWrvhhYmzlEqm2Q5yfmqZt7OufosVskI7vfHo4q2PRaNZ0c8IwHaB9loZFR-6OkzmYseTHRJnh9nDgB1GfpHl8kUaeIi0w6rZUrYCilDBlAYrmq3tnaB_EKa5iuoWFCFluXNz7tQl-p1LQQHZw5LWyCJfuSPYCe3dTDpP-7ZgKJI.LJNE_wHCyguL4HdzmPxiDbtex8_u05nkLzh4AoAR-Ec&dib_tag=se&keywords=neet+pyq+books&qid=1756229114&sprefix=ne%2Caps%2C2173&sr=8-3' },
    ]
  },
  {
    key: 'bitsat',
    name: 'BITSAT',
    icon: '🛩️',
    resources: [
      { type: 'note', label: 'Preparation for BITSAT is similar to JEE Mains.', url: '' },
      { type: 'video', label: 'BITSAT Prep (YouTube)', url: 'https://www.youtube.com/watch?v=CaSa1LZ86_c&pp=ygUGYml0c2F0' },
      //{ type: 'book', label: 'Practice & Solved Papers', url: 'https://www.amazon.in' },
      { type: 'course', label: 'Fodu Club BITSAT', url: 'https://phodu.club/crash-course/bitsat-crash-course/' },
      //{ type: 'site', label: 'BITSAT Official', url: 'https://www.bits-pilani.ac.in' }
    ]
  },
  {
    key: 'upsc',
    name: 'UPSC',
    icon: '🏛️',
    resources: [
    { type: 'course', label: 'PW Paid Batch', url: 'https://pwonlyias.com' },
    { type: 'video', label: 'Free Batch', url: 'https://www.youtube.com/@PWOnlyIASUPSC' },
    { type: 'video', label: 'YouTube', url: 'https://www.youtube.com/watch?v=FvDLtR5kHMM&pp=ygUYaWFzIGZyZWUgb25saW5lIGNvYWNoaW5n0gcJCbIJAYcqIYzv' }
    ]
  },
  {
    key: 'abroad',
    name: 'Study Abroad',
    icon: '✈️',
      resources: [
        { type: 'exam', label: 'SAT', url: 'https://www.youtube.com/watch?v=9eObeYSeAqc&pp=ygUOU0FUIGZ1bGwgZ3VpZGU%3D' },
        { type: 'exam', label: 'GRE', url: 'https://www.youtube.com/watch?v=jWrYhwByp2g&pp=ygUOR1JFIGZ1bGwgZ3VpZGU%3D' },
        { type: 'exam', label: 'TOEFL', url: 'https://www.youtube.com/watch?v=7XA49rWNiqw&pp=ygUQVE9FRkwgZnVsbCBndWlkZQ%3D%3D' },
        { type: 'exam', label: 'IELTS', url: 'https://www.youtube.com/watch?v=HDhlXPBXwFA&pp=ygUQSUVMVFMgZnVsbCBndWlkZQ%3D%3D' },
        { type: 'exam', label: 'German Goethe', url: 'https://www.youtube.com/watch?v=MEVk9j2PASQ&pp=ygUsYmhhcmF0IGluIGdlcm1hbnkgYWxsIGFib3V0IHN0dWR5IGluIGdlcm1hbnk%3D' }
      ]
  }
];

const skills = [
  { key: 'web', title: 'Web Development', icon: '💻', links: [{ label: 'Youtube Course', url: ' https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w' }, { label: 'Udemy Course', url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/' }] },
  { key: 'ai', title: 'AI', icon: '🤖', links: [{ label: 'Harvard AI Course', url: 'https://www.youtube.com/watch?v=5NgNicANyqM&pp=ygUPYWkgZnJlZWNvZGVjYW1w' }, { label: 'Andrew Ng (Coursera)', url: 'https://www.coursera.org/specializations/machine-learning-introduction?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_machine-learning-introduction_deeplearning-ai_ftcof_specializations_cx_dr_bau_gg_sem_pr_in_all_m_hyb_23-09_x&campaignid=20594446971&adgroupid=155746416204&device=c&keyword=coursera%20machine%20learning&matchtype=p&network=g&devicemodel=&creativeid=698085043084&assetgroupid=&targetid=kwd-295266333969&extensionid=&placement=&gad_source=1&gad_campaignid=20594446971&gbraid=0AAAAADdKX6arf-sgQy4qGA67nqRaSSw7O&gclid=EAIaIQobChMIr7uwjYSpjwMV3KtmAh0mxjjpEAAYASAAEgKhpfD_BwE' }] },
  { key: 'data', title: 'Machine Learning', icon: '📊', links: [{ label: 'Youtube Course', url: 'https://www.youtube.com/watch?v=hDKCxebp88A&pp=ygUPbWwgZnJlZWNvZGVjYW1w' }] },
  { key: 'comm', title: 'App Development', icon: '📱', links: [{ label: 'Youtube Course', url: 'https://www.youtube.com/watch?v=1bQwDO88Gyw&pp=ygUbaW9zIGRldmVsb3BtZW50IGZ1bGwgY291cnNl' }] },
  { key: 'lead', title: 'Leadership', icon: '🧭', links: [{ label: 'Harvard Business Review', url: 'https://hbr.org' }] },
  { key: 'devops', title: 'Communication', icon: '🗣️', links: [{ label: 'Youtube Guide', url: 'https://www.youtube.com/watch?v=5m-C5mwpmxU&pp=ygUgY29tbXVuaWNhdGlvbiBza2lsbHMgZnVsbCBjb3Vyc2U%3D' }] }
];

function Resources() {
  useEffect(() => {
    // attach simple accordion listeners (vanilla JS style) for progressive enhancement
    const toggles = document.querySelectorAll('.accordion__header');
    const listeners = [];

    toggles.forEach((h) => {
      const handler = () => {
        const panel = h.nextElementSibling;
        const open = h.classList.contains('is-open');
        if (open) {
          h.classList.remove('is-open');
          panel.style.maxHeight = null;
          panel.style.paddingBottom = '0';
        } else {
          h.classList.add('is-open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.paddingBottom = '1rem';
        }
      };

      h.addEventListener('click', handler);
      listeners.push({ el: h, handler });
    });

    // cleanup listeners on unmount
    return () => {
      listeners.forEach(({ el, handler }) => el.removeEventListener('click', handler));
    };
  }, []);

  const [openExam, setOpenExam] = useState(null);
  const [openSkill, setOpenSkill] = useState(null);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  return (
    <main className="main container resources-page">
      <SEO title="Career & Exam Resources" description="Curated free and paid resources for top exams and skills." url="/resources" />
  <header className="home-hero" style={{ marginBottom: '3rem' }}>
        <h1 className="home-greeting">Top Resources</h1>
        <p className="section__subtitle" style={{ color: '#000', fontWeight: 600, marginTop: '0.75rem', marginBottom: '0.5rem' }}>
          Curated free and paid resources for top exams and skills.
        </p>
      </header>

      {/* Centered search bar */}
      <div className="resources-search" style={{ maxWidth: 640, margin: '0 auto 2rem', padding: '0 1rem' }}>
        <form onSubmit={(e) => { e.preventDefault(); setAppliedQuery(query.trim()); }} className="search-form" style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', alignItems: 'center' }}>
          <input
            className="search-input"
            placeholder="Search Exams and Resources"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search exams and resources"
            style={{ flex: '0 1 600px', textAlign: 'center' }}
          />
          { (query || appliedQuery) && (
            <button type="button" className="btn" style={{ padding: '0.55rem 0.9rem' }} onClick={() => { setQuery(''); setAppliedQuery(''); }} aria-label="Clear search">Clear</button>
          ) }
        </form>
      </div>

      {/* Competitive Exams — restored in-card expandable cards */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section__title" style={{ color: 'white' }}>Competitive Exams</h2>
  <div className="careers-grid" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {examData
            .filter((ex) => {
              if (!appliedQuery) return true;
              const q = appliedQuery.toLowerCase();
              if (ex.name.toLowerCase().includes(q)) return true;
              return ex.resources.some((r) => r.label.toLowerCase().includes(q));
            })
            .map((ex) => {
              const isOpen = openExam === ex.key;
              return (
                <article
                  key={ex.key}
                  className={`career-card card exam-card ${isOpen ? 'is-open' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenExam(isOpen ? null : ex.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenExam(isOpen ? null : ex.key);
                    }
                  }}
                  style={{ padding: '1rem', transition: 'transform 260ms ease', width: '320px', minWidth: '320px', boxSizing: 'border-box' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.5rem' }}>{ex.icon}</span>
                      <div style={{ textAlign: 'left' }}>
                        <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{ex.name}</h3>
                        <small style={{ color: 'var(--ink-muted)' }}>Click to {isOpen ? 'collapse' : 'expand'}</small>
                      </div>
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{isOpen ? '−' : '+'}</div>
                  </div>
                  <div
                    className="exam-details"
                    style={{
                      maxHeight: isOpen ? 400 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 360ms ease, padding 260ms ease',
                      paddingTop: isOpen ? '1rem' : '0'
                    }}
                  >
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                      {ex.resources
                        .filter((r) => {
                          if (!query) return true;
                          const q = query.toLowerCase();
                          return (
                            ex.name.toLowerCase().includes(q) ||
                            r.label.toLowerCase().includes(q)
                          );
                        })
                        .map((r, i) => (
                          <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                            <span style={{ width: 28 }}>{r.type === 'video' ? '🎥' : r.type === 'book' ? '📘' : r.type === 'course' ? '🎓' : '🌐'}</span>
                            <a href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{r.label}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </article>
              );
            })}
        </div>
      </section>

      {/* Skill cards grid — expandable like Competitive Exams */}
      <section>
        <h2 className="section__title" style={{ color: 'white' }}>Skill Development</h2>
  <div className="skill-grid" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {skills.map((s) => {
            const isOpen = openSkill === s.key;
            return (
              <article
                key={s.key}
                className={`career-card card exam-card ${isOpen ? 'is-open' : ''}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`details-${s.key}`}
                onClick={() => setOpenSkill(isOpen ? null : s.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenSkill(isOpen ? null : s.key);
                  }
                }}
                style={{ padding: '1rem', transition: 'transform 260ms ease', width: '320px', minWidth: '320px', boxSizing: 'border-box' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{s.title}</h3>
                      <small style={{ color: 'var(--ink-muted)' }}>Click to {isOpen ? 'collapse' : 'expand'}</small>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{isOpen ? '−' : '+'}</div>
                </div>

                <div
                  id={`details-${s.key}`}
                  className="exam-details"
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 360ms ease, padding 260ms ease',
                    paddingTop: isOpen ? '1rem' : '0'
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                    {s.links.map((l, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                        <span style={{ width: 28 }}>🔗</span>
                        <a href={l.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Resources;
