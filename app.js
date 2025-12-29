
const semesters = {
    1: ["MAE101 - Mathematics for Engineering", "CSI104 - Intro to CS", "SSG104 - Communication"],
    2: ["PRO192 - Java Programming", "MAD101 - Discrete Math", "OSG202 - OS"],
    3: ["CSD201 - Data Structures & Algo", "DBI202 - Database Systems", "JPD113 - Japanese"],
    4: ["PRN211 - C# & .NET", "SWR302 - Software Requirement", "IOT102 - IoT Basics"],
    5: ["SWP391 - Application Development Project", "SWT301 - Software Testing"],
    6: ["SWR302 - Advanced Web", "PRM392 - Mobile Dev"],
    7: ["OJT - On the Job Training"],
    8: ["PRN231 - API & Services", "ML101 - Machine Learning"],
    9: ["Capstone Project"]
};

function renderNav() {
    const nav = document.getElementById('semester-nav');
    let html = '';
    for (let i=1; i<=9; i++) {
        html += `<div class="nav-title">Học kỳ ${i}</div>`;
        semesters[i].forEach(sub => {
            let code = sub.split(' - ')[0];
            html += `<div class="nav-item" onclick="loadSubject('${code}')">${sub}</div>`;
        });
    }
    nav.innerHTML = html;
}

function loadSubject(code) {
    document.getElementById('page-title').innerText = "Đang tải dữ liệu cho " + code + "...";
    // Nội dung chi tiết sẽ được AI chèn vào file data.js sau
    // Đây là logic hiển thị tạm
    
    // Check if content exists in DOM (AI will inject hidden divs)
    const content = document.getElementById('content-' + code);
    if(content) {
        document.getElementById('learning-content').innerHTML = content.innerHTML;
        document.getElementById('page-title').innerText = code;
    } else {
         document.getElementById('learning-content').innerHTML = `
            <div class="welcome-card">
                <h3>⏳ Môn học chưa được cập nhật</h3>
                <p>AI đang nghiên cứu giáo trình môn ${code}. Vui lòng quay lại sau 2 phút.</p>
            </div>`;
    }
}

renderNav();
