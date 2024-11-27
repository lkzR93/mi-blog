const translations = {
    en: {
        'about-title': 'About Me',
        'about-description': 'Welcome to my personal blog about technology and coffee.',
        'about-intro': 'Hello! I\'m a passionate developer and technology enthusiast. Welcome to my corner of the internet where I share my journey in software development.',
        'about-focus': 'This blog focuses on web development, programming best practices, and my experiences learning new technologies.',
        'about-belief': 'I believe in continuous learning and sharing knowledge with the community.',
        'skills-title': 'Skills & Interests',
        'skill-1': 'Skill 1',
        'skill-2': 'Skill 2',
        'skill-3': 'Skill 3',
        'skill-4': 'Skill 4',
        'skill-5': 'Skill 5',
        'skill-6': 'Skill 6',
        'contact-title': 'Contact Me',
        'contact-description': 'Get in touch with me for any questions or suggestions.',
        'name': 'Name',
        'email': 'Email address',
        'message': 'Message',
        'send': 'Send'
    },
    ko: {
        'about-title': '내 소개',
        'about-description': '기술과 커피에 대한 제 개인 블로그에 오신 것을 환영합니다.',
        'about-intro': '안녕하세요! 저는 열정적인 개발자이자 기술 애호가입니다. 제가 소프트웨어 개발 여정을 공유하는 이 공간에 오신 것을 환영합니다.',
        'about-focus': '이 블로그는 웹 개발, 프로그래밍 모범 사례, 그리고 새로운 기술을 배우는 제 경험에 중점을 둡니다.',
        'about-belief': '저는 지속적인 학습과 커뮤니티와의 지식 공유를 믿습니다.',
        'skills-title': '기술 & 관심사',
        'skill-1': '기술 1',
        'skill-2': '기술 2',
        'skill-3': '기술 3',
        'skill-4': '기술 4',
        'skill-5': '기술 5',
        'skill-6': '기술 6',
        'contact-title': '연락하기',
        'contact-description': '질문이나 제안이 있으시면 연락 주세요.',
        'name': '이름',
        'email': '이메일 주소',
        'message': '메시지',
        'send': '보내기'
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    const langIndicator = document.querySelector('.lang-indicator');
    
    document.documentElement.lang = newLang;
    langIndicator.textContent = newLang.toUpperCase();
    
    applyTranslations(newLang);
    localStorage.setItem('language', newLang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    
    if (savedLang !== document.documentElement.lang) {
        document.documentElement.lang = savedLang;
        const langIndicator = document.querySelector('.lang-indicator');
        if (langIndicator) {
            langIndicator.textContent = savedLang.toUpperCase();
        }
        applyTranslations(savedLang);
    }
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});

// Exportar la función para que theme-toggle.js pueda usarla
window.applyTranslations = applyTranslations; 