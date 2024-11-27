const translations = {
    en: {
        // Navbar
        'blog': 'Blog',
        'about': 'About',
        'contact': 'Contact',
        
        // Contact page
        'contact-title': 'Contact Me',
        'name': 'Name',
        'email': 'Email address',
        'message': 'Message',
        'send': 'Send',
        
        // Footer
        'follow-github': 'Follow me on GitHub',
        'copyright': '© 2024 Copyright:'
    },
    ko: {
        // Navbar
        'blog': '블로그',
        'about': '소개',
        'contact': '연락처',
        
        // Contact page
        'contact-title': '연락하기',
        'name': '이름',
        'email': '이메일 주소',
        'message': '메시지',
        'send': '보내기',
        
        // Footer
        'follow-github': 'GitHub에서 팔로우하기',
        'copyright': '© 2024 저작권:'
    }
};

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    const langIndicator = document.querySelector('.lang-indicator');
    
    document.documentElement.lang = newLang;
    langIndicator.textContent = newLang.toUpperCase();
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[newLang][key]) {
            element.textContent = translations[newLang][key];
        }
    });
    
    // Save preference
    localStorage.setItem('language', newLang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang !== 'en') {
        document.documentElement.lang = savedLang;
        document.querySelector('.lang-indicator').textContent = savedLang.toUpperCase();
        toggleLanguage();
    }
    
    // Add click event
    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
}); 