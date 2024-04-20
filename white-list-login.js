async function getWhiteListFromFile(filePath) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', filePath, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                const users = request.responseText.split('\n').map(user => user.trim()).filter(user => user);
                resolve(users);
            } else {
                reject(new Error(`请求失败: ${request.statusText}`));
            }
        };
        request.onerror = function() {
            reject(new Error('请求失败: 请确保文件路径正确。'));
        };
        request.send();
    });
}

document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        try {
            const users = await getWhiteListFromFile('white-list.txt');

            const userFound = users.some(user => user.includes(username) && user.includes(password));

            if (userFound) {
                alert('登录成功');
                // 登录成功后重定向到index.html
                window.location.href = 'index.html';
            } else {
                alert('用户名或密码错误');
            }
        } catch (error) {
            alert('出现错误: ' + error.message);
        }
    } else {
        alert('请输入用户名和密码');
    }
});
