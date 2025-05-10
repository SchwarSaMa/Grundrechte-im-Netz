const tabs = document.querySelectorAll('.tab-content');

function openTab(event, tabName){
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
    document.getElementById(tabName).classList.add('active');
}

function showTabs(){
    const tabNavigation = document.querySelector('#tab');
    const landingPage = document.querySelector('#landing');

    tabNavigation.style.display = 'block';
    landingPage.style.display = 'none';
    tabs[0].classList.add('active');
}