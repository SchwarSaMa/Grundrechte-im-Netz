function openTab(event, tabName){
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    })

    document.getElementById(tabName).style.display = 'block';
    console.log(tabs, tabName);
}