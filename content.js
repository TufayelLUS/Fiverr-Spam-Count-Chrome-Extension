// blur user balance using data-testid="user-balance"
var userBalance = document.querySelector('[data-testid="user-balance"]');
if (userBalance) {
  userBalance.style.filter = 'blur(5px)';
}
fetch("https://www.fiverr.com/inbox/counters")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    var stat = JSON.parse(data);
    var spam_count = stat.spam;
    var unread_count = stat.unread;
    var title = document.querySelector('title');
    if (unread_count > 0 || spam_count > 0){
      title.innerHTML = title.innerHTML + ' &nbsp;[' + unread_count + ' IB | ' + spam_count + ' SP]';
    }
    
  })
  .catch((error) => {
    // console.log(error);
  });
