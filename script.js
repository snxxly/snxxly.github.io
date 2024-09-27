
// Language data
const languageData = {
    en: {
        title: "Welcome to SunProject",
        projectsTitle: "Our Projects",
        teamTitle: "Meet the Team",
        blogTitle: "Blog",
        contactTitle: "Contact Us",
        donateTitle: "Support Us",
        donateText: "If you like what we do, consider supporting us!",
        languageToggle: "Русский",
    },
    ru: {
        title: "Добро пожаловать в SunProject",
        projectsTitle: "Наши проекты",
        teamTitle: "Наша команда",
        blogTitle: "Блог",
        contactTitle: "Свяжитесь с нами",
        donateTitle: "Поддержите нас",
        donateText: "Если вам нравится то, что мы делаем, подумайте о том, чтобы поддержать нас!",
        languageToggle: "English",
    }
};

let currentLanguage = 'en'; // default language

// Function to switch languages
function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    updateContent();
}

// Update content based on the selected language
function updateContent() {
    document.getElementById('main-title').innerText = languageData[currentLanguage].title;
    document.getElementById('projects-title').innerText = languageData[currentLanguage].projectsTitle;
    document.getElementById('team-title').innerText = languageData[currentLanguage].teamTitle;
    document.getElementById('blog-title').innerText = languageData[currentLanguage].blogTitle;
    document.getElementById('contact-title').innerText = languageData[currentLanguage].contactTitle;
    document.getElementById('donate-title').innerText = languageData[currentLanguage].donateTitle;
    document.getElementById('donate-text').innerText = languageData[currentLanguage].donateText;
    document.getElementById('language-toggle').innerText = languageData[currentLanguage].languageToggle;
}

// Event listener for language toggle button
document.getElementById('language-toggle').addEventListener('click', switchLanguage);

// Initial content update
updateContent();
