'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const ul = document.createElement('ul');
    for (let friend in friends){
        let li = document.createElement('li');
        li.innerHTML = `${friend.firstName}, ${friend.lastName}`;
        ul.appendChild(li);   
    }
    return ul;

}
