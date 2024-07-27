    function openTab(tabName) {
    // 모든 탭 컨텐츠를 숨깁니다.
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
    tabContent.setAttribute('aria-hidden', 'true');
});

    // 모든 탭을 비활성화합니다.
    const tabs = document.querySelectorAll('.my-room__body__tab');
    tabs.forEach(tab => {
    tab.classList.remove('my-room__body__tab--active');
});

    // 선택한 탭 컨텐츠를 표시합니다.
    const activeTabContent = document.getElementById(tabName);
    activeTabContent.classList.add('active');
    activeTabContent.setAttribute('aria-hidden', 'false');

    // 선택한 탭을 활성화합니다.
    const activeTab = Array.from(tabs).find(tab => tab.textContent.includes(tabName === 'active' ? '진행 중' : '모집 중'));
    activeTab.classList.add('my-room__body__tab--active');
}
