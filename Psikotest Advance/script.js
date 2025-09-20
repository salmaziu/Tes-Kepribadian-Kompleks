const questions = [
    { question: "Anda merasa lebih bersemangat setelah...", options: { A: "Berinteraksi dengan banyak orang.", B: "Menghabiskan waktu sendirian." }, trait: 'EI' },
    { question: "Saat membuat keputusan, Anda lebih mengutamakan...", options: { A: "Logika dan fakta.", B: "Nilai-nilai pribadi dan perasaan." }, trait: 'TF' },
    { question: "Anda lebih suka fokus pada...", options: { A: "Detail dan apa yang nyata.", B: "Gambaran besar dan kemungkinan." }, trait: 'SN' },
    { question: "Gaya hidup Anda lebih terstruktur dengan...", options: { A: "Perencanaan dan jadwal.", B: "Fleksibilitas dan spontanitas." }, trait: 'JP' },
    { question: "Saat di pesta, Anda biasanya...", options: { A: "Mencari orang baru untuk diajak bicara.", B: "Berinteraksi dengan orang yang sudah Anda kenal." }, trait: 'EI' },
    { question: "Anda cenderung lebih memercayai...", options: { A: "Pengalaman yang terbukti.", B: "Intuisi dan firasat." }, trait: 'SN' },
    { question: "Anda lebih sering memberikan kritik yang...", options: { A: "Objektif dan lugas.", B: "Sensitif dan membangun." }, trait: 'TF' },
    { question: "Anda merasa nyaman ketika...", options: { A: "Tugas sudah diselesaikan.", B: "Masih ada banyak pilihan yang terbuka." }, trait: 'JP' },
    { question: "Saat ada masalah, Anda cenderung...", options: { A: "Langsung membicarakannya dengan orang lain.", B: "Memikirkannya sendiri terlebih dahulu." }, trait: 'EI' },
    { question: "Anda lebih terkesan dengan...", options: { A: "Fakta yang jelas dan akurat.", B: "Kiasan dan makna tersembunyi." }, trait: 'SN' },
    { question: "Anda lebih mementingkan...", options: { A: "Keadilan dan konsistensi.", B: "Hubungan harmonis dan empati." }, trait: 'TF' },
    { question: "Anda lebih suka bekerja...", options: { A: "Dengan tenggat waktu yang ketat.", B: "Dengan jadwal yang longgar." }, trait: 'JP' },
    { question: "Saat bekerja, Anda merasa lebih bersemangat...", options: { A: "Saat bekerja dalam tim.", B: "Saat bekerja sendirian." }, trait: 'EI' },
    { question: "Anda lebih tertarik pada...", options: { A: "Bagaimana sesuatu bekerja.", B: "Mengapa sesuatu ada." }, trait: 'SN' },
    { question: "Pujian yang paling Anda hargai adalah...", options: { A: "Diakui karena kecerdasan Anda.", B: "Diakui karena kebaikan hati Anda." }, trait: 'TF' },
    { question: "Anda lebih memilih untuk...", options: { A: "Menyelesaikan satu hal sebelum pindah ke yang lain.", B: "Mengerjakan beberapa hal sekaligus." }, trait: 'JP' },
    { question: "Anda biasanya bersikap...", options: { A: "Aktif dan berpartisipasi.", B: "Tenang dan mengamati." }, trait: 'EI' },
    { question: "Anda lebih suka cerita yang...", options: { A: "Berfokus pada detail yang realistis.", B: "Penuh dengan ide dan imajinasi." }, trait: 'SN' },
    { question: "Saat mengambil keputusan, Anda cenderung...", options: { A: "Menganalisis pro dan kontra secara cermat.", B: "Mendengarkan kata hati Anda." }, trait: 'TF' },
    { question: "Anda lebih suka memiliki...", options: { A: "Semua hal terorganisir dan diatur.", B: "Banyak pilihan terbuka dan fleksibilitas." }, trait: 'JP' },
];

const results = {
    "ISTJ": {
        description: "Anda adalah seorang ISTJ, dikenal sebagai 'The Inspector'. Anda adalah individu yang praktis, bertanggung jawab, dan sangat teliti. Anda menghargai tradisi, peraturan, dan ketertiban. Anda dapat diandalkan dan selalu menepati janji.",
        strengths: ["Dapat diandalkan", "Berorientasi pada detail", "Praktis", "Bertanggung jawab"],
        weaknesses: ["Sulit beradaptasi", "Cenderung kaku", "Kurang terbuka pada ide baru"]
    },
    "ENFP": {
        description: "Anda adalah seorang ENFP, dikenal sebagai 'The Campaigner'. Anda energik, kreatif, dan suka bersosialisasi. Anda didorong oleh nilai-nilai dan memiliki semangat yang kuat. Anda menyukai ide-ide baru dan selalu mencari kemungkinan yang menarik.",
        strengths: ["Kreatif", "Antusias", "Spontan", "Berempati"],
        weaknesses: ["Mudah bosan", "Tidak terorganisir", "Sulit fokus"]
    },
    "INFP": {
        description: "Anda adalah seorang INFP, dikenal sebagai 'The Mediator'. Anda adalah individu yang idealis, sensitif, dan berempati. Anda didorong oleh nilai-nilai batin dan berusaha untuk menemukan makna dalam hidup. Anda adalah pendengar yang baik dan sangat peduli terhadap orang lain.",
        strengths: ["Idealistik", "Empatis", "Kreatif", "Fleksibel"],
        weaknesses: ["Cenderung terlalu sensitif", "Sulit membuat keputusan", "Menghindari konflik"]
    },
    // Tambahkan 13 tipe kepribadian lainnya (ISFJ, ESTJ, dll) di sini
    "INTJ": {
        description: "Anda adalah seorang INTJ, dikenal sebagai 'The Architect'. Anda adalah seorang pemikir strategis, logis, dan inovatif. Anda suka merencanakan dan menciptakan sistem yang efisien. Anda independen dan sangat percaya diri pada kemampuan Anda.",
        strengths: ["Strategis", "Independen", "Cerdas", "Berwawasan luas"],
        weaknesses: ["Kaku", "Sulit bersosialisasi", "Skeptis"]
    },
    "ISFJ": {
        description: "Anda adalah seorang ISFJ, dikenal sebagai 'The Defender'. Anda adalah individu yang hangat, dapat diandalkan, dan setia. Anda sangat peduli terhadap kebutuhan orang lain dan selalu siap membantu. Anda menghargai tradisi dan stabilitas.",
        strengths: ["Setia", "Dapat diandalkan", "Empatis", "Teliti"],
        weaknesses: ["Cenderung menghindari konflik", "Sulit mengatakan tidak", "Terlalu idealis"]
    },
    "ESFJ": {
        description: "Anda adalah seorang ESFJ, dikenal sebagai 'The Consul'. Anda adalah individu yang sosial, terorganisir, dan peduli terhadap harmoni. Anda sangat menyukai interaksi dengan orang lain dan berorientasi pada pelayanan. Anda senang menjadi bagian dari komunitas yang erat.",
        strengths: ["Sosial", "Loyal", "Praktis", "Berempati"],
        weaknesses: ["Terlalu sensitif terhadap kritik", "Kebutuhan untuk divalidasi", "Cenderung mengikuti aturan"]
    },
    "ISTP": {
        description: "Anda adalah seorang ISTP, dikenal sebagai 'The Virtuoso'. Anda adalah individu yang praktis, observan, dan logis. Anda senang memecahkan masalah secara langsung dan memiliki bakat untuk memahami cara kerja sesuatu. Anda mandiri dan menyukai kebebasan.",
        strengths: ["Logis", "Adaptif", "Independen", "Teliti"],
        weaknesses: ["Cenderung tidak peka", "Mudah bosan", "Tidak suka komitmen"]
    },
    "ESTP": {
        description: "Anda adalah seorang ESTP, dikenal sebagai 'The Entrepreneur'. Anda adalah individu yang energik, spontan, dan berorientasi pada tindakan. Anda suka berada di pusat perhatian dan menikmati tantangan. Anda hidup di masa kini dan suka mengambil risiko.",
        strengths: ["Enerjik", "Spontan", "Realistis", "Dapat beradaptasi"],
        weaknesses: ["Impulsif", "Kurang peka", "Sulit berkomitmen"]
    },
    "ISFP": {
        description: "Anda adalah seorang ISFP, dikenal sebagai 'The Adventurer'. Anda adalah individu yang artistik, sensitif, dan spontan. Anda mengekspresikan diri melalui tindakan dan penampilan. Anda suka menjelajahi dunia dan menjalani hidup dengan fleksibilitas.",
        strengths: ["Kreatif", "Sensitif", "Fleksibel", "Berjiwa bebas"],
        weaknesses: ["Menghindari konflik", "Sulit merencanakan", "Terlalu pasif"]
    },
    "ESFP": {
        description: "Anda adalah seorang ESFP, dikenal sebagai 'The Entertainer'. Anda adalah individu yang energik, spontan, dan berjiwa bebas. Anda suka menjadi pusat perhatian dan menikmati hidup. Anda senang berinteraksi dengan orang lain dan membuat suasana lebih hidup.",
        strengths: ["Sosial", "Menyenangkan", "Optimis", "Spontan"],
        weaknesses: ["Mudah teralihkan", "Kurang disiplin", "Tidak suka teori"]
    },
    "ENTJ": {
        description: "Anda adalah seorang ENTJ, dikenal sebagai 'The Commander'. Anda adalah individu yang tegas, visioner, dan strategis. Anda adalah pemimpin alami yang mampu memotivasi orang lain. Anda suka mengambil alih dan membuat rencana untuk mencapai tujuan.",
        strengths: ["Tegas", "Visioner", "Berorientasi pada tujuan", "Efektif"],
        weaknesses: ["Dominan", "Kurang peka", "Tidak sabar"]
    },
    "ENTP": {
        description: "Anda adalah seorang ENTP, dikenal sebagai 'The Debater'. Anda adalah individu yang cerdas, inovatif, dan suka berdebat. Anda senang menjelajahi ide-ide baru dan menantang status quo. Anda adalah pemecah masalah yang andal.",
        strengths: ["Cerdas", "Inovatif", "Logis", "Kritis"],
        weaknesses: ["Mudah bosan", "Cenderung tidak konsisten", "Suka berdebat"]
    },
    "INTP": {
        description: "Anda adalah seorang INTP, dikenal sebagai 'The Logician'. Anda adalah individu yang analitis, logis, dan suka merenung. Anda adalah pemikir yang mendalam dan selalu mencari kebenaran. Anda lebih suka bekerja sendiri dan fokus pada teori-teori kompleks.",
        strengths: ["Logis", "Independen", "Teliti", "Inovatif"],
        weaknesses: ["Kurang peka secara sosial", "Cenderung mengabaikan detail", "Sulit memulai proyek"]
    },
    "INFJ": {
        description: "Anda adalah seorang INFJ, dikenal sebagai 'The Advocate'. Anda adalah individu yang idealis, intuitif, dan berempati. Anda adalah perencana strategis yang berorientasi pada masa depan. Anda peduli terhadap orang lain dan ingin membuat dunia menjadi tempat yang lebih baik.",
        strengths: ["Empatis", "Visioner", "Intuitif", "Dapat diandalkan"],
        weaknesses: ["Cenderung overthinking", "Sulit mengungkapkan perasaan", "Mudah merasa lelah"]
    },
    "ENFJ": {
        description: "Anda adalah seorang ENFJ, dikenal sebagai 'The Protagonist'. Anda adalah individu yang karismatik, hangat, dan inspiratif. Anda adalah pemimpin alami yang peduli terhadap orang lain dan ingin membantu mereka mencapai potensi terbaiknya. Anda sangat termotivasi oleh nilai-nilai pribadi.",
        strengths: ["Inspirasional", "Empatis", "Karismatik", "Berjiwa sosial"],
        weaknesses: ["Terlalu peduli", "Sulit membuat keputusan", "Mudah merasa lelah"]
    },
    "ESTJ": {
        description: "Anda adalah seorang ESTJ, dikenal sebagai 'The Executive'. Anda adalah individu yang praktis, terorganisir, dan berorientasi pada tindakan. Anda adalah pemimpin alami yang efisien dan dapat diandalkan. Anda menghargai struktur dan bekerja keras untuk mencapai tujuan.",
        strengths: ["Tegas", "Praktis", "Berorientasi pada tujuan", "Dapat diandalkan"],
        weaknesses: ["Kaku", "Tidak suka perubahan", "Kurang peka"]
    }
};

let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let currentAnswer = null;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const personalityType = document.getElementById('personality-type');
const resultDescription = document.getElementById('result-description');
const strengthsList = document.getElementById('strengths-list');
const weaknessesList = document.getElementById('weaknesses-list');
const restartBtn = document.getElementById('restart-btn');

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        questionNumber.textContent = `Pertanyaan ${currentQuestionIndex + 1}/${questions.length}`;
        questionText.textContent = q.question;
        optionA.textContent = q.options.A;
        optionB.textContent = q.options.B;
        
        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            radio.checked = false;
        });

        nextBtn.disabled = true;
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function calculateResult() {
    let result = "";
    result += scores.E >= scores.I ? "E" : "I";
    result += scores.S >= scores.N ? "S" : "N";
    result += scores.T >= scores.F ? "T" : "F";
    result += scores.J >= scores.P ? "J" : "P";
    return result;
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const finalResult = calculateResult();
    const resultData = results[finalResult] || {
        description: "Deskripsi untuk tipe ini belum tersedia.",
        strengths: [],
        weaknesses: []
    };

    personalityType.textContent = finalResult;
    resultDescription.innerHTML = resultData.description;

    strengthsList.innerHTML = '';
    resultData.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });

    weaknessesList.innerHTML = '';
    resultData.weaknesses.forEach(weakness => {
        const li = document.createElement('li');
        li.textContent = weakness;
        weaknessesList.appendChild(li);
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    updateProgressBar();
    displayQuestion();
}

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const q = questions[currentQuestionIndex];
    const value = selectedOption.value;
    
    if (value === 'A') {
        scores[q.trait.charAt(0)]++;
    } else {
        scores[q.trait.charAt(1)]++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener('change', () => {
        nextBtn.disabled = false;
    });
});

restartBtn.addEventListener('click', restartQuiz);

displayQuestion();