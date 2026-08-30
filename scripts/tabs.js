
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const tabContents = document.querySelectorAll('.tab-content');

sidebarItems.forEach(item => {
item.addEventListener('click', () => {
    const targetTabId = item.getAttribute('data-tab');

    if (!targetTabId) return;

    
    sidebarItems.forEach(nav => nav.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));

    
    item.classList.add('active');


    const targetContent = document.getElementById(targetTabId);
    if (targetContent) {
        targetContent.classList.add('active');
    }
    });
});
});