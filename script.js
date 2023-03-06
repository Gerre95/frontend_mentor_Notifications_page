document.getElementById('mark-all-as-read').addEventListener('click', () => {
    const unreadNotifications = [...document.getElementsByClassName('notification unread')];
    for (let i = 0; i < unreadNotifications.length; i++) {
        unreadNotifications[i].classList.remove('unread');
    }
})