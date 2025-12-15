document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split("/").pop();

    if (path === 'clubs.html') {
        loadClubs();
    } else if (path === 'activities.html') {
        showCompetencySelection();
    } else if (path === 'home.html') {
        displaySelections();
        setupResetButton();
    } else if (path.startsWith('details.html')) {
        loadDetails();
    }
});

function createCompetencyTags(competencies) {
    if (!competencies) return '';
    return competencies.map(c => {
        const className = c.replace(/\s/g, '-');
        return `<span class="competency-tag competency-${className}">${c}</span>`;
    }).join(' ');
}

function loadClubs() {
    const container = document.getElementById('club-list-container');
    if (!container) return;

    const clubsByCategory = clubs.reduce((acc, club) => {
        if (!acc[club.category]) {
            acc[club.category] = [];
        }
        acc[club.category].push(club);
        return acc;
    }, {});

    const categoryOrder = ["문과", "이과", "예체능", "융합"];

    let html = '';
    categoryOrder.forEach(category => {
        if (clubsByCategory[category]) {
            html += `
                <div class="category-header">
                    <span class="category-title">&lt;${category}&gt;</span>
                    <div class="category-line"></div>
                </div>
                <div class="card-grid">
            `;
            clubsByCategory[category].forEach(club => {
                const categoryClass = `card-${category}`;
                const competencyTags = createCompetencyTags(club.competencies);
                html += `
                    <a href="details.html?type=club&id=${club.id}" class="card ${categoryClass}">
                        <h3>${club.name}</h3>
                        <p>${club.short_description}</p>
                        <div class="competencies">${competencyTags}</div>
                    </a>
                `;
            });
            html += `</div>`;
        }
    });

    container.innerHTML = html;
}

function showCompetencySelection() {
    const container = document.getElementById('activity-container');
    if (!container) return;

    const competencyKeys = Object.keys(competencies);

    let html = `
        <h2>어떤 역량을 기르고 싶으신가요?</h2>
        <div class="card-grid">
    `;

    competencyKeys.forEach(key => {
        const competencyName = competencies[key];
        html += `
            <div class="card competency-card" data-competency="${competencyName}">
                <h3>${competencyName}</h3>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;

    document.querySelectorAll('.competency-card').forEach(card => {
        card.addEventListener('click', () => {
            const selectedCompetency = card.getAttribute('data-competency');
            showActivityList(selectedCompetency);
        });
    });
}

function showActivityList(competency) {
    const container = document.getElementById('activity-container');
    const backButton = document.getElementById('back-button');
    if (!container || !backButton) return;

    const relevantActivities = activities.filter(activity => activity.competencies.includes(competency));

    let html = `
        <div class="category-header">
            <span class="category-title">[${competency}] 추천 활동</span>
            <div class="category-line"></div>
        </div>
        <div class="card-grid">
    `;

    if (relevantActivities.length > 0) {
        relevantActivities.forEach(activity => {
            const categoryClass = `card-${activity.category}`;
            const competencyTags = createCompetencyTags(activity.competencies);
            html += `
                <a href="details.html?type=activity&id=${activity.id}" class="card ${categoryClass}">
                    <h3>${activity.name}</h3>
                    <p>${activity.short_description}</p>
                    <div class="competencies">${competencyTags}</div>
                </a>
            `;
        });
    } else {
        html += `<p>해당 역량에 대한 추천 활동이 없습니다.</p>`;
    }

    html += `</div>`;
    container.innerHTML = html;
    
    // Show back/reset button
    backButton.style.display = 'block';
}

function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const id = parseInt(params.get('id'));

    const container = document.getElementById('details-container');
    if (!container) return;

    let item;
    if (type === 'club') {
        item = clubs.find(c => c.id === id);
    } else if (type === 'activity') {
        item = activities.find(a => a.id === id);
    }

    if (!item) {
        container.innerHTML = '<p>항목을 찾을 수 없습니다.</p>';
        return;
    }

    let qnaHtml = '';
    if (item.qna && item.qna.length > 0) {
        qnaHtml += '<h2>Q&A</h2>';
        item.qna.forEach(q => {
            qnaHtml += `
                <div class="qna-item">
                    <h4>Q. ${q.q}</h4>
                    <p>A. ${q.a}</p>
                </div>
            `;
        });
    }
    
    let fullDescriptionHtml = '';
    if(item.full_description) {
        fullDescriptionHtml = `
            <h2>상세 설명</h2>
            <p>${item.full_description}</p>
        `;
    }

    const competencyTags = createCompetencyTags(item.competencies);
    const html = `
        <div class="details-card">
            <h1>${item.name}</h1>
            <p class="short-desc">${item.short_description}</p>
            <div class="competencies">
                <strong>역량:</strong> ${competencyTags}
            </div>
            <hr>
            ${fullDescriptionHtml}
            ${qnaHtml}
            <button class="btn-select" data-type="${type}" data-id="${item.id}">이 ${type === 'club' ? '동아리' : '활동'} 선택하기</button>
        </div>
    `;

    container.innerHTML = html;

    document.querySelector('.btn-select').addEventListener('click', (e) => {
        const button = e.target;
        const dataType = button.getAttribute('data-type');
        const dataId = button.getAttribute('data-id');
        
        localStorage.setItem(`selected_${dataType}`, dataId);
        alert('선택되었습니다! 홈 화면에서 확인하세요.');
        window.location.href = 'home.html';
    });
}

function displaySelections() {
    const clubSlot = document.getElementById('club-slot');
    const activitySlot = document.getElementById('activity-slot');

    const selectedClubId = localStorage.getItem('selected_club');
    const selectedActivityId = localStorage.getItem('selected_activity');

    if (selectedClubId && clubSlot) {
        const club = clubs.find(c => c.id === parseInt(selectedClubId));
        if (club) {
            clubSlot.innerHTML = `
                <h3>내 동아리</h3>
                <h4>${club.name}</h4>
                <p>${club.short_description}</p>
            `;
        }
    }

    if (selectedActivityId && activitySlot) {
        const activity = activities.find(a => a.id === parseInt(selectedActivityId));
        if (activity) {
            activitySlot.innerHTML = `
                <h3>내 활동</h3>
                <h4>${activity.name}</h4>
                <p>${activity.short_description}</p>
            `;
        }
    }
}

function setupResetButton() {
    const resetButton = document.querySelector('.btn-reset');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (confirm('정말로 모든 선택을 초기화하시겠습니까?')) {
                localStorage.removeItem('selected_club');
                localStorage.removeItem('selected_activity');
                window.location.href = 'index.html';
            }
        });
    }
}