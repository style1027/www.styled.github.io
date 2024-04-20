// search.js
function search() {
    // 获取搜索框中的文本
    const searchInput = document.getElementById('search').value;

    // 获取所有模块卡片
    const moduleCards = document.querySelectorAll('.module-card');

    // 清空搜索结果
    const resultsContainer = document.getElementById('results');
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    // 遍历模块卡片，查找匹配的结果
    moduleCards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText;
        if (cardTitle.includes(searchInput)) {
            // 创建一个副本，并将其添加到搜索结果中
            const clonedCard = card.cloneNode(true);
            resultsContainer.appendChild(clonedCard);
        }
    });
}
