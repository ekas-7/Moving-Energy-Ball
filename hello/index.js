const pageCount = 46; // total number of pages
const contentBaseUrl = "https://html.scribdassets.com/1hbz42al8garivoa/pages/";
function getPageHash(pageNum) {
    const hashes = [
        "049e9fc8d2", "c622df8c38", "357583d2b7", "760a67efdc", "4ed86abfc4", 
        "149b88d79b", "5ed5a98a16", "21b34ffaab", "3c07fb44f9", "1fb29e1647", 
        "ca7f3a3f93", "3a70864e7c", "2e0963ef38", "2029d75c5d", "a38986a0e1", 
        "fff1d480e8", "567fb7414d", "18d00ea0ce", "5f7d31caf3", "c3dc4d67ca", 
        "180eb939b4", "62113cace5", "6a52a7996d", "0f5e507ef0", "984646671b", 
        "8b9d3709f8", "68d85422c5", "6383742667", "ae251854ab", "25fe0794f3", 
        "13df37d103", "8670b7e65c", "b55bb70b75", "78fe64dc2c", "1be718670b", 
        "ebba98d417", "5bb93b0f4a", "53a168a196", "80554fdade", "a46726a42e", 
        "1c86bffac3", "dd28aa56b4", "4ab4393011", "16ccaf52fa", "3909debb41"
    ];
    return hashes[pageNum - 1]; // Adjust for zero-based index
}

for (let i = 1; i <= pageCount; i++) {
    
      console.log( `${contentBaseUrl}${i}-${getPageHash(i)}.jpg`);
    
}

